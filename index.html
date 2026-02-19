<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>단어리듬게임</title>

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@5.3.3/dist/minty/bootstrap.min.css">

  <style>
    :root{
      --glow: 0 10px 30px rgba(16,24,40,.12);
      --stroke: rgba(15,23,42,.10);
      --grad1: rgba(99,102,241,.14);
      --grad2: rgba(34,211,238,.14);
      --ink: #0f172a;
    }
    body{
      background:
        radial-gradient(900px 480px at 15% 0%, var(--grad1), transparent 55%),
        radial-gradient(900px 480px at 85% 5%, var(--grad2), transparent 55%),
        #f7fafc;
      min-height: 100vh;
      color: var(--ink);
    }
    .navbar{
      background: rgba(255,255,255,.78) !important;
      backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--stroke);
      box-shadow: var(--glow);
    }
    .brand-dot{
      width:10px;height:10px;border-radius:999px;
      background: linear-gradient(135deg,#6366f1,#22d3ee);
      display:inline-block; margin-right:.6rem;
      box-shadow: 0 0 0 6px rgba(99,102,241,.08);
    }

    .screen{ display:none; }
    .screen.active{ display:block; }

    .game-card{
      border: 1px solid var(--stroke);
      background: rgba(255,255,255,.9);
      box-shadow: var(--glow);
      transition: transform .12s ease, box-shadow .12s ease, border-color .12s ease;
      will-change: transform;
      animation: popIn .18s ease-out both;
    }
    .game-card:hover{
      transform: translateY(-2px);
      border-color: rgba(99,102,241,.22);
      box-shadow: 0 16px 40px rgba(16,24,40,.14);
    }
    @keyframes popIn{
      from{ transform: translateY(6px); opacity: 0; }
      to{ transform: translateY(0); opacity: 1; }
    }

    .btn-neo{
      border: 1px solid rgba(99,102,241,.22);
      background: linear-gradient(135deg, rgba(99,102,241,.18), rgba(34,211,238,.16));
      color: var(--ink) !important;
      font-weight: 600;
    }
    .btn-neo:hover{
      border-color: rgba(99,102,241,.35);
      box-shadow: 0 10px 26px rgba(99,102,241,.16);
      color: var(--ink) !important;
    }

    .badge-soft{
      border: 1px solid rgba(15,23,42,.10);
      background: rgba(15,23,42,.04);
      color: var(--ink);
    }

    .stars{ white-space:nowrap; }
    .stars .star{ font-size: 1rem; line-height: 1; color: #f59e0b; }
    .stars .off{ opacity:.28; }

    .muted{ color: rgba(15,23,42,.66) !important; }
    .hr-soft{
      border: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(15,23,42,.16), transparent);
      opacity: 1;
    }

    .player-wrap{
      position: relative;
    }
    video{
      width:100%;
      border-radius: 16px;
      border: 1px solid var(--stroke);
      background:#000;
      box-shadow: 0 16px 44px rgba(16,24,40,.12);
      max-height: 72vh;
    }

    .watermark{
      position:absolute;
      inset: 10px 10px auto auto;
      padding: 6px 10px;
      border-radius: 999px;
      border: 1px solid rgba(255,255,255,.22);
      background: rgba(0,0,0,.35);
      color: rgba(255,255,255,.86);
      font-size: 12px;
      user-select: none;
      pointer-events: none;
      backdrop-filter: blur(6px);
    }

    .table thead th{
      background: rgba(15,23,42,.04);
      border-bottom: 1px solid rgba(15,23,42,.10) !important;
    }
    .table td, .table th{ vertical-align: middle; }
    .table-hover tbody tr:hover{
      background: rgba(99,102,241,.06);
      cursor: pointer;
    }

    .form-control, .form-select{
      border-color: rgba(15,23,42,.14) !important;
      background-color: rgba(255,255,255,.95) !important;
    }
    .form-control:focus, .form-select:focus{
      box-shadow: 0 0 0 .2rem rgba(99,102,241,.14) !important;
      border-color: rgba(99,102,241,.40) !important;
    }

    .toastish{
      position: fixed;
      right: 16px;
      bottom: 16px;
      z-index: 1080;
      min-width: 240px;
      max-width: 420px;
      padding: 10px 12px;
      border-radius: 14px;
      border: 1px solid rgba(15,23,42,.10);
      background: rgba(255,255,255,.92);
      box-shadow: 0 18px 50px rgba(16,24,40,.14);
      display:none;
    }
    .toastish.show{ display:block; animation: toastIn .18s ease-out both; }
    @keyframes toastIn{
      from{ transform: translateY(10px); opacity: 0; }
      to{ transform: translateY(0); opacity: 1; }
    }
  </style>
</head>

<body>
  <nav class="navbar navbar-expand-lg sticky-top">
    <div class="container">
      <a class="navbar-brand fw-bold text-dark" href="#list">
        <span class="brand-dot"></span>Word Rhythm Videos
      </a>
      <div class="ms-auto d-flex gap-2">
        <button id="btnGoList" class="btn btn-sm btn-outline-primary">목록</button>
        <button id="btnGoAdmin" class="btn btn-sm btn-neo">관리자</button>
      </div>
    </div>
  </nav>

  <main class="container py-4">
    <!-- LIST -->
    <section id="screen-list" class="screen active">
      <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
        <span class="badge badge-soft rounded-pill px-3 py-2">
          총 <span id="listCount">0</span>개
        </span>
      </div>
      <div id="grid" class="row g-3"></div>
    </section>

    <!-- PLAYER -->
    <section id="screen-player" class="screen">
      <div class="card game-card">
        <div class="card-body">
          <div class="d-flex align-items-start justify-content-between flex-wrap gap-2 mb-2">
            <div class="me-auto">
              <h5 id="playerName" class="mb-1 fw-bold text-dark">-</h5>
              <div class="muted small mt-1">점수: ${getScore(v)}</div>
              <div id="playerStars" class="stars mb-1"></div>
            </div>
            <div class="d-flex gap-2 flex-wrap">
              <button id="btnBack" class="btn btn-outline-primary">← 뒤로</button>
              <button id="btnPlayPause" class="btn btn-neo">⏯ 재생/일시정지</button>
            </div>
          </div>

          <hr class="hr-soft my-3">

          <div class="player-wrap">
            <div class="watermark">Protected</div>
            <video id="video"
                   controls
                   playsinline
                   preload="metadata"
                   controlsList="nodownload noplaybackrate noremoteplayback"
                   disablePictureInPicture
                   oncontextmenu="return false;"></video>
          </div>

        </div>
      </div>
    </section>

    <!-- ADMIN -->
    <section id="screen-admin" class="screen">
      <div class="row g-3">
        <div class="col-12 col-lg-5">
          <div class="card game-card">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between">
                <h5 class="mb-0 fw-bold text-dark">관리자</h5>
                <div class="d-flex gap-2">
                  <button id="btnSignOut" class="btn btn-sm btn-outline-secondary d-none" type="button">로그아웃</button>
                  <button id="btnResetForm" class="btn btn-sm btn-outline-secondary d-none" type="button">초기화</button>
                </div>
              </div>

              <hr class="hr-soft my-3">

              <!-- AUTH -->
              <div id="authBox" class="d-none">
                <div class="mb-3">
                  <label class="form-label">이메일</label>
                  <input id="authEmail" class="form-control" type="email" autocomplete="email" />
                </div>
                <div class="mb-3">
                  <label class="form-label">비밀번호</label>
                  <input id="authPass" class="form-control" type="password" autocomplete="current-password" />
                </div>
                <div class="d-flex gap-2">
                  <button id="btnLogin" class="btn btn-neo flex-grow-1" type="button">로그인</button>
                </div>
              </div>

              <!-- FORM -->
              <form id="adminForm" class="d-none">
                <input type="hidden" id="fId" />
                <input type="hidden" id="fFilePath" />

                <div class="mb-3">
                  <label class="form-label">이름</label>
                  <input id="fName" class="form-control" maxlength="60" required />
                </div>

                <div class="mb-3">
                  <label class="form-label">난이도 (1~5)</label>
                  <select id="fDifficulty" class="form-select" required>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3" selected>3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>

                <div class="mb-3">
                  <label class="form-label">영상 업로드</label>
                  <input id="fFile" type="file" class="form-control" accept="video/mp4,video/webm,video/ogg,video/quicktime,video/x-m4v" />
                  <div id="fileHint" class="muted small mt-1"></div>
                </div>
                <div class="mb-3">
                  <label class="form-label">메모</label>
                  <input id="fMemo" class="form-control" maxlength="120" placeholder="목록에 표시될 문구(예: 오늘의 말씀/레벨 설명 등)" />
                </div>

                <div class="d-flex gap-2">
                  <button id="btnSave" class="btn btn-neo flex-grow-1" type="submit">저장</button>
                  <button id="btnDelete" class="btn btn-outline-danger" type="button" disabled>삭제</button>
                </div>
              </form>

              <div id="adminLocked" class="muted small"></div>
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-7">
          <div class="card game-card">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                <h5 class="mb-0 fw-bold text-dark">영상 목록</h5>
                <div class="d-flex align-items-center gap-2">
                  <span class="badge badge-soft rounded-pill px-3 py-2">
                    총 <span id="adminCount">0</span>개
                  </span>
                  <button id="btnAdminAdd" class="btn btn-sm btn-neo d-none" type="button">+ 추가</button>
                  <button id="btnRelink" class="btn btn-sm btn-outline-primary" type="button">영상 다시 연결</button>
                </div>
              </div>

              <hr class="hr-soft my-3">

              <div class="table-responsive">
                <table class="table table-hover align-middle mb-0">
                  <thead>
                    <tr>
                      <th style="width: 64%;">이름</th>
                      <th style="width: 20%;">난이도</th>
                      <th style="width: 16%;">상태</th>
                    </tr>
                  </thead>
                  <tbody id="adminTbody"></tbody>
                </table>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  </main>

  <!-- Delete confirm modal -->
  <div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title fw-bold">삭제 확인</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="text-dark">정말 삭제할까요?</div>
          <div id="deleteTarget" class="muted small mt-1"></div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">취소</button>
          <button type="button" class="btn btn-danger" id="btnConfirmDelete">삭제</button>
        </div>
      </div>
    </div>
  </div>

  <div id="toast" class="toastish"></div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<script>
  // =========================
  // Method A (No DB): videos.json + public video URLs
  // - 누구나 시청 가능
  // - 추가는 GitHub에서 videos.json 수정(권한 있는 사람만)
  // =========================

  const $ = (s) => document.querySelector(s);
  const screens = { list: $("#screen-list"), player: $("#screen-player"), admin: $("#screen-admin") };

  const grid = $("#grid");
  const listCount = $("#listCount");
  const adminCount = $("#adminCount");

  const playerName = $("#playerName");
  const playerStars = $("#playerStars");
  const videoEl = $("#video");

  const btnBack = $("#btnBack");
  const btnPlayPause = $("#btnPlayPause");

  const btnGoList = $("#btnGoList");
  const btnGoAdmin = $("#btnGoAdmin");

  const adminTbody = $("#adminTbody");

  const toastEl = $("#toast");

  let VIDEOS = [];
  let loaded = false;

  const btnSaveAll = $("#btnSaveAll");
  const SCORE_KEY = "wr_score_overrides_v1";
  
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
    return Number(v.score ?? 0) || 0; // videos.json에 score가 있으면 기본값으로 사용
  }


  function toast(msg){
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

  function setScreen(name) {
    Object.values(screens).forEach(s => s.classList.remove("active"));
    screens[name].classList.add("active");
  }

  async function loadVideosOnce(){
    if (loaded) return;
    loaded = true;
  
    try{
      // ✅ GitHub Pages 하위경로(/repo/ 또는 /branch 등)에서도 항상 맞게 videos.json 경로 생성
      // location.pathname이 /repo 처럼 슬래시로 안 끝나면 "디렉토리" 기준으로 보정
      const path = location.pathname.endsWith("/")
        ? location.pathname
        : location.pathname.replace(/\/[^\/]*$/, "/");
  
      const base = `${location.origin}${path}`;
      const url = new URL("videos.json", base);
  
      // 캐시 문제 방지
      url.searchParams.set("ts", Date.now());
  
      const res = await fetch(url.toString(), { cache: "no-store" });
      if (!res.ok) throw new Error("videos.json 로드 실패: " + res.status);
  
      const data = await res.json();
      VIDEOS = Array.isArray(data) ? data : [];
  
    }catch(e){
      VIDEOS = [];
      toast("videos.json을 불러오지 못했어요");
      console.error(e);
    }
  }


  function renderList() {
    listCount.textContent = String(VIDEOS.length);

    grid.innerHTML = VIDEOS.map(v => {
      const memoText = (v.memo || "").trim();

      return `
        <div class="col-12 col-md-6 col-lg-4">
          <div class="card game-card h-100" role="button" tabindex="0" data-id="${escapeHTML(v.id)}">
            <div class="card-body">
              <div class="d-flex justify-content-between gap-2">
                <div class="me-auto">
                  <div class="fw-bold text-dark">${escapeHTML(v.name || "")}</div>
                  ${memoText ? `<div class="muted small mt-2">${escapeHTML(memoText)}</div>` : ``}
                </div>
                <div class="stars">${starsHTML(v.difficulty)}</div>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join("");

    grid.querySelectorAll("[data-id]").forEach(card => {
      const id = card.getAttribute("data-id");
      const open = () => { window.location.hash = `#play=${encodeURIComponent(id)}`; };
      card.addEventListener("click", open);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
      });
    });
  }

    function renderAdminReadOnly(){
      adminCount.textContent = String(VIDEOS.length);
    
      const scoreMap = loadScoreOverrides();
    
      adminTbody.innerHTML = VIDEOS.map(v => {
        const ok = !!(v.url && typeof v.url === "string");
        const id = String(v.id ?? "");
        const currentScore = (scoreMap[id] !== undefined ? scoreMap[id] : (Number(v.score ?? 0) || 0));
    
        return `
          <tr data-id="${escapeHTML(id)}">
            <td class="fw-semibold text-dark">
              <div>${escapeHTML(v.name || "")}</div>
    
              <div class="d-flex align-items-center gap-2 mt-2">
                <span class="muted small">성공 점수</span>
                <input class="form-control form-control-sm score-input"
                       style="max-width: 120px;"
                       type="number" min="0" step="1"
                       value="${escapeHTML(currentScore)}" />
                <button class="btn btn-sm btn-outline-primary score-save" type="button">저장</button>
              </div>
    
              ${(v.memo || "").trim() ? `<div class="muted small mt-2">${escapeHTML(v.memo)}</div>` : ``}
            </td>
    
            <td class="stars">${starsHTML(v.difficulty)}</td>
    
            <td class="small ${ok ? "text-success" : "text-danger"}">
              ${ok ? "양호" : "불가"}
            </td>
          </tr>
        `;
      }).join("");
    
      // 점수 저장 핸들러 (sessionStorage에만 저장)
      adminTbody.querySelectorAll("tr[data-id]").forEach(tr => {
        const id = tr.getAttribute("data-id");
        const input = tr.querySelector(".score-input");
        const btn = tr.querySelector(".score-save");
    
        const save = () => {
          const val = Math.max(0, Number(input.value || 0) || 0);
          input.value = String(val);
    
          const map = loadScoreOverrides();
          map[id] = val;
          saveScoreOverrides(map);
    
          toast("저장됨");
        };
    
        btn.addEventListener("click", save);
        input.addEventListener("keydown", (e) => {
          if (e.key === "Enter") { e.preventDefault(); save(); }
        });
      });
    
      // 기존 폼/버튼 숨김
      $("#authBox")?.classList.add("d-none");
      $("#adminLocked")?.classList.remove("d-none");
      $("#adminLocked").textContent =
        "영상을 추가하고 싶다면 관리자에게 문의하세요.";
      $("#adminForm")?.classList.add("d-none");
      $("#btnResetForm")?.classList.add("d-none");
      $("#btnAdminAdd")?.classList.add("d-none");
      $("#btnRelink")?.classList.add("d-none");
      $("#btnSignOut")?.classList.add("d-none");
    }



  function showPlayer(id) {
    const v = VIDEOS.find(x => String(x.id) === String(id));
    if (!v) { window.location.hash = "#list"; return; }

    playerName.textContent = v.name || "-";
    playerStars.innerHTML = starsHTML(v.difficulty);

    if (!v.url) {
      toast("이 항목은 영상 URL이 없어요");
      window.location.hash = "#list";
      return;
    }

    videoEl.src = v.url;
    videoEl.load();
    setScreen("player");
  }

  // Controls / Nav
  btnBack.addEventListener("click", () => { window.location.hash = "#list"; });
  btnPlayPause.addEventListener("click", () => { if (videoEl.paused) videoEl.play(); else videoEl.pause(); });
  btnGoList.addEventListener("click", () => { window.location.hash = "#list"; });

  // ✅ 관리자 버튼은 유지하되, "보기 전용 안내" 화면으로 사용
  btnGoAdmin.addEventListener("click", () => { window.location.hash = "#admin"; });

  window.addEventListener("contextmenu", (e) => e.preventDefault(), { capture: true });

  window.addEventListener("keydown", (e) => {
    const tag = (document.activeElement && document.activeElement.tagName) || "";
    const inInput = tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";

    if (!inInput && e.code === "Space" && screens.player.classList.contains("active")) {
      e.preventDefault();
      if (videoEl.paused) videoEl.play(); else videoEl.pause();
    }
    if (e.key === "Escape" && screens.player.classList.contains("active")) {
      window.location.hash = "#list";
    }
  });

  async function route() {
    await loadVideosOnce();
    renderList();

    const hash = window.location.hash || "#list";
    const mPlay = hash.match(/^#play=(.+)$/);

    if (mPlay) {
      showPlayer(decodeURIComponent(mPlay[1]));
      return;
    }

    if (hash === "#admin") {
      setScreen("admin");
      renderAdminReadOnly();
      return;
    }

    try { videoEl.pause(); } catch {}
    setScreen("list");
  }
  btnSaveAll?.addEventListener("click", () => {
  if (!screens.admin.classList.contains("active")) return;

  const map = loadScoreOverrides();

  adminTbody.querySelectorAll("tr[data-id]").forEach(tr => {
    const id = tr.getAttribute("data-id");
    const input = tr.querySelector(".score-input");
    if (!id || !input) return;

    const val = Math.max(0, Number(input.value || 0) || 0);
    input.value = String(val);
    map[id] = val;

    // 현재 메모리에도 반영해두면 (목록에서 점수 표시할 때 등) 즉시 반영 가능
    const idx = VIDEOS.findIndex(x => String(x.id) === String(id));
    if (idx >= 0) VIDEOS[idx].score = val;
  });

  saveScoreOverrides(map);
  toast("변경사항 저장됨");
});

  window.addEventListener("hashchange", route);

  // init
  route();
</script>




</body>
</html>
