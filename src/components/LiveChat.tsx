/* ------------------------------------------------------------------ */
/* ChatContent.tsx  —  2025-05-21, React-Query v5                     */
/* ------------------------------------------------------------------ */
import React, {
  useCallback,
  useMemo,
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
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { guid } from '../utils/guid';
import { findClosestComplement } from '../utils/mbtiMapping';

/* ------------------------------ CONFIG ---------------------------- */

const JSONBIN_BASE = 'https://api.jsonbin.io/v3';
const MASTER_KEY   = '<YOUR-MASTER-KEY>';          // keep secret in .env
const META_BIN     = '682caa748561e97a5018215f';
const COLLECTION   = '682ca7998561e97a50181ffe';
const MAX_PER_BIN  = 25;
const REFRESH_MS   = 5_000;

/* ------------------------------- Types ---------------------------- */

type Tag = `#${string}` | null;
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

interface ChatBin   { messages: Message[]; prev?: string | null; }
interface MetaBin   { currentBinId: string; tags: Tag[]; }

interface CachedResult {
  mbtiType: string;
  suffix?: string;
  primary4FType: FourF;
  accuracy?: number;
  profile: Record<string, number>;
}

/* ----------------------- Helper: headers ------------------------- */

const baseHeaders = {
  'Content-Type': 'application/json',
  'X-Master-Key': MASTER_KEY,
  ...(COLLECTION && { 'X-Collection-Id': COLLECTION })
};

/* ----------------------- Helper: fetchers ------------------------ */

const fetchJSON = <T,>(url: string, init?: RequestInit) =>
  fetch(url, { ...init, headers: baseHeaders })
    .then(r => {
      if (!r.ok) throw new Error(`${r.status}: ${url}`);
      return r.json() as Promise<T>;
    });

const getRecord = <T,>(url: string) =>
  fetchJSON<{ record: T }>(url).then(r => r.record);

/* -------------------- Username / Colour utils -------------------- */

function getLatestUserResult(): CachedResult | null {
  const keys = Object.keys(localStorage).filter(k => {
    try {
      const v = JSON.parse(localStorage.getItem(k) || '{}');
      return v.mbtiType && v.primary4FType;
    } catch { return false; }
  }).sort();
  if (!keys.length) return null;
  return JSON.parse(localStorage.getItem(keys.at(-1)!)!);
}

function buildUserName(res?: CachedResult): string {
  if (!res) return `user-${guid().slice(0, 5)}`;
  const suffix = findClosestComplement(res.mbtiType, res.profile)
                  ? `-${findClosestComplement(res.mbtiType, res.profile)!.type.slice(1,3)}`
                  : '';
  const pct = Math.round(res.accuracy ?? 0);
  return `${res.mbtiType}${suffix} (${pct}%)`;
}

function hashHue(seed: string, start: number, span: number) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++)
    hash = (hash << 5) - hash + seed.charCodeAt(i);
  return start + (Math.abs(hash) % span);
}
function colorFor(mode: FourF, seed: string): string {
  switch (mode) {
    case 'Fight':  return `hsl(${hashHue(seed, 0, 12)} 70% 50%)`;
    case 'Flight': return `hsl(${hashHue(seed, 110, 30)} 70% 50%)`;
    case 'Freeze': return `hsl(${hashHue(seed, 200, 20)} 70% 50%)`;
    case 'Fawn':   return `hsl(${hashHue(seed, 270, 30)} 70% 50%)`;
    default:       return `hsl(${hashHue(seed, 0, 360)} 70% 50%)`;
  }
}

/* -------------------------- Component ---------------------------- */

export default function ChatContent() {
  /* Identity (static) */
  const userId   = useRef(guid());
  const cacheRes = useMemo(() => getLatestUserResult(), []);
  const userName = buildUserName(cacheRes || undefined);
  const userMode: FourF = cacheRes?.primary4FType ?? 'Fight';
  const userColor = colorFor(userMode, userId.current);

  /* Responsive path */
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'), { noSsr: true });

  /* UI state */
  const [draft, setDraft] = useState('');
  const [replyTo, setReplyTo] = useState<Message | null>(null);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const queryClient = useQueryClient();

  /* -------- Meta-bin query (tags + currentBinId) -------- */
  const metaQ = useQuery({
    queryKey: ['meta'],
    queryFn: () => getRecord<MetaBin>(`${JSONBIN_BASE}/b/${META_BIN}/latest`),
    refetchInterval: REFRESH_MS
  });

  /* -------- Current bin messages query -------- */
  const currentBinId = metaQ.data?.currentBinId;

  const messagesQ = useQuery({
    enabled: !!currentBinId,
    queryKey: ['bin', currentBinId],
    queryFn: () => getRecord<ChatBin>(`${JSONBIN_BASE}/b/${currentBinId}/latest`)
                 .then(b => b.messages),
    refetchInterval: REFRESH_MS,
    select: msgs => msgs.sort((a,b)=>new Date(a.timestamp).valueOf()-new Date(b.timestamp).valueOf())
  });

  /* Derived */
  const tags = metaQ.data?.tags ?? [];
  const messages = messagesQ.data ?? [];
  const loading  = metaQ.isPending || messagesQ.isPending;

  /* -------- Send mutation -------- */
  const sendMutation = useMutation({
    mutationFn: async (msg: Message) => {
      const meta = await getRecord<MetaBin>(`${JSONBIN_BASE}/b/${META_BIN}/latest`);
      let bin = await getRecord<ChatBin>(`${JSONBIN_BASE}/b/${meta.currentBinId}/latest`);

      /* rollover? */
      if (bin.messages.length >= MAX_PER_BIN) {
        const newBinRes = await fetchJSON<{ metadata:{ id:string } }>(
          `${JSONBIN_BASE}/b`, {
            method: 'POST',
            body: JSON.stringify({ messages:[msg], prev: meta.currentBinId }),
            headers: baseHeaders
          });
        const newBinId = newBinRes.metadata.id;

        /* update meta-bin */
        await fetchJSON(`${JSONBIN_BASE}/b/${META_BIN}`, {
          method: 'PUT',
          body: JSON.stringify({ ...meta, currentBinId: newBinId }),
          headers: baseHeaders
        });
        return { newBinId, msg };
      } else {
        /* append in place */
        bin.messages.push(msg);
        await fetchJSON(`${JSONBIN_BASE}/b/${meta.currentBinId}`, {
          method: 'PUT',
          body: JSON.stringify(bin),
          headers: baseHeaders
        });
        return { newBinId: null, msg };
      }
    },
    onMutate: async (msg) => {
      /* optimistic update cache */
      await queryClient.cancelQueries({ queryKey:['bin', currentBinId]});
      const prev = queryClient.getQueryData<Message[]>(['bin', currentBinId]);
      queryClient.setQueryData<Message[]>(['bin', currentBinId], old => [...(old||[]), msg]);
      return { prev };
    },
    onError: (_err, _msg, ctx) => {
      if (ctx?.prev) queryClient.setQueryData(['bin', currentBinId], ctx.prev);
    },
    onSuccess: ({ newBinId }) => {
      /* invalidate queries so everyone refetches */
      queryClient.invalidateQueries({ queryKey:['meta']});
      if (newBinId) queryClient.invalidateQueries({ queryKey:['bin', newBinId]});
    }
  });

  /* -------- Helpers -------- */
  const toggleTag = (t:Tag) =>
    setSelectedTags(p=>p.includes(t)?p.filter(x=>x!==t):[...p,t]);

  const extractTag = (t:string):Tag => (t.match(/#\w+/)?.[0] as Tag)??null;
  const stripTag   = (t:string,tag:Tag)=>tag?t.replace(tag,'').trim():t.trim();

  const handleSend = useCallback(() => {
    if (!draft.trim()) return;

    /* ----- tag resolution ----- */
    let tag:Tag = null;
    let txt = draft;
    if (replyTo?.tag) tag = replyTo.tag;
    else if (selectedTags.length===1) tag = selectedTags[0];
    else if (selectedTags.length>1) {
      const inl = extractTag(txt);
      if (!inl || !selectedTags.includes(inl)) return;
      tag=inl; txt=stripTag(txt, tag);
    } else {
      const inl = extractTag(txt);
      if (inl){ tag=inl; txt=stripTag(txt,tag);}
    }

    const msg:Message = {
      id: guid(),
      userId: userId.current,
      userName,
      color: userColor,
      text: txt,
      tag,
      timestamp: new Date().toISOString(),
      parent: replyTo ?? undefined,
    };

    setDraft('');
    setReplyTo(null);
    sendMutation.mutate(msg);
  }, [draft, replyTo, selectedTags, userName, userColor]);

  /* -------- Shared parts of UI -------- */
  const TagSelector = (
    <Box sx={{ mb: 1, display:'flex', flexWrap:'wrap', gap: isMobile?0.5:1,
               justifyContent: isMobile?'center':'start' }}>
      {tags.map(tag=>(
        <Chip key={tag} label={tag} size="small"
          color={selectedTags.includes(tag)?'primary':'default'}
          onClick={()=>toggleTag(tag)}/>
      ))}
    </Box>
  );

  const MessageList = (
    <Box sx={{
      flexGrow:1, overflowY:'auto', border:'1px solid', borderColor:'divider',
      borderRadius:1, p:1, display:'flex', flexDirection:'column-reverse'
    }}>
      <List sx={{display:'flex', flexDirection:'column-reverse'}}>
        {messages
          .filter(m => !selectedTags.length || selectedTags.includes(m.tag))
          .map(m=>(
            <ListItem key={m.id} sx={{display:'block', py:isMobile?0.25:0.5}}
              onClick={()=>setReplyTo(m)}>
              {m.parent && (
                <Box sx={{bgcolor:'action.hover',p:0.5,mb:0.5,borderRadius:1}}>
                  <Typography variant="caption" sx={{fontStyle:'italic', fontSize:isMobile?'0.65rem':undefined}}>
                    {m.parent.text}
                  </Typography>
                </Box>
              )}
              <Typography variant="subtitle2" sx={{
                color:m.color, fontWeight:700, fontSize:isMobile?'0.75rem':undefined
              }}>{m.userName}</Typography>
              <Typography variant="body2" sx={{fontSize:isMobile?'0.8rem':undefined}}>
                {m.text}
              </Typography>
              {m.tag && <Chip label={m.tag} size="small" sx={{mt:0.5}} variant="outlined"/>}
              <Typography variant="caption" sx={{
                fontSize:isMobile?'0.55rem':'0.625rem', opacity:0.6
              }}>
                {new Date(m.timestamp).toLocaleString('en-GB',{
                  year:'2-digit',month:'2-digit',day:'2-digit',
                  hour:'2-digit',minute:'2-digit',hour12:false
                }).replace(',','').replace(/\//g,'-').replace(' ','-')}
              </Typography>
            </ListItem>
          ))}
      </List>
      {(loading||sendMutation.isPending) && (
        <Box sx={{display:'flex',justifyContent:'center',py:1}}>
          <CircularProgress size={20}/>
        </Box>
      )}
    </Box>
  );

  const ReplyBanner = replyTo && (
    <Box sx={{
      mt:1, mb:0.5, p:0.5, borderLeft:'4px solid', borderColor:'primary.main',
      bgcolor:'action.hover', borderRadius:1
    }}>
      <Typography variant="caption" sx={{fontSize:isMobile?'0.7rem':undefined}}>
        Replying to: {replyTo.text}{' '}
        <Box component="span"
          sx={{ml:1,cursor:'pointer',textDecoration:'underline'}}
          onClick={()=>setReplyTo(null)}
        >cancel</Box>
      </Typography>
    </Box>
  );

  const Composer = (
    <Box sx={{mt:1, display:'flex', flexDirection:isMobile?'column':'row', gap:1}}>
      <TextField fullWidth size="small" placeholder="Type your message…"
        value={draft} onChange={e=>setDraft(e.target.value)}
        onKeyDown={e=>{ if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();handleSend();}}}/>
      <IconButton onClick={handleSend} color="primary"
        sx={{alignSelf:isMobile?'flex-end':'center'}}>
        <SendIcon/>
      </IconButton>
    </Box>
  );

  /* -------- Render -------- */
  return isMobile ? (
    <Box sx={{p:1, display:'flex', flexDirection:'column', height:'100vh'}}>
      {TagSelector}
      {MessageList}
      {ReplyBanner}
      {Composer}
    </Box>
  ) : (
    <Box sx={{height:'100%', display:'flex', flexDirection:'column'}}>
      {TagSelector}
      {MessageList}
      {ReplyBanner}
      {Composer}
    </Box>
  );
}
