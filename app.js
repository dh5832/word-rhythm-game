// app.js (공통)
const $ = (s) => document.querySelector(s);

const SCORE_KEY = "wr_score_overrides_v1";

function toast(msg){
  const toastEl = $("#toast");
  if (!toastEl) return alert(msg);
  toastEl.textContent = msg;
  toastEl.classList.add("show");
  clearTimeout(toastEl._t);
  toastEl._t = setTimeout(()=>toastEl.classList.remove("show"), 1600);
}

function escapeHTML(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[c]));
}

function starsHTML(n) {
  const max = 5;
  n = Math.min(5, Math.max(1, Number(n) || 1));
  let html = "";
  for (let i = 1; i <= max; i++) html += `<span class="star ${i <= n ? "" : "off"}">★</span>`;
  return html;
}

function loadScoreOverrides(){
  try { return JSON.parse(sessionStorage.getItem(SCORE_KEY) || "{}"); }
  catch { return {}; }
}
function saveScoreOverrides(map){
  sessionStorage.setItem(SCORE_KEY, JSON.stringify(map || {}));
}
function getScore(v){
  const map = loadScoreOverrides();
  const id = String(v.id ?? "");
  if (id && map[id] !== undefined) return Number(map[id]) || 0;
  return Number(v.score ?? 0) || 0;
}

function makeVideosJsonUrl(){
  // GitHub Pages 하위경로에서도 안전하게 videos.json 만들기
  const path = location.pathname.endsWith("/")
    ? location.pathname
    : location.pathname.replace(/\/[^\/]*$/, "/");
  const base = `${location.origin}${path}`;
  const url = new URL("videos.json", base);
  url.searchParams.set("ts", Date.now()); // 캐시 방지
  return url.toString();
}

async function fetchVideos(){
  const res = await fetch(makeVideosJsonUrl(), { cache: "no-store" });
  if (!res.ok) throw new Error("videos.json 로드 실패: " + res.status);
  const data = await res.json();
  return Array.isArray(data) ? data : [];
}
