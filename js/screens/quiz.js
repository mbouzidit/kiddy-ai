/* ════════════════════════════════════════
   QUIZ — intro + questions + results
════════════════════════════════════════ */

/* ── QUIZ INTRO ── */
function loadQuizIntro() {
  const best = S.quizBest;
  const el   = document.getElementById('qi-best');
  if (el) el.textContent = best < 0 ? t('qi_best_none') : `${best}/5 ⭐`;
}

function startQuiz() {
  S.qScore = 0; S.qCurrent = 0; S.qAnswered = false; S.hintUsed = false;
  save(); nav('quiz');
}

/* ── CLOUD DECORATION ── */
function initQuizClouds() {
  const cw = document.getElementById('qz-clouds');
  if (cw && cw.children.length < 2) {
    for (let i = 0; i < 3; i++) {
      const c = document.createElement('div');
      c.className = 'qz-cloud'; c.textContent = '☁️';
      c.style.cssText = `top:${5+Math.random()*20}%;animation-duration:${18+Math.random()*12}s;animation-delay:${Math.random()*12-6}s;opacity:.3;font-size:${40+Math.random()*30}px;`;
      cw.appendChild(c);
    }
  }
}

/* ── RENDER QUESTION ── */
function renderQ() {
  initQuizClouds();
  if (S.qCurrent >= QUESTIONS.length) { finishQuiz(); return; }

  const q = QUESTIONS[S.qCurrent];
  const L = S.lang;
  const qText = (L === 'fr' && q.text_fr) ? q.text_fr : q.text;

  // Stars progress
  const stars = document.getElementById('qz-stars');
  stars.innerHTML = '';
  for (let i = 0; i < QUESTIONS.length; i++) {
    const s = document.createElement('span');
    s.className  = 'qz-star' + (i < S.qScore ? ' earned' : '');
    s.textContent = i < S.qScore ? '⭐' : '☆';
    stars.appendChild(s);
  }

  // Header
  document.getElementById('qz-ctr').textContent  = `Question ${S.qCurrent + 1} ${t('qz_q_of')} ${QUESTIONS.length}`;
  document.getElementById('qz-char').textContent  = q.char;
  document.getElementById('qz-txt').textContent   = qText;

  // Hint button
  const hb   = document.getElementById('hint-btn');
  const hbox = document.getElementById('qz-hint-box');
  if (hb)   { hb.disabled = S.hintUsed; hb.className = S.hintUsed ? 'hint-btn hint-used' : 'hint-btn'; }
  if (hbox) { hbox.textContent = ''; hbox.classList.remove('show'); }

  // Reset feedback + next
  document.getElementById('qz-fb').classList.remove('show');
  document.getElementById('qz-next').style.display = 'none';
  S.qAnswered = false;

  // Build answer options
  const opts = document.getElementById('qz-opts');
  opts.innerHTML = '';
  if (q.type === 'tf') {
    opts.className = 'qz-opts g2';
    const bt = _mkBtn('opt-btn opt-true', 'ob-true',  t('qz_true'),  () => checkAnswer('true',  q));
    const bf = _mkBtn('opt-btn opt-fal',  'ob-false', t('qz_false'), () => checkAnswer('false', q));
    opts.appendChild(bt); opts.appendChild(bf);
  } else {
    const isG2 = q.type === 'mc4';
    opts.className = 'qz-opts' + (isG2 ? ' g2' : '');
    const o = (L === 'fr' && q.opts_fr) ? q.opts_fr : q.opts;
    o.forEach((opt, i) => {
      const btn = _mkBtn(`opt-btn ${opt.cls}`, `ob-${i}`, opt.lbl, () => checkAnswer(i, q));
      opts.appendChild(btn);
    });
  }
}

function _mkBtn(cls, id, label, handler) {
  const b = document.createElement('button');
  b.className = cls; b.id = id; b.textContent = label; b.onclick = handler;
  return b;
}

/* ── HINT ── */
function useHint() {
  if (S.hintUsed) return;
  S.hintUsed = true;
  const q    = QUESTIONS[S.qCurrent];
  const L    = S.lang;
  const hint = (L === 'fr' && q.hint_fr) ? q.hint_fr : q.hint;
  const hbox = document.getElementById('qz-hint-box');
  if (hbox) { hbox.textContent = '💡 ' + hint; hbox.classList.add('show'); }
  const hb = document.getElementById('hint-btn');
  if (hb)  { hb.disabled = true; hb.className = 'hint-btn hint-used'; }
}

/* ── CHECK ANSWER ── */
function checkAnswer(ans, q) {
  if (S.qAnswered) return;
  S.qAnswered = true;
  const correct = ans === q.correct;
  if (correct) { S.qScore++; addXP(50); }

  // Highlight buttons
  if (q.type === 'tf') {
    const bt = document.getElementById('ob-true');
    const bf = document.getElementById('ob-false');
    if (bt && bf) {
      bt.disabled = bf.disabled = true;
      if (q.correct === 'true')  { bt.classList.add('correct'); if (!correct) bf.classList.add('wrong'); }
      else                       { bf.classList.add('correct'); if (!correct) bt.classList.add('wrong'); }
    }
  } else {
    const o = (S.lang === 'fr' && q.opts_fr) ? q.opts_fr : q.opts;
    o.forEach((_, i) => {
      const b = document.getElementById('ob-' + i);
      if (b) {
        b.disabled = true;
        if (i === q.correct)           b.classList.add('correct');
        else if (i === ans && !correct) b.classList.add('wrong');
      }
    });
  }

  // Explanation
  const L    = S.lang;
  const expl = (L === 'fr' && q.expl_fr) ? q.expl_fr : q.expl;
  setFeedback(correct ? '✅' : '❌', correct ? 'ok' : 'no', correct ? t('qz_correct') : t('qz_wrong'), expl);

  // Animate star
  if (correct) {
    const stList = document.getElementById('qz-stars').querySelectorAll('.qz-star');
    if (stList[S.qScore - 1]) {
      stList[S.qScore - 1].textContent = '⭐';
      stList[S.qScore - 1].classList.add('earned');
    }
  }

  document.getElementById('qz-next').style.display = 'block';
  save();
}

function setFeedback(ico, cls, title, expl) {
  document.getElementById('fb-ico').textContent   = ico;
  document.getElementById('fb-txt').className     = `fb-txt ${cls}`;
  document.getElementById('fb-title').textContent = title;
  document.getElementById('fb-expl').textContent  = expl;
  document.getElementById('qz-fb').classList.add('show');
}

function nextQ() {
  S.qCurrent++;
  if (S.qCurrent >= QUESTIONS.length) finishQuiz(); else renderQ();
}

/* ── FINISH ── */
function finishQuiz() {
  if (S.quizBest < S.qScore) S.quizBest = S.qScore;
  earn('quiz-starter'); addXP(100);
  if (S.qScore === 5) { earn('ai-genius'); addXP(200); }
  save(); nav('quiz-results'); confetti();
}

/* ── RESULTS ── */
function loadResults() {
  const sc = S.qScore;
  document.getElementById('res-score').textContent = `${sc}/5 ${t('res_correct_sfx')}`;
  const titleEl = document.getElementById('res-title');
  const L = T[S.lang] || T.en;
  if (sc === 5) titleEl.innerHTML    = L.res_genius;
  else          titleEl.textContent  = L.res_titles[sc] || L.res_titles[3];
  document.getElementById('res-stars').textContent = '⭐'.repeat(sc) + '☆'.repeat(5 - sc);
  const xpE = sc * 50 + 100 + (sc === 5 ? 200 : 0);
  document.getElementById('res-xp').textContent = `+${xpE} ${t('res_xp_sfx')}`;
}
