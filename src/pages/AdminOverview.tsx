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
  allStatements,
  pearsonCorrelation,
  weightedEuclideanDistance,
} from "../utils/mbtiMapping";
import { compute3PLReliabilities } from "../utils/irt";



interface Result {
  binId: string;
  userId: string;
  type: string;
  scores: { [trait: string]: number };
  responses: Record<string, number[]>;
  statements: any,
  date?: string;
}

const GOOGLE_CLIENT_ID =
  "356497060674-ndjka8l1iod2obja36djpah0fckmaot9.apps.googleusercontent.com";
const COLLECTION_ID = "6666e443acd3cb34a8556706";
const CACHE_KEY = "trpi-admin-cache";
const ADMIN_EMAILS = ["rsk.rook@gmail.com"]; // whitelist





type Trait = "openness" | "conscientiousness" | "extraversion" | "agreeableness" | "neuroticism";
type Bin = {
  responses: Record<Trait, number[]>;
  statements: { trait: Trait; index: string | number }[];
};





export interface IrtReliabilityResult {
  trait: Trait;
  reliability: number;
}



function similarity(a: number[], b: number[]): number {
  const corr = pearsonCorrelation(a, b);
  const dist = weightedEuclideanDistance(a, b);
  const normDist = 1 / (1 + dist);
  return (corr + normDist) / 2;
}


function getBigFiveVector(b: any) {
  const arr = [
    b.scores.openness,
    b.scores.conscientiousness,
    b.scores.extraversion,
    b.scores.agreeableness,
    b.scores.neuroticism,
  ];
  return arr.every(x => typeof x === "number" && !isNaN(x)) ? arr : null;
}

function calculateDichotomyAverages(bins: any) {
  const DICHS = ["E", "I", "S", "N", "T", "F", "J", "P"];
  const dichVectors: any = Object.fromEntries(DICHS.map(d => [d, []]));

  bins.forEach((b: any) => {
    const arr: any = getBigFiveVector(b);
    if (!arr || typeof b.type !== "string" || b.type.length !== 4) return;
    b.type.split("").forEach((ltr: any) => {
      if (dichVectors[ltr]) dichVectors[ltr].push(arr);
    });
  });

  function meanVec(arrays: any) {
    if (!arrays.length) return Array(5).fill(null);
    const sums = Array(5).fill(0);
    arrays.forEach((arr : any) => arr.forEach((v: any, i: any) => sums[i] += v));
    return sums.map(sum => +(sum / arrays.length).toFixed(3));
  }

  const result: any = {};
  DICHS.forEach(d => {
    result[d] = meanVec(dichVectors[d]);
  });
  return result;
}

// labels for Big Five
const TRAIT_LABELS = [
  "Openness",
  "Conscientiousness",
  "Extraversion",
  "Agreeableness",
  "Neuroticism",
];

function DichotomyTable({ dichotomyAverages }: any) {
  return (
    <>
      <Typography variant="h6" sx={{ mt: 4, mb: 1 }}>
        Dichotomy Big Five Averages
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Dichotomy</TableCell>
            {TRAIT_LABELS.map(trait => (
              <TableCell align="right" key={trait}>{trait}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(dichotomyAverages).map(([dich, arr]) => (
            <TableRow key={dich}>
              <TableCell sx={{ fontWeight: "bold" }}>{dich}</TableCell>
              {(arr as any).map((val: any, i: any) => (
                <TableCell align="right" key={i}>
                  {val == null ? "--" : val.toFixed(3)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

function IrtReliabilityTable({ reliabilities }: { reliabilities: {trait: string, reliability: number}[] }) {
  const TRAIT_LABELS = {
    openness: "Openness",
    conscientiousness: "Conscientiousness",
    extraversion: "Extraversion",
    agreeableness: "Agreeableness",
    neuroticism: "Neuroticism",
  };
  const valid = reliabilities.filter(x => typeof x.reliability === "number" && !isNaN(x.reliability));
  const general =
    valid.length > 0
      ? valid.reduce((a, b) => a + b.reliability, 0) / valid.length
      : NaN;
  return (
    <>
      <Typography variant="h6" sx={{ mt: 3 }}>
        IRT Marginal Reliability
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Trait</TableCell>
            <TableCell align="right">Reliability</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reliabilities.map((r) => (
            <TableRow key={r.trait}>
              <TableCell sx={{ textTransform: "capitalize" }}>
                {TRAIT_LABELS[r.trait as keyof typeof TRAIT_LABELS] || r.trait}
              </TableCell>
              <TableCell align="right">
                {Number.isFinite(r.reliability)
     ? r.reliability.toFixed(3)
     : '--'}
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>General</TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>
              {isNaN(general) ? "--" : general.toFixed(3)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
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
  const [similarityPerDichotomy, setSimilarityPerDichotomy] = useState<Record<string, number>>({});
  const [groupSimilarity, setGroupSimilarity] = useState<Record<string, number>>({});
  const [overallSimilarity, setOverallSimilarity] = useState<number>(0);
  const [generalSimilarity, setGeneralSimilarity] = useState<number>(0);
  const [irtReliabilities, setIrtReliabilities] = useState<{trait: string; reliability: number}[]>([]);

// Inside your computeMetrics or after loading data:
useEffect(() => {
  if (!results.length) return;
  (async () => {
    const reliabilities = await compute3PLReliabilities(results.filter((r: any) => r.statements.every((s:any) => typeof s.index === 'number')) as any, allStatements);
    console.log(reliabilities)
    setIrtReliabilities(reliabilities);
  })();
}, [results]);

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
        cached = await JsonBinApi.getXLBin(cacheId);
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
          statements: b.statements.map((s: any) => {return {index: s.index, trait: s.trait, aspect: s.aspect}}),
          date: b.date,
        })
      );
      if (lastBinId) lastId = lastBinId;

      if (bins.length) {
       let newCacheId = '';
       try {
         const newCacheId = await JsonBinApi.createBin(
          { bins: allBins, lastBinId: lastId },
          "68348edd8960c979a5a159b2",
          CACHE_KEY
        );
       } catch(e) {
         const newCacheId = await JsonBinApi.createXLBin(
          { bins: allBins, lastBinId: lastId },
          CACHE_KEY
        );
       }
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

  

    setResults(filtered.filter((r: any) => r.statements.length === 26 && r.statements.every((s:any) => typeof s.index === 'number')));
    computeMetrics(filtered);
    setLoading(false);
    console.log(results)
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

const dichotomyAverages = calculateDichotomyAverages(results);
// dichotomyAverages.E → average Big Five for all E types, etc.


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

    
    setSimilarityPerType(perType);
    setGroupSimilarity(groupSims);
    setOverallSimilarity(averageSimilarity(allScores))
    setGeneralSimilarity(weightedAvg);
    setSimilarityPerDichotomy(dichotomyAverages)
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
       <IrtReliabilityTable reliabilities={irtReliabilities} />

        <DichotomyTable dichotomyAverages={similarityPerDichotomy}/>

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
 <Table size="small" sx={{ mt: 1 }}>
          <TableHead>
            <TableRow>
              <TableCell>Group</TableCell>
              <TableCell align="right">Avg&nbsp;Similarity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(groupSimilarity).map(([t, v]) => (
              <TableRow key={t}>
                <TableCell>{t}</TableCell>
                <TableCell align="right">{v.toFixed(3)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
      </Card>
    </Container>
  );
}
