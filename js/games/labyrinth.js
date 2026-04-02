/* ════════════════════════════════════════
   GAME: Robot Navigator — Maze Pathfinding
   Guide the robot 🤖 to the exit 🏁
   Teaches: AI navigation, pathfinding algorithms
════════════════════════════════════════ */

let labState = null;
let labKeyHandler = null;

function _labGenerateMaze(n) {
  const size = 2 * n - 1;
  const grid = Array.from({ length: size }, () => new Array(size).fill(1));
  const visited = Array.from({ length: n }, () => new Array(n).fill(false));
  function carve(cr, cc) {
    visited[cr][cc] = true;
    grid[2 * cr][2 * cc] = 0;
    const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
    for (let i = dirs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [dirs[i], dirs[j]] = [dirs[j], dirs[i]];
    }
    for (const [dr, dc] of dirs) {
      const nr = cr + dr, nc = cc + dc;
      if (nr < 0 || nr >= n || nc < 0 || nc >= n || visited[nr][nc]) continue;
      grid[2 * cr + dr][2 * cc + dc] = 0;
      carve(nr, nc);
    }
  }
  carve(0, 0);
  return grid;
}

function buildLabyrinthGame(wrap, missionId, done) {
  _labCleanup();

  const n    = LABYRINTH_N_BY_MODE[_mode] || 2;
  const maze = _labGenerateMaze(n);
  const rows = maze.length;
  const cols    = maze[0].length;
  const isExpert = _mode === 'expert';
  const isJunior = _mode === 'junior';

  // revealed[r][c] = true once tile has been seen (expert fog-of-war)
  const revealed = Array.from({ length: rows }, () => new Array(cols).fill(!isExpert));

  labState = { maze, rows, cols, pr: 0, pc: 0, moves: 0, done: false, revealed, missionId };

  if (isExpert) _labReveal(0, 0);

  const completeBtnHtml = done
    ? `<button class="btn btn-gray btn-full" onclick="nav('missions')">${t('mis_btn_done')}</button>`
    : '';

  wrap.innerHTML = `
    <div class="game-wrap lab-wrap">
      <div class="game-title">${t('lab_title')}</div>
      <div class="game-inst">${t('lab_inst')}</div>
      ${isExpert ? `<div class="lab-fog-info">${t('lab_fog_info')}</div>` : ''}
      <div id="lab-stats" class="lab-stats" style="${isJunior ? 'display:none' : ''}">
        ${t('lab_moves')} <span id="lab-move-count">0</span>
      </div>
      <div id="lab-maze" class="lab-maze"></div>
      <div class="lab-dpad">
        <button class="lab-dpad-btn" onclick="labMove(-1,0)" aria-label="Up">▲</button>
        <div class="lab-dpad-row">
          <button class="lab-dpad-btn" onclick="labMove(0,-1)" aria-label="Left">◀</button>
          <span></span>
          <button class="lab-dpad-btn" onclick="labMove(0,1)" aria-label="Right">▶</button>
        </div>
        <button class="lab-dpad-btn" onclick="labMove(1,0)" aria-label="Down">▼</button>
      </div>
      ${isJunior ? `<button class="btn btn-outline lab-hint-btn" onclick="labHint()">${t('lab_hint_btn')}</button>` : ''}
      <div id="lab-win" class="lab-win" style="display:none">
        <div class="game-success show">
          <span class="game-success-ico">🏁</span>
          <div class="game-success-txt">${t('lab_win')}</div>
          ${_mode !== 'junior' ? `<div class="lab-moves-final">${t('lab_moves')} <strong id="lab-final-moves">0</strong></div>` : ''}
        </div>
        <div id="lab-complete-btn"></div>
        <button class="btn btn-outline btn-full" onclick="nav('missions')">${t('lab_back')}</button>
      </div>
      ${completeBtnHtml ? `<div style="margin-top:12px">${completeBtnHtml}</div>` : ''}
    </div>`;

  _labRenderMaze();

  labKeyHandler = function(e) {
    if (!['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.key)) return;
    e.preventDefault();
    const dir = { ArrowUp:[-1,0], ArrowDown:[1,0], ArrowLeft:[0,-1], ArrowRight:[0,1] };
    const [dr, dc] = dir[e.key];
    labMove(dr, dc);
  };
  document.addEventListener('keydown', labKeyHandler);
}

function labMove(dr, dc) {
  if (!labState || labState.done) return;
  const { maze, rows, cols } = labState;
  const nr = labState.pr + dr;
  const nc = labState.pc + dc;
  if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) return;
  if (maze[nr][nc] === 1) { playSound('wrong'); return; }

  labState.pr = nr;
  labState.pc = nc;
  labState.moves++;

  if (_mode === 'expert') _labReveal(nr, nc);

  _labRenderMaze();

  const mc = document.getElementById('lab-move-count');
  if (mc) mc.textContent = labState.moves;

  if (nr === rows - 1 && nc === cols - 1) {
    _labWin();
  }
}

function labHint() {
  if (!labState || labState.done) return;
  const next = _labBFS();
  if (!next) return;
  const [r, c] = next;
  const tile = document.querySelector(`.lab-tile[data-r="${r}"][data-c="${c}"]`);
  if (!tile) return;
  tile.classList.add('lab-hint');
  setTimeout(() => tile.classList.remove('lab-hint'), 900);
}

function _labReveal(r, c) {
  const { rows, cols, revealed } = labState;
  for (let dr = -1; dr <= 1; dr++) {
    for (let dc = -1; dc <= 1; dc++) {
      const nr = r + dr, nc = c + dc;
      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) revealed[nr][nc] = true;
    }
  }
}

function _labBFS() {
  const { maze, rows, cols, pr, pc } = labState;
  const visited = Array.from({ length: rows }, () => new Array(cols).fill(false));
  const queue   = [[pr, pc, null]];
  visited[pr][pc] = true;
  const dirs = [[-1,0],[1,0],[0,-1],[0,1]];
  while (queue.length) {
    const [r, c, first] = queue.shift();
    if (r === rows - 1 && c === cols - 1) return first;
    for (const [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc;
      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && !visited[nr][nc] && maze[nr][nc] === 0) {
        visited[nr][nc] = true;
        queue.push([nr, nc, first || [nr, nc]]);
      }
    }
  }
  return null;
}

function _labRenderMaze() {
  const { maze, rows, cols, pr, pc, revealed } = labState;
  const el = document.getElementById('lab-maze');
  if (!el) return;
  el.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  el.innerHTML = maze.map((row, r) =>
    row.map((cell, c) => {
      const isPlayer = r === pr && c === pc;
      const isExit   = r === rows - 1 && c === cols - 1;
      const isFogged = !revealed[r][c];
      let cls = 'lab-tile';
      if (isFogged)    cls += ' lab-fog';
      else if (isPlayer) cls += ' lab-player';
      else if (isExit)   cls += ' lab-exit';
      else if (cell)     cls += ' lab-wall';
      else               cls += ' lab-open';
      const content = isPlayer ? '🤖' : (isExit && !isFogged ? '🏁' : '');
      return `<div class="${cls}" data-r="${r}" data-c="${c}">${content}</div>`;
    }).join('')
  ).join('');
}

function _labWin() {
  labState.done = true;
  _labCleanup();
  playSound('complete');
  confettiSmall();

  const fm = document.getElementById('lab-final-moves');
  if (fm) fm.textContent = labState.moves;

  const winEl = document.getElementById('lab-win');
  if (winEl) winEl.style.display = 'block';

  const mazeEl = document.getElementById('lab-maze');
  if (mazeEl) mazeEl.style.display = 'none';

  const dpad = document.querySelector('.lab-dpad');
  if (dpad) dpad.style.display = 'none';

  const hintBtn = document.querySelector('.lab-hint-btn');
  if (hintBtn) hintBtn.style.display = 'none';

  const cbWrap = document.getElementById('lab-complete-btn');
  if (cbWrap) {
    const alreadyDone = S.missions.includes(labState.missionId);
    cbWrap.innerHTML = alreadyDone
      ? `<button class="btn btn-gray btn-full" onclick="nav('missions')">${t('mis_btn_done')}</button>`
      : `<button class="btn btn-green btn-full btn-lg"
           onclick="completeMission('${labState.missionId}');this.className='btn btn-gray btn-full';this.textContent='${t('mis_btn_after')}'">
           ${t('mis_btn')}
         </button>`;
  }
  speak(t('lab_win'));
  _showNextMissionBtn(labState.missionId);
}

function _labCleanup() {
  if (labKeyHandler) {
    document.removeEventListener('keydown', labKeyHandler);
    labKeyHandler = null;
  }
}
