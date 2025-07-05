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
import { compute2PL } from "../utils/irt";
import { computeGStudy } from "../utils/gstudy";



interface Result {
  binId: string;
  userId: string;
  type: string;
  honest: boolean;
  scores: { [trait: string]: number };
  bigFiveResponses?: { [trait: string]: number };
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
    (b["scores"] || b['bigFiveResponses']).openness,
    (b["scores"] || b['bigFiveResponses']).conscientiousness,
    (b["scores"] || b['bigFiveResponses']).extraversion,
    (b["scores"] || b['bigFiveResponses']).agreeableness,
    (b["scores"] || b['bigFiveResponses']).neuroticism,
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

function GStudyTable({ reliabilities }: { reliabilities: {trait: string; gCoefficient: number}[] }) {
  const TRAIT_LABELS = {
    openness: "Openness",
    conscientiousness: "Conscientiousness",
    extraversion: "Extraversion",
    agreeableness: "Agreeableness",
    neuroticism: "Neuroticism",
  } as const;
  const valid = reliabilities.filter(x => Number.isFinite(x.gCoefficient));
  const general =
    valid.length > 0
      ? valid.reduce((a,b) => a + b.gCoefficient, 0) / valid.length
      : NaN;

  return (
    <>
      <Typography variant="h6" sx={{ mt: 3 }}>
        G-Study Reliability
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Trait</TableCell>
            <TableCell align="right">G</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reliabilities.map(r => (
            <TableRow key={r.trait}>
              <TableCell sx={{ textTransform: 'capitalize' }}>
                {TRAIT_LABELS[r.trait as keyof typeof TRAIT_LABELS] || r.trait}
              </TableCell>
              <TableCell align="right">
                {Number.isFinite(r.gCoefficient) ? r.gCoefficient.toFixed(3) : '--'}
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>General</TableCell>
            <TableCell align="right" sx={{ fontWeight: 'bold' }}>
              {Number.isFinite(general) ? general.toFixed(3) : '--'}
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
  const [gStudyReliabilities, setGStudyReliabilities] = useState<{trait: string; gCoefficient: number}[]>([]);

// Inside your computeMetrics or after loading data:
useEffect(() => {
  if (!results.length) return;
  (async () => {
    const reliabilities = await compute2PL(results, allStatements);
    console.log(reliabilities)
    setIrtReliabilities(reliabilities);
  })();
}, [results]);

useEffect(() => {
  if (!results.length) return;
  const gRes = computeGStudy(results);
  setGStudyReliabilities(gRes);
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

  // Utility: convert date string to yyyy-mm-dd (cache, startDate, endDate all compared in this format)
  const norm = (d?: string) => new Date(d || '').toISOString().slice(0,10);


const loadData = async () => {
   let start = results.length ? results.reduce((min: any, b: any) => min && b.date && new Date(b.date) < new Date(min) ? b.date : min, results[0].date) : undefined;
    let end = results.length ? results.reduce((max: any, b: any) => max && b.date && new Date(b.date) > new Date(max) ? b.date : max, results[0].date) : undefined;
    const resultsCovered =
    start && norm(start) && end && norm(end) &&
    (!startDate || norm(start)! <= norm(startDate)) &&
    (!endDate || norm(end)! >= norm(endDate));
    if(resultsCovered) {
      computeMetrics(results); return;
    }
    setLoading(true);


  // Fetch cache as usual
  let cacheId = localStorage.getItem(`${startDate}_${endDate}_${CACHE_KEY}`) || "";
  let cached: { bins: Result[]; lastBinId?: string; start?: string; end?: string } | null = null;
  if (cacheId) {
    try {
      cached = await JsonBinApi.getBinById(cacheId);
    } catch {
      cached = await JsonBinApi.getXLBin(cacheId);
    }
  }

  if(!cached) {
    const bins = await ((await fetch('./bins-minimized.json')).json())
    let start = bins.length ? bins.reduce((min: any, b: any) => min && b.date && new Date(b.date) < new Date(min) ? b.date : min, bins[0].date) : undefined;
    let end = bins.length ? bins.reduce((max: any, b: any) => max && b.date && new Date(b.date) > new Date(max) ? b.date : max, bins[0].date) : undefined;

    cached = {bins, start, end, lastBinId: ''}
  }
  let allBins: Result[] = cached?.bins || [];

  // Find date range in cache
  let cacheStart = allBins.length ? allBins.reduce((min: any, b: any) => min && b.date && new Date(b.date) < new Date(min) ? b.date : min, allBins[0].date) : undefined;
  let cacheEnd = allBins.length ? allBins.reduce((max: any, b: any) => max && b.date && new Date(b.date) > new Date(max) ? b.date : max, allBins[0].date) : undefined;

  
  // See if cache covers the requested range
  const rangeCovered =
    cacheStart && norm(cacheStart) && cacheEnd && norm(cacheEnd) &&
    (!startDate || norm(cacheStart)! <= norm(startDate)) &&
    (!endDate || norm(cacheEnd)! >= norm(endDate));

  // If cache is missing *any* part of the requested range, fetch missing
  if (!rangeCovered) {
    // Determine earliest and latest dates to fetch
    let fetchStart = startDate;
    let fetchEnd = endDate;

    // Only fetch what's missing: if cache is available, trim requested range to what's outside the cache
    if (norm(cacheStart)) {
     // if (startDate && norm(startDate)! >= norm(cacheStart)!) fetchStart = ''; // already cached
      //if (endDate && norm(endDate)! <= norm(cacheEnd)!) fetchEnd = ''; // already cached
    }

    // Always provide startAfter if fetching after cached bins (to avoid overlap)
    let lastId: string | undefined = cached?.lastBinId;
    let fetchedBins: Result[] = [];

    console.log(fetchStart, cacheStart, fetchEnd, fetchStart, (fetchStart && fetchStart !== cacheStart) || (fetchEnd && fetchEnd !== cacheEnd))
    // Fetch missing bins if needed
    if ((fetchStart && fetchStart !== cacheStart) || (fetchEnd && fetchEnd !== cacheEnd)) {
      const { bins, lastBinId } = await JsonBinApi.fetchCollectionBins(
        COLLECTION_ID,
        {
          startAfter: lastId,
          startDate: fetchStart,
          endDate: fetchEnd,
          batchSize: 5, // or your batch size
        }
      );

      // Add any new bins
      bins.filter(b => b.statements).forEach((b) => {
        fetchedBins.push({
          binId: b.binId,
          userId: b.userId || "",
          type: b.type || "",
          honest: b.honest ?? true,
          scores: b.bigFiveResponses || (b["scores"] || b['bigFiveResponses']) || {},
          responses: b.responses || {},
          statements: b.statements.map((s: any) => ({
            index: s.index,
            trait: s.trait,
            aspect: s.aspect
          })),
          date: b.date,
        });
      });

      // Merge and deduplicate
      allBins = [...allBins, ...fetchedBins].filter(
        (item, i, arr) =>
          arr.findIndex(other => other.binId === item.binId) === i
      );

      // Update cache
      let newCacheId = cacheId;
      try {
        if(cacheId) {
          newCacheId = cacheId;
          await JsonBinApi.updateBin(cacheId, { bins: allBins, lastBinId, start: fetchStart || cacheStart, end: fetchEnd || cacheEnd }, COLLECTION_ID,   `${startDate}_${endDate}_${CACHE_KEY}`)
        } else {
          newCacheId = await JsonBinApi.createBin(
          { bins: allBins, lastBinId, start: fetchStart || cacheStart, end: fetchEnd || cacheEnd },
          "68348edd8960c979a5a159b2",
          `${startDate}_${endDate}_${CACHE_KEY}`
        );
        }
        newCacheId = ''
      } catch {
        newCacheId = await JsonBinApi.createXLBin(
          { bins: allBins, lastBinId, start: fetchStart || cacheStart, end: fetchEnd || cacheEnd },
          `${startDate}_${endDate}_${CACHE_KEY}`
        );
      }
      localStorage.setItem(`${startDate}_${endDate}_${CACHE_KEY}`, newCacheId);
    }
  }

  // Filter to requested date range
  const filtered = allBins.filter((b) => {
    if (!b.date) return true;
    const d = norm(b.date);
    if (startDate && d! < norm(startDate)!) return false;
    if (endDate && d! > norm(endDate)!) return false;
    return true;
  });

  // Deduplicate by user/type (you could also use binId if needed)
  const unique = (data: any[]) => {
    const seen = new Set();
    return data.filter((item: any) => {
      const key = `${item.userId}|${item.type}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  };

  // Filter for valid responses
  const valid = unique(
    filtered.filter(
      (r: any) =>
        r.statements.length === 26 &&
        r.statements.every((s: any) => typeof !s.index || s.index === "number")
    )
  );

  setResults(valid);
  computeMetrics(valid);
  setLoading(false);
  console.log(valid);
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
        (b["scores"] || b['bigFiveResponses']).openness,
        (b["scores"] || b['bigFiveResponses']).conscientiousness,
        (b["scores"] || b['bigFiveResponses']).extraversion,
        (b["scores"] || b['bigFiveResponses']).agreeableness,
        (b["scores"] || b['bigFiveResponses']).neuroticism,
      ];
      allScores.push(arr);

      const groupKey = b.type[2] + b.type[3];
      if (groupings[groupKey]) groupings[groupKey].push(b);
    });
    const grandAverage = Object.entries(typeGroups).reduce(
  (acc, [t, arr]) => {
    const sim = averageSimilarity(arr.map(b => [ (b["scores"] || b['bigFiveResponses']).openness,
  (b["scores"] || b['bigFiveResponses']).conscientiousness,
  (b["scores"] || b['bigFiveResponses']).extraversion,
  (b["scores"] || b['bigFiveResponses']).agreeableness,
  (b["scores"] || b['bigFiveResponses']).neuroticism,]));
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
        (b["scores"] || b['bigFiveResponses']).openness,
        (b["scores"] || b['bigFiveResponses']).conscientiousness,
        (b["scores"] || b['bigFiveResponses']).extraversion,
        (b["scores"] || b['bigFiveResponses']).agreeableness,
        (b["scores"] || b['bigFiveResponses']).neuroticism,
      ]);
      perType[t] = averageSimilarity(arrs);
    });

    const groupSims: Record<string, number> = {};
    Object.entries(groupings).forEach(([key, grp]) => {
      const arrs = grp.map((b) => [
        (b["scores"] || b['bigFiveResponses']).openness,
        (b["scores"] || b['bigFiveResponses']).conscientiousness,
        (b["scores"] || b['bigFiveResponses']).extraversion,
        (b["scores"] || b['bigFiveResponses']).agreeableness,
        (b["scores"] || b['bigFiveResponses']).neuroticism,
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
       <GStudyTable reliabilities={gStudyReliabilities} />

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
