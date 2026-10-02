/* ===== EDIT YOUR BUSINESS DETAILS HERE ===== */
const SITE={
  phone:"0758 630928", wa:"254758630928",
  formEndpoint:"", // paste a Formspree/other URL to send form data there; leave empty to send via WhatsApp
  mapsDirections:"https://www.google.com/maps/place/MONMON+EMPIRE+PRINTERS/data=!4m2!3m1!1s0x0:0xb1a16b4e57a1b030",
  social:[] // e.g. [{name:"Facebook",url:"https://..."}] - only add pages that really exist
};
const IMAGES={
  hero:"https://images.unsplash.com/photo-1563050860-87d45eaaeabb?auto=format&fit=crop&w=1200&q=80",
  showcase:"https://images.unsplash.com/photo-1516409590654-e8d51fc2d25c?auto=format&fit=crop&w=1600&q=80"
};
const SERVICES=[
 {t:"Graphic Design",img:"https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=800&q=80",d:"Artwork prepared properly for print.",i:["Logo Design","Business Cards","Posters","Flyers","Brochures","Invitations","Social Media Designs","Certificates","Menus","Custom Artwork"]},
 {t:"Printing",img:"https://images.unsplash.com/photo-1456456496250-d5e7c0a9b44d?auto=format&fit=crop&w=800&q=80",d:"Clean digital and large format printing.",i:["Digital Printing","Poster Printing","Flyer Printing","Business Card Printing","Document Printing","Sticker Printing","Large Format Printing","Photo Printing","Brochure Printing"]},
 {t:"Branding",img:"https://images.unsplash.com/photo-1593238404535-cda7ae2fe50b?auto=format&fit=crop&w=800&q=80",d:"Make your shop, vehicle or business easy to recognise.",i:["Business Branding","Vehicle Branding","Shop Branding","Signage","Banners","Roll-up Banners","Promotional Materials","Corporate Branding"]},
 {t:"Apparel & Merchandise",img:"https://images.unsplash.com/photo-1630639744302-83dc41ac1715?auto=format&fit=crop&w=800&q=80",d:"Where applicable, ask us what we can do for your order.",i:["T-shirt Printing","Hoodie Printing","Cap Branding","Uniform Branding","Custom Merchandise"]}
];
const WORK=[
 {t:"Event poster",c:"Graphic Design",img:"https://images.unsplash.com/photo-1595142545813-06fee27f3dcb?auto=format&fit=crop&w=900&q=80",h:260},{t:"Business cards",c:"Printing",img:"https://images.unsplash.com/photo-1718670013921-2f144aba173a?auto=format&fit=crop&w=900&q=80",h:200},
 {t:"Shop banner",c:"Branding",img:"https://images.unsplash.com/photo-1575663620136-5ebbfcc2c597?auto=format&fit=crop&w=900&q=80",h:300},{t:"T-shirt design",c:"Merchandise",img:"https://images.unsplash.com/photo-1630639744302-83dc41ac1715?auto=format&fit=crop&w=900&q=80",h:240},
 {t:"Logo work",c:"Graphic Design",img:"https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=80",h:220},{t:"Stickers",c:"Printing",img:"https://images.unsplash.com/photo-1668686635769-8df95fa88dd2?auto=format&fit=crop&w=900&q=80",h:200},
 {t:"Signage",c:"Branding",img:"https://images.unsplash.com/photo-1498257850131-29198df341e0?auto=format&fit=crop&w=900&q=80",h:280},{t:"Flyers",c:"Printing",img:"https://images.unsplash.com/photo-1511525719693-258742ab7ee1?auto=format&fit=crop&w=900&q=80",h:240},
 {t:"Branded caps",c:"Merchandise",img:"https://images.unsplash.com/photo-1786561047807-34e4019649a6?auto=format&fit=crop&w=900&q=80",h:200},{t:"Printed documents",c:"Printing",img:"https://images.unsplash.com/photo-1516409590654-e8d51fc2d25c?auto=format&fit=crop&w=900&q=80",h:220}
];
const WHY=[["Quality First","Carefully prepared designs and professional print finishing."],["Creative Solutions","We turn ideas into designs that communicate clearly."],["One-Stop Service","Design, printing and branding under one roof."],["Reliable Service","Clear communication and dependable turnaround."],["Local & Accessible","Conveniently located in Wang'uru, Kirinyaga County."]];
/* ===== END CONFIG ===== */

const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>s.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const pic=(src,alt,h)=>src?`<img class="ph" src="${src}" alt="${esc(alt)}" loading="lazy" ${h?`style="height:${h}px"`:""}>`:`<div class="ph" role="img" aria-label="${esc(alt)}" ${h?`style="height:${h}px"`:""}>Add photo: ${esc(alt)}</div>`;

// hero/showcase images
$$("[data-img]").forEach(el=>{el.innerHTML=pic(IMAGES[el.dataset.img],el.dataset.alt);el.style.height="100%"});
// services
$("#svc").innerHTML=SERVICES.map(s=>`<article class="card rv"><div class="imgbox">${pic(s.img,s.t)}</div><div class="body"><h3>${s.t}</h3><p>${s.d}</p><ul>${s.i.map(x=>`<li>${x}</li>`).join("")}</ul><a class="q" href="#quote" data-svc="${esc(s.t)}">Request Quote</a></div></article>`).join("");
$("#s").innerHTML='<option value="">Choose a service</option>'+SERVICES.map(s=>`<option>${s.t}</option>`).join("")+"<option>Other</option>";
$$("[data-svc]").forEach(a=>a.onclick=()=>{$("#s").value=a.dataset.svc});
// why
$("#whyl").innerHTML=WHY.map(w=>`<li class="rv" style="border-top:3px solid var(--ink);padding-top:16px"><h3>${w[0]}</h3><p style="color:var(--mute);font-size:.92rem;margin-top:6px">${w[1]}</p></li>`).join("");
const wl=$("#whyl");const fixWhy=()=>{wl.style.gridTemplateColumns=innerWidth<=480?"1fr":innerWidth<=1000?"repeat(2,1fr)":"repeat(5,1fr)"};fixWhy();addEventListener("resize",fixWhy);
// portfolio
const cats=["All","Graphic Design","Printing","Branding","Merchandise"];
$("#filters").innerHTML=cats.map((c,i)=>`<button class="${i?"":"on"}" data-c="${c}" aria-pressed="${!i}">${c}</button>`).join("");
$("#grid").innerHTML=WORK.map((w,i)=>`<button class="item" data-c="${w.c}" data-i="${i}" aria-label="View ${esc(w.t)}">${pic(w.img,w.t,w.h)}<span>${w.t}</span></button>`).join("");
$("#filters").onclick=e=>{const b=e.target.closest("button");if(!b)return;$$("#filters button").forEach(x=>{x.classList.toggle("on",x===b);x.setAttribute("aria-pressed",x===b)});$$(".item").forEach(it=>it.style.display=b.dataset.c==="All"||it.dataset.c===b.dataset.c?"block":"none")};
// lightbox
const lb=$("#lb"),lbc=$("#lbc");let last;
$("#grid").onclick=e=>{const it=e.target.closest(".item");if(!it)return;last=it;const w=WORK[it.dataset.i];lbc.innerHTML=pic(w.img,w.t)+`<p style="margin-top:12px">${w.t} · ${w.c}</p>`;lb.classList.add("open");$("#lbx").focus()};
const closeLb=()=>{lb.classList.remove("open");last&&last.focus()};
$("#lbx").onclick=closeLb;lb.onclick=e=>{if(e.target===lb)closeLb()};
addEventListener("keydown",e=>{if(e.key==="Escape"){if(lb.classList.contains("open"))closeLb();$("#accp").classList.remove("open")}});
// nav
const hd=$("header"),menu=$("#menu"),bg=$("#burger");
addEventListener("scroll",()=>hd.classList.toggle("small",scrollY>40),{passive:true});
bg.onclick=()=>{const o=menu.classList.toggle("open");bg.setAttribute("aria-expanded",o)};
$$("#menu a").forEach(a=>a.onclick=()=>{menu.classList.remove("open");bg.setAttribute("aria-expanded",false)});
// links
$("#dir").href=$("#dir2").href=SITE.mapsDirections;
$("#soc").innerHTML=SITE.social.map(s=>`<a href="${s.url}" target="_blank" rel="noopener">${s.name}</a>`).join(" &nbsp; ");
// reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
$$(".rv").forEach(el=>io.observe(el));
// form
$("#qform").onsubmit=async e=>{
  e.preventDefault();const f=e.target;
  if(!f.name.value.trim()||!f.phone.value.trim()){(f.name.value.trim()?f.phone:f.name).focus();return}
  const fd=new FormData(f);let sent=false;
  if(SITE.formEndpoint){try{const r=await fetch(SITE.formEndpoint,{method:"POST",body:fd,headers:{Accept:"application/json"}});sent=r.ok}catch(_){}}
  if(!SITE.formEndpoint){
    const t=`Hello Monmon Empire Printers, I need a quote.%0AName: ${fd.get("name")}%0APhone: ${fd.get("phone")}%0AService: ${fd.get("service")}%0AQuantity: ${fd.get("quantity")}%0ADeadline: ${fd.get("deadline")}%0ADetails: ${fd.get("message")}`;
    window.open(`https://wa.me/${SITE.wa}?text=${t}`,"_blank");sent=true;
  }
  const ok=$("#ok");if(sent){ok.classList.add("on");f.reset();ok.focus()}else{ok.textContent="Something went wrong. Please call 0758 630928 or use WhatsApp.";ok.classList.add("on")}
};
const storageKey="monmon-accessibility";
const defaultState={scale:"normal",highContrast:false,reduceMotion:false,underlineLinks:false};
const savedScaleMap={small:"normal",normal:"slightly-larger",large:"larger"};
const scaleValues=["normal","slightly-larger","larger"];
const state={...defaultState};
const accTrigger=$("#accb");
const accPanel=$("#accp");
const scaleButtons=$$(".scale-btn");
const toggleButtons=$$(".toggle-option");

const safeStorage = {
  get(){
    try{const raw=localStorage.getItem(storageKey); return raw ? JSON.parse(raw) : null;}catch{return null;}
  },
  set(value){
    try{localStorage.setItem(storageKey, JSON.stringify(value));}catch{}
  }
};

const applyScale = () => {
  document.documentElement.dataset.scale = state.scale;
  scaleButtons.forEach(btn => {
    const active = btn.dataset.scale === state.scale;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });
};

const applyToggle = (key, value) => {
  const classMap = { highContrast:"high-contrast", reduceMotion:"reduce-motion", underlineLinks:"underline-links" };
  const bodyClass = classMap[key];
  if (bodyClass) {
    document.body.classList.toggle(bodyClass, value);
  }
};

const applyState = () => {
  applyScale();
  toggleButtons.forEach(btn => {
    const key = btn.dataset.toggle;
    const enabled = Boolean(state[key]);
    btn.setAttribute("aria-pressed", enabled ? "true" : "false");
    const switchEl = btn.querySelector(".switch");
    if (switchEl) switchEl.classList.toggle("active", enabled);
  });
  Object.keys(defaultState).forEach((key) => {
    if (key === "scale") return;
    applyToggle(key, Boolean(state[key]));
  });
  document.body.classList.toggle("high-contrast", Boolean(state.highContrast));
  document.body.classList.toggle("reduce-motion", Boolean(state.reduceMotion));
  document.body.classList.toggle("underline-links", Boolean(state.underlineLinks));
  safeStorage.set(state);
};

const setScale = (scale) => {
  state.scale = scale;
  applyState();
};

const setToggle = (key, value) => {
  state[key] = value;
  applyState();
};

const openPanel = () => {
  accPanel.hidden = false;
  accPanel.classList.add("open");
  accTrigger.setAttribute("aria-expanded", "true");
};

const closePanel = () => {
  accPanel.classList.remove("open");
  accPanel.hidden = true;
  accTrigger.setAttribute("aria-expanded", "false");
};

accTrigger.addEventListener("click", () => {
  const expanded = accTrigger.getAttribute("aria-expanded") === "true";
  if (expanded) closePanel(); else openPanel();
});

accPanel.addEventListener("click", (event) => {
  const scaleBtn = event.target.closest(".scale-btn");
  if (scaleBtn) {
    setScale(scaleBtn.dataset.scale);
    return;
  }

  const toggleBtn = event.target.closest(".toggle-option");
  if (toggleBtn) {
    const key = toggleBtn.dataset.toggle;
    const enabled = toggleBtn.getAttribute("aria-pressed") === "true";
    setToggle(key, !enabled);
    return;
  }

  if (event.target.closest(".panel-close")) {
    closePanel();
    return;
  }

  if (event.target.closest(".reset-btn")) {
    Object.assign(state, defaultState);
    applyState();
    closePanel();
  }
});

document.addEventListener("click", (event) => {
  if (!accPanel.hidden && !accPanel.contains(event.target) && !accTrigger.contains(event.target)) {
    closePanel();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !accPanel.hidden) {
    closePanel();
  }
});

const saved = safeStorage.get();
if (saved) {
  Object.assign(state, { ...defaultState, ...saved });
  state.scale=savedScaleMap[saved.scale] || (scaleValues.includes(saved.scale) ? saved.scale : defaultState.scale);
}
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches && !saved?.reduceMotion) {
  state.reduceMotion = true;
}
applyState();
closePanel();
