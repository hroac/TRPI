import React, { useState, useEffect, useMemo } from "react";
import {
  Box,
  Card,
  Container,
  Typography,
  IconButton,
  TextField,
  MenuItem,
  Button,
  Tooltip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  CircularProgress,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import DownloadIcon from "@mui/icons-material/Download";
import LogoutIcon from "@mui/icons-material/Logout";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleAuthButton from "../components/GoogleAuth";
import JsonBinApi from "../utils/jsonBin";
import {
  pearsonCorrelation,
  weightedEuclideanDistance,
} from "../utils/mbtiMapping";

interface Result {
  binId: string;
  userId: string;
  type: string;
  scores: { [trait: string]: number };
  responses: Record<string, number[]>;
  date?: string;
}

const GOOGLE_CLIENT_ID =
  "356497060674-ndjka8l1iod2obja36djpah0fckmaot9.apps.googleusercontent.com";
const COLLECTION_ID = "6666e443acd3cb34a8556706";
const CACHE_KEY = "trpi-admin-cache";
const ADMIN_EMAILS = ["rsk.rook@gmail.com"]; // whitelist

/* ---------- statistics helpers ---------- */
function calculateCronbachAlpha(items: number[][]): number {
  const k = items.length;
  if (k < 2) return NaN;
  const n = items[0].length;
  if (items.some((arr) => arr.length < 2)) return NaN;

  // item variances
  const variances = items.map((arr) => {
    const mean = arr.reduce((a, b) => a + b, 0) / arr.length;
    return (
      arr.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / (arr.length - 1)
    );
  });

  // respondent totals
  const totals: number[] = [];
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = 0; j < k; j++) sum += items[j][i];
    totals.push(sum);
  }
  const meanTotal = totals.reduce((a, b) => a + b, 0) / totals.length;
  const varianceTotal =
    totals.reduce((sum, val) => sum + Math.pow(val - meanTotal, 2), 0) /
    (totals.length - 1);

  const sumVariances = variances.reduce((a, b) => a + b, 0);
  return (k / (k - 1)) * (1 - sumVariances / varianceTotal);
}

function cronbachAlpha(data: Result[]) {
  if (!Array.isArray(data) || data.length === 0) return {};

  const TRAITS = [
    "openness",
    "conscientiousness",
    "extraversion",
    "agreeableness",
    "neuroticism",
  ];
  const result: Record<string, number> = {};

  // per trait
  TRAITS.forEach((trait) => {
    const itemArrays = data
      .map((r) => r.responses?.[trait])
      .filter(
        (arr) =>
          Array.isArray(arr) &&
          arr.length > 1 &&
          !arr.some((v) => typeof v === "string" || v == null)
      );
    if (itemArrays.length < 2) {
      result[trait] = NaN;
      return;
    }
    const numItems = itemArrays[0].length;
    const items = Array.from({ length: numItems }, (_, i) =>
      itemArrays.map((arr) => parseFloat(arr[i].toString()))
    );
    result[trait] = calculateCronbachAlpha(items);
  });

  // overall
  const respondents = data.filter((r) =>
    TRAITS.every(
      (trait) =>
        Array.isArray(r.responses?.[trait]) &&
        r.responses[trait].length > 1 &&
        !r.responses[trait].some((v) => typeof v === "string" || v == null)
    )
  );
  if (respondents.length < 2) {
    result.general = NaN;
    return result;
  }
  const itemsCombined: number[][] = [];
  TRAITS.forEach((trait) => {
    const numItems = respondents[0].responses[trait].length;
    for (let i = 0; i < numItems; i++) {
      itemsCombined.push(respondents.map((r) => r.responses[trait][i]));
    }
  });
  result.general = calculateCronbachAlpha(itemsCombined);

  return result;
}

function similarity(a: number[], b: number[]): number {
  const corr = pearsonCorrelation(a, b);
  const dist = weightedEuclideanDistance(a, b);
  const normDist = 1 / (1 + dist);
  return (corr + normDist) / 2;
}

/* ---------- component ---------- */
export default function AdminOverview() {
  /* auth */
  const [currentEmail, setCurrentEmail] = useState<string>("");
  const [token, setToken] = useState<string>("");

  /* filters & data */
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  /* metrics */
  const [similarityPerType, setSimilarityPerType] = useState<Record<string, number>>({});
  const [groupSimilarity, setGroupSimilarity] = useState<Record<string, number>>({});
  const [overallSimilarity, setOverallSimilarity] = useState<number>(0);
  const [generalSimilarity, setGeneralSimilarity] = useState<number>(0);
  const [traitAlpha, setTraitAlpha] = useState<Record<string, number>>({});
  const [alphaGeneral, setAlphaGeneral] = useState<number>(0);

  /* ---------- auth helpers ---------- */
  const fetchUserInfo = async (accessToken: string) => {
    try {
      const resp = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      const data = await resp.json();
      setCurrentEmail(data.email);
      setToken(accessToken);
    } catch {
      console.error("Failed to fetch user info");
    }
  };

  const logout = () => {
    setCurrentEmail("");
    setToken("");
  };

  /* ---------- data fetching ---------- */
  const loadData = async () => {
    setLoading(true);
    let cacheId = localStorage.getItem(CACHE_KEY) || "";
    let cached: { bins: Result[]; lastBinId?: string } | null = null;

    if (cacheId) {
      try {
        cached = await JsonBinApi.getBinById(cacheId);
      } catch {
        cached = null;
      }
    }

    let allBins: Result[] = cached?.bins || [];
    let lastId: string | undefined = cached?.lastBinId;

    const latest = allBins.reduce<number>((m, b) => {
      if (b.date) m = Math.max(m, new Date(b.date).getTime());
      return m;
    }, 0);

    const shouldFetchNew =
      !allBins.length ||
      (endDate && new Date(endDate).getTime() > latest) ||
      !cached;

    if (shouldFetchNew) {
      const { bins, lastBinId } = await JsonBinApi.fetchCollectionBins(
        COLLECTION_ID,
        {
          startAfter: lastId,
          startDate: startDate || undefined,
          endDate: endDate || undefined,
          batchSize: 5,
        }
      );
      bins.forEach((b) =>
        allBins.push({
          binId: b.binId,
          userId: b.userId || "",
          type: b.type || "",
          scores: b.bigFiveResponses || b.scores || {},
          responses: b.responses || {},
          date: b.date,
        })
      );
      if (lastBinId) lastId = lastBinId;

      if (bins.length) {
        const newCacheId = await JsonBinApi.createBin(
          { bins: allBins, lastBinId: lastId },
          "68348edd8960c979a5a159b2",
          CACHE_KEY
        );
        localStorage.setItem(CACHE_KEY, newCacheId);
      }
    }

    const filtered = allBins.filter((b) => {
      if (!b.date) return true;
      const d = new Date(b.date).toISOString().slice(0, 10);
      if (startDate && d < startDate) return false;
      if (endDate && d > endDate) return false;
      return true;
    });

    setResults(filtered);
    computeMetrics(filtered);
    setLoading(false);
  };

  /* ---------- stats ---------- */
  const averageSimilarity = (arrays: number[][]): number => {
    if (arrays.length < 2) return 0;
    let total = 0;
    let count = 0;
    for (let i = 0; i < arrays.length; i++) {
      for (let j = i + 1; j < arrays.length; j++) {
        total += similarity(arrays[i], arrays[j]);
        count++;
      }
    }
    return count ? total / count : 0;
  };

  const computeMetrics = (bins: Result[]) => {
    const typeGroups: Record<string, Result[]> = {};
    const groupings: Record<string, Result[]> = {
      TP: [],
      TJ: [],
      FJ: [],
      FP: [],
    };
    const allScores: number[][] = [];

    bins.forEach((b) => {
      if (!typeGroups[b.type]) typeGroups[b.type] = [];
      typeGroups[b.type].push(b);

      const arr = [
        b.scores.openness,
        b.scores.conscientiousness,
        b.scores.extraversion,
        b.scores.agreeableness,
        b.scores.neuroticism,
      ];
      allScores.push(arr);

      const groupKey = b.type[2] + b.type[3];
      if (groupings[groupKey]) groupings[groupKey].push(b);
    });
    const grandAverage = Object.entries(typeGroups).reduce(
  (acc, [t, arr]) => {
    const sim = averageSimilarity(arr.map(b => [ b.scores.openness,
  b.scores.conscientiousness,
  b.scores.extraversion,
  b.scores.agreeableness,
  b.scores.neuroticism,]));
    return {
      sum: acc.sum + sim * arr.length,
      count: acc.count + arr.length,
    };
  },
  { sum: 0, count: 0 }
);
const weightedAvg = grandAverage.sum / grandAverage.count

    const perType: Record<string, number> = {};
    Object.keys(typeGroups).forEach((t) => {
      const arrs = typeGroups[t].map((b) => [
        b.scores.openness,
        b.scores.conscientiousness,
        b.scores.extraversion,
        b.scores.agreeableness,
        b.scores.neuroticism,
      ]);
      perType[t] = averageSimilarity(arrs);
    });

    const groupSims: Record<string, number> = {};
    Object.entries(groupings).forEach(([key, grp]) => {
      const arrs = grp.map((b) => [
        b.scores.openness,
        b.scores.conscientiousness,
        b.scores.extraversion,
        b.scores.agreeableness,
        b.scores.neuroticism,
      ]);
      groupSims["xx" + key] = averageSimilarity(arrs);
    });

    const alphaObj = cronbachAlpha(bins);
    setTraitAlpha(alphaObj as Record<string, number>);
    setAlphaGeneral(alphaObj.general);
    setSimilarityPerType(perType);
    setGroupSimilarity(groupSims);
    setOverallSimilarity(averageSimilarity(allScores))
    setGeneralSimilarity(weightedAvg);
  };

  /* ---------- export ---------- */
  const handleExport = () => {
    const data = JSON.stringify(results, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "trpi_filtered_results.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  /* ---------- UI ---------- */
  // login view
  if (!currentEmail) {
    return (
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <Box sx={{ mt: 10, textAlign: "center" }}>
          <GoogleAuthButton onSuccess={(t) => fetchUserInfo(t.access_token)} />
        </Box>
      </GoogleOAuthProvider>
    );
  }

  // unauthorized
  if (!ADMIN_EMAILS.includes(currentEmail)) {
    return (
      <Typography variant="h6" sx={{ mt: 10, textAlign: "center" }}>
        Access denied
      </Typography>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 8 }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6" sx={{ color: "text.secondary" }}>
          Logged in as {currentEmail}
        </Typography>
        <IconButton onClick={logout}>
          <LogoutIcon />
        </IconButton>
      </Box>

      {/* Filters & actions */}
      <Card sx={{ p: 2, mb: 3 }}>
        <Box
          sx={{ display: "flex", gap: 2, flexWrap: "wrap", alignItems: "center" }}
        >
          <TextField
            type="date"
            label="Start"
            InputLabelProps={{ shrink: true }}
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <TextField
            type="date"
            label="End"
            InputLabelProps={{ shrink: true }}
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <Tooltip title="Load / Refresh">
            <IconButton color="primary" onClick={loadData}>
              <RefreshIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Export filtered JSON">
            <IconButton color="primary" onClick={handleExport}>
              <DownloadIcon />
            </IconButton>
          </Tooltip>
          {loading && <CircularProgress size={24} sx={{ ml: 1 }} />}
        </Box>
      </Card>

      {/* Metrics */}
      <Card sx={{ p: 2, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Cronbach’s Alpha
        </Typography>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Scale</TableCell>
              <TableCell align="right">α</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {["openness", "conscientiousness", "extraversion", "agreeableness", "neuroticism"].map(
              (t) => (
                <TableRow key={t}>
                  <TableCell sx={{ textTransform: "capitalize" }}>{t}</TableCell>
                  <TableCell align="right">
                    {isNaN(traitAlpha[t] ?? NaN)
                      ? "--"
                      : (traitAlpha[t] ?? 0).toFixed(3)}
                  </TableCell>
                </TableRow>
              )
            )}
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>General</TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                {isNaN(alphaGeneral) ? "--" : alphaGeneral.toFixed(3)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Typography variant="h6" sx={{ mt: 3 }}>
          Similarity Metrics
        </Typography>
        <Typography variant="body2">
          Overall Similarity: {overallSimilarity.toFixed(3)}
        </Typography>
        <Typography variant="body2">
          General Similarity: {generalSimilarity.toFixed(3)}
        </Typography>
        <Table size="small" sx={{ mt: 1 }}>
          <TableHead>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell align="right">Avg&nbsp;Similarity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(similarityPerType).map(([t, v]) => (
              <TableRow key={t}>
                <TableCell>{t}</TableCell>
                <TableCell align="right">{v.toFixed(3)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Table size="small" sx={{ mt: 4 }}>
          <TableHead>
            <TableRow>
              <TableCell>Group</TableCell>
              <TableCell align="right">Avg&nbsp;Similarity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(groupSimilarity).map(([g, v]) => (
              <TableRow key={g}>
                <TableCell>{g}</TableCell>
                <TableCell align="right">{v.toFixed(3)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </Container>
  );
}
