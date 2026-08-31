
const PROJECTS = [{"title": "Wonder Woman 1984", "year": "2018\u201320", "discipline": "Wirecam / Motion", "video": "sLq4S3F4kac", "desc": "Selected production coverage and behind-the-scenes material."}, {"title": "The Batman", "year": "2020", "discipline": "Stunts / Rigging", "video": "kOLkdKPpkPU", "desc": "Award-recognised rigging work and stunt production coverage."}, {"title": "Mary Poppins Returns", "year": "2017", "discipline": "Stunts / Flying", "video": "_LK8sy59A0c", "desc": "Aerial performance and stunt production coverage."}, {"title": "The Martian", "year": "2015", "discipline": "Stunts / Winches", "video": "kHyUC_rW4hs", "desc": "Stunt and action production coverage."}, {"title": "Fountain of Youth", "year": "2024", "discipline": "Stunts / Winches", "video": "GNZXZRvMg4o", "desc": "Recent stunt production coverage."}, {"title": "Heart of Stone", "year": "\u2014", "discipline": "Stunts / Action", "video": "I5BgSN-VISU", "desc": "Behind-the-scenes action production coverage."}, {"title": "Murder Mystery 2", "year": "\u2014", "discipline": "Stunts / Action", "video": "dbRqAnimogg", "desc": "Behind-the-stunts production coverage."}];
const CREDITS = [{"year": 2025, "title": "Supergirl", "type": "stunt"}, {"year": 2025, "title": "Marvel: Vision Quest", "type": "stunt"}, {"year": 2024, "title": "Fountain of Youth", "type": "stunt"}, {"year": 2021, "title": "Black Widow", "type": "stunt"}, {"year": 2021, "title": "Captain Marvel", "type": "stunt"}, {"year": 2021, "title": "Aquaman 2", "type": "stunt"}, {"year": 2020, "title": "The Batman", "type": "stunt"}, {"year": 2019, "title": "Mission Impossible", "type": "stunt"}, {"year": 2017, "title": "Mary Poppins Returns", "type": "stunt"}, {"year": 2017, "title": "Jurassic World", "type": "stunt"}, {"year": 2016, "title": "Star Wars VIII", "type": "stunt"}, {"year": 2015, "title": "The Martian", "type": "stunt"}, {"year": 2025, "title": "Star Wars: Starfighter", "type": "wirecam"}, {"year": 2022, "title": "The Flash", "type": "wirecam"}, {"year": 2022, "title": "Bridgerton", "type": "wirecam"}, {"year": 2021, "title": "Marvel's Secret Invasion", "type": "wirecam"}, {"year": 2021, "title": "Jurassic World: Dominion", "type": "wirecam"}, {"year": 2019, "title": "Mission Impossible", "type": "wirecam"}, {"year": 2019, "title": "Eurovision", "type": "wirecam"}, {"year": 2018, "title": "Wonder Woman 2", "type": "wirecam"}, {"year": 2017, "title": "Jurassic World", "type": "wirecam"}, {"year": 2014, "title": "Mission Impossible 5", "type": "wirecam"}, {"year": 2013, "title": "Jupiter Ascending", "type": "wirecam"}, {"year": 2010, "title": "Sherlock Holmes 2", "type": "wirecam"}, {"year": 2007, "title": "Harry Potter", "type": "wirecam"}];
const REELS = {"stunt": {"title": "STUNT REEL", "external": "https://www.winches.design/general-5", "poster": "https://static.wixstatic.com/media/5e11b3_6ea3c1dd90834584b6b30de2baad34e3~mv2.jpg", "chapters": [{"title": "The Batman", "video": "kOLkdKPpkPU", "meta": "Stunts / Rigging"}, {"title": "Fountain of Youth", "video": "GNZXZRvMg4o", "meta": "Stunts"}, {"title": "Mary Poppins Returns", "video": "_LK8sy59A0c", "meta": "Aerial / Stunts"}, {"title": "The Martian", "video": "kHyUC_rW4hs", "meta": "Stunts / Action"}, {"title": "Heart of Stone", "video": "I5BgSN-VISU", "meta": "Action"}]}, "wirecam": {"title": "WIRECAM REEL", "external": "https://www.winches.design/copy-of-stunt-page", "poster": "https://static.wixstatic.com/media/5e11b3_31e186b7677f4e6cbd4a339dcb812aa7~mv2.jpg", "chapters": [{"title": "Wonder Woman 1984", "video": "sLq4S3F4kac", "meta": "Production coverage"}, {"title": "Mary Poppins Returns", "video": "_LK8sy59A0c", "meta": "Aerial production"}, {"title": "The Batman", "video": "kOLkdKPpkPU", "meta": "Production coverage"}]}};

// progress + header
const progress=document.getElementById("progress"), header=document.getElementById("siteHeader");
function onScroll(){
  const max=document.documentElement.scrollHeight-innerHeight;
  if(progress)progress.style.width=`${max?scrollY/max*100:0}%`;
  if(header)header.classList.toggle("scrolled",scrollY>40);
}
addEventListener("scroll",onScroll,{passive:true});onScroll();

// mobile menu
const mb=document.getElementById("menuButton"), mm=document.getElementById("mobileMenu");
if(mb&&mm){
  mb.addEventListener("click",()=>{const o=!mm.classList.contains("open");mm.classList.toggle("open",o);document.body.classList.toggle("menu-open",o);mm.setAttribute("aria-hidden",String(!o))});
  mm.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{mm.classList.remove("open");document.body.classList.remove("menu-open")}));
}

// reveals
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");obs.unobserve(e.target)}}),{threshold:.08,rootMargin:"0px 0px -4% 0px"});
document.querySelectorAll(".reveal").forEach(el=>obs.observe(el));

// legacy BTS inline playback
document.addEventListener("click",e=>{
  const b=e.target.closest("[data-video]");if(!b)return;
  const t=b.closest(".video-thumb"),id=b.dataset.video;if(!t)return;
  t.innerHTML=`<iframe src="https://www.youtube.com/embed/${id}?autoplay=1&rel=0" title="Behind the scenes video" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
});

// page transitions
const transition=document.getElementById("pageTransition");
document.body.classList.add("page-arrived");
requestAnimationFrame(()=>requestAnimationFrame(()=>document.body.classList.remove("page-arrived")));
document.addEventListener("click",e=>{
  const a=e.target.closest("a[href]");if(!a)return;
  const href=a.getAttribute("href");
  if(!href || a.target==="_blank" || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("http"))return;
  if(!href.includes(".html"))return;
  e.preventDefault();document.body.classList.add("page-leaving");
  setTimeout(()=>location.href=href,300);
});

// cinematic cursor
const cinemaCursor=document.getElementById("cinemaCursor"), cursorText=document.getElementById("cinemaCursorText");
if(cinemaCursor && matchMedia("(hover:hover) and (pointer:fine)").matches){
  document.body.classList.add("cinematic-cursor");
  let mx=0,my=0,cx=0,cy=0;
  addEventListener("mousemove",e=>{mx=e.clientX;my=e.clientY;cinemaCursor.style.opacity="1"},{passive:true});
  function cursorTick(){cx+=(mx-cx)*.22;cy+=(my-cy)*.22;cinemaCursor.style.left=cx+"px";cinemaCursor.style.top=cy+"px";requestAnimationFrame(cursorTick)}cursorTick();
  document.addEventListener("mouseover",e=>{
    const el=e.target.closest("[data-cursor]");
    if(el){cursorText.textContent=el.dataset.cursor||"VIEW";cinemaCursor.classList.add("visible");cinemaCursor.classList.remove("passive")}
    else{cursorText.textContent="";cinemaCursor.classList.remove("visible");cinemaCursor.classList.add("passive")}
  });
}

// project drawer
const drawer=document.getElementById("projectDrawer");
function openDrawer(){if(drawer){drawer.classList.add("open");drawer.setAttribute("aria-hidden","false");document.body.style.overflow="hidden"}}
function closeDrawer(){if(drawer){drawer.classList.remove("open");drawer.setAttribute("aria-hidden","true");document.body.style.overflow=""}}
document.querySelectorAll(".project-drawer-trigger").forEach(b=>b.addEventListener("click",openDrawer));
drawer?.querySelector(".drawer-close")?.addEventListener("click",closeDrawer);
const quickBrief=document.getElementById("quickBrief");
quickBrief?.addEventListener("submit",e=>{
  e.preventDefault();if(!quickBrief.reportValidity())return;
  const data=Object.fromEntries(new FormData(quickBrief).entries());
  sessionStorage.setItem("wwProjectDraft",JSON.stringify(data));
  document.body.classList.add("page-leaving");setTimeout(()=>location.href="contact.html",280);
});
// prefill full form from drawer
const fullForm=document.getElementById("productionForm");
if(fullForm){
  try{
    const d=JSON.parse(sessionStorage.getItem("wwProjectDraft")||"null");
    if(d){
      ["name","email","production","shot"].forEach(k=>{if(d[k] && fullForm.elements[k])fullForm.elements[k].value=d[k]});
      if(d.requirement){const r=[...fullForm.querySelectorAll(`[name="requirement"]`)].find(x=>x.value===d.requirement);if(r)r.checked=true}
      sessionStorage.removeItem("wwProjectDraft");
    }
  }catch(_e){}
}

// full production form
function productionBrief(){
 const f=document.getElementById("productionForm"); if(!f)return "";
 const d=new FormData(f); return `WINCHES & WIRECAMS — PRODUCTION ENQUIRY

Production: ${d.get("production")||"Not specified"}
Name: ${d.get("name")||""}
Email: ${d.get("email")||""}
Company / Department: ${d.get("company")||"Not specified"}
Requirement: ${d.get("requirement")||""}
Shoot Location: ${d.get("location")||"Not specified"}
Shoot Dates: ${d.get("dates")||"Not specified"}

SHOT / SEQUENCE
${d.get("shot")||""}

STORYBOARD / PREVIS LINK
${d.get("attachment")||"None provided"}`; 
}
const fs=document.getElementById("formStatus");
if(fullForm)fullForm.addEventListener("submit",e=>{
 e.preventDefault();if(!fullForm.reportValidity())return;const d=new FormData(fullForm);
 const subject=encodeURIComponent(`Production enquiry${d.get("production")?` — ${d.get("production")}`:""}`);
 location.href=`mailto:winchesandwirecams@gmail.com?subject=${subject}&body=${encodeURIComponent(productionBrief())}`;
 if(fs)fs.textContent="Email brief created. Attach any storyboard or previs files before sending.";
});
document.getElementById("copyBrief")?.addEventListener("click",async()=>{
 try{await navigator.clipboard.writeText(productionBrief());if(fs)fs.textContent="Production brief copied to clipboard."}
 catch{if(fs)fs.textContent="Could not access clipboard — use Create email brief instead."}
});

// fullscreen reel viewer + chapters
const reelOverlay=document.getElementById("reelOverlay"),reelPlayer=document.getElementById("reelPlayer"),reelChapters=document.getElementById("reelChapters"),reelTitle=document.getElementById("reelOverlayTitle");
let currentReel=null;
function reelPlaceholder(mode){
 const r=REELS[mode];currentReel=mode;if(!r)return;
 reelTitle.textContent=r.title;
 reelPlayer.innerHTML=`<div class="reel-placeholder" style="background-image:url('${r.poster}')"><div class="reel-placeholder-copy"><p class="kicker">Original showreel</p><h2>${r.title}</h2><p>The fullscreen reel interface is ready for the native master video. Until that source is supplied, use the original live reel or choose one of the production chapters.</p><a class="reel-external" href="${r.external}" target="_blank" rel="noopener">Open original reel ↗</a></div></div>`;
 reelChapters.innerHTML="<h3>Chapters / Related Work</h3>"+r.chapters.map((c,i)=>`<button class="chapter-btn" type="button" data-chapter="${i}" data-cursor="PLAY"><img src="https://i.ytimg.com/vi/${c.video}/mqdefault.jpg" alt=""><span><strong>${c.title}</strong><span>${c.meta}</span></span></button>`).join("");
 reelOverlay.classList.add("open");reelOverlay.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";
}
function playChapter(i){
 const c=REELS[currentReel]?.chapters?.[i];if(!c)return;
 reelPlayer.innerHTML=`<iframe src="https://www.youtube.com/embed/${c.video}?autoplay=1&rel=0" title="${c.title}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
 reelChapters.querySelectorAll(".chapter-btn").forEach((b,n)=>b.classList.toggle("active",n===i));
}
document.querySelectorAll("[data-open-reel]").forEach(b=>b.addEventListener("click",()=>reelPlaceholder(b.dataset.openReel)));
reelChapters?.addEventListener("click",e=>{const b=e.target.closest("[data-chapter]");if(b)playChapter(Number(b.dataset.chapter))});
function closeReel(){reelOverlay?.classList.remove("open");reelOverlay?.setAttribute("aria-hidden","true");if(reelPlayer)reelPlayer.innerHTML="";document.body.style.overflow=""}
document.querySelector("[data-close-reel]")?.addEventListener("click",closeReel);

// quick project modal
const projectModal=document.getElementById("projectModal"),projectVideo=document.getElementById("projectVideo"),projectTitle=document.getElementById("projectTitle"),projectMeta=document.getElementById("projectMeta"),projectDesc=document.getElementById("projectDesc");
document.querySelectorAll("[data-project]").forEach(card=>card.addEventListener("click",()=>{
 const p=PROJECTS[Number(card.dataset.project)];if(!p)return;
 projectTitle.textContent=p.title;projectMeta.textContent=`${p.year} · ${p.discipline}`;projectDesc.textContent=p.desc;
 projectVideo.innerHTML=`<iframe src="https://www.youtube.com/embed/${p.video}?autoplay=1&rel=0" title="${p.title}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
 projectModal.classList.add("open");projectModal.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";
}));
function closeProject(){projectModal?.classList.remove("open");projectModal?.setAttribute("aria-hidden","true");if(projectVideo)projectVideo.innerHTML="";document.body.style.overflow=""}
document.querySelector("[data-close-project]")?.addEventListener("click",closeProject);

// comparison slider
const comparison=document.getElementById("shotComparison");
if(comparison){
 const topImg=comparison.querySelector(".compare-top"),handle=comparison.querySelector(".compare-handle");
 function setCompare(clientX){
   const r=comparison.getBoundingClientRect();const x=Math.min(r.width,Math.max(0,clientX-r.left));const pct=x/r.width*100;
   topImg.style.clipPath=`inset(0 ${100-pct}% 0 0)`;handle.style.left=pct+"%";
 }
 let dragging=false;
 comparison.addEventListener("pointerdown",e=>{dragging=true;comparison.setPointerCapture(e.pointerId);setCompare(e.clientX)});
 comparison.addEventListener("pointermove",e=>{if(dragging)setCompare(e.clientX)});
 comparison.addEventListener("pointerup",()=>dragging=false);comparison.addEventListener("pointercancel",()=>dragging=false);
}

// lightbox
const lightbox=document.getElementById("lightbox"),lightboxImage=document.getElementById("lightboxImage");
document.addEventListener("click",e=>{
 const img=e.target.closest("img.lightboxable");if(!img)return;
 // Don't trigger while dragging comparison
 if(img.closest(".comparison") && e.detail===0)return;
 lightboxImage.src=img.currentSrc||img.src;lightboxImage.alt=img.alt||"";
 lightbox.classList.add("open");lightbox.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";
});
function closeLightbox(){lightbox?.classList.remove("open");lightbox?.setAttribute("aria-hidden","true");document.body.style.overflow=""}
document.querySelector("[data-close-lightbox]")?.addEventListener("click",closeLightbox);

// credits timeline
const results=document.getElementById("timelineResults"),minRange=document.getElementById("yearMin"),maxRange=document.getElementById("yearMax"),minLabel=document.getElementById("rangeMinLabel"),maxLabel=document.getElementById("rangeMaxLabel"),rangeFill=document.getElementById("rangeFill");
let creditType="all";
function renderTimeline(){
 if(!results||!minRange||!maxRange)return;
 let min=Number(minRange.value),max=Number(maxRange.value);if(min>max){if(document.activeElement===minRange)max=min;else min=max;minRange.value=min;maxRange.value=max}
 minLabel.textContent=min;maxLabel.textContent=max;
 const span=2025-2007;rangeFill.style.left=`${(min-2007)/span*100}%`;rangeFill.style.right=`${100-(max-2007)/span*100}%`;
 const data=CREDITS.filter(c=>c.year>=min&&c.year<=max&&(creditType==="all"||c.type===creditType)).sort((a,b)=>b.year-a.year||a.title.localeCompare(b.title));
 results.innerHTML=data.length?data.map(c=>`<article class="timeline-credit"><span class="year">${c.year}</span><span class="type">${c.type==="stunt"?"Stunts":"Wirecam"}</span><h3>${c.title}</h3><span class="mark">↗</span></article>`).join(""):`<p class="no-results">No selected credits in this range.</p>`;
}
[minRange,maxRange].forEach(r=>r?.addEventListener("input",renderTimeline));
document.querySelectorAll("[data-credit-filter]").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll("[data-credit-filter]").forEach(x=>x.classList.remove("active"));b.classList.add("active");creditType=b.dataset.creditFilter;renderTimeline()}));
renderTimeline();

// escape key closes overlays
addEventListener("keydown",e=>{if(e.key==="Escape"){closeReel();closeProject();closeLightbox();closeDrawer()}});


// V4 — local homepage hero video with static-image fallback.
const homeHeroVideo = document.querySelector(".hero-video video");
if(homeHeroVideo){
  const hideHeroVideo = () => {
    const wrap = homeHeroVideo.closest(".hero-video");
    if(wrap) wrap.style.display = "none";
  };
  homeHeroVideo.addEventListener("error", hideHeroVideo);
  const source = homeHeroVideo.querySelector("source");
  if(source) source.addEventListener("error", hideHeroVideo);
  homeHeroVideo.play().catch(()=>{});
}
