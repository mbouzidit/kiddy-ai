/* ════════════════════════════════════════
   STATE — game state + persistence
════════════════════════════════════════ */

const STORAGE_KEY = 'ailab_v4';

let _mode = 'explorer'; // 'junior' | 'explorer' | 'expert'

function _modeKey() {
  return _mode === 'explorer' ? STORAGE_KEY : STORAGE_KEY + '_' + _mode;
}

function setMode(m) {
  _mode = m;
  try { localStorage.setItem('ailab_mode', m); } catch(e) {}
}

let S = {
  name: '', ava: '🧑', xp: 0, lang: 'en',
  badges: [], missions: [],
  quizBest: -1, quizPlays: 0, trDone: false, trCount: 0,
  qScore: 0, qCurrent: 0, qAnswered: false, qQuestions: [],
  hintUsed: false, muted: false, tts: false
};

function save() {
  try { localStorage.setItem(_modeKey(), JSON.stringify(S)); } catch (e) {}
}

function load() {
  try {
    const d = localStorage.getItem(_modeKey());
    if (d) { S = { ...S, ...JSON.parse(d) }; return true; }
  } catch (e) {}
  return false;
}
