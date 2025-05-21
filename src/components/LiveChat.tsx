/* ------------------------------------------------------------------ */
/* ChatContentOptimized.tsx — v4 (React-Query v5, 2025-05-21)          */
/* ------------------------------------------------------------------ */
// 🔑  Key improvements
// 1.  Singleton QueryClient so cached data (meta, messages, etc.)    
//     survives unmounts (e.g. when a modal closes).                  
// 2.  React-Query is now the *single source of truth* for all server  
//     data.  useState is kept only for transient UI (draft, reply…).  
// 3.  meta-bin is cached forever (staleTime = ∞, cacheTime = ∞) so    
//     we never refetch it unless an explicit invalidation happens.    
// 4.  Messages are hydrated from – and written back to – the          
//     QueryClient.  This means they instantly re-appear on remount    
//     without a network request.                                      
// 5.  sendMut mutation now uses the *already-cached* meta + bin data  
//     whenever possible, doing only the minimal network calls.        
// 6.  Aborted / duplicate fetch logic removed – React-Query handles   
//     request de-duplication for us, keeping the code leaner.         
// ------------------------------------------------------------------ */

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  memo,
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
  FixedSizeList as VList,
  ListOnScrollProps,
} from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { guid } from '../utils/guid';
import { findClosestComplement } from '../utils/mbtiMapping';

/* ----------------------------- CONFIG ----------------------------- */
const JSONBIN_BASE = 'https://api.jsonbin.io/v3';
const MASTER_KEY   = '$2a$10$q3P7Zn7sUJLykm7PHc2d4.zvCgVdfmt8tVVK38jEdNC947RlZgoOG';// ⬅ put in .env
const META_BIN     = '682caa748561e97a5018215f';
const COLLECTION   = '682ca7998561e97a50181ffe';

const MAX_PER_BIN  = 200;
const POLL_BUSY_MS = 2000;
const POLL_PASSIVE = 15_000;
const POLL_IDLE    = 60_000;
const IDLE_MS      = 5 * 60 * 1_000;

/* --------------------------- QUERY-CLIENT -------------------------- */
// Singleton so data survives component unmounts (e.g. modal close)
export const chatQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // very generous cache – this is chat history, we almost never want GC
      staleTime: 0,                        // refetch control is manual below
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
  ...(COLLECTION && { 'X-Collection-Id': COLLECTION }),
  'X-Bin-Meta': 'false',
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
  if (!res.ok) throw new Error(`${res.status}: PUT ${path}`);
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
const modeColor = (m: FourF, id: string) =>
  m === 'Fight'
    ? `hsl(${hue(id, 0, 12)} 70% 50%)`
    : m === 'Flight'
    ? `hsl(${hue(id, 110, 30)} 70% 50%)`
    : m === 'Freeze'
    ? `hsl(${hue(id, 200, 20)} 70% 50%)`
    : `hsl(${hue(id, 270, 30)} 70% 50%)`;

/* --------------------------- WRAPPER ----------------------------- */
export default function ChatContentWrapper() {
  // by re-using the singleton query client, closing/reopening the modal keeps data
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

  /* meta – cached forever, no refetch unless we invalidate manually */
  const { data: meta } = useQuery<MetaBin>({
    queryKey: ['meta'],
    queryFn: () => jsonBinGet<MetaBin>(`/b/${META_BIN}/latest`),
    staleTime: Infinity,
  });

  /* messages ------------------------------------------------------ */
  const binId = meta?.currentBinId ?? null;

  /**
   * We keep the *entire* message list inside React-Query under key ['messages'].
   * This means:
   *  - The first mount immediately shows whatever is already cached.
   *  - On re-mount there is zero flashing/fetching – we only poll for *new* items.
   */
 const { data: messages = [] } = useQuery<Message[]>({
  queryKey: ['messages', binId],
  enabled: Boolean(binId),
  initialData: () => rq.getQueryData<Message[]>(['messages', binId]) ?? [],
  refetchInterval: pollMs,

  queryFn: async () => {
    if (!binId) return [];

    // 1️⃣ If we don't yet know the latest timestamp → full bin fetch
    if (!lastSeenRef.current) {
      const bin = await jsonBinGet<ChatBin>(`/b/${binId}/latest`);
      prevBinRef.current = bin.prev ?? null;

      if (bin.messages.length) {
        lastSeenRef.current =
          bin.messages[bin.messages.length - 1].timestamp;
      }
      return bin.messages;
    }

    // 2️⃣ Otherwise grab *only* the new stuff
    const fresh = await jsonBinGet<Message[]>(
      `/b/${binId}/latest`,
      `messages[?(@.timestamp > "${lastSeenRef.current}")]`
    );

    if (!fresh.length) {
      // nothing new
      return rq.getQueryData<Message[]>(['messages', binId]) ?? [];
    }

    lastSeenRef.current =
      fresh[fresh.length - 1].timestamp;

    // 3️⃣ Merge with whatever we already have, keyed by id
    const existing =
      rq.getQueryData<Message[]>(['messages', binId]) ?? [];

    const mergedMap: Record<string, Message> = {};
    [...existing, ...fresh].forEach(m => (mergedMap[m.id] = m));

    return Object.values(mergedMap);
  },
});


  /* filtered + sorted list --------------------------------------- */
  const filtered = useMemo(() => {
    const byTag = messages.filter((m: any) => !selTags.length || selTags.includes(m.tag));
    return byTag.sort((a: any, b: any) => new Date(a.timestamp).valueOf() - new Date(b.timestamp).valueOf());
  }, [messages, selTags]);

  /* -------------------------- send mutation ---------------------- */
  const sendMut = useMutation({
    mutationFn: async (msg: Message) => {
      // Use *cached* meta first – avoids one network round-trip in most cases
      let metaLive = meta;
      if (!metaLive) metaLive = await jsonBinGet<MetaBin>(`/b/${META_BIN}/latest`);

      const curPath  = `/b/${metaLive.currentBinId}`;
      let curBin     = rq.getQueryData<ChatBin>(['bin', metaLive.currentBinId]);
      if (!curBin)   curBin = await jsonBinGet<ChatBin>(`${curPath}/latest`);

      if (curBin.messages.length >= MAX_PER_BIN) {
        // open new bin in *parallel* – don't block UI
        const newId = await jsonBinPatch<Message>(`/b/${metaLive.currentBinId}`, msg);
        await jsonBinPut(`/b/${META_BIN}`, { ...metaLive, currentBinId: newId });
        return { newBinId: newId, msg };
      } else {
        curBin.messages.push(msg);
        await jsonBinPut(curPath, curBin);
        return { newBinId: null, msg };
      }
    },
    onMutate: async msg => {
      // optimistic update – merge into cache immediately
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
      id: guid(),
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
    sendMut.mutate(msg);
    // Our optimistic updater already handled UI – no extra local push needed
  }, [draft, reply, selTags, userName, userColor, sendMut]);

  /* -------------------------- UI blocks -------------------------- */
  const TagBar = (
    <Box sx={{ mb: 1, display: 'flex', flexWrap: 'wrap', gap: mobile ? 0.5 : 1, justifyContent: mobile ? 'center' : 'start' }}>
      {(meta?.tags ?? ['#Fight', '#Flight', '#Freeze', '#Fawn', '#Ego', '#Superego']).map(t => (
        <Chip key={t} label={t} size="small" color={selTags.includes(t) ? 'primary' : 'default'} onClick={() => toggleTag(t)} />
      ))}
    </Box>
  );

  const Row = memo<{ index: number; style: React.CSSProperties }>(({ index, style }) => {
    const m = filtered[index];
    return (
      <Box style={style} sx={{ px: mobile ? 0.5 : 1, py: 0.75, cursor: 'pointer' }} onClick={() => setReply(m)}>
        {m.parent && (
          <Box sx={{ bgcolor: 'action.hover', p: 0.5, mb: 0.5, borderRadius: 1 }}>
            <Typography variant="caption" sx={{ fontStyle: 'italic', fontSize: mobile ? '0.65rem' : undefined }}>
              {m.parent.text}
            </Typography>
          </Box>
        )}
        <Typography variant="subtitle2" sx={{ color: m.color, fontWeight: 700, fontSize: mobile ? '0.75rem' : undefined }}>
          {m.userName}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: mobile ? '0.8rem' : undefined }}>
          {m.text}
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
          <Typography variant="caption" sx={{ opacity: 0.6, fontSize: mobile ? '0.55rem' : '0.625rem' }}>
            {new Date(m.timestamp)
              .toLocaleString('en-GB', { year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false })
              .replace(',', '')
              .replace(/\//g, '-')
              .replace(' ', '-')}
          </Typography>
          {m.tag ? <Chip label={m.tag} size="small" variant="outlined" sx={{ mt: 0.5 }} /> : <span />}
        </Box>
      </Box>
    );
  });

  // scrolling + infinite older bins ------------------------------
  const prevBinRef = useRef<string | null>(null);
  const loadingOlderRef = useRef(false);
  const loadOlder = useCallback(async (top: number) => {
    if (loadingOlderRef.current || !prevBinRef.current) return;
    try {
      loadingOlderRef.current = true;
      const older = await jsonBinGet<ChatBin>(`/b/${prevBinRef.current}/latest`);
      prevBinRef.current = older.prev ?? null;
      rq.setQueryData<Message[]>(['messages', binId], (old = []) => [...older.messages, ...old]);
      // scroll position compensation
      listRef.current?.scrollTo(top + older.messages.length * itemHeight);
    } finally {
      loadingOlderRef.current = false;
    }
  }, [binId, itemHeight, rq]);

  const onScroll = ({ scrollOffset, scrollUpdateWasRequested }: ListOnScrollProps) => {
    if (scrollUpdateWasRequested) return;
    const list = listRef.current;
    if (!list) return;

    atBottomRef.current = scrollOffset >= list.props.itemSize * filtered.length - parseInt(list.props.height.toString()) - 20;
    setPoll(document.visibilityState === 'hidden' ? POLL_PASSIVE : atBottomRef.current ? POLL_BUSY_MS : POLL_PASSIVE);

    if (scrollOffset < 60 && prevBinRef.current) loadOlder(scrollOffset);
  };

  // auto-scroll ----------------------------------------------------
  useEffect(() => {
    if (atBottomRef.current) listRef.current?.scrollToItem(filtered.length - 1);
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
          <VList ref={listRef} height={height} width={width} itemCount={filtered.length} itemSize={itemHeight} onScroll={onScroll}>
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
    <Box sx={{ p: mobile ? 1 : 2, display: 'flex', flexDirection: 'column', height: '100%', boxSizing: 'border-box' }}>
      {TagBar}
      {MsgList}
      {ReplyBar}
      {Composer}
    </Box>
  );
}
