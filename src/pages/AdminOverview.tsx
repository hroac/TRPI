import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Card,
  TextField,
  IconButton,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
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
  responses: number[];
  date?: string;
}

const GOOGLE_CLIENT_ID =
  "356497060674-ndjka8l1iod2obja36djpah0fckmaot9.apps.googleusercontent.com";
const COLLECTION_ID = "6666e443acd3cb34a8556706";
const CACHE_KEY = "trpi_admin_xl_cache";

function cronbachAlpha(data: number[][]): number {
  if (!data.length) return 0;
  const k = data[0].length;
  const n = data.length;
  const itemMeans = Array(k).fill(0);
  for (const row of data) row.forEach((val, i) => (itemMeans[i] += val));
  for (let i = 0; i < k; i++) itemMeans[i] /= n;
  const itemVars = Array(k).fill(0);
  for (const row of data)
    row.forEach((val, i) => (itemVars[i] += Math.pow(val - itemMeans[i], 2)));
  for (let i = 0; i < k; i++) itemVars[i] /= n - 1;
  const totalScores = data.map((row) => row.reduce((a, b) => a + b, 0));
  const totalMean = totalScores.reduce((a, b) => a + b, 0) / n;
  const totalVar =
    totalScores.reduce(
      (sum, score) => sum + Math.pow(score - totalMean, 2),
      0,
    ) /
    (n - 1);
  const sumItemVars = itemVars.reduce((a, b) => a + b, 0);
  return (k / (k - 1)) * (1 - sumItemVars / totalVar);
}

function similarity(a: number[], b: number[]): number {
  const corr = pearsonCorrelation(a, b);
  const dist = weightedEuclideanDistance(a, b);
  const normDist = 1 / (1 + dist);
  return (corr + normDist) / 2;
}

export default function AdminOverview() {
  const [currentEmail, setCurrentEmail] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [results, setResults] = useState<Result[]>([]);
  const [similarityPerType, setSimilarityPerType] = useState<
    Record<string, number>
  >({});
  const [groupSimilarity, setGroupSimilarity] = useState<
    Record<string, number>
  >({});
  const [overallSimilarity, setOverallSimilarity] = useState<number>(0);
  const [alpha, setAlpha] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchUserInfo = async (accessToken: string) => {
    try {
      const resp = await fetch(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        },
      );
      const data = await resp.json();
      setCurrentEmail(data.email);
      setToken(accessToken);
    } catch {
      console.error("Failed to fetch user");
    }
  };

  const loadData = async () => {
    setLoading(true);
    let cacheId = localStorage.getItem(CACHE_KEY) || "";
    let cached: { bins: Result[]; lastBinId?: string } | null = null;
    if (cacheId) {
      try {
        cached = await JsonBinApi.getXLBin(cacheId);
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

    // fetch new bins only if requested range exceeds cached range
    if (!allBins.length || (endDate && new Date(endDate).getTime() > latest)) {
      const { bins, lastBinId } = await JsonBinApi.fetchCollectionBins(
        COLLECTION_ID,
        {
          startAfter: lastId,
          startDate: startDate || undefined,
          endDate: endDate || undefined,
          batchSize: 20,
        },
      );
      bins.forEach((b) => {
        allBins.push({
          binId: b.binId,
          userId: b.userId || "",
          type: b.type || "",
          scores: b.bigFiveResponses || b.scores || {},
          responses: b.responses || [],
          date: b.date,
        });
      });
      if (lastBinId) lastId = lastBinId;

      if (bins.length) {
        const newCacheId = await JsonBinApi.createXLBin(
          { bins: allBins, lastBinId: lastId },
          "trpi-admin-cache",
        );
        localStorage.setItem(CACHE_KEY, newCacheId);
        cacheId = newCacheId;
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

  const computeMetrics = (bins: Result[]) => {
    const typeGroups: Record<string, Result[]> = {};
    bins.forEach((b) => {
      if (!typeGroups[b.type]) typeGroups[b.type] = [];
      typeGroups[b.type].push(b);
    });

    const perType: Record<string, number> = {};
    const groupings: Record<string, Result[]> = {
      TP: [],
      TJ: [],
      FJ: [],
      FP: [],
    };
    const allScores: number[][] = [];
    bins.forEach((b) => {
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

    Object.keys(typeGroups).forEach((type) => {
      const arrs = typeGroups[type].map((b) => [
        b.scores.openness,
        b.scores.conscientiousness,
        b.scores.extraversion,
        b.scores.agreeableness,
        b.scores.neuroticism,
      ]);
      perType[type] = averageSimilarity(arrs);
    });

    const groupSims: Record<string, number> = {};
    Object.entries(groupings).forEach(([key, group]) => {
      const arrs = group.map((b) => [
        b.scores.openness,
        b.scores.conscientiousness,
        b.scores.extraversion,
        b.scores.agreeableness,
        b.scores.neuroticism,
      ]);
      groupSims["xx" + key] = averageSimilarity(arrs);
    });

    setSimilarityPerType(perType);
    setGroupSimilarity(groupSims);
    setOverallSimilarity(averageSimilarity(allScores));
    setAlpha(cronbachAlpha(bins.map((b) => b.responses)));
  };

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

  if (!currentEmail) {
    return (
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <Box sx={{ mt: 10, textAlign: "center" }}>
          <GoogleAuthButton onSuccess={(t) => fetchUserInfo(t.access_token)} />
        </Box>
      </GoogleOAuthProvider>
    );
  }

  if (currentEmail !== "rsk.rook@gmail.com") {
    return (
      <Typography variant="h6" sx={{ mt: 10, textAlign: "center" }}>
        Access denied
      </Typography>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 12 }}>
      <Card sx={{ p: 2 }}>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            alignItems: "center",
            flexWrap: "wrap",
          }}
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
          <IconButton color="primary" onClick={loadData}>
            <RefreshIcon />
          </IconButton>
          {loading && <Typography sx={{ ml: 2 }}>Loading...</Typography>}
        </Box>
        <Typography variant="h6" sx={{ mt: 2 }}>
          Overall Similarity: {overallSimilarity.toFixed(3)}
        </Typography>
        <Typography variant="h6">Cronbach Alpha: {alpha.toFixed(3)}</Typography>
        <Table sx={{ mt: 2 }} size="small">
          <TableHead>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell align="right">Avg Similarity</TableCell>
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
        <Table sx={{ mt: 4 }} size="small">
          <TableHead>
            <TableRow>
              <TableCell>Group</TableCell>
              <TableCell align="right">Avg Similarity</TableCell>
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
