/* ------------------------------------------------------------------ */
/* ChatContentOptimized.tsx — v5 (React-Query v5, 2025-05-21)          */
/* ------------------------------------------------------------------ */
/* 🔑  Key points
   • react-window rows now re-render when filtered[] mutates (itemData)
   • every row has a stable `key={m.id}`
   • new-bin rollover creates a fresh bin with jsonBinPost() and updates
     the meta-bin, preventing undefined currentBinId
   • other logic and UX remain unchanged                                    */
/* ------------------------------------------------------------------ */

import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  Box,
  Chip,
  CircularProgress,
  IconButton,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import {
 VariableSizeList as VList,
  ListOnScrollProps,
} from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { guid } from '../utils/guid';
import { findClosestComplement } from '../utils/mbtiMapping';

/* ----------------------------- CONFIG ----------------------------- */
const JSONBIN_BASE = 'https://api.jsonbin.io/v3';
const MASTER_KEY   = '$2a$10$q3P7Zn7sUJLykm7PHc2d4.zvCgVdfmt8tVVK38jEdNC947RlZgoOG'; // ⬅ put in .env
const META_BIN     = '682caa748561e97a5018215f';
const COLLECTION   = '682ca7998561e97a50181ffe';

const MAX_PER_BIN  = 200;
const POLL_BUSY_MS = 2_000;
const POLL_PASSIVE = 15_000;
const POLL_IDLE    = 60_000;
const IDLE_MS      = 5 * 60 * 1_000;

/* --------------------------- QUERY-CLIENT -------------------------- */
export const chatQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      refetchOnWindowFocus: false,
    },
  },
});

/* ----------------------------- TYPES ------------------------------ */
type Tag   = `#${string}` | null;
type FourF = 'Fight' | 'Flight' | 'Freeze' | 'Fawn';

export interface Message {
  id: string;
  userId: string;
  userName: string;
  color: string;
  text: string;
  tag: Tag;
  timestamp: string;
  parent?: Message;
}
export interface ChatBin { messages: Message[]; prev?: string | null; }
export interface MetaBin { currentBinId: string; tags: Tag[]; }

/* ------------------------ FETCH HELPERS --------------------------- */
const baseHeaders: HeadersInit = {
  'Content-Type': 'application/json',
  'X-Master-Key': MASTER_KEY,
  'X-Bin-Meta': 'false',
  ...(COLLECTION && { 'X-Collection-Id': COLLECTION }),
  'X-Bin-Name': new Date()
    .toLocaleString('en-GB', {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })
    .replace(',', '')
    .replace(/\//g, '-')
    .replace(' ', '-'),
};

async function jsonBinGet<T>(path: string, xJsonPath?: string): Promise<T> {
  const headers: HeadersInit = { ...baseHeaders };
  if (xJsonPath) (headers as any)['X-JSON-Path'] = xJsonPath;
  const res = await fetch(`${JSONBIN_BASE}${path}?meta=false`, { headers });
  if (!res.ok) throw new Error(`${res.status}: GET ${path}`);
  const j = await res.json();
  return ('record' in j ? j.record : j) as T;
}

async function jsonBinPut<T>(path: string, body: T) {
  console.log(path, 'putting')
  const res = await fetch(`${JSONBIN_BASE}${path}`, {
    method: 'PUT',
    headers: baseHeaders,
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`${res.status}: PUT ${path}`);
}

async function jsonBinPatch<T>(path: string, msg: T) {
  const res = await fetch(`${JSONBIN_BASE}${path}`, {
    method: 'PATCH',
    headers: { ...baseHeaders, 'X-Bin-Path': '/messages/-' }, // “append”
    body: JSON.stringify(msg),
  });
  if (!res.ok) throw new Error(`${res.status}: PATCH ${path}`);
}

async function jsonBinPost<T>(body: T) {
  const res = await fetch(`${JSONBIN_BASE}/b`, {
    method: 'POST',
    headers: baseHeaders,
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`${res.status}: POST`);
  return (await res.json()).metadata.id as string;
}

/* ---------------- USERNAME / COLOR HELPERS ----------------------- */
function latestCache(): CacheResult | null {
  const key = Object.keys(localStorage)
    .filter(k => {
      try { return JSON.parse(localStorage.getItem(k) || '{}').mbtiType; }
      catch { return false; }
    })
    .sort()
    .at(-1);
  return key ? JSON.parse(localStorage.getItem(key)!) : null;
}
interface CacheResult {
  mbtiType: string;
  primary4FType: FourF;
  accuracy?: number;
  profile: Record<string, number>;
}
function buildUserName(c?: CacheResult): string {
  if (!c) return `user-${guid().slice(0, 5)}`;
  const suffix = findClosestComplement(c.mbtiType, c.profile)
    ? `-${findClosestComplement(c.mbtiType, c.profile)!.type.slice(1, 3)}`
    : '';
  const pct = Math.round(c.accuracy ?? 0);
  return `${c.mbtiType}${suffix} (${pct}%)`;
}
const hue = (s: string, base: number, span: number) => {
  let h = 0;
  for (const ch of s) h = (h << 5) - h + ch.charCodeAt(0);
  return base + (Math.abs(h) % span);
};
function modeColor(mode: string, seed: string) {
  switch (mode) {
    case 'Fight':
      return `hsl(${hue(seed, 0, 12)} 70% 50%)`;
    case 'Flight':
      return `hsl(${hue(seed, 110, 30)} 70% 50%)`;
    case 'Freeze':
      return `hsl(${hue(seed, 200, 20)} 70% 50%)`;
    case 'Fawn':
      return `hsl(${hue(seed, 270, 30)} 70% 50%)`;
    default: {
      const light = 40 + hue(seed, 0, 20); // 40–60%
      return `hsl(0 0% ${light}%)`;
    }
  }
}

/* --------------------------- WRAPPER ----------------------------- */
export default function ChatContentWrapper() {
  return (
    <QueryClientProvider client={chatQueryClient}>
      <ChatContent />
    </QueryClientProvider>
  );
}

/* --------------------------- COMPONENT --------------------------- */
function ChatContent() {
  /* identity ------------------------------------------------------ */
  const userId    = useRef(guid());
  const cache     = useMemo(latestCache, []);
  const userName  = buildUserName(cache ?? undefined);
  const userMode: FourF = cache?.primary4FType ?? 'Fight';
  const userColor = modeColor(userMode, userId.current);

  /* responsive ---------------------------------------------------- */
  const theme      = useTheme();
  const mobile     = useMediaQuery(theme.breakpoints.down('sm'), { noSsr: true });
  const itemHeight = mobile ? 120 : 100;

  /* ui state ------------------------------------------------------ */
  const [draft, setDraft]       = useState('');
  const [reply, setReply]       = useState<Message | null>(null);
  const [selTags, setSelTags]   = useState<Tag[]>([]);
  const idleRef                 = useRef(Date.now());
  const atBottomRef             = useRef(true);
  const listRef                 = useRef<VList>(null);
  const lastSeenRef             = useRef<string | null>(null);
  // how tall is each rendered row?
  const sizeMapRef = useRef<{ [index: number]: number }>({});

const getSize = (index: number) =>
  sizeMapRef.current[index] ?? itemHeight;   // fallback = old constant

const setSize = (index: number, size: number) => {
  if (sizeMapRef.current[index] !== size) {
    sizeMapRef.current[index] = size;
    // tell RV to recompute from this row downward
    listRef.current?.resetAfterIndex(index);
  }
};


  /* polling cadence ---------------------------------------------- */
  const [pollMs, setPoll] = useState(POLL_BUSY_MS);
  useEffect(() => {
    const vis = () =>
      setPoll(
        document.visibilityState === 'hidden'
          ? POLL_PASSIVE
          : atBottomRef.current
          ? POLL_BUSY_MS
          : POLL_PASSIVE
      );
    document.addEventListener('visibilitychange', vis);
    return () => document.removeEventListener('visibilitychange', vis);
  }, []);
  useEffect(() => {
    const id = setInterval(() => {
      if (Date.now() - idleRef.current > IDLE_MS) setPoll(POLL_IDLE);
    }, 30_000);
    return () => clearInterval(id);
  }, []);

  /* ------------------------ React-Query hooks -------------------- */
  const rq = useQueryClient();

  const { data: meta } = useQuery<MetaBin>({
    queryKey: ['meta'],
    queryFn: () => jsonBinGet<MetaBin>(`/b/${META_BIN}/latest`),
    staleTime: 0,
  });

  const binId = meta?.currentBinId ?? null;

  const { data: messages = [] } = useQuery<Message[]>({
    queryKey: ['messages', binId],
    enabled: Boolean(binId),
    initialData: () => rq.getQueryData<Message[]>(['messages', binId]) ?? [],
    refetchInterval: pollMs,
    queryFn: async () => {
      if (!binId) return [];

      if (!lastSeenRef.current) {
        const bin = await jsonBinGet<ChatBin>(`/b/${binId}/latest`);
        prevBinRef.current = bin.prev ?? null;
        if (bin.messages.length)
          lastSeenRef.current = bin.messages[bin.messages.length - 1].timestamp;
        return bin.messages;
      }

      const fresh = await jsonBinGet<Message[]>(
        `/b/${binId}/latest`,
        `messages[?(@.timestamp > "${lastSeenRef.current}")]`
      );

      if (!fresh.length) {
        return rq.getQueryData<Message[]>(['messages', binId]) ?? [];
      }

      lastSeenRef.current = fresh[fresh.length - 1].timestamp;
      const existing = rq.getQueryData<Message[]>(['messages', binId]) ?? [];
      const merged: Record<string, Message> = {};
      [...existing, ...fresh].forEach(m => (merged[m.id] = m));
      return Object.values(merged);
    },
  });

  /* filtered + sorted list --------------------------------------- */
  console.log(messages)
  console.log(selTags)
  const filtered = useMemo(() => {
    const byTag = messages.filter(m => !selTags.length || selTags.includes(m.tag));
    return byTag.sort(
      (a, b) => new Date(a.timestamp).valueOf() - new Date(b.timestamp).valueOf()
    );
  }, [messages, selTags]);
  console.log(filtered)
useEffect(() => {
  listRef.current?.resetAfterIndex(0, true); // true = also recompute scroll height
}, [filtered.length]);

useEffect(() => {
  const ids = filtered.map(m => m.id);
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dupes.length) {
    console.warn('🚨 Duplicate message IDs:', dupes);
  }
}, [filtered]);
  /* -------------------------- send mutation ---------------------- */
  const sendMut = useMutation({
    mutationFn: async (msg: Message) => {
      let metaLive = meta;
      if (!metaLive) metaLive = await jsonBinGet<MetaBin>(`/b/${META_BIN}/latest`);

       if (atBottomRef.current && filtered.length > 0) {
              listRef.current?.scrollTo(filtered.length * itemHeight);

    }

      const curBinId = metaLive.currentBinId;
      const curPath  = `/b/${curBinId}`;
      let curBin     = rq.getQueryData<ChatBin>(['bin', curBinId]);
      console.log(curBinId, curBin)
      if (!curBin)   curBin = await jsonBinGet<ChatBin>(`${curPath}/latest`);

      /* rollover if full ----------------------------------------- */
      if (curBin.messages.length >= MAX_PER_BIN) {
        const newBin: ChatBin = { messages: [msg], prev: curBinId };
        const newId = await jsonBinPost(newBin);
        await jsonBinPut(`/b/${META_BIN}`, { ...metaLive, currentBinId: newId });
        return { newBinId: newId, msg };
      }

      /* append normally ------------------------------------------ */
      curBin.messages.push(msg);
      await jsonBinPut(curPath, curBin);
      return { newBinId: null, msg };
    },

    onMutate: async msg => {
      await rq.cancelQueries({ queryKey: ['messages', binId] });
      const prev = rq.getQueryData<Message[]>(['messages', binId]);
      rq.setQueryData<Message[]>(['messages', binId], old => [...(old ?? []), msg]);
      return { prev };
    },
    onError: (_e, _m, ctx) => {
      if (ctx?.prev) rq.setQueryData(['messages', binId], ctx.prev);
    },
    onSuccess: ({ newBinId }) => {
      if (newBinId) {
        rq.invalidateQueries({ queryKey: ['meta'] });
        rq.invalidateQueries({ queryKey: ['messages', newBinId] });
      }
    },
  });

  /* ------------------------ helpers ------------------------------ */
  const toggleTag = (t: Tag) => setSelTags(p => (p.includes(t) ? p.filter(x => x !== t) : [...p, t]));
  const extract   = (t: string): Tag => (t.match(/#\w+/)?.[0] as Tag) || null;
  const strip     = (t: string, tag: Tag) => (tag ? t.replace(tag, '').trim() : t.trim());
  

  const send = useCallback(() => {
    const txtTrim = draft.trim();
    if (!txtTrim) return;
    idleRef.current = Date.now();

    let tag: Tag = null;
    let txt      = txtTrim;

    if (reply?.tag) tag = reply.tag;
    else if (selTags.length === 1) tag = selTags[0];
    else if (selTags.length > 1) {
      const inl = extract(txt);
      if (!inl || !selTags.includes(inl)) return;
      tag = inl;
      txt = strip(txt, inl);
    } else {
      const inl = extract(txt);
      if (inl) {
        tag = inl;
        txt = strip(txt, inl);
      }
    }

    const msg: Message = {
      id: `${guid()}_${new Date().toISOString()}`,
      userId: userId.current,
      userName,
      color: userColor,
      text: txt,
      tag,
      timestamp: new Date().toISOString(),
      parent: reply ?? undefined,
    };

    setDraft('');
    setReply(null);
    console.log(msg)
    sendMut.mutate(msg);
  }, [draft, reply, selTags, userName, userColor, sendMut]);

  /* -------------------------- UI blocks -------------------------- */
  const TagBar = (
    <Box sx={{ mb: 1, display: 'flex', flexWrap: 'wrap', gap: mobile ? 0.5 : 1, justifyContent: mobile ? 'center' : 'start' }}>
      {(meta?.tags ?? ['#Fight', '#Flight', '#Freeze', '#Fawn', '#Ego', '#Superego']).map(t => (
        <Chip key={t} label={t} size="small" color={selTags.includes(t) ? 'primary' : 'default'} onClick={() => toggleTag(t)} />
      ))}
    </Box>
  );

  /* ▶ Row component (no closure on filtered[]) ------------------- */
 interface RowProps {
  index: number;
  style: React.CSSProperties;
  data: Message[];
}

interface RowProps {
  index: number;
  style: React.CSSProperties;
  data: Message[];
}

const Row = ({ index, style, data }: RowProps) => {
  const m = data[index];
  const rowRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const h = rowRef.current?.getBoundingClientRect().height ?? 0;
    if (h) setSize(index, h); // from outer scope
  }, [index]);

  return (
    <Box
      ref={rowRef}
      style={style}
      sx={{
        px: mobile ? 0.5 : 1,
        py: 0.75,
        cursor: 'pointer',
        WebkitFontSmoothing: 'antialiased',
        textRendering: 'optimizeLegibility',
        fontWeight: 400,
      }}
      onClick={() => setReply(m)}
    >
      {m.parent && (
        <Box
          sx={{
            bgcolor: 'action.hover',
            p: 0.5,
            mb: 0.5,
            borderRadius: 1,
          }}
        >
          <Typography
            variant="caption"
            sx={{
              fontStyle: 'italic',
              fontSize: mobile ? '0.65rem' : undefined,
              fontWeight: 400,
              opacity: 0.8,
            }}
          >
            {m.parent.text}
          </Typography>
        </Box>
      )}

      <Typography
        variant="subtitle2"
        sx={{
          color: m.color,
          fontWeight: 700,
          fontSize: mobile ? '0.75rem' : undefined,
        }}
      >
        {m.userName}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          fontSize: mobile ? '0.8rem' : undefined,
          fontWeight: 400,
        }}
      >
        {m.text}
      </Typography>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        mt={0.5}
      >
        <Typography
          variant="caption"
          sx={{
            opacity: 0.6,
            fontSize: mobile ? '0.55rem' : '0.625rem',
            fontWeight: 400,
          }}
        >
          {new Date(m.timestamp)
            .toLocaleString('en-GB', {
              year: '2-digit',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
              hour12: false,
            })
            .replace(',', '')
            .replace(/\//g, '-')
            .replace(' ', '-')}
        </Typography>

        {m.tag ? (
          <Chip
            label={m.tag}
            size="small"
            variant="outlined"
            sx={{
              mt: 0.5,
              fontWeight: 400,
            }}
          />
        ) : (
          <span />
        )}
      </Box>
    </Box>
  );
};




  /* scrolling + infinite older bins ------------------------------ */
  const prevBinRef = useRef<string | null>(null);
  const loadingOlderRef = useRef(false);
  const loadOlder = useCallback(
    async (top: number) => {
      if (loadingOlderRef.current || !prevBinRef.current) return;
      try {
        loadingOlderRef.current = true;
        const older = await jsonBinGet<ChatBin>(`/b/${prevBinRef.current}/latest`);
        prevBinRef.current = older.prev ?? null;
        rq.setQueryData<Message[]>(['messages', binId], (old = []) => [...older.messages, ...old]);
        listRef.current?.scrollTo(top + older.messages.length * itemHeight);
      } finally {
        loadingOlderRef.current = false;
      }
    },
    [binId, itemHeight, rq]
  );

  const onScroll = ({ scrollOffset, scrollUpdateWasRequested }: ListOnScrollProps) => {
    if (scrollUpdateWasRequested) return;
    const list = listRef.current;
    if (!list) return;

        const visibleHeight = parseInt(list.props.height.toString());
    const contentHeight = parseInt(list.props.itemSize.toString()) * filtered.length;
    const remaining = contentHeight - scrollOffset - visibleHeight;
    atBottomRef.current = remaining < 40; // 40px leeway
    setPoll(document.visibilityState === 'hidden' ? POLL_PASSIVE : atBottomRef.current ? POLL_BUSY_MS : POLL_PASSIVE);

    if (scrollOffset < 60 && prevBinRef.current) loadOlder(scrollOffset);
  };

  /* auto-scroll --------------------------------------------------- */
 useEffect(() => {
  const timeout = setTimeout(() => {
    if (atBottomRef.current && filtered.length > 0) {
     listRef.current?.scrollTo(filtered.length * itemHeight);

    }
  }, 10); // Slight delay ensures DOM update first
  return () => clearTimeout(timeout);
}, [filtered.length]);

  const MsgList = (
    <Box sx={{ flexGrow: 1, border: '1px solid', borderColor: 'divider', borderRadius: 1, position: 'relative' }}>
      {!binId && (
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: 1 }}>
          <CircularProgress />
        </Box>
      )}
      {loadingOlderRef.current && (
        <Box sx={{ position: 'absolute', top: 4, left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}>
          <CircularProgress size={16} />
        </Box>
      )}
     <AutoSizer>
  {({ height, width }: {height: any, width: any}) => (
    <VList
      ref={listRef}
      height={height}
      width={width}
      itemCount={filtered.length}
      itemSize={getSize} 
      estimatedItemSize={itemHeight}                     // ⭐ dynamic height
      itemData={filtered}
      onScroll={onScroll}
    >
      {Row as any}
    </VList>
  )}
</AutoSizer>

      {sendMut.isPending && (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 1 }}>
          <CircularProgress size={20} />
        </Box>
      )}
    </Box>
  );

  const ReplyBar = reply && (
    <Box sx={{ mt: 1, mb: 0.5, p: 0.5, borderLeft: '4px solid', borderColor: 'primary.main', bgcolor: 'action.hover', borderRadius: 1 }}>
      <Typography variant="caption" sx={{ fontSize: mobile ? '0.7rem' : undefined }}>
        Replying to: {reply.text}{' '}
        <Box component="span" sx={{ ml: 1, cursor: 'pointer', textDecoration: 'underline' }} onClick={() => setReply(null)}>
          cancel
        </Box>
      </Typography>
    </Box>
  );

  const Composer = (
    <Box sx={{ mt: 1, display: 'flex', flexDirection: mobile ? 'column' : 'row', gap: 1 }}>
      <TextField
        fullWidth
        size="small"
        placeholder="Type your message…"
        value={draft}
        onChange={e => setDraft(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            send();
          }
        }}
      />
      <IconButton color="primary" onClick={send} disabled={sendMut.isPending} sx={{ alignSelf: mobile ? 'flex-end' : 'center' }}>
        <SendIcon />
      </IconButton>
    </Box>
  );

  /* render -------------------------------------------------------- */
  return (
<Box
  sx={{
    p: mobile ? 1 : 2,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    minHeight: 350,        // <--- or whatever you like
    boxSizing: 'border-box'
  }}
>
  {TagBar}
  {MsgList}
  {ReplyBar}
  {Composer}
</Box>
  );
}
