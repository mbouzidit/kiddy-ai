/* ════════════════════════════════════════
   STATE — game state + persistence
════════════════════════════════════════ */

const STORAGE_KEY = 'ailab_v4';

let S = {
  name: '', ava: '🧑', xp: 0, lang: 'en',
  badges: [], missions: [],
  quizBest: -1, trDone: false, trCount: 0,
  qScore: 0, qCurrent: 0, qAnswered: false,
  hintUsed: false, muted: false
};

function save() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(S)); } catch (e) {}
}

function load() {
  try {
    const d = localStorage.getItem(STORAGE_KEY);
    if (d) { S = { ...S, ...JSON.parse(d) }; return true; }
  } catch (e) {}
  return false;
}
