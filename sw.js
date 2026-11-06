/* Language Drills service worker.
   When you upload changed files, raise VERSION (v1 -> v2 ...) so installed copies update. */
const VERSION='v11';
const CORE='core-'+VERSION, AUDIO='audio-v1';
const CORE_FILES=["index.html", "manifest.webmanifest", "listening-data.json", "icons/icon-192.png", "icons/icon-512.png", "icons/maskable-512.png", "listening-lex.json", "drills/by.js", "drills/cu.js"];
const AUDIO_FILES=[
"audio-1/001.webm",
"audio-1/002.webm",
"audio-1/003.webm",
"audio-1/004.webm",
"audio-1/005.webm",
"audio-1/006.webm",
"audio-1/007.webm",
"audio-1/008.webm",
"audio-1/009.webm",
"audio-1/010.webm",
"audio-1/011.webm",
"audio-1/012.webm",
"audio-1/013.webm",
"audio-1/014.webm",
"audio-1/015.webm",
"audio-1/016.webm",
"audio-1/017.webm",
"audio-1/018.webm",
"audio-1/019.webm",
"audio-1/020.webm",
"audio-1/021.webm",
"audio-1/022.webm",
"audio-1/023.webm",
"audio-1/024.webm",
"audio-1/025.webm",
"audio-1/026.webm",
"audio-1/027.webm",
"audio-1/028.webm",
"audio-1/029.webm",
"audio-1/030.webm",
"audio-1/031.webm",
"audio-1/032.webm",
"audio-1/033.webm",
"audio-1/034.webm",
"audio-1/035.webm",
"audio-1/036.webm",
"audio-1/037.webm",
"audio-1/038.webm",
"audio-1/039.webm",
"audio-1/040.webm",
"audio-1/041.webm",
"audio-1/042.webm",
"audio-1/043.webm",
"audio-1/044.webm",
"audio-1/045.webm",
"audio-1/046.webm",
"audio-1/047.webm",
"audio-1/048.webm",
"audio-1/049.webm",
"audio-1/050.webm",
"audio-1/051.webm",
"audio-1/052.webm",
"audio-1/053.webm",
"audio-1/054.webm",
"audio-1/055.webm",
"audio-1/056.webm",
"audio-1/057.webm",
"audio-1/058.webm",
"audio-1/059.webm",
"audio-1/060.webm",
"audio-1/061.webm",
"audio-1/062.webm",
"audio-1/063.webm",
"audio-1/064.webm",
"audio-1/065.webm",
"audio-1/066.webm",
"audio-1/067.webm",
"audio-1/068.webm",
"audio-2/069.webm",
"audio-2/070.webm",
"audio-2/071.webm",
"audio-2/072.webm",
"audio-2/073.webm",
"audio-2/074.webm",
"audio-2/075.webm",
"audio-2/076.webm",
"audio-2/077.webm",
"audio-2/078.webm",
"audio-2/079.webm",
"audio-2/080.webm",
"audio-2/081.webm",
"audio-2/082.webm",
"audio-2/083.webm",
"audio-2/084.webm",
"audio-2/085.webm",
"audio-2/086.webm",
"audio-2/087.webm",
"audio-2/088.webm",
"audio-2/089.webm",
"audio-2/090.webm",
"audio-2/091.webm",
"audio-2/092.webm",
"audio-2/093.webm",
"audio-2/094.webm",
"audio-2/095.webm",
"audio-2/096.webm",
"audio-2/097.webm",
"audio-2/098.webm",
"audio-2/099.webm",
"audio-2/100.webm",
"audio-2/101.webm",
"audio-2/102.webm",
"audio-2/103.webm",
"audio-2/104.webm",
"audio-2/105.webm",
"audio-2/106.webm",
"audio-2/107.webm",
"audio-2/108.webm",
"audio-2/109.webm",
"audio-2/110.webm",
"audio-2/111.webm",
"audio-2/112.webm",
"audio-2/113.webm",
"audio-2/114.webm",
"audio-2/115.webm",
"audio-2/116.webm",
"audio-2/117.webm",
"audio-2/118.webm",
"audio-2/119.webm",
"audio-2/120.webm",
"audio-2/121.webm",
"audio-2/122.webm",
"audio-2/123.webm",
"audio-2/124.webm",
"audio-2/125.webm",
"audio-2/126.webm",
"audio-2/127.webm",
"audio-2/128.webm",
"audio-2/129.webm",
"audio-2/130.webm",
"audio-2/131.webm",
"audio-2/132.webm",
"audio-2/133.webm",
"audio-2/134.webm",
"audio-2/135.webm",
"audio-2/136.webm"
];

self.addEventListener('install',e=>{e.waitUntil(caches.open(CORE).then(c=>c.addAll(CORE_FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil((async()=>{
  for(const k of await caches.keys())if(k!==CORE&&k!==AUDIO)await caches.delete(k);
  await self.clients.claim();
  fillAudio();                       /* download all audio in the background for offline use */
})())});

let filling=false;
async function fillAudio(){if(filling)return;filling=true;
  try{const c=await caches.open(AUDIO);
    for(const f of AUDIO_FILES){const url=new URL(f,self.registration.scope).href;
      if(await c.match(url))continue;
      try{const r=await fetch(url,{cache:'no-cache'});if(r.ok)await c.put(url,r)}catch(e){break}}
  }finally{filling=false}}
self.addEventListener('message',e=>{if(e.data==='fill-audio')fillAudio()});

/* the audio player asks for byte ranges (to jump to a line): answer them from the saved file */
async function rangeFrom(resp,range){const buf=await resp.arrayBuffer(),size=buf.byteLength;
  const m=/bytes=(\d*)-(\d*)/.exec(range||'');let s=m&&m[1]?+m[1]:0,end=m&&m[2]?+m[2]:size-1;if(end>=size)end=size-1;
  return new Response(buf.slice(s,end+1),{status:206,statusText:'Partial Content',headers:{'Content-Type':resp.headers.get('Content-Type')||'audio/webm','Content-Range':`bytes ${s}-${end}/${size}`,'Content-Length':String(end-s+1),'Accept-Ranges':'bytes'}})}

self.addEventListener('fetch',e=>{const req=e.request;if(req.method!=='GET')return;
  const url=new URL(req.url);if(url.origin!==location.origin)return;
  if(/\/audio-[12]\/\d{3}\.webm$/.test(url.pathname)){e.respondWith((async()=>{
    const key=url.origin+url.pathname,c=await caches.open(AUDIO);let r=await c.match(key);
    if(!r){try{const full=await fetch(key);if(full.ok){await c.put(key,full.clone());r=full}else return full}catch(x){return new Response('',{status:504})}}
    return req.headers.get('range')?rangeFrom(r,req.headers.get('range')):r})());return}
  e.respondWith((async()=>{const hit=await caches.match(req,{ignoreSearch:true});if(hit)return hit;
    try{const r=await fetch(req);if(r.ok&&!req.url.includes('sw.js')){const c=await caches.open(CORE);c.put(req,r.clone())}return r}
    catch(x){if(req.mode==='navigate')return caches.match('index.html');return new Response('',{status:504})}})());
});
