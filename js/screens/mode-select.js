/* ════════════════════════════════════════
   MODE SELECT — age group chooser
════════════════════════════════════════ */

function initModeSelect() {
  const L = T[S.lang] || T.en;
  document.getElementById('ms-title').textContent = L.ms_title;
  document.getElementById('ms-sub').textContent   = L.ms_sub;
  document.getElementById('ms-junior-lbl').textContent   = L.ms_junior;
  document.getElementById('ms-junior-sub').textContent   = L.ms_junior_sub;
  document.getElementById('ms-explorer-lbl').textContent = L.ms_explorer;
  document.getElementById('ms-explorer-sub').textContent = L.ms_explorer_sub;
  document.getElementById('ms-expert-lbl').textContent   = L.ms_expert;
  document.getElementById('ms-expert-sub').textContent   = L.ms_expert_sub;
}

function pickMode(m) {
  setMode(m);
  S = { name:'', ava:'🧑', xp:0, lang:S.lang,
        badges:[], missions:[],
        quizBest:-1, quizPlays:0, trDone:false, trCount:0,
        qScore:0, qCurrent:0, qAnswered:false, qQuestions:[],
        hintUsed:false, muted:S.muted };
  load(); // load existing progress for this mode if any
  if (S.name) nav('dashboard');
  else        nav('profile');
}
