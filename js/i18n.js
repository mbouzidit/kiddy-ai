/* ════════════════════════════════════════
   I18N — translation helpers + language switch
════════════════════════════════════════ */

/** Look up a translation key in the current language, fall back to EN. */
function t(k) {
  return (T[S.lang] || T.en)[k] || T.en[k] || k;
}

/** Set element text by ID (no-op if element not found). */
function _t(id, val) {
  const el = document.getElementById(id);
  if (el && val !== undefined) el.textContent = val;
}

/** Persist language choice and re-render. */
function setLang(l) {
  S.lang = l; save(); applyLang();
}

/** Apply current language to every static translatable element. */
function applyLang() {
  const L = T[S.lang] || T.en;

  // Toggle buttons
  const enBtn = document.getElementById('lang-en');
  const frBtn = document.getElementById('lang-fr');
  enBtn.classList.toggle('active', S.lang === 'en');
  frBtn.classList.toggle('active', S.lang === 'fr');
  enBtn.setAttribute('aria-pressed', S.lang === 'en' ? 'true' : 'false');
  frBtn.setAttribute('aria-pressed', S.lang === 'fr' ? 'true' : 'false');
  enBtn.setAttribute('aria-label', L.a11y_lang_en);
  frBtn.setAttribute('aria-label', L.a11y_lang_fr);
  const muteBtn = document.getElementById('mute-btn');
  if (muteBtn) muteBtn.setAttribute('aria-label', S.muted ? L.a11y_mute_off : L.a11y_mute_on);

  // Mode select
  _t('ms-title', L.ms_title); _t('ms-sub', L.ms_sub);
  _t('ms-junior-lbl', L.ms_junior);     _t('ms-junior-sub', L.ms_junior_sub);
  _t('ms-explorer-lbl', L.ms_explorer); _t('ms-explorer-sub', L.ms_explorer_sub);
  _t('ms-expert-lbl', L.ms_expert);     _t('ms-expert-sub', L.ms_expert_sub);

  // Splash (title uses innerHTML for line break)
  const spTitleEl = document.getElementById('sp-title');
  if (spTitleEl) spTitleEl.innerHTML = L.sp_title;
  _t('sp-sub', L.sp_sub); _t('sp-tag', L.sp_tag); _t('sp-btn', L.sp_btn);

  // Profile
  _t('pr-title', L.pr_title); _t('pr-sub', L.pr_sub);
  _t('pr-ava-lbl', L.pr_ava); _t('profile-go', L.pr_btn);
  const ni = document.getElementById('name-in');
  if (ni) ni.placeholder = L.pr_ph;

  // Dashboard
  _t('d-title', L.d_title);
  _t('dc1', L.dc1); _t('dc2', L.dc2); _t('dc3', L.dc3); _t('dc4', L.dc4);
  _t('d-prog-lbl', L.d_prog_lbl);

  // Missions
  _t('m-title', L.m_title); _t('m-sub', L.m_sub);
  _t('m-h-ttl', L.m_h_ttl); _t('m-h-desc', L.m_h_desc);
  _t('m-p-ttl', L.m_p_ttl); _t('m-p-desc', L.m_p_desc);
  _t('m-s-ttl', L.m_s_ttl); _t('m-s-desc', L.m_s_desc);
  _t('m-bias-ttl', L.m_bias_ttl); _t('m-bias-desc', L.m_bias_desc);
  _t('m-adv-ttl', L.m_adv_ttl);   _t('m-adv-desc', L.m_adv_desc);

  // Training
  _t('tr-title', L.tr_title); _t('tr-sub', L.tr_sub);
  _t('tr-dp-ttl', L.tr_dp);   _t('tr-rp-ttl', L.tr_rp);
  _t('tr-drag-hint', L.tr_hint); _t('tr-added-lbl', L.tr_added);
  _t('drop-lbl', L.tr_drop);
  _t('tr-done-title', L.tr_done_title); _t('tr-done-desc', L.tr_done_desc);
  _t('tr-test-title', L.tr_test_title); _t('tr-test-sub', L.tr_test_sub);

  // Quiz intro
  _t('qi-lbl', L.qi_lbl); _t('qi-title', L.qi_title); _t('qi-sub', L.qi_sub);
  _t('qi-r1', L.qi_r1); _t('qi-r2', L.qi_r2); _t('qi-r3', L.qi_r3); _t('qi-r4', L.qi_r4);
  _t('qi-best-lbl', L.qi_best_lbl); _t('qi-btn', L.qi_btn);

  // Quiz
  _t('qz-title', L.qz_title); _t('qz-next', L.qz_next);
  _t('hint-btn', L.qz_hint_btn);

  // Results
  _t('res-lbl', L.res_lbl); _t('res-play', L.res_play); _t('res-badges', L.res_badges);

  // Badges
  _t('bdg-title', L.bdg_title); _t('bdg-lvl-lbl', L.bdg_lvl_lbl);

  // Dashboard reset
  _t('reset-btn', L.reset_btn);
  _t('reset-confirm-txt', L.reset_confirm);
  _t('reset-cancel-btn', L.reset_cancel);
  _t('reset-yes-btn', L.reset_yes);

  // Bottom nav
  _t('n-home-lbl', L.nav_home); _t('n-mis-lbl', L.nav_mis);
  _t('n-lab-lbl',  L.nav_lab);  _t('n-quiz-lbl', L.nav_quiz); _t('n-bdg-lbl', L.nav_bdg);

  // Re-render the currently active screen
  const cur = document.querySelector('.screen.active');
  if (cur) onLoad(cur.id.replace('screen-', ''));
}
