/* ------------------------------------------------------------------ */
/* ChatContent.tsx — production build                                 */
/* ------------------------------------------------------------------ */
import React, {
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import {
  Box,
  Chip,
  CircularProgress,
  IconButton,
  List,
  ListItem,
  TextField,
  Typography
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { guid } from '../utils/guid';                     // <-- adjust import

/* ------------------------------------------------------------------ */
/* --------------------------  CONFIG  ------------------------------ */
/* ------------------------------------------------------------------ */

const JSONBIN_BASE = 'https://api.jsonbin.io/v3';
const MASTER_KEY   = '$2a$10$q3P7Zn7sUJLykm7PHc2d4.zvCgVdfmt8tVVK38jEdNC947RlZgoOG';
const META_BIN     = '682caa748561e97a5018215f';
const COLLECTION   = '682ca7998561e97a50181ffe';

const MAX_PER_BIN  = 25;
const POLL_INTERVAL_MS = 5_000;

/* ------------------------------------------------------------------ */
/* ----------------------------  TYPES  ----------------------------- */
/* ------------------------------------------------------------------ */

type Tag   = `#${string}` | null;
type FourF = 'Fight' | 'Flight' | 'Freeze' | 'Fawn';

interface Message {
  id: string;
  userId: string;
  userName: string;         // e.g. "ENTP-NT (86%)"
  color: string;            // stable HSL
  text: string;
  tag: Tag;
  timestamp: string;        // ISO
  parent?: Message;
}

interface ChatBin   { messages: Message[]; prev?: string | null; }
interface MetaBin   { currentBinId: string; tags: Tag[]; }
interface TestCache {
  mbtiType: string;
  suffix?: string;
  primary4FType: FourF;
  accuracy?: number;
}
interface CachedResult {
  mbtiType: string;
  suffix?: string;
  primary4FType: string;
  accuracy?: number;
}

/**
 * Reads the latest valid test result from localStorage and formats it
 * as a user display name: "TYPE-SUFFIX (NN%)"
 */
export function getLatestUserName(): string {
  const result = JSON.parse(localStorage.getItem(guid()) ||'') as CachedResult
  /*const keys = Object.keys(localStorage)
    .filter(k => {
      try {
        const v = JSON.parse(localStorage.getItem(k) || '{}') as CachedResult;
        return v.mbtiType && v.primary4FType;
      } catch {
        return false;
      }
    })
    .sort(); // sort so last written is last  */

  if (!Object.keys(result).length) return `user-${guid().slice(0, 5)}`;

  //const lastKey   = keys[keys.length - 1];
  //const result    = JSON.parse(localStorage.getItem(lastKey)!) as CachedResult;
  const type      = result.mbtiType;
  const suffix    = result.suffix ? `-${result.suffix}` : '';
  const accuracy  = Math.round(result.accuracy ?? 0);

  return `${type}${suffix} (${accuracy}%)`;
}


/* ------------------------------------------------------------------ */
/* ---------------------  JSONBIN CLIENT ---------------------------- */
/* ------------------------------------------------------------------ */

const headers = {
  'Content-Type': 'application/json',
  'X-Master-Key': MASTER_KEY,
  'X-Bin-Name': new Date().toLocaleString('en-GB', { year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false }).replace(',', '').replace(/\//g, '-').replace(' ', '-'),
  ...(COLLECTION ? { 'X-Collection-Id': COLLECTION } : {})
};

// jsonBinClient.ts  (inside ChatContent for brevity)
function jsonBinClient(signal: AbortSignal) {
  const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

  async function get<T>(path: string, attempt = 0): Promise<T> {
    try {
      const res = await fetch(`${JSONBIN_BASE}${path}`, { headers, signal });
      if (!res.ok) {
        if (attempt < 2 && res.status >= 500) {          // retry 5xx
          await sleep(250 * 2 ** attempt);
          return get<T>(path, attempt + 1);
        }
        throw new Error(`GET ${path} -> ${res.status}`);
      }
      return (await res.json()).record as T;
    } catch (err: any) {
      if (err.name === 'AbortError') throw err;          // ← swallow later
      throw err;                                         // real failure
    }
  }

  async function put<T>(path: string, body: T): Promise<void> {
    try {
      const res = await fetch(`${JSONBIN_BASE}${path}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify(body),
        signal
      });
      if (!res.ok) throw new Error(`PUT ${path} -> ${res.status}`);
    } catch (err: any) {
      if (err.name === 'AbortError') return;             // silent cancel
      throw err;
    }
  }

  async function post<T>(body: T): Promise<string> {
    try {
      const res = await fetch(`${JSONBIN_BASE}/b`, {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
        signal
      });
      if (!res.ok) throw new Error(`POST -> ${res.status}`);
      return (await res.json()).metadata.id as string;
    } catch (err: any) {
      if (err.name === 'AbortError') throw err;
      throw err;
    }
  }

  return { get, put, post };
}


/* ------------------------------------------------------------------ */
/* ------------------  USERNAME & COLOR HELPERS --------------------- */
/* ------------------------------------------------------------------ */

/** Stable hash so the same user always gets the same hue */
function hashToHue(str: string, base: number, span: number) {
  let hash = 0;
  for (let i = 0; i < str.length; i++)
    hash = (hash << 5) - hash + str.charCodeAt(i);
  hash = Math.abs(hash);
  return base + (hash % span);
}

function colorForMode(mode: FourF, seed: string): string {
  switch (mode) {
    case 'Fight':  return `hsl(${hashToHue(seed,   0,  12)} 70% 50%)`; // red
    case 'Flight': return `hsl(${hashToHue(seed, 110, 30)} 70% 50%)`; // green
    case 'Freeze': return `hsl(${hashToHue(seed, 200, 20)} 70% 50%)`; // blue
    case 'Fawn':   return `hsl(${hashToHue(seed, 270, 30)} 70% 50%)`; // purple
    default:       return `hsl(${hashToHue(seed,   0,360)} 70% 50%)`;
  }
}

/** Returns latest cached test-result or null */
function readLatestResult(): { name: string; mode: FourF } | null {
  const keys = Object.keys(localStorage)
    .filter(k => {
      try {
        const v = JSON.parse(localStorage.getItem(k) || '{}') as TestCache;
        return v.mbtiType && v.primary4FType;
      } catch { return false; }
    })
    .sort();                                               // last key is newest

  if (!keys.length) return null;
  const payload = JSON.parse(
    localStorage.getItem(keys[keys.length - 1])!
  ) as TestCache;

  const suffix  = payload.suffix ? `-${payload.suffix}` : '';
  const pct     = Math.round(payload.accuracy ?? 0);
  const name    = `${payload.mbtiType}${suffix} (${pct}%)`;
  const mode    = payload.primary4FType;

  return { name, mode };
}

/* ------------------------------------------------------------------ */
/* -----------------------  MAIN COMPONENT -------------------------- */
/* ------------------------------------------------------------------ */

export default function ChatContent() {
  /* ========== identity (static) ========== */
  const userId   = useRef(guid());
  const profile  = useRef(readLatestResult());
  const userName = getLatestUserName();
  const userMode = profile.current?.mode ?? 'Fight';
  const userColor = colorForMode(userMode, userId.current);

  /* ========== state ========== */
  const [tags, setTags]           = useState<Tag[]>([]);
  const [selectedTags, setSel]    = useState<Tag[]>([]);
  const [draft, setDraft]         = useState('');
  const [replyTo, setReply]       = useState<Message | null>(null);

  const [messages, setMessages]   = useState<Message[]>([]);
  const [binChain, setBinChain]   = useState<string[]>([]);   // oldest → newest
  const [hasMore, setHasMore]     = useState(true);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState<string | null>(null);

  const seenIds = useRef<Set<string>>(new Set());            // dedupe set
  const topSentinel = useRef<HTMLDivElement | null>(null);

  /* ========== helpers ========== */
  const extractTag = (t: string): Tag =>
    (t.match(/#\w+/)?.[0] as Tag) ?? null;
  const stripTag = (t: string, tag: Tag) =>
    tag ? t.replace(tag, '').trim() : t.trim();

  /* ========== data loader ========== */
  useEffect(() => {
    const abort = new AbortController();
    const api = jsonBinClient(abort.signal);

    (async () => {
      try {
        setLoading(true);
        let meta = await api.get<MetaBin>(`/b/${META_BIN}/latest`);

        // one-time tag seeding
        if (!meta.tags?.length) {
          meta.tags = ['#Fight', '#Flight', '#Freeze', '#Fawn', '#Ego', '#Superego'];
          await api.put(`/b/${META_BIN}`, meta);
        }
        setTags(meta.tags);

        // load latest bin
        const latest = await api.get<ChatBin>(`/b/${meta.currentBinId}/latest`);
        latest.messages.forEach(m => seenIds.current.add(m.id));
        setMessages(latest.messages.slice().reverse());
        setBinChain([meta.currentBinId]);
        setHasMore(Boolean(latest.prev));
      } catch (e: any) {
  if (e.name === 'AbortError') return; // component unmounted or effect cleaned up
  setError(e.message);
} finally {
        setLoading(false);
      }
    })();

    return () => abort.abort();
  }, []);

  /* ========== infinite scroll (history) ========== */
  useEffect(() => {
    if (!topSentinel.current || !hasMore) return;
    const abort = new AbortController();
    const api   = jsonBinClient(abort.signal);

    const io = new IntersectionObserver(async entries => {
      if (!entries[0].isIntersecting || !binChain.length) return;
      try {
        setLoading(true);
        const oldestId = binChain[0];
        const oldest   = await api.get<ChatBin>(`/b/${oldestId}/latest`);
        if (!oldest.prev) { setHasMore(false); return; }

        const prevBin  = await api.get<ChatBin>(`/b/${oldest.prev}/latest`);
        const unseen   = prevBin.messages.filter(m => !seenIds.current.has(m.id));
        unseen.forEach(m => seenIds.current.add(m.id));

        setMessages(p => [...unseen.slice().reverse(), ...p]);
        setBinChain(p => [oldest.prev!, ...p]);
      } catch (e: any) {
        if (e.name === 'AbortError') return; // component unmounted or effect cleaned up
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }, { threshold: 0 });

    io.observe(topSentinel.current);
    return () => { io.disconnect(); abort.abort(); };
  }, [binChain, hasMore]);

  /* ========== live polling ========== */
  useEffect(() => {
    const abort = new AbortController();
    const api   = jsonBinClient(abort.signal);

    const poll = async () => {
      try {
        const meta = await api.get<MetaBin>(`/b/${META_BIN}/latest`);

        // 1) if a new bin is active, grab it
        if (meta.currentBinId !== binChain[binChain.length - 1]) {
          const newBin = await api.get<ChatBin>(`/b/${meta.currentBinId}/latest`);
          const unseen = newBin.messages.filter(m => !seenIds.current.has(m.id));
          unseen.forEach(m => seenIds.current.add(m.id));

          setMessages(p => [...p, ...unseen]);
          setBinChain(p => [...p, meta.currentBinId]);
        } else {
          // 2) otherwise check for new lines in current bin
          const cur = await api.get<ChatBin>(`/b/${meta.currentBinId}/latest`);
          const unseen = cur.messages.filter(m => !seenIds.current.has(m.id));
          if (unseen.length) {
            unseen.forEach(m => seenIds.current.add(m.id));
            setMessages(p => [...p, ...unseen]);
          }
        }
      } catch {/* swallow polling errors */ }
    };

    poll();                                         // immediate kick
    const id = setInterval(poll, POLL_INTERVAL_MS);
    return () => { clearInterval(id); abort.abort(); };
  }, [binChain]);

  /* ========== tag selection ========== */
  const toggleTag = (tag: Tag) =>
    setSel(p => p.includes(tag) ? p.filter(t => t !== tag) : [...p, tag]);

  /* ========== send handler ========== */
  const handleSend = useCallback(async () => {
    if (!draft.trim()) return;

    let tag: Tag = null;
    let text     = draft;

    // resolve tag per rules
    if (replyTo?.tag)                       tag = replyTo.tag;
    else if (selectedTags.length === 1)     tag = selectedTags[0];
    else if (selectedTags.length  >  1) {
      const inlined = extractTag(text);
      if (!inlined || !selectedTags.includes(inlined)) {
        setError(`Multiple tags: include one (e.g. ${selectedTags[0]})`);
        return;
      }
      tag  = inlined;
      text = stripTag(text, tag);
    } else {
      const inlined = extractTag(text);
      if (inlined) { tag = inlined; text = stripTag(text, tag); }
    }

    const newMessage: Message = {
      id: guid(),
      userId: userId.current,
      userName,
      color: userColor,
      text,
      tag,
      timestamp: new Date().toISOString(),
      parent: replyTo ?? undefined
    };

    // optimistic UI
    setMessages(p => [...p, newMessage]);
    seenIds.current.add(newMessage.id);
    setDraft(''); setReply(null);

    // persistent write
    const abort = new AbortController();
    const api   = jsonBinClient(abort.signal);
    try {
      let meta = await api.get<MetaBin>(`/b/${META_BIN}/latest`);
      let bin  = await api.get<ChatBin>(`/b/${meta.currentBinId}/latest`);

      if (bin.messages.length >= MAX_PER_BIN) {
        const newBinId = await api.post<ChatBin>({
          messages: [newMessage],
          prev     : meta.currentBinId
        });
        await api.put(`/b/${META_BIN}`, { ...meta, currentBinId: newBinId });
        setBinChain(p => [...p, newBinId]);
      } else {
        bin.messages.push(newMessage);
        await api.put(`/b/${meta.currentBinId}`, bin);
      }
    } catch (e: any) {
  if (e.name === 'AbortError') return; // component unmounted or effect cleaned up
  setError(e.message);
}
    return () => abort.abort();
  }, [draft, replyTo, selectedTags, userName, userColor]);

  /* ========== render ========== */
  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Tag selector */}
      <Box sx={{ mb: 1, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {tags.map(tag => (
          <Chip
            key={tag}
            label={tag}
            size="small"
            color={selectedTags.includes(tag) ? 'primary' : 'default'}
            onClick={() => toggleTag(tag)}
          />
        ))}
      </Box>

      {error && (
        <Typography color="error" sx={{ mb: 1 }}>{error}</Typography>
      )}

      {/* Messages */}
      <Box sx={{
        flexGrow: 1,
        overflowY: 'auto',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
        p: 1,
        display: 'flex',
        flexDirection: 'column-reverse'
      }}>
        <div ref={topSentinel} />

        <List sx={{ display: 'flex', flexDirection: 'column-reverse' }}>
          {messages.filter(msg => !selectedTags.length || selectedTags.includes(msg.tag)).sort((msgA, msgB) => new Date(msgB.timestamp).valueOf() - new Date(msgA.timestamp).valueOf()).map(msg => (
            <ListItem
              key={msg.id}
              sx={{ display: 'block', py: 0.5, cursor: 'pointer' }}
              onClick={() => setReply(msg)}
            >
              {msg.parent && (
                <Box sx={{ bgcolor: 'action.hover', p: 0.5, mb: 0.5, borderRadius: 1 }}>
                  <Typography variant="caption" sx={{ fontStyle: 'italic' }}>
                    {msg.parent.text}
                  </Typography>
                </Box>
              )}

              <Typography variant="subtitle2" sx={{ color: msg.color, fontWeight: 700 }}>
                {msg.userName}
              </Typography>
              <Typography variant="body2">{msg.text}</Typography>
              {msg.tag && (
                <Chip label={msg.tag} size="small" sx={{ mt: 0.5 }} variant="outlined" />
              )}
            </ListItem>
          ))}
        </List>

        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 1 }}>
            <CircularProgress size={20} />
          </Box>
        )}
      </Box>

      {/* Reply indicator */}
      {replyTo && (
        <Box sx={{
          mt: 1,
          mb: 0.5,
          p: 0.5,
          borderLeft: '4px solid',
          borderColor: 'primary.main',
          bgcolor: 'action.hover',
          borderRadius: 1
        }}>
          <Typography variant="caption">
            Replying to: {replyTo.text}{' '}
            <Box
              component="span"
              sx={{ ml: 1, cursor: 'pointer', textDecoration: 'underline' }}
              onClick={() => setReply(null)}
            >
              cancel
            </Box>
          </Typography>
        </Box>
      )}

      {/* Compose */}
      <Box sx={{ mt: 1, display: 'flex', gap: 1 }}>
        <TextField
          fullWidth
          size="small"
          placeholder="Type your message…"
          value={draft}
          onChange={e => setDraft(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
        />
        <IconButton onClick={handleSend} color="primary">
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
