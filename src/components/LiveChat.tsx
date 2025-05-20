/* ------------------------------------------------------------------ */
/* ChatContent.tsx — Production build • 500 ms live refresh            */
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

const MAX_PER_BIN      = 25;
const POLL_INTERVAL_MS = 500;                     // 0.5 s refresh

/* ----------------------------- TYPES ------------------------------ */
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
interface Cache {
  mbtiType?: string;
  suffix?: string;
  primary4FType?: FourF;
  accuracy?: number;
  profile?: Record<string, number>;
}

/* --------------------- JSONBIN CLIENT ---------------------------- */
const headers = {
  'Content-Type': 'application/json',
  'X-Master-Key': MASTER_KEY,
  ...(COLLECTION ? { 'X-Collection-Id': COLLECTION } : {})
};
function jsonBin(signal: AbortSignal) {
  const retry = async <T,>(
    fn: () => Promise<T>,
    attempt = 0
  ): Promise<T> => {
    try { return await fn(); }
    catch (e: any) {
      if (e.name === 'AbortError') throw e;
      if (attempt < 2 && e.message.includes('50'))     // crude 5xx guard
        return retry(fn, attempt + 1);
      throw e;
    }
  };

  const get = <T,>(path: string) =>
    retry<T>(() => fetch(`${JSONBIN_BASE}${path}`, { headers, signal })
      .then(r => { if (!r.ok) throw new Error(String(r.status)); return r.json(); })
      .then(j => j.record as T));

  const put = <T,>(path: string, body: T) =>
    retry<void>(() => fetch(`${JSONBIN_BASE}${path}`, {
      method:'PUT', headers, body:JSON.stringify(body), signal
    }).then(r => { if(!r.ok) throw new Error(String(r.status)); }));

  const post = <T,>(body: T) =>
    retry<string>(() => fetch(`${JSONBIN_BASE}/b`, {
      method:'POST', headers, body:JSON.stringify(body), signal
    }).then(r => { if(!r.ok) throw new Error(String(r.status)); return r.json(); })
      .then(j => j.metadata.id as string));

  return { get, put, post };
}

/* ------------------ USERNAME & COLOR HELPERS --------------------- */
function latestCache(): Cache | null {
  const key = Object.keys(localStorage)
    .filter(k => {
      try { const v = JSON.parse(localStorage.getItem(k) || '{}') as Cache;
        return v.mbtiType && v.primary4FType; } catch { return false; }
    })
    .sort()
    .at(-1);
  return key ? JSON.parse(localStorage.getItem(key)!) as Cache : null;
}
function buildUserName() {
  const c = latestCache();
  if (!c) return `user-${guid().slice(0,5)}`;
  const suf = c.profile ? `-${findClosestComplement(c.mbtiType!, c.profile).type.slice(1,3)}` : '';
  const pct = Math.round(c.accuracy ?? 0);
  return `${c.mbtiType}${suf} (${pct}%)`;
}
function hue(seed: string, base: number, span: number) {
  let h=0; for(const ch of seed) h=(h<<5)-h+ch.charCodeAt(0);
  return base+(Math.abs(h)%span);
}
function modeColor(mode: FourF, seed: string){
  switch(mode){
    case'Fight':  return`hsl(${hue(seed,0,12)} 70% 50%)`;
    case'Flight': return`hsl(${hue(seed,110,30)} 70% 50%)`;
    case'Freeze': return`hsl(${hue(seed,200,20)} 70% 50%)`;
    case'Fawn':   return`hsl(${hue(seed,270,30)} 70% 50%)`;
    default:      return`hsl(${hue(seed,0,360)} 70% 50%)`;
  }
}

/* --------------------------- COMPONENT --------------------------- */
export default function ChatContent() {
  const theme  = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'), { noSsr:true });

  /* identity */
  const uid    = useRef(guid());
  const uname  = buildUserName();
  const ucolor = modeColor('Fight', uid.current);

  /* refs */
  const chain  = useRef<string[]>([]);
  const seen   = useRef<Set<string>>(new Set());
  const poller = useRef<ReturnType<typeof setInterval> | null>(null);
  const topRef = useRef<HTMLDivElement>(null);

  /* state */
  const [tags,setTags]   = useState<Tag[]>([]);
  const [sel,setSel]     = useState<Tag[]>([]);
  const [text,setText]   = useState('');
  const [reply,setReply] = useState<Message|null>(null);
  const [msgs,setMsgs]   = useState<Message[]>([]);
  const [busy,setBusy]   = useState(false);
  const [err,setErr]     = useState<string|null>(null);
  const [more,setMore]   = useState(true);

  const strip = (t:string,tag:Tag)=>tag?t.replace(tag,'').trim():t.trim();
  const tagOf = (t:string):Tag=>(t.match(/#\w+/)?.[0] as Tag)||null;

  /* -------- BOOTSTRAP -------- */
  useEffect(()=>{
    const ctrl = new AbortController();
    const api  = jsonBin(ctrl.signal);
    (async()=>{
      try{
        setBusy(true);
        let meta = await api.get<MetaBin>(`/b/${META_BIN}/latest`);
        if(!meta.tags?.length){
          meta.tags=['#Fight','#Flight','#Freeze','#Fawn','#Ego','#Superego'];
          await api.put(`/b/${META_BIN}`,meta);
        }
        setTags(meta.tags);
        const bin=await api.get<ChatBin>(`/b/${meta.currentBinId}/latest`);
        bin.messages.forEach(m=>seen.current.add(m.id));
        chain.current=[meta.currentBinId];
        setMsgs(bin.messages.slice()); setMore(Boolean(bin.prev));

        poller.current=setInterval(()=>livePoll(),POLL_INTERVAL_MS);
      }catch(e:any){ if(e.name!=='AbortError')setErr(e.message);}finally{setBusy(false);setTimeout(()=> setErr(""), 5000)}
    })();
    return()=>{ if(poller.current)clearInterval(poller.current); ctrl.abort(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  /* -------- POLLER -------- */
  const livePoll = async () =>{
    const api=jsonBin(new AbortController().signal);
    try{
      const meta=await api.get<MetaBin>(`/b/${META_BIN}/latest`);
      const cur =meta.currentBinId;
      // rollover
      if(!chain.current.includes(cur)){
        const b=await api.get<ChatBin>(`/b/${cur}/latest`);
        pushFresh(b.messages);
        chain.current.push(cur);
      }
      // head check
      const head=await fetch(`${JSONBIN_BASE}/b/${cur}/latest`,{method:'HEAD',headers});
      const size=Number(head.headers.get('Content-Length')||'0');
      if(size){
        const bin=await api.get<ChatBin>(`/b/${cur}/latest`);
        pushFresh(bin.messages);
      }
    }catch{/*ignore*/}
  };
  const pushFresh=(arr:Message[])=>{
    const fresh=arr.filter(m=>!seen.current.has(m.id));
    if(!fresh.length) return;
    fresh.forEach(m=>seen.current.add(m.id));
    setMsgs(p=>[...p,...fresh]); // newest last
  };

  /* -------- INFINITE SCROLL -------- */
  useEffect(()=>{
    if(!topRef.current||!more) return;
    const ctrl=new AbortController(), api=jsonBin(ctrl.signal);
    const io=new IntersectionObserver(async e=>{
      if(!e[0].isIntersecting || !chain.current.length) return;
      try{
        setBusy(true);
        const oldest=chain.current[0];
        const bin=await api.get<ChatBin>(`/b/${oldest}/latest`);
        if(!bin.prev){setMore(false);return;}
        const prev=await api.get<ChatBin>(`/b/${bin.prev}/latest`);
        const fresh=prev.messages.filter(m=>!seen.current.has(m.id));
        fresh.forEach(m=>seen.current.add(m.id));
        chain.current.unshift(bin.prev);
        setMsgs(p=>[...fresh,...p]);
      }catch(e:any){ if(e.name!=='AbortError')setErr(e.message);}finally{setBusy(false);setTimeout(()=> setErr(""), 5000)}
    },{threshold:0});
    io.observe(topRef.current);
    return()=>{io.disconnect();ctrl.abort();};
  },[more]);

  /* -------- SEND -------- */
  const send=useCallback(async()=>{
    if(!text.trim())return;
    let tag:Tag=null, body=text;
    if(reply?.tag) tag=reply.tag;
    else if(sel.length===1) tag=sel[0];
    else if(sel.length>1){
      const inl=tagOf(body);
      if(!inl||!sel.includes(inl)){setErr(`Choose one tag`);setTimeout(()=> setErr(""), 5000);return;}
      tag=inl; body=strip(body,tag);
    }else{
      const inl=tagOf(body);
      if(inl){tag=inl; body=strip(body,tag);}
    }
    const msg:Message={
      id:guid(), userId:uid.current, userName:uname, color:ucolor,
      text:body, tag, timestamp:new Date().toISOString(), parent:reply??undefined
    };
    setMsgs(p=>[...p,msg]); seen.current.add(msg.id);
    setText(''); setReply(null);

    const api=jsonBin(new AbortController().signal);
    try{
      let meta=await api.get<MetaBin>(`/b/${META_BIN}/latest`);
      let bin =await api.get<ChatBin>(`/b/${meta.currentBinId}/latest`);
      if(bin.messages.length>=MAX_PER_BIN){
        const newId=await api.post<ChatBin>({messages:[msg],prev:meta.currentBinId});
        await api.put(`/b/${META_BIN}`,{...meta,currentBinId:newId});
        chain.current.push(newId);
      }else{
        bin.messages.push(msg);
        await api.put(`/b/${meta.currentBinId}`,bin);
      }
    }catch(e:any){ if(e.name!=='AbortError')setErr(e.message);setTimeout(()=> setErr(""), 5000)}
  },[text,sel,reply,uname,ucolor]);

  /* -------- UI helpers -------- */
  const TagBar=(
    <Box sx={{mb:1,display:'flex',flexWrap:'wrap',gap:mobile?0.5:1,justifyContent:mobile?'center':'flex-start'}}>
      {tags.map(t=>(
        <Chip key={t} label={t} size="small"
          color={sel.includes(t)?'primary':'default'}
          onClick={()=>setSel(p=>p.includes(t)?p.filter(x=>x!==t):[...p,t])}/>
      ))}
    </Box>
  );

  const MsgList=(
    <Box sx={{
      flexGrow:1, overflowY:'auto', border:'1px solid', borderColor:'divider',
      borderRadius:1, p:1, display:'flex', flexDirection:'column-reverse'
    }}>
      <div ref={topRef}/>
      <List sx={{display:'flex',flexDirection:'column-reverse'}}>
        {msgs.filter(m=>!sel.length||sel.includes(m.tag)).sort((msgA, msgB) => new Date(msgB.timestamp).valueOf() - new Date(msgA.timestamp).valueOf() ).map(m=>(
          <ListItem key={m.id} sx={{display:'block',py:mobile?0.25:0.5}} onClick={()=>setReply(m)}>
            {m.parent&&(
              <Box sx={{bgcolor:'action.hover',p:0.5,mb:0.5,borderRadius:1}}>
                <Typography variant="caption" sx={{fontSize:mobile?'0.65rem':'0.75rem',fontStyle:'italic'}}>
                  {m.parent.text}
                </Typography>
              </Box>
            )}
            <Typography variant="subtitle2" sx={{color:m.color,fontWeight:700,fontSize:mobile?'0.75rem':'0.875rem'}}>
              {m.userName}
            </Typography>
            <Typography variant="body2" sx={{fontSize:mobile?'0.8rem':'0.875rem'}}>{m.text}</Typography>
            {m.tag&&<Chip label={m.tag} size="small" sx={{mt:0.5}} variant="outlined"/>}
            <Typography variant="caption" sx={{fontSize:mobile?'0.55rem':'0.625rem',opacity:0.6}}>
              {new Date(m.timestamp).toLocaleString('en-GB',{year:'2-digit',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hour12:false}).replace(',','').replace(/\//g,'-').replace(' ','-')}
            </Typography>
          </ListItem>
        ))}
      </List>
      {busy&&<Box sx={{display:'flex',justifyContent:'center',py:1}}><CircularProgress size={20}/></Box>}
    </Box>
  );

  const ReplyBar=reply&&(
    <Box sx={{mt:1,mb:0.5,p:0.5,borderLeft:'4px solid',borderColor:'primary.main',bgcolor:'action.hover',borderRadius:1}}>
      <Typography variant="caption" sx={{fontSize:mobile?'0.7rem':'0.75rem'}}>
        Replying to: {reply.text}{' '}
        <Box component="span" sx={{ml:1,cursor:'pointer',textDecoration:'underline'}} onClick={()=>setReply(null)}>cancel</Box>
      </Typography>
    </Box>
  );

  const Compose=(
    <Box sx={{mt:1,display:'flex',gap:1,flexDirection:mobile?'column':'row'}}>
      <TextField fullWidth size="small" placeholder="Type your message…"
        value={text} onChange={e=>setText(e.target.value)}
        onKeyDown={e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();send();}}}/>
      <IconButton onClick={send} color="primary" sx={{alignSelf:mobile?'flex-end':'center'}}>
        <SendIcon/>
      </IconButton>
    </Box>
  );

  return(
    <Box sx={{p:mobile?1:2,display:'flex',flexDirection:'column',height:'100%',boxSizing:'border-box'}}>
      {TagBar}
      {err&&<Typography color="error" align="center" sx={{mb:1,fontSize:mobile?'0.75rem':'0.875rem'}}>{err}</Typography>}
      {MsgList}
      {ReplyBar}
      {Compose}
    </Box>
  );
}
