/* ------------------------------------------------------------------ */
/* ChatContent.tsx — production build (2025-05-20)                     */
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
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { guid } from '../utils/guid';
import { findClosestComplement } from '../utils/mbtiMapping';

/* --------------------------- CONFIG ------------------------------- */

const JSONBIN_BASE = 'https://api.jsonbin.io/v3';
const MASTER_KEY   = '$2a$10$q3P7Zn7sUJLykm7PHc2d4.zvCgVdfmt8tVVK38jEdNC947RlZgoOG';
const META_BIN     = '682caa748561e97a5018215f';
const COLLECTION   = '682ca7998561e97a50181ffe';

const MAX_PER_BIN       = 25;
const POLL_INTERVAL_MS  = 5_000;

/* ---------------------------- TYPES ------------------------------- */

type Tag   = `#${string}` | null;
type FourF = 'Fight' | 'Flight' | 'Freeze' | 'Fawn';

interface Message {
  id: string;
  userId: string;
  userName: string;
  color: string;
  text: string;
  tag: Tag;
  timestamp: string;
  parent?: Message;
}
interface ChatBin { messages: Message[]; prev?: string | null; }
interface MetaBin { currentBinId: string; tags: Tag[]; }

interface CachedResult {
  mbtiType: string;
  suffix?: string;
  primary4FType: string;
  accuracy?: number;
  profile: Record<string, number>;
}

/* ------------------ LOCAL-STORAGE USERNAME ----------------------- */

export function getLatestUserName(): string {
  const cache = localStorage.getItem(guid());
  const result: CachedResult = cache ? JSON.parse(cache) : {} as CachedResult;
  if (!result.mbtiType) return `user-${guid().slice(0, 5)}`;

  const suffix = `-${findClosestComplement(result.mbtiType, result.profile)?.type.slice(1, 3)}` || '';
  const accuracy = Math.round(result.accuracy ?? 0);
  return `${result.mbtiType}${suffix} (${accuracy}%)`;
}

/* ---------------------  JSONBIN CLIENT --------------------------- */

const headers = {
  'Content-Type': 'application/json',
  'X-Master-Key': MASTER_KEY,
  'X-Bin-Name': new Date()
    .toLocaleString('en-GB', {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
    .replace(',', '')
    .replace(/\//g, '-')
    .replace(' ', '-'),
  ...(COLLECTION ? { 'X-Collection-Id': COLLECTION } : {})
};

function jsonBinClient(signal: AbortSignal) {
  const delay = (ms: number) => new Promise(r => setTimeout(r, ms));

  async function get<T>(path: string, attempt = 0): Promise<T> {
    try {
      const res = await fetch(`${JSONBIN_BASE}${path}`, { headers, signal });
      if (!res.ok) {
        if (attempt < 2 && res.status >= 500) {
          await delay(300 * 2 ** attempt);
          return get<T>(path, attempt + 1);
        }
        throw new Error(`GET ${path} → ${res.status}`);
      }
      return (await res.json()).record as T;
    } catch (e: any) {
      if (e.name === 'AbortError') throw e;
      throw e;
    }
  }

  async function put<T>(path: string, body: T) {
    const res = await fetch(`${JSONBIN_BASE}${path}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(body),
      signal
    });
    if (!res.ok) throw new Error(`PUT ${path} → ${res.status}`);
  }

  async function post<T>(body: T): Promise<string> {
    const res = await fetch(`${JSONBIN_BASE}/b`, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
      signal
    });
    if (!res.ok) throw new Error(`POST → ${res.status}`);
    return (await res.json()).metadata.id as string;
  }

  return { get, put, post };
}

/* ---------------------- COLOR UTILITIES -------------------------- */

function hashHue(seed: string, base: number, span: number) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h << 5) - h + seed.charCodeAt(i);
  return base + (Math.abs(h) % span);
}
function colorForMode(mode: FourF, seed: string) {
  switch (mode) {
    case 'Fight':  return `hsl(${hashHue(seed, 0, 12)} 70% 50%)`;
    case 'Flight': return `hsl(${hashHue(seed, 110, 30)} 70% 50%)`;
    case 'Freeze': return `hsl(${hashHue(seed, 200, 20)} 70% 50%)`;
    case 'Fawn':   return `hsl(${hashHue(seed, 270, 30)} 70% 50%)`;
    default:       return `hsl(${hashHue(seed, 0, 360)} 70% 50%)`;
  }
}

/* ----------------------- COMPONENT ------------------------------- */

export default function ChatContent() {
  const theme     = useTheme();
  const isMobile  = useMediaQuery(theme.breakpoints.down('sm'), { noSsr: true });

  /* identity */
  const userId    = useRef(guid());
  const userName  = getLatestUserName();
  const userColor = colorForMode('Fight', userId.current); // default red if unknown

  /* state */
  const [tags, setTags]             = useState<Tag[]>([]);
  const [selectedTags, setSelected] = useState<Tag[]>([]);
  const [draft, setDraft]           = useState('');
  const [replyTo, setReplyTo]       = useState<Message | null>(null);

  const [messages, setMessages]     = useState<Message[]>([]);
  const [binChain, setBinChain]     = useState<string[]>([]);
  const [loading, setLoading]       = useState(false);
  const [error, setError]           = useState<string | null>(null);
  const [hasMore, setHasMore]       = useState(true);

  const seenIds  = useRef<Set<string>>(new Set());
  const topRef   = useRef<HTMLDivElement>(null);

  /* helpers */
  const stripTag = (txt: string, tag: Tag) => tag ? txt.replace(tag, '').trim() : txt.trim();
  const findTag  = (txt: string): Tag => (txt.match(/#\w+/)?.[0] as Tag) ?? null;

  /* ---------- initial load ---------- */
  useEffect(() => {
    const abort = new AbortController();
    const api   = jsonBinClient(abort.signal);

    (async () => {
      try {
        setLoading(true);
        let meta = await api.get<MetaBin>(`/b/${META_BIN}/latest`);
        if (!meta.tags?.length) {
          meta.tags = ['#Fight', '#Flight', '#Freeze', '#Fawn', '#Ego', '#Superego'];
          await api.put(`/b/${META_BIN}`, meta);
        }
        setTags(meta.tags);

        const latest = await api.get<ChatBin>(`/b/${meta.currentBinId}/latest`);
        latest.messages.forEach(m => seenIds.current.add(m.id));
        setMessages(latest.messages.slice());
        setBinChain([meta.currentBinId]);
        setHasMore(Boolean(latest.prev));
      } catch (e: any) {
        if (e.name !== 'AbortError') setError(e.message);
      } finally { setLoading(false); }
    })();

    return () => abort.abort();
  }, []);

  /* ---------- infinite scroll ---------- */
  useEffect(() => {
    if (!topRef.current || !hasMore) return;
    const abort = new AbortController();
    const api = jsonBinClient(abort.signal);

    const io = new IntersectionObserver(async entries => {
      if (!entries[0].isIntersecting  || !binChain.length) return;
      try {
        const oldest = binChain[0];
        const bin    = await api.get<ChatBin>(`/b/${oldest}/latest`);
        if (!bin.prev) { setHasMore(false); return; }

        const prev = await api.get<ChatBin>(`/b/${bin.prev}/latest`);
        const unseen = prev.messages.filter(m => !seenIds.current.has(m.id));
        unseen.forEach(m => seenIds.current.add(m.id));
        setMessages(p => [...unseen.reverse(), ...p]);
        setBinChain(p => [bin.prev!, ...p]);
      } catch (e: any) {
        if (e.name !== 'AbortError') setError(e.message);
      }
    }, { threshold: 0 });

    io.observe(topRef.current);
    return () => { io.disconnect(); abort.abort(); };
  }, [binChain, hasMore]);

  /* ---------- live poller ---------- */
  useEffect(() => {
    const abort = new AbortController();
    const api   = jsonBinClient(abort.signal);

    const poll = async () => {
      try {
        const meta = await api.get<MetaBin>(`/b/${META_BIN}/latest`);
        const currentId = meta.currentBinId;

        // new active bin?
        if (!binChain.includes(currentId)) {
          const newBin = await api.get<ChatBin>(`/b/${currentId}/latest`);
          const unseen = newBin.messages.filter(m => !seenIds.current.has(m.id));
          unseen.forEach(m => seenIds.current.add(m.id));
          setMessages(p => [...p, ...unseen]);
          setBinChain(p => [...p, currentId]);
        }

        // always check the current bin for new messages
        const curBin = await api.get<ChatBin>(`/b/${currentId}/latest`);
        const unseen = curBin.messages.filter(m => !seenIds.current.has(m.id));
        if (unseen.length) {
          unseen.forEach(m => seenIds.current.add(m.id));
          setMessages(p => [...p, ...unseen]);
        }
      } catch { /* swallow */ }
    };

    poll();
    const id = setInterval(poll, POLL_INTERVAL_MS);
    return () => { clearInterval(id); abort.abort(); };
  }, [binChain]);

  /* ---------- send ---------- */
  const handleSend = useCallback(async () => {
    if (!draft.trim()) return;

    // determine tag
    let tag: Tag = null;
    let txt = draft;
    if (replyTo?.tag) tag = replyTo.tag;
    else if (selectedTags.length === 1) tag = selectedTags[0];
    else if (selectedTags.length > 1) {
      const inl = findTag(txt);
      if (!inl || !selectedTags.includes(inl)) {
        setError(`Multiple tags: include one (e.g. ${selectedTags[0]})`);
        return;
      }
      tag = inl; txt = stripTag(txt, tag);
    } else {
      const inl = findTag(txt);
      if (inl) { tag = inl; txt = stripTag(txt, tag); }
    }

    const msg: Message = {
      id: guid(),
      userId: userId.current,
      userName,
      color: userColor,
      text: txt,
      tag,
      timestamp: new Date().toISOString(),
      parent: replyTo ?? undefined
    };

    setDraft('');
    setReplyTo(null);
    setLoading(true);

    const abort = new AbortController();
    const api = jsonBinClient(abort.signal);
    try {
      let meta = await api.get<MetaBin>(`/b/${META_BIN}/latest`);
      let bin  = await api.get<ChatBin>(`/b/${meta.currentBinId}/latest`);

      // roll to new bin if needed
      if (bin.messages.length >= MAX_PER_BIN) {
        const newBinId = await api.post<ChatBin>({ messages: [msg], prev: meta.currentBinId });
        await api.put(`/b/${META_BIN}`, { ...meta, currentBinId: newBinId });
        setBinChain(p => [...p, newBinId]);
      } else {
        bin.messages.push(msg);
        await api.put(`/b/${meta.currentBinId}`, bin);
      }

      // confirmed write → show message
      seenIds.current.add(msg.id);
      setMessages(p => [...p, msg]);
    } catch (e: any) {
      if (e.name !== 'AbortError') setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [draft, selectedTags, replyTo, userColor, userName]);

  /* ---------- UI blocks ---------- */
  const TagSelector = (
    <Box sx={{ mb: 1, display: 'flex', flexWrap: 'wrap', gap: isMobile ? 0.5 : 1, justifyContent: isMobile ? 'center' : 'flex-start' }}>
      {tags.map(t => (
        <Chip
          key={t}
          label={t}
          size="small"
          color={selectedTags.includes(t) ? 'primary' : 'default'}
          onClick={() => setSelected(p => p.includes(t) ? p.filter(x => x !== t) : [...p, t])}
        />
      ))}
    </Box>
  );

  const MessageList = (
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
      <div ref={topRef} />
      <List sx={{ display: 'flex', flexDirection: 'column-reverse' }}>
        {messages
          .filter(m => !selectedTags.length || selectedTags.includes(m.tag))
          .sort((a, b) => new Date(b.timestamp).valueOf() - new Date(a.timestamp).valueOf())
          .map(m => (
            <ListItem key={m.id} sx={{ display: 'block', py: isMobile ? 0.25 : 0.5 }} onClick={() => setReplyTo(m)}>
              {m.parent && (
                <Box sx={{ bgcolor: 'action.hover', p: 0.5, mb: 0.5, borderRadius: 1 }}>
                  <Typography variant="caption" sx={{ fontStyle: 'italic', fontSize: isMobile ? '0.65rem' : '0.75rem' }}>
                    {m.parent.text}
                  </Typography>
                </Box>
              )}
              <Typography variant="subtitle2" sx={{ color: m.color, fontWeight: 700, fontSize: isMobile ? '0.75rem' : '0.875rem' }}>
                {m.userName}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: isMobile ? '0.8rem' : '0.875rem' }}>
                {m.text}
              </Typography>
              {m.tag && <Chip label={m.tag} size="small" sx={{ mt: 0.5 }} variant="outlined" />}
              <Typography variant="caption" sx={{ fontSize: isMobile ? '0.55rem' : '0.625rem', opacity: 0.6 }}>
                {new Date(m.timestamp).toLocaleString('en-GB', {
                  year: '2-digit', month: '2-digit', day: '2-digit',
                  hour: '2-digit', minute: '2-digit', hour12: false
                }).replace(',', '').replace(/\//g, '-').replace(' ', '-')}
              </Typography>
            </ListItem>
          ))}
      </List>
      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 1 }}>
          <CircularProgress size={20} />
        </Box>
      )}
    </Box>
  );

  const ReplyBanner = replyTo && (
    <Box sx={{
      mt: 1, mb: 0.5, p: 0.5,
      borderLeft: '4px solid', borderColor: 'primary.main',
      bgcolor: 'action.hover', borderRadius: 1
    }}>
      <Typography variant="caption" sx={{ fontSize: isMobile ? '0.7rem' : '0.75rem' }}>
        Replying to: {replyTo.text}{' '}
        <Box component="span" sx={{ ml: 1, cursor: 'pointer', textDecoration: 'underline' }} onClick={() => setReplyTo(null)}>
          cancel
        </Box>
      </Typography>
    </Box>
  );

  const ComposeBox = (
    <Box sx={{ mt: 1, display: 'flex', gap: 1, flexDirection: isMobile ? 'column' : 'row' }}>
      <TextField
        fullWidth size="small" placeholder="Type your message…"
        value={draft} onChange={e => setDraft(e.target.value)}
        onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
      />
      <IconButton onClick={handleSend} color="primary" sx={{ alignSelf: isMobile ? 'flex-end' : 'center' }}>
        <SendIcon />
      </IconButton>
    </Box>
  );

  /* ---------- FINAL RENDER ---------- */
  return (
    <Box sx={{
      p: isMobile ? 1 : 2,
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      boxSizing: 'border-box'
    }}>
      {TagSelector}
      {error && <Typography color="error" sx={{ mb: 1, fontSize: isMobile ? '0.75rem' : '0.875rem', textAlign: 'center' }}>{error}</Typography>}
      {MessageList}
      {ReplyBanner}
      {ComposeBox}
    </Box>
  );
}
