/* ════════════════════════════════════════
   DATA — translations + all constants
════════════════════════════════════════ */

/* ── TRANSLATIONS ── */
const T = {
en: {
  ms_title:"Who's Playing Today?",
  ms_sub:"Choose your learning level",
  ms_junior:"🐣 Junior", ms_junior_sub:"Ages 4–8 · Simple & fun",
  ms_explorer:"🚀 Explorer", ms_explorer_sub:"Ages 8–12 · Learn & discover",
  ms_expert:"🧠 Expert", ms_expert_sub:"Ages 12–14 · Deep & challenging",
  sp_title:"AI LAB<br>FOR KIDS!",
  sp_sub:"Learn about Artificial Intelligence",
  sp_tag:"⚡ Explore · Train · Quiz · Discover ⚡",
  sp_btn:"🚀 Start Adventure!",
  pr_title:"Who Are You, Explorer?",
  pr_sub:"Enter your name to begin your AI adventure!",
  pr_ph:"Type your name here…",
  pr_ava:"Choose Your Avatar",
  pr_btn:"🚀 Let's Go!",
  d_title:"THE AI LAB DASHBOARD",
  d_sect:"Choose your mission,",
  dc1:"How AI Helps Us", dc2:"Training Workshop",
  dc3:"AI Quiz Challenge", dc4:"Achievement Gallery",
  d_prog_lbl:"Your Progress",
  d_max:"MAX LEVEL — You're an AI Genius! 🌟",
  d_to:"XP to",
  m_title:"🌟 How AI Helps Us",
  m_sub:"Discover the amazing ways AI makes the world better!",
  m_h_ttl:"Health Hero",
  m_h_desc:"AI helps doctors find diseases faster and create new medicines!",
  m_p_ttl:"Planet Protector",
  m_p_desc:"AI helps us save energy, fight climate change, and protect wildlife!",
  m_s_ttl:"Smart Helper",
  m_s_desc:"AI assists people with disabilities and helps everyone live more independently!",
  mis_pill:"+75 XP · Learn More →",
  mis_done:"✅ Completed!",
  mis_btn:"🎯 Complete Mission! (+75 XP)",
  mis_btn_done:"✅ Mission Already Completed!",
  mis_btn_after:"✅ Mission Completed!",
  mis_toast:"Mission Complete! +75 XP 🎉",
  mis_master:"🏆 Mission Master Badge! +100 XP",
  mis_next_planet:"🌱 Next: Planet Protector →",
  mis_next_helper:"🤝 Next: Smart Helper →",
  mis_next_training:"🦾 Next: Training Workshop →",
  tr_next_quiz:"🎯 Next: Take the Quiz! →",
  mg_play:"🎮 Play the Mini-Game!",
  mg_done:"✅ Already Completed!",
  hg_title:"AI Doctor Match! 🩺",
  hg_inst:"Drag a health PROBLEM 🩺 and drop it on its AI SOLUTION!",
  hg_prob:"Health Challenges",
  hg_sol:"AI Solutions",
  hg_done:"🎉 All matched! Amazing work!",
  hg_wrong:"Try again! 💪",
  pg_title:"Sort the AI Solutions! 🌍",
  pg_inst:"Drag each AI tool 🌍 and drop it into the right category!",
  pg_done:"🌍 Planet saved! All sorted!",
  pg_score:"Sorted:",
  sg_title:"Choose the Right AI! 🤝",
  sg_inst:"Pick the best AI tool for this person",
  sg_correct:"Correct! ✅",
  sg_wrong:"Not quite… try again!",
  sg_done:"🤝 You helped everyone!",
  sg_of:"of",
  sg_next:"Next →",
  tr_title:"🤖 Robot Academy",
  tr_sub:"TRAINING BOX: TEACH YOUR ROBOT!",
  tr_dp:"📦 DATA SOURCES",
  tr_rp:"🧠 ROBOT BRAIN",
  tr_hint:"Drag & Drop items to train your robot!",
  tr_added:"ITEMS ADDED:",
  tr_drop:"Drop items here to train!",
  tr_prog:"LEARNING PROGRESS:",
  tr_start:"▶ START TRAINING!",
  tr_going:"⏳ Training in progress…",
  tr_done_btn:"✅ Training Complete!",
  tr_done_title:"Training Complete!",
  tr_done_desc:"Your robot has learned from your data — amazing work!",
  tr_toast:"🎉 Training Complete! +150 XP",
  tr_test_title:"Test Your Robot! 🧪",
  tr_test_sub:"Tap each item to see if your robot recognises it!",
  tr_known:"I know this! 🎉",
  tr_unknown:"Still learning...",
  tr_test_done:"✅ Test done! Robot knows {n}/{t} items!",
  tr_test_done_toast:"🧪 Test complete! {n}/{t} recognised!",
  qi_lbl:"AI Quiz",
  qi_title:"AI Super-Power Quiz!",
  qi_sub:"Test your knowledge about Artificial Intelligence with 5 fun questions!",
  qi_r1:"Earn a star for each correct answer",
  qi_r2:"+50 XP per correct answer",
  qi_r3:"Use the hint button once for a clue",
  qi_r4:"Score 5/5 to earn the AI Genius badge!",
  qi_best_lbl:"Best score:",
  qi_best_none:"Not played yet",
  qi_btn:"🎯 Start Quiz!",
  qz_title:"AI Super-Power Quiz",
  qz_q_of:"of",
  qz_question:"Question",
  qz_true:"✅ TRUE",  qz_false:"❌ FALSE",
  qz_next:"Next Question! →",
  qz_correct:"Correct! +50 XP!",
  qz_wrong:"Not quite…",
  qz_hint_btn:"💡 Hint",
  res_lbl:"🏆 QUIZ RESULTS CELEBRATION",
  res_correct_sfx:"Correct!!",
  res_play:"🔄 Play Again",
  res_badges:"🏅 Go to My Badges",
  res_xp_sfx:"XP Earned! 🎉",
  res_replay_xp:"🔄 Replay Bonus! +25 XP",
  res_titles:["Keep practicing!","Good start!","Getting better!","Well done!","Almost perfect!","You're an AI Genius!"],
  res_genius:"You're an <span class='ai-text'>AI</span> Genius! 🧠",
  bdg_title:"MY SUPER BADGES",
  bdg_lvl_lbl:"🌟 Level:",
  nav_home:"Home", nav_mis:"Missions", nav_lab:"Lab", nav_quiz:"Quiz", nav_bdg:"Badges",
  sparky:[
    "Welcome back, {n}! Ready for a new mission? 🚀",
    "Amazing progress, {n}! Keep exploring! ✨",
    "You're doing great! What shall we learn today? 🤖",
    "The AI world awaits you, {n}! 🌟",
    "Every explorer needs rest — but not you! 💪"
  ],
  d_explorer:"Explorer",
  reset_btn:"🗑️ Reset Progress",
  reset_confirm:"All progress will be lost. Are you sure?",
  reset_cancel:"Cancel",
  reset_yes:"Yes, reset everything",
  welcome:"Welcome, {n}! 🎉 +50 XP",
  badge_prefix:"🏅 Badge earned:",
  a11y_back:"Go back",
  a11y_lang_en:"Switch to English",
  a11y_lang_fr:"Switch to French",
  a11y_mute_on:"Mute sound",
  a11y_mute_off:"Unmute sound",
  a11y_drag_item:"Drag item: {n}",
  a11y_drop_zone:"Robot brain drop zone",
  bs_title:"Spot the Bias! 🔐", bs_inst:"Is this AI decision Biased, Fair, or Uncertain?",
  bs_biased:"🔴 Biased", bs_fair:"🟢 Fair", bs_uncertain:"🟡 Uncertain",
  bs_correct:"Correct! ✅", bs_wrong:"Not quite… 🤔",
  bs_done:"🔐 Bias detected! Well done!", bs_of:"of",
  m_bias_ttl:"Bias Detector", m_bias_desc:"Can you spot when AI is being unfair?",
  adv_title:"Adversarial Challenge! 🎯", adv_inst:"Which change would fool this AI?",
  adv_correct:"You fooled the AI! ✅", adv_wrong:"Not quite — the AI wasn't fooled.",
  adv_done:"🎯 Adversarial Master!", adv_of:"of",
  m_adv_ttl:"Adversarial Challenge", m_adv_desc:"Can you trick an AI into a wrong decision?"
},
fr: {
  ms_title:"Qui joue aujourd'hui ?",
  ms_sub:"Choisis ton niveau d'apprentissage",
  ms_junior:"🐣 Junior", ms_junior_sub:"4–8 ans · Simple et amusant",
  ms_explorer:"🚀 Explorateur", ms_explorer_sub:"8–12 ans · Apprendre et découvrir",
  ms_expert:"🧠 Expert", ms_expert_sub:"12–14 ans · Profond et challengeant",
  sp_title:"AI LAB<br>POUR LES ENFANTS !",
  sp_sub:"Apprends l'Intelligence Artificielle",
  sp_tag:"⚡ Explorer · Entraîner · Quiz · Découvrir ⚡",
  sp_btn:"🚀 Commencer l'aventure !",
  pr_title:"Qui es-tu, Explorateur ?",
  pr_sub:"Entre ton prénom pour commencer ton aventure IA !",
  pr_ph:"Tape ton prénom ici…",
  pr_ava:"Choisis ton avatar",
  pr_btn:"🚀 C'est parti !",
  d_title:"LE TABLEAU DE BORD IA",
  d_sect:"Choisis ta mission,",
  dc1:"Comment l'IA nous aide", dc2:"Atelier d'entraînement",
  dc3:"Défi Quiz IA",           dc4:"Galerie des succès",
  d_prog_lbl:"Ta progression",
  d_max:"NIVEAU MAX — Tu es un Génie IA ! 🌟",
  d_to:"XP pour",
  m_title:"🌟 Comment l'IA nous aide",
  m_sub:"Découvre les façons incroyables dont l'IA rend le monde meilleur !",
  m_h_ttl:"Héros de la Santé",
  m_h_desc:"L'IA aide les médecins à détecter les maladies plus vite et à créer de nouveaux médicaments !",
  m_p_ttl:"Protecteur de la Planète",
  m_p_desc:"L'IA nous aide à économiser l'énergie, à lutter contre le changement climatique et à protéger la faune !",
  m_s_ttl:"Assistant Intelligent",
  m_s_desc:"L'IA aide les personnes handicapées et permet à chacun de vivre plus indépendamment !",
  mis_pill:"+75 XP · En savoir plus →",
  mis_done:"✅ Terminé !",
  mis_btn:"🎯 Terminer la mission ! (+75 XP)",
  mis_btn_done:"✅ Mission déjà terminée !",
  mis_btn_after:"✅ Mission terminée !",
  mis_toast:"Mission accomplie ! +75 XP 🎉",
  mis_master:"🏆 Badge Maître Mission ! +100 XP",
  mis_next_planet:"🌱 Suivant : Protecteur de la Planète →",
  mis_next_helper:"🤝 Suivant : Assistant Intelligent →",
  mis_next_training:"🦾 Suivant : Atelier d'entraînement →",
  tr_next_quiz:"🎯 Suivant : Passe le quiz ! →",
  mg_play:"🎮 Jouer au mini-jeu !",
  mg_done:"✅ Déjà terminé !",
  hg_title:"Associe le Médecin IA ! 🩺",
  hg_inst:"Glisse un PROBLÈME de santé 🩺 et dépose-le sur sa SOLUTION IA !",
  hg_prob:"Défis Santé",
  hg_sol:"Solutions IA",
  hg_done:"🎉 Tout associé ! Bravo !",
  hg_wrong:"Réessaie ! 💪",
  pg_title:"Trie les solutions IA ! 🌍",
  pg_inst:"Glisse chaque outil IA 🌍 et dépose-le dans la bonne catégorie !",
  pg_done:"🌍 Planète sauvée ! Tout trié !",
  pg_score:"Triés :",
  sg_title:"Choisis la bonne IA ! 🤝",
  sg_inst:"Choisis le meilleur outil IA pour cette personne",
  sg_correct:"Correct ! ✅",
  sg_wrong:"Pas tout à fait… réessaie !",
  sg_done:"🤝 Tu as aidé tout le monde !",
  sg_of:"sur",
  sg_next:"Suivant →",
  tr_title:"🤖 Académie des robots",
  tr_sub:"BOÎTE D'ENTRAÎNEMENT : APPRENDS À TON ROBOT !",
  tr_dp:"📦 SOURCES DE DONNÉES",
  tr_rp:"🧠 CERVEAU DU ROBOT",
  tr_hint:"Glisse et dépose des éléments pour entraîner ton robot !",
  tr_added:"ÉLÉMENTS AJOUTÉS :",
  tr_drop:"Dépose les éléments ici pour entraîner !",
  tr_prog:"PROGRESSION :",
  tr_start:"▶ DÉMARRER L'ENTRAÎNEMENT !",
  tr_going:"⏳ Entraînement en cours…",
  tr_done_btn:"✅ Entraînement terminé !",
  tr_done_title:"Entraînement terminé !",
  tr_done_desc:"Ton robot a appris de tes données — travail incroyable !",
  tr_toast:"🎉 Entraînement terminé ! +150 XP",
  tr_test_title:"Teste ton robot ! 🧪",
  tr_test_sub:"Appuie sur chaque élément pour voir si ton robot le reconnaît !",
  tr_known:"Je connais ! 🎉",
  tr_unknown:"J'apprends encore...",
  tr_test_done:"✅ Test terminé ! Le robot connaît {n}/{t} éléments !",
  tr_test_done_toast:"🧪 Test complet ! {n}/{t} reconnus !",
  qi_lbl:"Quiz IA",
  qi_title:"Quiz Super-Pouvoirs IA !",
  qi_sub:"Teste tes connaissances sur l'Intelligence Artificielle avec 5 questions amusantes !",
  qi_r1:"Gagne une étoile pour chaque bonne réponse",
  qi_r2:"+50 XP par bonne réponse",
  qi_r3:"Utilise le bouton indice une fois pour un conseil",
  qi_r4:"Score 5/5 pour gagner le badge Génie IA !",
  qi_best_lbl:"Meilleur score :",
  qi_best_none:"Pas encore joué",
  qi_btn:"🎯 Démarrer le quiz !",
  qz_title:"Quiz Super-Pouvoirs IA",
  qz_q_of:"sur",
  qz_question:"Question",
  qz_true:"✅ VRAI", qz_false:"❌ FAUX",
  qz_next:"Question suivante ! →",
  qz_correct:"Correct ! +50 XP !",
  qz_wrong:"Pas tout à fait…",
  qz_hint_btn:"💡 Indice",
  res_lbl:"🏆 CÉLÉBRATION DES RÉSULTATS",
  res_correct_sfx:"Correct !!",
  res_play:"🔄 Rejouer",
  res_badges:"🏅 Mes badges",
  res_xp_sfx:"XP gagnés ! 🎉",
  res_replay_xp:"🔄 Bonus rejeu ! +25 XP",
  res_titles:["Continue à pratiquer !","Bon début !","Tu progresses !","Bien joué !","Presque parfait !","Tu es un Génie IA !"],
  res_genius:"Tu es un <span class='ai-text'>Génie</span> IA ! 🧠",
  bdg_title:"MES SUPER BADGES",
  bdg_lvl_lbl:"🌟 Niveau :",
  nav_home:"Accueil", nav_mis:"Missions", nav_lab:"Labo", nav_quiz:"Quiz", nav_bdg:"Badges",
  sparky:[
    "Bon retour, {n} ! Prêt·e pour une nouvelle mission ? 🚀",
    "Super progression, {n} ! Continue d'explorer ! ✨",
    "Tu te débrouilles super bien ! Qu'allons-nous apprendre ? 🤖",
    "Le monde de l'IA t'attend, {n} ! 🌟",
    "Chaque explorateur se repose — sauf toi ! 💪"
  ],
  d_explorer:"Explorateur",
  reset_btn:"🗑️ Réinitialiser",
  reset_confirm:"Toute la progression sera perdue. Êtes-vous sûr ?",
  reset_cancel:"Annuler",
  reset_yes:"Oui, tout réinitialiser",
  welcome:"Bienvenue, {n} ! 🎉 +50 XP",
  badge_prefix:"🏅 Badge gagné :",
  a11y_back:"Retour",
  a11y_lang_en:"Passer en anglais",
  a11y_lang_fr:"Passer en français",
  a11y_mute_on:"Couper le son",
  a11y_mute_off:"Activer le son",
  a11y_drag_item:"Élément à glisser : {n}",
  a11y_drop_zone:"Zone de dépôt du cerveau robot",
  bs_title:"Détecte le biais ! 🔐", bs_inst:"Cette décision IA est-elle Biaisée, Équitable ou Incertaine ?",
  bs_biased:"🔴 Biaisé", bs_fair:"🟢 Équitable", bs_uncertain:"🟡 Incertain",
  bs_correct:"Correct ! ✅", bs_wrong:"Pas tout à fait… 🤔",
  bs_done:"🔐 Biais détecté ! Bravo !", bs_of:"sur",
  m_bias_ttl:"Détecteur de biais", m_bias_desc:"Peux-tu repérer quand l'IA est injuste ?",
  adv_title:"Défi adversarial ! 🎯", adv_inst:"Quel changement tromperait cette IA ?",
  adv_correct:"Tu as trompé l'IA ! ✅", adv_wrong:"Pas tout à fait — l'IA n'a pas été trompée.",
  adv_done:"🎯 Maître adversarial !", adv_of:"sur",
  m_adv_ttl:"Défi adversarial", m_adv_desc:"Peux-tu tromper une IA en lui faisant prendre une mauvaise décision ?"
}};

/* ── LEVELS ── */
const LEVELS = [
  { name:'Junior Scientist', name_fr:'Scientifique Junior', min:0    },
  { name:'AI Explorer',      name_fr:'Explorateur IA',      min:200  },
  { name:'Data Detective',   name_fr:'Détective Data',      min:500  },
  { name:'Robot Trainer',    name_fr:'Entraîneur Robot',    min:800  },
  { name:'AI Master',        name_fr:'Maître IA',           min:950  },
  { name:'AI Genius! 🌟',   name_fr:'Génie IA ! 🌟',      min:1300 }
];

/* ── BADGES ── */
const BADGES = [
  { id:'first-steps',    name:'First Steps',    name_fr:'Premiers Pas',      ico:'👣', bg:'#FFF9C4', bdr:'#FFD700' },
  { id:'ai-explorer',    name:'AI Explorer',    name_fr:'Explorateur IA',    ico:'🔭', bg:'#E3F2FD', bdr:'#2196F3' },
  { id:'health-hero',    name:'Health Hero',    name_fr:'Héros Santé',       ico:'❤️',  bg:'#FCE4EC', bdr:'#E91E63' },
  { id:'planet-pro',     name:'Planet Pro',     name_fr:'Pro Planète',       ico:'🌍', bg:'#E8F5E9', bdr:'#4CAF50' },
  { id:'smart-helper',   name:'Smart Helper',   name_fr:'Aide Intelligent',  ico:'🤝', bg:'#FFF3E0', bdr:'#FF9800' },
  { id:'mission-master', name:'Mission Master', name_fr:'Maître Mission',    ico:'🏆', bg:'#F3E5F5', bdr:'#9C27B0' },
  { id:'data-detective', name:'Data Detective', name_fr:'Détective Data',    ico:'🔍', bg:'#E0F7FA', bdr:'#00BCD4' },
  { id:'robot-trainer',  name:'Robot Trainer',  name_fr:'Entraîneur Robot',  ico:'🤖', bg:'#E8EAF6', bdr:'#3F51B5' },
  { id:'quiz-starter',   name:'Quiz Starter',   name_fr:'Lanceur Quiz',      ico:'🎯', bg:'#FBE9E7', bdr:'#FF5722' },
  { id:'ai-genius',      name:'AI Genius',      name_fr:'Génie IA',          ico:'🧠', bg:'#EDE7F6', bdr:'#673AB7' }
];

/* ── AVATARS ── */
const AVATARS = ['🧒','👦','👧','🧑','👩','👨','🧑‍🦱','👩‍🦰','🧑‍🦲','🧒‍♀️','🐱','🐶','🦊','🐼','🦁','🐸','🦋','🦄','🤖','👽'];

/* ── QUIZ QUESTIONS ── */
const QUESTIONS = [
  {
    type:'tf', char:'👨‍⚕️',
    text:    "AI can help doctors find diseases faster and save lives.",
    text_fr: "L'IA peut aider les médecins à détecter les maladies plus vite et sauver des vies.",
    correct: 'true',
    expl:    "Absolutely! AI can analyse thousands of X-rays in seconds, detecting diseases early when treatment is most effective!",
    expl_fr: "Absolument ! L'IA analyse des milliers de radios en quelques secondes, détectant les maladies tôt quand le traitement est le plus efficace !",
    hint:    "Think about what AI is great at — processing huge amounts of data very, very fast!",
    hint_fr: "Pense à ce que l'IA fait très bien — traiter d'énormes quantités de données très rapidement !"
  },
  {
    type:'mc3', char:'🚗',
    text:    "Which of these is NOT powered by AI?",
    text_fr: "Laquelle de ces choses N'EST PAS propulsée par l'IA ?",
    opts:    [{ lbl:'🚗 Self-driving Car', cls:'opt-blu' }, { lbl:'🌳 Magical Talking Tree', cls:'opt-grn' }, { lbl:'📱 Smartphone Voice Assistant', cls:'opt-org' }],
    opts_fr: [{ lbl:'🚗 Voiture autonome', cls:'opt-blu' }, { lbl:'🌳 Arbre magique parlant', cls:'opt-grn' }, { lbl:'📱 Assistant vocal smartphone', cls:'opt-org' }],
    correct: 1,
    expl:    "Magical talking trees don't exist! But self-driving cars and voice assistants really do use AI!",
    expl_fr: "Les arbres magiques parlants n'existent pas ! Mais les voitures autonomes et les assistants vocaux utilisent vraiment l'IA !",
    hint:    "One of these options is completely made up and from a fairy tale!",
    hint_fr: "L'une de ces options est complètement inventée et vient d'un conte de fées !"
  },
  {
    type:'mc4', char:'🤖',
    text:    "What kind of AI helps a robot learn to move through trial and error?",
    text_fr: "Quel type d'IA aide un robot à apprendre à se déplacer par essais et erreurs ?",
    opts:    [{ lbl:'🧠 Reinforcement Learning', cls:'opt-grn' }, { lbl:'👁️ Computer Vision', cls:'opt-yel' }, { lbl:'🗣️ Speech Recognition', cls:'opt-red' }, { lbl:'🌍 Translation AI', cls:'opt-pur' }],
    opts_fr: [{ lbl:'🧠 Apprentissage par renforcement', cls:'opt-grn' }, { lbl:'👁️ Vision par ordinateur', cls:'opt-yel' }, { lbl:'🗣️ Reconnaissance vocale', cls:'opt-red' }, { lbl:'🌍 Traduction IA', cls:'opt-pur' }],
    correct: 0,
    expl:    "Reinforcement Learning! The robot tries, fails, learns, and keeps improving — just like learning to ride a bike!",
    expl_fr: "L'apprentissage par renforcement ! Le robot essaie, échoue, apprend et progresse — comme apprendre à faire du vélo !",
    hint:    "The name contains the word 'learning' and sounds like a reward/punishment system.",
    hint_fr: "Le nom contient le mot 'apprentissage' et ressemble à un système de récompenses/punitions."
  },
  {
    type:'tf', char:'📱',
    text:    "AI can only be found in robots and computers.",
    text_fr: "L'IA ne peut se trouver que dans les robots et les ordinateurs.",
    correct: 'false',
    expl:    "False! AI is everywhere: in your phone, music apps, video games, smart speakers, and even in cars!",
    expl_fr: "Faux ! L'IA est partout : dans ton téléphone, les applis de musique, les jeux vidéo, les enceintes connectées et même dans les voitures !",
    hint:    "Look at the device you're using right now — does it have AI inside?",
    hint_fr: "Regarde l'appareil que tu utilises en ce moment — y a-t-il de l'IA à l'intérieur ?"
  },
  {
    type:'mc3', char:'🐱',
    text:    "How does AI 'learn' to recognise a cat in a photo?",
    text_fr: "Comment l'IA 'apprend'-elle à reconnaître un chat sur une photo ?",
    opts:    [{ lbl:'🎲 By random guessing', cls:'opt-red' }, { lbl:'📸 By seeing millions of cat photos', cls:'opt-grn' }, { lbl:'📖 By reading books about cats', cls:'opt-blu' }],
    opts_fr: [{ lbl:'🎲 Par hasard', cls:'opt-red' }, { lbl:'📸 En voyant des millions de photos de chats', cls:'opt-grn' }, { lbl:'📖 En lisant des livres sur les chats', cls:'opt-blu' }],
    correct: 1,
    expl:    "AI learns by looking at millions of examples! The more cat photos it sees, the better it gets. Practice makes perfect!",
    expl_fr: "L'IA apprend en regardant des millions d'exemples ! Plus elle voit de photos de chats, plus elle devient douée. C'est la pratique qui fait le maître !",
    hint:    "Think about how you learned to recognise things as a baby — by seeing them many, many times!",
    hint_fr: "Pense à comment tu as appris à reconnaître les choses quand tu étais petit — en les voyant des milliers de fois !"
  },
  {
    type:'tf', char:'🎨',
    text:    "AI can create music, paintings, and stories all by itself.",
    text_fr: "L'IA peut créer de la musique, des peintures et des histoires toute seule.",
    correct: 'true',
    expl:    "Yes! Generative AI tools can produce songs, artwork, and creative writing from a simple text description. The future is creative!",
    expl_fr: "Oui ! Les outils IA génératifs peuvent produire des chansons, des œuvres d'art et de l'écriture créative à partir d'une simple description. L'avenir est créatif !",
    hint:    "Think about apps like DALL·E that make images — or AI music generators that compose songs!",
    hint_fr: "Pense aux applis comme DALL·E qui créent des images — ou aux générateurs de musique IA qui composent des chansons !"
  },
  {
    type:'mc3', char:'🤖',
    text:    "What is machine learning?",
    text_fr: "Qu'est-ce que l'apprentissage automatique ?",
    opts:    [{ lbl:'📺 Fixing broken machines',            cls:'opt-red' }, { lbl:'🤖 Teaching computers to learn from data', cls:'opt-grn' }, { lbl:'🎓 Running a school for robots', cls:'opt-blu' }],
    opts_fr: [{ lbl:'📺 Réparer des machines cassées',       cls:'opt-red' }, { lbl:'🤖 Apprendre aux ordinateurs à partir de données', cls:'opt-grn' }, { lbl:'🎓 Gérer une école pour robots', cls:'opt-blu' }],
    correct: 1,
    expl:    "Machine learning means giving computers examples so they can figure out the rules themselves — instead of programming every rule by hand!",
    expl_fr: "L'apprentissage automatique consiste à donner des exemples aux ordinateurs pour qu'ils trouvent les règles eux-mêmes — sans les programmer une par une !",
    hint:    "The word 'learning' is the clue — it's about computers improving on their own from experience.",
    hint_fr: "Le mot 'apprentissage' est l'indice — il s'agit d'ordinateurs qui s'améliorent seuls grâce à l'expérience."
  },
  {
    type:'tf', char:'⚠️',
    text:    "AI always makes perfect decisions and never makes mistakes.",
    text_fr: "L'IA prend toujours des décisions parfaites et ne fait jamais d'erreurs.",
    correct: 'false',
    expl:    "False! AI can be wrong, biased, or confused — especially if its training data was poor or incomplete. That's why humans must stay in charge!",
    expl_fr: "Faux ! L'IA peut se tromper, être biaisée ou confuse — surtout si ses données d'entraînement étaient mauvaises. C'est pourquoi les humains doivent rester aux commandes !",
    hint:    "Think about spam filters — do they ever let a real email through to your junk folder by mistake?",
    hint_fr: "Pense aux filtres anti-spam — est-ce qu'un vrai email finit parfois dans les spams par erreur ?"
  },
  {
    type:'mc4', char:'📱',
    text:    "Which AI skill lets your phone understand your spoken words?",
    text_fr: "Quelle compétence IA permet à ton téléphone de comprendre tes mots prononcés ?",
    opts:    [{ lbl:'👁️ Computer Vision', cls:'opt-yel' }, { lbl:'🗣️ Speech Recognition', cls:'opt-grn' }, { lbl:'🌍 Translation AI', cls:'opt-pur' }, { lbl:'🧠 Reinforcement Learning', cls:'opt-red' }],
    opts_fr: [{ lbl:'👁️ Vision par ordinateur', cls:'opt-yel' }, { lbl:'🗣️ Reconnaissance vocale', cls:'opt-grn' }, { lbl:'🌍 Traduction IA', cls:'opt-pur' }, { lbl:'🧠 Apprentissage par renforcement', cls:'opt-red' }],
    correct: 1,
    expl:    "Speech Recognition! AI listens to the sound waves of your voice and converts them into words — that's how Siri, Alexa, and Google Assistant work!",
    expl_fr: "La reconnaissance vocale ! L'IA écoute les ondes sonores de ta voix et les convertit en mots — c'est ainsi que fonctionnent Siri, Alexa et Google Assistant !",
    hint:    "The answer literally describes what it does — it 'recognises' something you do with your mouth!",
    hint_fr: "La réponse décrit littéralement ce qu'elle fait — elle 'reconnaît' quelque chose que tu fais avec ta bouche !"
  },
  {
    type:'mc3', char:'🎵',
    text:    "How does a music app know which songs you will enjoy?",
    text_fr: "Comment une appli de musique sait-elle quelles chansons tu vas apprécier ?",
    opts:    [{ lbl:'🎲 Random selection',                cls:'opt-red' }, { lbl:'📊 AI analyses your listening history', cls:'opt-grn' }, { lbl:'📞 It asks your friends',           cls:'opt-blu' }],
    opts_fr: [{ lbl:'🎲 Sélection aléatoire',              cls:'opt-red' }, { lbl:'📊 L\'IA analyse ton historique d\'écoute', cls:'opt-grn' }, { lbl:'📞 Elle demande à tes amis',        cls:'opt-blu' }],
    correct: 1,
    expl:    "Recommendation AI! It looks at every song you've played, skipped, or liked to predict what you'll enjoy next. That's why playlists feel made just for you!",
    expl_fr: "L'IA de recommandation ! Elle analyse chaque chanson que tu as écoutée, passée ou aimée pour prédire ce qui te plaira. C'est pourquoi les playlists semblent faites pour toi !",
    hint:    "The app already knows everything you've been listening to — what would it do with that information?",
    hint_fr: "L'appli connaît déjà tout ce que tu as écouté — que ferait-elle avec cette information ?"
  }
];

/* ── MISSIONS DATA ── */
const MISSIONS_DATA = {
  health: {
    id:'health', badge:'health-hero',
    grad:'linear-gradient(135deg,#0D47A1,#42A5F5)',
    title:'Health Hero', title_fr:'Héros de la Santé', ico:'🏥',
    facts: [
      { ico:'🔬', h:'Disease Detection', t:"AI analyses medical images 100× faster than doctors, detecting cancer and other diseases early when treatment is most effective!" },
      { ico:'💊', h:'Drug Discovery',    t:"AI systems can test millions of potential medicines in days — a process that used to take scientists years. Faster cures for everyone!" },
      { ico:'🏃', h:'Fitness Coach',     t:"AI in smartwatches monitors your heart rate, steps and sleep, giving you personalised health tips to stay fit and healthy!" },
      { ico:'🤖', h:'Surgery Robots',    t:"AI-guided robots help surgeons perform incredibly precise operations, making surgery safer and helping patients recover faster." }
    ],
    facts_fr: [
      { ico:'🔬', h:'Détection de maladies',     t:"L'IA analyse les images médicales 100× plus vite que les médecins, détectant les cancers tôt quand le traitement est le plus efficace !" },
      { ico:'💊', h:'Découverte de médicaments', t:"Les systèmes IA peuvent tester des millions de médicaments potentiels en quelques jours — un processus qui prenait des années aux scientifiques !" },
      { ico:'🏃', h:'Coach sportif',             t:"L'IA dans les montres connectées surveille ton rythme cardiaque, tes pas et ton sommeil, te donnant des conseils de santé personnalisés !" },
      { ico:'🤖', h:'Robots chirurgiens',         t:"Les robots guidés par IA aident les chirurgiens à effectuer des opérations incroyablement précises, rendant la chirurgie plus sûre." }
    ],
    game: 'health'
  },
  planet: {
    id:'planet', badge:'planet-pro',
    grad:'linear-gradient(135deg,#1B5E20,#66BB6A)',
    title:'Planet Protector', title_fr:'Protecteur de la Planète', ico:'🌱',
    facts: [
      { ico:'⚡',  h:'Smart Energy',       t:"AI manages electricity grids to use solar and wind power more efficiently, reducing pollution and cutting energy waste!" },
      { ico:'🌊',  h:'Ocean Protection',   t:"AI-powered drones scan the oceans to track plastic pollution and monitor endangered marine species, protecting sea life!" },
      { ico:'🌡️', h:'Climate Prediction', t:"AI analyses weather data to predict climate changes more accurately, helping scientists and governments take action sooner!" },
      { ico:'🐘',  h:'Wildlife Guardian',  t:"AI cameras in national parks detect poachers and track endangered animals in real time, helping protect wildlife worldwide!" }
    ],
    facts_fr: [
      { ico:'⚡',  h:'Énergie intelligente',  t:"L'IA gère les réseaux électriques pour utiliser l'énergie solaire et éolienne plus efficacement, réduisant la pollution !" },
      { ico:'🌊',  h:'Protection des océans', t:"Des drones pilotés par IA scannent les océans pour suivre la pollution plastique et surveiller les espèces marines menacées !" },
      { ico:'🌡️', h:'Prévision climatique',  t:"L'IA analyse les données météo pour prédire les changements climatiques avec plus de précision, aidant à agir plus vite !" },
      { ico:'🐘',  h:'Gardien de la faune',   t:"Des caméras IA dans les parcs nationaux détectent les braconniers et suivent les animaux menacés en temps réel !" }
    ],
    game: 'planet'
  },
  helper: {
    id:'helper', badge:'smart-helper',
    grad:'linear-gradient(135deg,#E65100,#FFA726)',
    title:'Smart Helper', title_fr:'Assistant Intelligent', ico:'🤝',
    facts: [
      { ico:'👁️', h:'Vision Assistant', t:"AI can describe pictures and read text aloud for people who are blind or have low vision, helping them navigate the world independently!" },
      { ico:'🗣️', h:'Voice Control',    t:"AI voice assistants let people with mobility challenges control their phones, computers and even smart homes entirely with their voice!" },
      { ico:'🧠', h:'Learning Support', t:"AI tutoring apps adapt to each student's learning style, providing extra help for students with dyslexia, ADHD or other learning differences!" },
      { ico:'🚗', h:'Smart Mobility',   t:"Self-driving car technology gives independence to elderly people and those with disabilities who cannot drive traditional cars!" }
    ],
    facts_fr: [
      { ico:'👁️', h:'Assistant visuel',          t:"L'IA peut décrire des images et lire des textes à voix haute pour les personnes aveugles, les aidant à naviguer de façon autonome !" },
      { ico:'🗣️', h:'Commande vocale',            t:"Les assistants vocaux IA permettent aux personnes à mobilité réduite de contrôler leur téléphone et maison connectée avec la voix !" },
      { ico:'🧠', h:"Soutien à l'apprentissage",  t:"Les applis de tutorat IA s'adaptent au style d'apprentissage de chaque élève, aidant les élèves dyslexiques ou ayant un TDAH !" },
      { ico:'🚗', h:'Mobilité intelligente',      t:"La technologie des voitures autonomes offre de l'indépendance aux personnes âgées et handicapées qui ne peuvent pas conduire !" }
    ],
    game: 'helper'
  }
};

/* ── HEALTH MATCH GAME DATA ── */
const HEALTH_PAIRS = [
  { prob:{ ico:'🔬', en:'Cancer in X-ray',   fr:'Cancer en radio'        }, sol:{ ico:'💻', en:'AI Image Scanner',    fr:"Scanner IA d'images"     } },
  { prob:{ ico:'💊', en:'No medicine yet',   fr:'Pas encore de remède'   }, sol:{ ico:'🧪', en:'AI Drug Discovery',   fr:'Découverte méd. IA'      } },
  { prob:{ ico:'❤️', en:'Heart rate risk',   fr:'Risque cardiaque'       }, sol:{ ico:'⌚', en:'AI Smart Watch',      fr:'Montre connectée IA'     } },
  { prob:{ ico:'🏥', en:'Complex surgery',   fr:'Chirurgie complexe'     }, sol:{ ico:'🤖', en:'AI Surgery Robot',    fr:'Robot chirurgien IA'     } }
];

/* ── PLANET SORT GAME DATA ── */
const PLANET_CATS = [
  { ico:'⚡', en:'Energy',   fr:'Énergie',  color:'#E65100', bg:'#FFF3E0' },
  { ico:'🌊', en:'Oceans',   fr:'Océans',   color:'#0277BD', bg:'#E3F2FD' },
  { ico:'🐘', en:'Wildlife', fr:'Faune',    color:'#2E7D32', bg:'#E8F5E9' }
];
const PLANET_ITEMS = [
  { ico:'☀️',  en:'Solar Optimizer',    fr:'Optimiseur solaire',       cat:0 },
  { ico:'💨',  en:'Wind AI Grid',        fr:'Réseau éolien IA',         cat:0 },
  { ico:'🌡️', en:'CO₂ Monitor',         fr:'Moniteur CO₂',             cat:0 },
  { ico:'🚁',  en:'Plastic Drone',       fr:'Drone anti-plastique',     cat:1 },
  { ico:'🐢',  en:'Turtle Tracker',      fr:'Traceur de tortue',        cat:1 },
  { ico:'🪸',  en:'Coral Monitor',       fr:'Moniteur corail',          cat:1 },
  { ico:'📷',  en:'Anti-Poaching Cam',   fr:"Caméra anti-braconnage",   cat:2 },
  { ico:'🦁',  en:'Species Tracker',     fr:"Suivi d'espèces",          cat:2 },
  { ico:'🔥',  en:'Fire Detector',       fr:"Détecteur d'incendies",    cat:2 }
];

/* ── HELPER SCENARIO GAME DATA ── */
const HELPER_SCENARIOS = [
  {
    char:'👩‍🦯',
    en:"Maria is blind and wants to read a restaurant menu.",
    fr:"Maria est aveugle et veut lire un menu au restaurant.",
    opts:[
      { en:'🗺️ GPS Navigation',    fr:'🗺️ Navigation GPS',    ok:false },
      { en:'👁️ AI Vision Reader',  fr:'👁️ Lecteur IA Vision', ok:true  },
      { en:'🤖 Cooking Robot',      fr:'🤖 Robot cuisinier',   ok:false }
    ],
    expl:{ en:"AI Vision tools read text and describe images aloud, giving blind users full independence!",
           fr:"Les outils IA Vision lisent les textes et décrivent les images à voix haute, donnant une pleine autonomie !" }
  },
  {
    char:'👨‍🦽',
    en:"Tom uses a wheelchair and wants to control his smart home.",
    fr:"Tom est en fauteuil roulant et veut contrôler sa maison intelligente.",
    opts:[
      { en:'⌨️ Special Keyboard', fr:'⌨️ Clavier spécial',    ok:false },
      { en:'🗣️ AI Voice Control', fr:'🗣️ Commande vocale IA', ok:true  },
      { en:'📱 Touchscreen App',  fr:'📱 Appli tactile',       ok:false }
    ],
    expl:{ en:"AI voice assistants let you control everything with just your voice — no hands needed!",
           fr:"Les assistants vocaux IA permettent de tout contrôler avec la voix — sans les mains !" }
  },
  {
    char:'👧',
    en:"Sara has dyslexia and finds reading very hard at school.",
    fr:"Sara a de la dyslexie et trouve la lecture très difficile à l'école.",
    opts:[
      { en:'🧠 AI Tutor App',   fr:'🧠 Appli tuteur IA', ok:true  },
      { en:'📺 Cartoon Videos', fr:'📺 Vidéos cartoon',  ok:false },
      { en:'🎮 Video Games',    fr:'🎮 Jeux vidéo',      ok:false }
    ],
    expl:{ en:"AI tutoring apps adapt to each child's learning style, making reading easier for every student!",
           fr:"Les applis tuteur IA s'adaptent au style de chaque enfant, rendant la lecture plus facile pour tous !" }
  }
];

/* ── TRAINING EMOJIS ── */
const DRAG_EMOJIS = ['🍎','🥕','🍌','🥦','🍊','🫐','🍇','🥝'];

/* ════════════════════════════════════════
   MODE-SPECIFIC DATA
════════════════════════════════════════ */

/* ── LEVELS BY MODE ── */
const LEVELS_JUNIOR = [
  { name:'Little Explorer',   name_fr:'Petit Explorateur',   min:0   },
  { name:'AI Discoverer',     name_fr:'Découvreur IA',       min:100 },
  { name:'Junior Scientist',  name_fr:'Scientifique Junior', min:250 },
  { name:'AI Star! ⭐',       name_fr:'Étoile IA ! ⭐',     min:450 }
];
const LEVELS_EXPERT = [
  { name:'Curious Coder',       name_fr:'Codeur Curieux',       min:0    },
  { name:'AI Explorer',         name_fr:'Explorateur IA',       min:200  },
  { name:'Data Detective',      name_fr:'Détective Data',       min:500  },
  { name:'Algorithm Architect', name_fr:'Architecte Algo',      min:900  },
  { name:'Neural Engineer',     name_fr:'Ingénieur Neural',     min:1300 },
  { name:'Ethics Guardian',     name_fr:'Gardien Éthique',      min:1700 },
  { name:'AI Visionary! 🌟',   name_fr:'Visionnaire IA ! 🌟',  min:2100 }
];
const LEVELS_BY_MODE = { junior: LEVELS_JUNIOR, explorer: LEVELS, expert: LEVELS_EXPERT };

/* ── JUNIOR QUIZ QUESTIONS ── */
const QUESTIONS_JUNIOR = [
  {
    type:'tf', char:'👨‍⚕️',
    text:    "AI can help doctors find sickness really fast. True or False?",
    text_fr: "L'IA peut aider les médecins à trouver des maladies vraiment vite. Vrai ou Faux ?",
    correct: 'true',
    expl:    "Yes! AI looks at doctor pictures super fast and finds problems right away!",
    expl_fr: "Oui ! L'IA regarde les images médicales super vite et trouve les problèmes tout de suite !",
    hint:    "Think about a super-fast helper that looks at pictures!",
    hint_fr: "Pense à un super assistant qui regarde des images très vite !"
  },
  {
    type:'tf', char:'📱',
    text:    "Your phone understands your voice because of AI. True or False?",
    text_fr: "Ton téléphone comprend ta voix grâce à l'IA. Vrai ou Faux ?",
    correct: 'true',
    expl:    "True! AI in your phone listens to you and understands what you say!",
    expl_fr: "Vrai ! L'IA dans ton téléphone t'écoute et comprend ce que tu dis !",
    hint:    "When you talk to Siri or Google — something smart is listening!",
    hint_fr: "Quand tu parles à Siri ou Google — quelque chose d'intelligent t'écoute !"
  },
  {
    type:'mc3', char:'🤖',
    text:    "How does a robot learn new things?",
    text_fr: "Comment un robot apprend-il de nouvelles choses ?",
    opts:    [{ lbl:'😴 It sleeps a lot', cls:'opt-red' }, { lbl:'🔄 By trying again and again', cls:'opt-grn' }, { lbl:'📺 By watching cartoons', cls:'opt-blu' }],
    opts_fr: [{ lbl:'😴 Il dort beaucoup', cls:'opt-red' }, { lbl:'🔄 En essayant encore et encore', cls:'opt-grn' }, { lbl:'📺 En regardant des dessins animés', cls:'opt-blu' }],
    correct: 1,
    expl:    "Robots learn by trying, making mistakes, and trying again — just like you!",
    expl_fr: "Les robots apprennent en essayant, en faisant des erreurs et en réessayant — comme toi !",
    hint:    "Think about how YOU learned to ride a bike!",
    hint_fr: "Pense à comment TU as appris à faire du vélo !"
  },
  {
    type:'tf', char:'💻',
    text:    "AI is only found in big computers. True or False?",
    text_fr: "L'IA se trouve uniquement dans les gros ordinateurs. Vrai ou Faux ?",
    correct: 'false',
    expl:    "False! AI is in your phone, tablet, toys, and even your TV!",
    expl_fr: "Faux ! L'IA est dans ton téléphone, ta tablette, tes jouets et même ta télé !",
    hint:    "Look around you — AI is hiding in many devices!",
    hint_fr: "Regarde autour de toi — l'IA se cache dans plein d'appareils !"
  },
  {
    type:'tf', char:'🎨',
    text:    "AI can make songs and drawings all by itself. True or False?",
    text_fr: "L'IA peut faire des chansons et des dessins toute seule. Vrai ou Faux ?",
    correct: 'true',
    expl:    "Yes! AI can draw pictures and make music — how cool is that?",
    expl_fr: "Oui ! L'IA peut dessiner des images et créer de la musique — c'est super !",
    hint:    "AI is very creative — it can make art just like you!",
    hint_fr: "L'IA est très créative — elle peut faire de l'art comme toi !"
  }
];

/* ── EXPERT QUIZ QUESTIONS ── */
const QUESTIONS_EXPERT = [
  {
    type:'mc4', char:'⚖️',
    text:    "What is AI bias?",
    text_fr: "Qu'est-ce que le biais de l'IA ?",
    opts:    [{ lbl:'🤖 A robot with a bad attitude', cls:'opt-red' }, { lbl:'📊 Unfair patterns from bad training data', cls:'opt-grn' }, { lbl:'💾 A software bug', cls:'opt-yel' }, { lbl:'🔋 Low battery issue', cls:'opt-pur' }],
    opts_fr: [{ lbl:'🤖 Un robot de mauvaise humeur', cls:'opt-red' }, { lbl:'📊 Des schémas injustes issus de mauvaises données', cls:'opt-grn' }, { lbl:'💾 Un bug logiciel', cls:'opt-yel' }, { lbl:'🔋 Problème de batterie', cls:'opt-pur' }],
    correct: 1,
    expl:    "AI bias happens when training data reflects unfair patterns, causing the AI to make unfair decisions — e.g. hiring AIs that favour certain groups.",
    expl_fr: "Le biais IA survient quand les données d'entraînement reflètent des schémas injustes, ce qui amène l'IA à prendre des décisions injustes — ex. les IA de recrutement qui favorisent certains groupes.",
    hint:    "The issue starts before the AI is even built — with the data it learns from.",
    hint_fr: "Le problème commence avant même que l'IA soit construite — avec les données qu'elle utilise."
  },
  {
    type:'tf', char:'🧠',
    text:    "Neural networks work exactly like the human brain.",
    text_fr: "Les réseaux de neurones fonctionnent exactement comme le cerveau humain.",
    correct: 'false',
    expl:    "False! Neural networks are inspired by the brain, but they work very differently — they're math operations, not biological neurons.",
    expl_fr: "Faux ! Les réseaux de neurones s'inspirent du cerveau, mais fonctionnent très différemment — ce sont des opérations mathématiques, pas des neurones biologiques.",
    hint:    "Inspired by ≠ identical to. Think of how a plane is inspired by birds but doesn't flap its wings.",
    hint_fr: "Inspiré de ≠ identique à. Comme un avion inspiré des oiseaux mais sans battre des ailes."
  },
  {
    type:'mc4', char:'👁️',
    text:    "What is an adversarial example in AI?",
    text_fr: "Qu'est-ce qu'un exemple contradictoire en IA ?",
    opts:    [{ lbl:'😡 A user who argues with an AI', cls:'opt-red' }, { lbl:'🖼️ An image with tiny changes that tricks an AI', cls:'opt-grn' }, { lbl:'🔴 A training data error', cls:'opt-yel' }, { lbl:'🤝 Two AIs working together', cls:'opt-pur' }],
    opts_fr: [{ lbl:'😡 Un utilisateur qui contredit une IA', cls:'opt-red' }, { lbl:'🖼️ Image avec mini-changements qui trompe une IA', cls:'opt-grn' }, { lbl:'🔴 Une erreur dans les données', cls:'opt-yel' }, { lbl:'🤝 Deux IA qui coopèrent', cls:'opt-pur' }],
    correct: 1,
    expl:    "Adversarial examples are inputs with small, invisible changes that fool the AI into making a wrong prediction — a serious safety concern!",
    expl_fr: "Les exemples contradictoires sont des entrées avec de petits changements invisibles qui trompent l'IA — un problème de sécurité sérieux !",
    hint:    "Imagine adding invisible noise to a STOP sign photo so an AI reads it as a SPEED LIMIT sign.",
    hint_fr: "Imagine ajouter du bruit invisible à une photo de panneau STOP pour que l'IA le lise comme une limite de vitesse."
  },
  {
    type:'mc3', char:'📈',
    text:    "What is overfitting in machine learning?",
    text_fr: "Qu'est-ce que le surapprentissage en apprentissage automatique ?",
    opts:    [{ lbl:'🏋️ Training for too long', cls:'opt-red' }, { lbl:'🧠 AI memorises training data and fails on new data', cls:'opt-grn' }, { lbl:'📦 Too much data in memory', cls:'opt-blu' }],
    opts_fr: [{ lbl:'🏋️ S\'entraîner trop longtemps', cls:'opt-red' }, { lbl:'🧠 L\'IA mémorise les données et échoue sur les nouvelles', cls:'opt-grn' }, { lbl:'📦 Trop de données en mémoire', cls:'opt-blu' }],
    correct: 1,
    expl:    "Overfitting means the AI memorised its training examples too closely and can't generalise to new situations — like a student who memorises answers but fails real questions.",
    expl_fr: "Le surapprentissage signifie que l'IA a mémorisé ses exemples de trop près et ne peut pas généraliser — comme un élève qui mémorise les réponses mais échoue aux vraies questions.",
    hint:    "It's like studying only past exam papers and being lost when a new question appears.",
    hint_fr: "C'est comme étudier uniquement les anciens examens et être perdu face à une nouvelle question."
  },
  {
    type:'tf', char:'🗣️',
    text:    "Natural Language Processing (NLP) lets AI understand and generate human language.",
    text_fr: "Le traitement du langage naturel (NLP) permet à l'IA de comprendre et de générer le langage humain.",
    correct: 'true',
    expl:    "True! NLP is the AI field behind chatbots, translation apps, voice assistants, and text summarisers.",
    expl_fr: "Vrai ! Le NLP est le domaine IA derrière les chatbots, les applis de traduction, les assistants vocaux et les résumeurs de texte.",
    hint:    "Think of all the AI tools that deal with text or speech — they all use this technology.",
    hint_fr: "Pense à tous les outils IA qui traitent du texte ou de la parole — ils utilisent tous cette technologie."
  },
  {
    type:'mc4', char:'🤳',
    text:    "Why does facial recognition sometimes fail on darker skin tones?",
    text_fr: "Pourquoi la reconnaissance faciale échoue-t-elle parfois sur les peaux foncées ?",
    opts:    [{ lbl:'📡 Poor internet connection', cls:'opt-red' }, { lbl:'💡 Lower lighting in training photos', cls:'opt-yel' }, { lbl:'📊 Biased training data with fewer dark-skin images', cls:'opt-grn' }, { lbl:'🔋 Hardware limitations', cls:'opt-pur' }],
    opts_fr: [{ lbl:'📡 Mauvaise connexion internet', cls:'opt-red' }, { lbl:'💡 Moins bonne luminosité des photos', cls:'opt-yel' }, { lbl:'📊 Données biaisées avec moins d\'images de peaux foncées', cls:'opt-grn' }, { lbl:'🔋 Limitations matérielles', cls:'opt-pur' }],
    correct: 2,
    expl:    "Training datasets had far more images of lighter-skinned people. AI trained on that data performs worse on underrepresented groups — a real-world bias problem.",
    expl_fr: "Les ensembles de données avaient bien plus d'images de personnes à peau claire. L'IA entraînée sur ces données performe moins bien sur les groupes sous-représentés.",
    hint:    "The AI can only be as fair as the data it learns from.",
    hint_fr: "L'IA ne peut être qu'aussi équitable que les données sur lesquelles elle apprend."
  },
  {
    type:'mc3', char:'🔄',
    text:    "What is transfer learning?",
    text_fr: "Qu'est-ce que le transfert d'apprentissage ?",
    opts:    [{ lbl:'💾 Moving files between computers', cls:'opt-red' }, { lbl:'♻️ Reusing an AI model trained on one task for another', cls:'opt-grn' }, { lbl:'🤝 Two AIs sharing data in real time', cls:'opt-blu' }],
    opts_fr: [{ lbl:'💾 Déplacer des fichiers entre ordinateurs', cls:'opt-red' }, { lbl:'♻️ Réutiliser un modèle IA d\'une tâche pour une autre', cls:'opt-grn' }, { lbl:'🤝 Deux IA qui partagent des données en temps réel', cls:'opt-blu' }],
    correct: 1,
    expl:    "Transfer learning reuses knowledge from a pretrained model — e.g. a language model trained on books can be fine-tuned quickly for customer service.",
    expl_fr: "Le transfert d'apprentissage réutilise les connaissances d'un modèle pré-entraîné — ex. un modèle de langue entraîné sur des livres peut être affiné rapidement pour le service client.",
    hint:    "Think of a musician who already knows music theory learning a new instrument much faster.",
    hint_fr: "C'est comme un musicien qui connaît déjà la théorie musicale et apprend un nouvel instrument bien plus vite."
  },
  {
    type:'tf', char:'🎭',
    text:    "AI systems are always objective and free from human bias.",
    text_fr: "Les systèmes IA sont toujours objectifs et exempts de biais humains.",
    correct: 'false',
    expl:    "False! AI reflects the data it was trained on — and data is created by humans. Human bias and historical inequalities end up embedded in AI.",
    expl_fr: "Faux ! L'IA reflète les données sur lesquelles elle a été entraînée — et ces données sont créées par des humains. Les biais humains et les inégalités historiques se retrouvent dans l'IA.",
    hint:    "GIGO — Garbage In, Garbage Out. If the data is biased, the AI will be too.",
    hint_fr: "GIGO — Données biaisées entrent, décisions biaisées sortent. Si les données sont biaisées, l'IA le sera aussi."
  },
  {
    type:'mc3', char:'♟️',
    text:    "What does an AI need to master a complex game like chess?",
    text_fr: "De quoi a besoin une IA pour maîtriser un jeu complexe comme les échecs ?",
    opts:    [{ lbl:'📖 A rule book and a smart programmer', cls:'opt-red' }, { lbl:'🎮 Millions of games + trial and error feedback', cls:'opt-grn' }, { lbl:'🏆 Watching human champions play once', cls:'opt-blu' }],
    opts_fr: [{ lbl:'📖 Un livre de règles et un programmeur', cls:'opt-red' }, { lbl:'🎮 Des millions de parties + retour d\'expérience', cls:'opt-grn' }, { lbl:'🏆 Observer des champions humains une fois', cls:'opt-blu' }],
    correct: 1,
    expl:    "Reinforcement learning AIs like AlphaZero play millions of games against themselves, learning which moves lead to winning through trial and error.",
    expl_fr: "Les IA d'apprentissage par renforcement comme AlphaZero jouent des millions de parties contre elles-mêmes, apprenant quels coups mènent à la victoire.",
    hint:    "Think of the AI that beat world chess champions — how much did it practice?",
    hint_fr: "Pense à l'IA qui a battu les champions du monde aux échecs — combien a-t-elle pratiqué ?"
  },
  {
    type:'mc4', char:'🛠️',
    text:    "Which measure is most effective at reducing AI bias?",
    text_fr: "Quelle mesure est la plus efficace pour réduire le biais de l'IA ?",
    opts:    [{ lbl:'🔄 Training the AI longer', cls:'opt-red' }, { lbl:'💻 Using a faster computer', cls:'opt-yel' }, { lbl:'📊 Using diverse, representative training data', cls:'opt-grn' }, { lbl:'🔒 Making the AI code private', cls:'opt-pur' }],
    opts_fr: [{ lbl:'🔄 Entraîner l\'IA plus longtemps', cls:'opt-red' }, { lbl:'💻 Utiliser un ordinateur plus rapide', cls:'opt-yel' }, { lbl:'📊 Utiliser des données d\'entraînement diversifiées', cls:'opt-grn' }, { lbl:'🔒 Rendre le code IA privé', cls:'opt-pur' }],
    correct: 2,
    expl:    "The most effective fix for AI bias is ensuring training data is diverse and representative of all groups. Better data leads to fairer AI!",
    expl_fr: "La solution la plus efficace contre le biais IA est de s'assurer que les données sont diversifiées et représentatives de tous les groupes. De meilleures données = une IA plus équitable !",
    hint:    "The problem starts with data — so the best fix is also about data.",
    hint_fr: "Le problème commence avec les données — donc la meilleure solution concerne aussi les données."
  }
];

const QUESTIONS_BY_MODE = { junior: QUESTIONS_JUNIOR, explorer: QUESTIONS, expert: QUESTIONS_EXPERT };

/* ── JUNIOR MISSIONS DATA ── */
const MISSIONS_DATA_JUNIOR = {
  health: {
    id:'health', badge:'health-hero',
    grad:'linear-gradient(135deg,#0D47A1,#42A5F5)',
    title:'Health Hero', title_fr:'Héros de la Santé', ico:'🏥',
    facts: [
      { ico:'🔬', h:'Doctor Helper',  t:"AI helps doctors look at body pictures and find sicknesses much faster than before!" },
      { ico:'❤️', h:'Heart Watch',    t:"AI in smartwatches watches your heart beat and tells you if something seems wrong!" },
      { ico:'🤖', h:'Surgery Robot',  t:"Robot helpers guided by AI help doctors do very careful operations to help people get better!" }
    ],
    facts_fr: [
      { ico:'🔬', h:'Assistant médecin',  t:"L'IA aide les médecins à regarder les images du corps et à trouver les maladies bien plus vite qu'avant !" },
      { ico:'❤️', h:'Montre cardiaque',   t:"L'IA dans les montres connectées surveille ton cœur et te dit si quelque chose semble anormal !" },
      { ico:'🤖', h:'Robot chirurgien',   t:"Des robots assistants guidés par IA aident les médecins à faire des opérations très précises pour que les gens guérissent !" }
    ],
    game: 'health'
  },
  planet: {
    id:'planet', badge:'planet-pro',
    grad:'linear-gradient(135deg,#1B5E20,#66BB6A)',
    title:'Planet Protector', title_fr:'Protecteur de la Planète', ico:'🌱',
    facts: [
      { ico:'⚡', h:'Smart Energy',    t:"AI helps make sure we use solar and wind power in the smartest way to keep our planet clean!" },
      { ico:'🌊', h:'Ocean Helper',    t:"AI drones fly over oceans and find plastic rubbish, helping people clean up our seas!" },
      { ico:'🐘', h:'Animal Guardian', t:"AI cameras in parks spot people who try to hurt wild animals and help keep them safe!" }
    ],
    facts_fr: [
      { ico:'⚡', h:'Énergie futée',        t:"L'IA aide à utiliser l'énergie solaire et éolienne de la façon la plus intelligente pour garder notre planète propre !" },
      { ico:'🌊', h:'Aide aux océans',      t:"Des drones IA survolent les océans et trouvent les déchets plastiques, aidant à nettoyer nos mers !" },
      { ico:'🐘', h:'Gardien des animaux',  t:"Des caméras IA dans les parcs repèrent ceux qui veulent faire du mal aux animaux sauvages et les protègent !" }
    ],
    game: 'planet'
  },
  helper: {
    id:'helper', badge:'smart-helper',
    grad:'linear-gradient(135deg,#E65100,#FFA726)',
    title:'Smart Helper', title_fr:'Assistant Intelligent', ico:'🤝',
    facts: [
      { ico:'👁️', h:'Seeing Helper',  t:"AI can read words out loud for people who cannot see well, so they can still enjoy books and menus!" },
      { ico:'🗣️', h:'Voice Control',  t:"People who cannot move their hands can tell AI what to do with just their voice!" },
      { ico:'🎓', h:'Learning Buddy', t:"AI apps help kids who find reading or writing hard by giving them extra help made just for them!" }
    ],
    facts_fr: [
      { ico:'👁️', h:'Aide visuelle',      t:"L'IA peut lire les mots à voix haute pour les personnes qui ne voient pas bien, pour qu'elles profitent encore des livres et menus !" },
      { ico:'🗣️', h:'Commande vocale',    t:"Les personnes qui ne peuvent pas bouger les mains peuvent dire à l'IA quoi faire avec juste leur voix !" },
      { ico:'🎓', h:'Ami apprentissage',  t:"Les applis IA aident les enfants qui ont du mal à lire ou écrire en leur donnant de l'aide faite juste pour eux !" }
    ],
    game: 'helper'
  }
};

/* ── EXPERT MISSIONS DATA ── */
const MISSIONS_DATA_EXPERT = {
  health: {
    id:'health', badge:'health-hero',
    grad:'linear-gradient(135deg,#0D47A1,#42A5F5)',
    title:'Health Hero', title_fr:'Héros de la Santé', ico:'🏥',
    facts: [
      { ico:'🔬', h:'Disease Detection',  t:"AI analyses medical images 100× faster than doctors, detecting cancer and other diseases early when treatment is most effective!" },
      { ico:'💊', h:'Drug Discovery',     t:"AI systems can test millions of potential medicines in days — a process that used to take scientists years. Faster cures for everyone!" },
      { ico:'🏃', h:'Fitness Coach',      t:"AI in smartwatches monitors your heart rate, steps and sleep, giving you personalised health tips to stay fit and healthy!" },
      { ico:'🤖', h:'Surgery Robots',     t:"AI-guided robots help surgeons perform incredibly precise operations, making surgery safer and helping patients recover faster." },
      { ico:'🧬', h:'Genetic Prediction', t:"AI reads your DNA to predict future illnesses before they happen — but raises the question: should everyone have the right to not know their genetic risks?" },
      { ico:'🧠', h:'Mental Health AI',   t:"AI chatbots provide 24/7 mental health support — but can an algorithm truly understand human emotions, or does it risk replacing human therapists?" }
    ],
    facts_fr: [
      { ico:'🔬', h:'Détection de maladies',      t:"L'IA analyse les images médicales 100× plus vite que les médecins, détectant les cancers tôt quand le traitement est le plus efficace !" },
      { ico:'💊', h:'Découverte de médicaments',  t:"Les systèmes IA peuvent tester des millions de médicaments potentiels en quelques jours — un processus qui prenait des années aux scientifiques !" },
      { ico:'🏃', h:'Coach sportif',              t:"L'IA dans les montres connectées surveille ton rythme cardiaque, tes pas et ton sommeil, te donnant des conseils de santé personnalisés !" },
      { ico:'🤖', h:'Robots chirurgiens',          t:"Les robots guidés par IA aident les chirurgiens à effectuer des opérations incroyablement précises, rendant la chirurgie plus sûre." },
      { ico:'🧬', h:'Prédiction génétique',        t:"L'IA lit ton ADN pour prédire des maladies futures — mais soulève la question : chacun devrait-il avoir le droit de ne pas connaître ses risques génétiques ?" },
      { ico:'🧠', h:'IA en santé mentale',         t:"Les chatbots IA offrent un soutien psychologique 24h/24 — mais un algorithme peut-il vraiment comprendre les émotions humaines, ou risque-t-il de remplacer les thérapeutes ?" }
    ],
    game: 'health'
  },
  planet: {
    id:'planet', badge:'planet-pro',
    grad:'linear-gradient(135deg,#1B5E20,#66BB6A)',
    title:'Planet Protector', title_fr:'Protecteur de la Planète', ico:'🌱',
    facts: [
      { ico:'⚡',  h:'Smart Energy',       t:"AI manages electricity grids to use solar and wind power more efficiently, reducing pollution and cutting energy waste!" },
      { ico:'🌊',  h:'Ocean Protection',   t:"AI-powered drones scan the oceans to track plastic pollution and monitor endangered marine species, protecting sea life!" },
      { ico:'🌡️', h:'Climate Prediction', t:"AI analyses weather data to predict climate changes more accurately, helping scientists and governments take action sooner!" },
      { ico:'🐘',  h:'Wildlife Guardian',  t:"AI cameras in national parks detect poachers and track endangered animals in real time, helping protect wildlife worldwide!" },
      { ico:'📡',  h:'Satellite AI',       t:"AI detects illegal mining and deforestation via satellite imagery — but this raises privacy questions: who watches the watchers?" },
      { ico:'🏭',  h:'Emissions Tracker',  t:"AI systems monitor industrial CO₂ in real time — but should companies be legally required to share this data publicly?" }
    ],
    facts_fr: [
      { ico:'⚡',  h:'Énergie intelligente',   t:"L'IA gère les réseaux électriques pour utiliser l'énergie solaire et éolienne plus efficacement, réduisant la pollution !" },
      { ico:'🌊',  h:'Protection des océans',  t:"Des drones pilotés par IA scannent les océans pour suivre la pollution plastique et surveiller les espèces marines menacées !" },
      { ico:'🌡️', h:'Prévision climatique',   t:"L'IA analyse les données météo pour prédire les changements climatiques avec plus de précision, aidant à agir plus vite !" },
      { ico:'🐘',  h:'Gardien de la faune',    t:"Des caméras IA dans les parcs nationaux détectent les braconniers et suivent les animaux menacés en temps réel !" },
      { ico:'📡',  h:'IA satellitaire',        t:"L'IA détecte l'exploitation minière et la déforestation illégales via satellite — mais cela soulève des questions de vie privée : qui surveille les surveillants ?" },
      { ico:'🏭',  h:'Suivi des émissions',    t:"Les systèmes IA surveillent les émissions de CO₂ industrielles en temps réel — mais les entreprises devraient-elles être légalement obligées de partager ces données ?" }
    ],
    game: 'planet'
  },
  helper: {
    id:'helper', badge:'smart-helper',
    grad:'linear-gradient(135deg,#E65100,#FFA726)',
    title:'Smart Helper', title_fr:'Assistant Intelligent', ico:'🤝',
    facts: [
      { ico:'👁️', h:'Vision Assistant',    t:"AI can describe pictures and read text aloud for people who are blind or have low vision, helping them navigate the world independently!" },
      { ico:'🗣️', h:'Voice Control',       t:"AI voice assistants let people with mobility challenges control their phones, computers and even smart homes entirely with their voice!" },
      { ico:'🧠', h:'Learning Support',    t:"AI tutoring apps adapt to each student's learning style, providing extra help for students with dyslexia, ADHD or other learning differences!" },
      { ico:'🚗', h:'Smart Mobility',      t:"Self-driving car technology gives independence to elderly people and those with disabilities who cannot drive traditional cars!" },
      { ico:'⚖️', h:'Surveillance Debate', t:"AI can monitor vulnerable people for safety — but constant surveillance raises serious questions about dignity, consent, and privacy rights." },
      { ico:'🤝', h:'Human vs. AI Care',   t:"AI helpers never tire and are always available — but can a machine truly replace the empathy and human connection that care workers provide?" }
    ],
    facts_fr: [
      { ico:'👁️', h:'Assistant visuel',          t:"L'IA peut décrire des images et lire des textes à voix haute pour les personnes aveugles, les aidant à naviguer de façon autonome !" },
      { ico:'🗣️', h:'Commande vocale',            t:"Les assistants vocaux IA permettent aux personnes à mobilité réduite de contrôler leur téléphone et maison connectée avec la voix !" },
      { ico:'🧠', h:"Soutien à l'apprentissage",  t:"Les applis de tutorat IA s'adaptent au style d'apprentissage de chaque élève, aidant les élèves dyslexiques ou ayant un TDAH !" },
      { ico:'🚗', h:'Mobilité intelligente',      t:"La technologie des voitures autonomes offre de l'indépendance aux personnes âgées et handicapées qui ne peuvent pas conduire !" },
      { ico:'⚖️', h:'Débat surveillance',         t:"L'IA peut surveiller les personnes vulnérables pour leur sécurité — mais la surveillance constante soulève des questions de dignité, consentement et vie privée." },
      { ico:'🤝', h:'Humain vs. IA',              t:"Les assistants IA ne se fatiguent jamais — mais une machine peut-elle vraiment remplacer l'empathie et le lien humain que donnent les soignants ?" }
    ],
    game: 'helper'
  }
};

const MISSIONS_DATA_BY_MODE = { junior: MISSIONS_DATA_JUNIOR, explorer: MISSIONS_DATA, expert: MISSIONS_DATA_EXPERT };

/* ── HEALTH PAIRS BY MODE ── */
const HEALTH_PAIRS_JUNIOR = [
  { prob:{ ico:'🔬', en:'Cancer in X-ray',   fr:'Cancer en radio'        }, sol:{ ico:'💻', en:'AI Image Scanner',   fr:"Scanner IA d'images"     } },
  { prob:{ ico:'❤️', en:'Heart rate risk',   fr:'Risque cardiaque'       }, sol:{ ico:'⌚', en:'AI Smart Watch',     fr:'Montre connectée IA'     } },
  { prob:{ ico:'🏥', en:'Complex surgery',   fr:'Chirurgie complexe'     }, sol:{ ico:'🤖', en:'AI Surgery Robot',   fr:'Robot chirurgien IA'     } }
];
const HEALTH_PAIRS_EXPERT = [
  { prob:{ ico:'🔬', en:'Cancer in X-ray',      fr:'Cancer en radio'         }, sol:{ ico:'💻', en:'AI Image Scanner',     fr:"Scanner IA d'images"       } },
  { prob:{ ico:'💊', en:'No medicine yet',      fr:'Pas encore de remède'    }, sol:{ ico:'🧪', en:'AI Drug Discovery',   fr:'Découverte méd. IA'        } },
  { prob:{ ico:'❤️', en:'Heart rate risk',      fr:'Risque cardiaque'        }, sol:{ ico:'⌚', en:'AI Smart Watch',       fr:'Montre connectée IA'       } },
  { prob:{ ico:'🏥', en:'Complex surgery',      fr:'Chirurgie complexe'      }, sol:{ ico:'🤖', en:'AI Surgery Robot',    fr:'Robot chirurgien IA'       } },
  { prob:{ ico:'😣', en:'Chronic pain',         fr:'Douleur chronique'       }, sol:{ ico:'📡', en:'AI Pain Detector',    fr:'Détecteur douleur IA'      } },
  { prob:{ ico:'😔', en:'Mental health crisis', fr:'Crise santé mentale'     }, sol:{ ico:'🤖', en:'AI Therapy Bot',      fr:'Chatbot thérapeutique IA'  } }
];
const HEALTH_PAIRS_BY_MODE = { junior: HEALTH_PAIRS_JUNIOR, explorer: HEALTH_PAIRS, expert: HEALTH_PAIRS_EXPERT };

/* ── PLANET DATA BY MODE ── */
const PLANET_CATS_JUNIOR = [
  { ico:'⚡', en:'Energy', fr:'Énergie', color:'#E65100', bg:'#FFF3E0' },
  { ico:'🌊', en:'Oceans', fr:'Océans',  color:'#0277BD', bg:'#E3F2FD' }
];
const PLANET_ITEMS_JUNIOR = [
  { ico:'☀️',  en:'Solar Optimizer', fr:'Optimiseur solaire',    cat:0 },
  { ico:'💨',  en:'Wind AI Grid',     fr:'Réseau éolien IA',      cat:0 },
  { ico:'🔋',  en:'Smart Battery',    fr:'Batterie intelligente', cat:0 },
  { ico:'🚁',  en:'Plastic Drone',    fr:'Drone anti-plastique',  cat:1 },
  { ico:'🐢',  en:'Turtle Tracker',   fr:'Traceur de tortue',     cat:1 },
  { ico:'🪸',  en:'Coral Monitor',    fr:'Moniteur corail',       cat:1 }
];
const PLANET_CATS_EXPERT = [
  { ico:'⚡',  en:'Energy',    fr:'Énergie',   color:'#E65100', bg:'#FFF3E0' },
  { ico:'🌊',  en:'Oceans',    fr:'Océans',    color:'#0277BD', bg:'#E3F2FD' },
  { ico:'🐘',  en:'Wildlife',  fr:'Faune',     color:'#2E7D32', bg:'#E8F5E9' },
  { ico:'🌡️', en:'Emissions', fr:'Émissions', color:'#B71C1C', bg:'#FFEBEE' }
];
const PLANET_ITEMS_EXPERT = [
  { ico:'☀️',  en:'Solar Optimizer',  fr:'Optimiseur solaire',     cat:0 },
  { ico:'💨',  en:'Wind AI Grid',      fr:'Réseau éolien IA',       cat:0 },
  { ico:'🌡️', en:'CO₂ Monitor',       fr:'Moniteur CO₂',           cat:0 },
  { ico:'🚁',  en:'Plastic Drone',     fr:'Drone anti-plastique',   cat:1 },
  { ico:'🐢',  en:'Turtle Tracker',    fr:'Traceur de tortue',      cat:1 },
  { ico:'🪸',  en:'Coral Monitor',     fr:'Moniteur corail',        cat:1 },
  { ico:'📷',  en:'Anti-Poaching Cam', fr:'Caméra anti-braconnage', cat:2 },
  { ico:'🦁',  en:'Species Tracker',   fr:"Suivi d'espèces",        cat:2 },
  { ico:'🔥',  en:'Fire Detector',     fr:"Détecteur d'incendies",  cat:2 },
  { ico:'📊',  en:'CO₂ Tracker',       fr:'Traqueur CO₂',           cat:3 },
  { ico:'🛰️', en:'Methane Sensor',    fr:'Capteur méthane',        cat:3 },
  { ico:'🏭',  en:'Carbon Cap AI',     fr:'IA plafond carbone',     cat:3 }
];
const PLANET_DATA_BY_MODE = {
  junior:   { cats: PLANET_CATS_JUNIOR,  items: PLANET_ITEMS_JUNIOR  },
  explorer: { cats: PLANET_CATS,         items: PLANET_ITEMS         },
  expert:   { cats: PLANET_CATS_EXPERT,  items: PLANET_ITEMS_EXPERT  }
};

/* ── EXPERT BADGES ── */
const BADGES_EXPERT = [
  { id:'bias-buster',     name:'Bias Buster',     name_fr:'Chasseur de Biais', ico:'🔐', bg:'#E8EAF6', bdr:'#3F51B5' },
  { id:'neural-master',   name:'Neural Master',   name_fr:'Maître Neural',     ico:'🧠', bg:'#EDE7F6', bdr:'#673AB7' },
  { id:'adversarial-pro', name:'Adversarial Pro', name_fr:'Pro Adversarial',   ico:'🎯', bg:'#FBE9E7', bdr:'#FF5722' },
  { id:'ethics-guardian', name:'Ethics Guardian', name_fr:'Gardien Éthique',   ico:'⚖️', bg:'#E0F2F1', bdr:'#009688' }
];

/* ── SPOT THE BIAS SCENARIOS ── */
const BIAS_SCENARIOS = [
  {
    ico:'💼',
    en:"A company uses an AI to screen job applications. The AI was trained on 10 years of past hires. Only 20% of those hires were women.",
    fr:"Une entreprise utilise une IA pour trier les candidatures. L'IA a été entraînée sur 10 ans d'embauches passées. Seulement 20% de ces recrutements étaient des femmes.",
    decision:{ en:"The AI ranks female candidates significantly lower.", fr:"L'IA classe les candidates féminines nettement plus bas." },
    answer:'biased',
    expl:{ en:"Biased! The AI learned from historically skewed data. It perpetuates past discrimination rather than assessing actual skill.", fr:"Biaisé ! L'IA a appris de données historiquement biaisées. Elle perpétue la discrimination passée plutôt que d'évaluer les compétences réelles." }
  },
  {
    ico:'🎵',
    en:"A music streaming AI recommends songs based on listening history. It gives identical playlist styles to all users who listened to the same genre, regardless of gender.",
    fr:"Une IA de streaming musical recommande des chansons basées sur l'historique d'écoute. Elle donne des styles de playlist identiques à tous les utilisateurs du même genre musical, peu importe le sexe.",
    decision:{ en:"Everyone who listens to pop gets the same pop recommendations.", fr:"Tous ceux qui écoutent de la pop reçoivent les mêmes recommandations pop." },
    answer:'fair',
    expl:{ en:"Fair! The AI treats everyone equally based on music taste, not personal characteristics. Though impersonal, it's not biased.", fr:"Équitable ! L'IA traite tout le monde de façon égale selon les goûts musicaux, pas les caractéristiques personnelles. Ce n'est pas biaisé." }
  },
  {
    ico:'📸',
    en:"A facial recognition system is deployed for airport security. It was trained mostly on images of people with lighter skin tones.",
    fr:"Un système de reconnaissance faciale est déployé pour la sécurité aéroportuaire. Il a été entraîné principalement sur des images de personnes à peau claire.",
    decision:{ en:"The system misidentifies people with darker skin tones 5× more often.", fr:"Le système identifie mal les personnes à peau foncée 5× plus souvent." },
    answer:'biased',
    expl:{ en:"Biased! Training data didn't represent all skin tones fairly. The result: a system that is less accurate — and less fair — for some groups.", fr:"Biaisé ! Les données d'entraînement ne représentaient pas toutes les carnations équitablement. Résultat : un système moins précis et moins juste pour certains groupes." }
  }
];

/* ── ADVERSARIAL CHALLENGE SCENARIOS ── */
const ADVERSARIAL_SCENARIOS = [
  {
    ico:'🛑',
    en:"An AI self-driving car system looks at a STOP sign and correctly identifies it.",
    fr:"Un système de conduite autonome regarde un panneau STOP et l'identifie correctement.",
    question:{ en:"Which change would most likely fool the AI into misreading the sign?", fr:"Quel changement tromperait le plus probablement l'IA pour mal lire le panneau ?" },
    opts:[
      { en:'🖍️ Draw a small smiley face in one corner',              fr:'🖍️ Dessiner un petit smiley dans un coin',                    ok:false },
      { en:'🎨 Add carefully placed stickers that look like noise',   fr:'🎨 Ajouter des stickers placés qui ressemblent à du bruit',    ok:true  },
      { en:'🌧️ Get the sign wet in rain',                            fr:'🌧️ Mouiller le panneau sous la pluie',                        ok:false }
    ],
    expl:{ en:"Adversarial stickers exploit the AI's pattern matching — tiny visual patterns invisible to humans can completely confuse the model's classification.", fr:"Les stickers adversariaux exploitent la correspondance de motifs de l'IA — de minuscules motifs visuels invisibles pour les humains peuvent complètement confondre le modèle." }
  },
  {
    ico:'📧',
    en:"An AI spam filter correctly flags a phishing email: 'You have won a prize! Click here now!'",
    fr:"Un filtre anti-spam IA détecte correctement un email de phishing : 'Vous avez gagné un prix ! Cliquez ici maintenant !'",
    question:{ en:"Which rephrasing would most likely bypass the spam filter?", fr:"Quelle reformulation contournerait le plus probablement le filtre anti-spam ?" },
    opts:[
      { en:'📢 "URGENT: You won! Act NOW or lose your reward!!!"',                    fr:'📢 "URGENT : Vous avez gagné ! Agissez MAINTENANT !!!"',     ok:false },
      { en:'✉️ "Hi, you\'ve been selected for an exclusive community offer."',        fr:'✉️ "Bonjour, vous avez été sélectionné pour une offre exclusive."', ok:true  },
      { en:'💰 "Free money waiting for you! $$$"',                                    fr:'💰 "De l\'argent gratuit vous attend ! $$$"',                 ok:false }
    ],
    expl:{ en:"Calm, professional language avoids the trigger words the spam filter was trained to detect. Attackers craft adversarial emails this way.", fr:"Un langage calme et professionnel évite les mots déclencheurs que le filtre a appris à détecter. Les attaquants créent des emails adversariaux de cette façon." }
  },
  {
    ico:'🐱',
    en:"An AI image classifier correctly identifies a photo of a cat as 'Cat' with 98% confidence.",
    fr:"Un classificateur d'images IA identifie correctement une photo de chat comme 'Chat' avec 98% de confiance.",
    question:{ en:"Which image modification would most likely trick the AI into classifying it as 'Dog'?", fr:"Quelle modification d'image tromperait le plus probablement l'IA pour la classer comme 'Chien' ?" },
    opts:[
      { en:'🎨 Add a bright colourful background behind the cat',                    fr:'🎨 Ajouter un fond coloré derrière le chat',                  ok:false },
      { en:'📐 Rotate the image 90 degrees',                                        fr:'📐 Faire pivoter l\'image de 90 degrés',                      ok:false },
      { en:'🔢 Add invisible pixel-level noise optimised to fool the model',         fr:'🔢 Ajouter du bruit invisible au niveau pixel optimisé pour tromper le modèle', ok:true  }
    ],
    expl:{ en:"Adversarial noise adds mathematically computed pixel changes, invisible to human eyes, that exploit the model's internal decision boundaries — flipping the classification.", fr:"Le bruit adversarial ajoute des changements de pixels calculés mathématiquement, invisibles à l'œil humain, qui exploitent les frontières de décision internes du modèle." }
  }
];
