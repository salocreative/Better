/* Show our thinking: our design notes, for the Concept review only (never part of the website build).
   The review page's "Show our thinking" button sends {cr:1,type:'thinking',on}. Notes come from notes.js (window.CR_NOTES):
   { sel: 'CSS selector', title: 'Short title', why: 'One or two sentences' }. Each note is labelled "Our design input".
   Dots sit on the top-right corner of each element. Hover or focus opens a note beside its dot; tap on a phone opens it in a panel
   at the foot of the screen. "Show all notes" opens every note beside its own dot. Esc closes. */
(()=>{
if(window.parent===window)return;
const NOTES=(window.CR_NOTES||[]).filter(n=>n&&n.sel);if(!NOTES.length)return;
const de=document.documentElement;let on=false,all=false,layer=null,dim=null,allBtn=null,panel=null,dots=[],raf=0,ro=null,tm=0,openOne=null;
const narrow=()=>innerWidth<700;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'})[c]);
const body=n=>'<span class="crt-b"><i>Our design input</i></span><b class="crt-t">'+esc(n.title)+'</b><span class="crt-w">'+esc(n.why)+'</span>';
function build(){
  dim=document.createElement('div');dim.className='crt-dim';dim.setAttribute('aria-hidden','true');
  layer=document.createElement('div');layer.className='crt-layer';
  NOTES.forEach((n,i)=>{const d=document.createElement('button');d.type='button';d.className='crt-dot';d.textContent=i+1;d.setAttribute('aria-expanded','false');d.setAttribute('aria-label','Note '+(i+1)+': '+n.title);
    const c=document.createElement('div');c.className='crt-card';c.id='crt-'+i;c.setAttribute('role','note');c.hidden=true;c.innerHTML='<span class="crt-n">'+(i+1)+'</span>'+body(n);d.setAttribute('aria-controls',c.id);
    const o={n,d,c,i};dots.push(o);layer.append(d,c);
    d.addEventListener('mouseenter',()=>{if(!narrow())show(o,true)});d.addEventListener('mouseleave',()=>{if(!narrow()&&!all&&openOne!==o)show(o,false)});
    c.addEventListener('mouseleave',()=>{if(!narrow()&&!all&&openOne!==o)show(o,false)});
    d.addEventListener('focus',()=>{if(!narrow())show(o,true)});d.addEventListener('blur',()=>{if(!narrow()&&!all&&openOne!==o)setTimeout(()=>{if(!c.contains(document.activeElement)&&openOne!==o&&!all)show(o,false)},0)});
    d.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();if(narrow()){openPanel(o);return}openOne=openOne===o?null:o;dots.forEach(x=>show(x,all||x===openOne||x===o&&openOne===o))})});
  allBtn=document.createElement('button');allBtn.type='button';allBtn.className='crt-all';allBtn.textContent='Show all notes';allBtn.setAttribute('aria-pressed','false');
  allBtn.addEventListener('click',()=>{all=!all;allBtn.setAttribute('aria-pressed',all);allBtn.textContent=all?'Hide all notes':'Show all notes';openOne=null;dots.forEach(o=>show(o,all));place()});
  panel=document.createElement('div');panel.className='crt-panel';panel.hidden=true;panel.setAttribute('role','dialog');panel.setAttribute('aria-label','Note');
  panel.innerHTML='<div class="crt-pc"></div><button type="button" class="crt-x">Close</button>';panel.querySelector('.crt-x').addEventListener('click',closePanel);
  document.body.append(dim,layer,allBtn,panel)}
function show(o,v){o.c.hidden=!v;o.d.setAttribute('aria-expanded',v);o.d.classList.toggle('open',v);if(v)placeCard(o)}
function openPanel(o){panel.querySelector('.crt-pc').innerHTML='<span class="crt-n">'+(o.i+1)+'</span>'+body(o.n);panel.hidden=false;panel.dataset.i=o.i;panel.querySelector('.crt-x').focus()}
function closePanel(){if(panel.hidden)return;const i=+panel.dataset.i;panel.hidden=true;if(dots[i])dots[i].d.focus()}
function target(sel){const el=document.querySelector(sel);if(!el)return null;const r=el.getBoundingClientRect();if(!r.width||!r.height)return null;
  const s=getComputedStyle(el);if(s.visibility==='hidden'||s.display==='none')return null;return r}
function placeCard(o){if(o.d.hidden)return;const W=document.documentElement.clientWidth;const dx=parseFloat(o.d.style.left),dy=parseFloat(o.d.style.top);const cw=Math.min(320,W-24);
  const cw2=all?Math.min(260,W-24):cw;let x=dx+34;if(x+cw2>W+scrollX-12)x=dx-cw2-10;if(x<scrollX+12)x=scrollX+12;o.c.style.left=x+'px';o.c.style.top=(dy-4)+'px';o.c.style.width=cw2+'px'}
function place(){raf=0;if(!on)return;dots.forEach(o=>{const r=target(o.n.sel);if(!r){o.d.hidden=true;o.c.hidden=true;return}o.d.hidden=false;
  let x=r.right+scrollX-14,y=r.top+scrollY-10;x=Math.min(x,scrollX+document.documentElement.clientWidth-34);x=Math.max(x,scrollX+6);y=Math.max(y,scrollY+6);
  o.d.style.left=x+'px';o.d.style.top=y+'px';if(!o.c.hidden)placeCard(o)});allBtn.hidden=narrow();if(all)unstack()}
/* Show all: cards that would cover each other move down, staying beside their own dot */
function unstack(){const vis=dots.filter(o=>!o.c.hidden&&!o.d.hidden).map(o=>({o,x:parseFloat(o.c.style.left),y:parseFloat(o.c.style.top),w:o.c.offsetWidth,h:o.c.offsetHeight})).sort((a,b)=>a.y-b.y);
  const done=[];vis.forEach(r=>{let moved=true,guard=0;while(moved&&guard++<40){moved=false;for(const q of done){if(r.x<q.x+q.w+6&&r.x+r.w+6>q.x&&r.y<q.y+q.h+6&&r.y+r.h+6>q.y){r.y=q.y+q.h+8;moved=true}}}
    r.o.c.style.top=r.y+'px';done.push(r)})}
const queue=()=>{if(!raf)raf=requestAnimationFrame(place)};
function set(v){if(v===on)return;on=v;if(v&&!layer)build();de.classList.toggle('cr-thinking',v);
  if(v){place();addEventListener('scroll',queue,{passive:true});addEventListener('resize',queue);ro=new ResizeObserver(queue);ro.observe(document.body);tm=setInterval(queue,800)}
  else{removeEventListener('scroll',queue);removeEventListener('resize',queue);if(ro)ro.disconnect();clearInterval(tm);all=false;openOne=null;if(allBtn){allBtn.setAttribute('aria-pressed','false');allBtn.textContent='Show all notes'}dots.forEach(o=>show(o,false));if(panel)panel.hidden=true}}
addEventListener('message',e=>{if(e.source!==window.parent||!e.data||!e.data.cr)return;if(e.data.type==='thinking')set(!!e.data.on)});
addEventListener('keydown',e=>{if(!on||e.key!=='Escape')return;if(panel&&!panel.hidden){closePanel();return}if(all){allBtn.click();return}const o=openOne||dots.find(x=>!x.c.hidden);openOne=null;dots.forEach(x=>show(x,false));if(o)o.d.focus()});
document.addEventListener('click',e=>{if(!on||all||!openOne)return;if(e.target.closest('.crt-card,.crt-dot'))return;const o=openOne;openOne=null;show(o,false)});
})();
