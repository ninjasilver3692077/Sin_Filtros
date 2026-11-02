/* Sin Filtros 2.0 — lógica. Compatible con el cards.js original (100 cartas / 20 retos). */
(() => {
  'use strict';
  const { CATEGORIES, CARDS, RETOS } = window;
  if (!Array.isArray(CATEGORIES) || !Array.isArray(CARDS) || !Array.isArray(RETOS)) {
    document.body.textContent = 'No se cargó cards.js. Conserva el archivo original junto a index.html.';
    return;
  }
  const byId = Object.fromEntries(CATEGORIES.map(cat => [cat.id, cat]));
  const $ = selector => document.querySelector(selector);
  const state = {
    mode: 'deck', players: ['Jugador 1','Jugador 2'], deck: [], idx: 0,
    reader: 0, round: 1, done: 0, challenges: 0, own: null,
    challenge: null, challengeQueue: [], lastChallenge: null, revealed: false,
    selected: new Set(CATEGORIES.map(cat => cat.id)),
  };
  const CHALLENGE_STYLE = { nombre: 'Reto', emoji: '✷', color: '#e4c982' };
  const CUSTOM_STYLE = { nombre: 'Carta propia', emoji: '✎', color: '#b7d6bf' };
  let paintTimer = null;

  function shuffle(items) {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  function show(screen) {
    document.querySelectorAll('.screen').forEach(el => {
      const isActive = el.id === `screen-${screen}`;
      el.classList.toggle('active', isActive);
      el.setAttribute('aria-hidden', String(!isActive));
    });
    window.scrollTo({top: 0, behavior: 'instant'});
  }

  function readNames() {
    const names = [$('#name1').value.trim() || 'Jugador 1', $('#name2').value.trim() || 'Jugador 2'];
    if (names[0].toLocaleLowerCase('es') === names[1].toLocaleLowerCase('es')) names[1] += ' (2)';
    return names;
  }

  function renderCategories() {
    const container = $('#cat-list');
    container.replaceChildren();
    CATEGORIES.forEach(cat => {
      const label = document.createElement('label');
      label.className = 'chip';
      label.style.setProperty('--c', cat.color);
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.value = cat.id;
      input.checked = state.selected.has(cat.id);
      input.addEventListener('change', () => {
        if (input.checked) state.selected.add(cat.id);
        else state.selected.delete(cat.id);
        renderCategorySummary();
      });
      const text = document.createElement('span');
      text.textContent = `${cat.emoji} ${cat.nombre}`;
      const number = document.createElement('small');
      number.textContent = `${CARDS.filter(card => card.cat === cat.id).length}`;
      text.append(number);
      label.append(input, text);
      container.append(label);
    });
    renderCategorySummary();
  }

  function renderCategorySummary() {
    const total = CARDS.filter(card => state.selected.has(card.cat)).length;
    $('#selection-summary').textContent = `${state.selected.size} de ${CATEGORIES.length} temas · ${total} preguntas`;
    $('#btn-toggle-all').textContent = state.selected.size === CATEGORIES.length ? 'Deseleccionar todas' : 'Seleccionar todas';
    $('#home-msg').textContent = '';
  }

  function toggleAll() {
    state.selected = state.selected.size === CATEGORIES.length ? new Set() : new Set(CATEGORIES.map(c => c.id));
    renderCategories();
  }

  function resetRun() {
    clearTimeout(paintTimer);
    state.idx = 0;
    state.reader = 0;
    state.round = 1;
    state.done = 0;
    state.challenges = 0;
    state.own = null;
    state.challenge = null;
    state.revealed = false;
    state.challengeQueue = [];
    state.lastChallenge = null;
  }

  function startDeck() {
    const deck = shuffle(CARDS.filter(card => state.selected.has(card.cat)));
    if (!deck.length) {
      $('#home-msg').textContent = 'Selecciona al menos una categoría para comenzar.';
      return;
    }
    resetRun();
    state.mode = 'deck';
    state.players = readNames();
    state.deck = deck;
    renderGame();
    show('game');
  }

  function startCustom() {
    resetRun();
    state.mode = 'custom';
    state.players = readNames();
    openWrite();
  }

  function openWrite() {
    const writer = state.players[state.reader];
    const other = state.players[1 - state.reader];
    $('#write-round').textContent = `Ronda ${state.round}`;
    $('#write-title').textContent = `Tu turno, ${writer}.`;
    $('#write-sub').textContent = `Escribe una pregunta para ${other}. Después pasa el celular para que la descubra.`;
    $('#btn-write-done').textContent = `Entregar a ${other} ↗`;
    $('#write-text').value = '';
    $('#write-count').textContent = '0 / 220';
    $('#write-msg').textContent = '';
    show('write');
  }

  function finishWrite() {
    const text = $('#write-text').value.trim();
    if (!text) {
      $('#write-msg').textContent = 'Escribe una pregunta antes de continuar.';
      $('#write-text').focus();
      return;
    }
    state.own = { texto: text };
    state.challenge = null;
    renderGame();
    show('game');
  }

  function getChallenge() {
    if (!RETOS.length) return 'Comparte algo que admires de la otra persona.';
    if (!state.challengeQueue.length) {
      state.challengeQueue = shuffle(RETOS);
      if (state.challengeQueue.length > 1 && state.challengeQueue[state.challengeQueue.length - 1] === state.lastChallenge) {
        [state.challengeQueue[0], state.challengeQueue[state.challengeQueue.length - 1]] =
        [state.challengeQueue[state.challengeQueue.length - 1], state.challengeQueue[0]];
      }
    }
    state.lastChallenge = state.challengeQueue.pop();
    return state.lastChallenge;
  }

  function current() { return state.mode === 'deck' ? state.deck[state.idx] : state.own; }

  function setRevealed(revealed) {
    state.revealed = revealed;
    const card = $('#card');
    card.classList.toggle('flipped', revealed);
    card.setAttribute('aria-pressed', String(revealed));
    card.setAttribute('aria-label', revealed ? 'Carta revelada' : 'Revelar carta');
    $('#btn-next').disabled = !revealed;
    $('#btn-skip').disabled = !revealed;
    $('#game-hint').textContent = revealed ? 'Tómense su tiempo para conversar.' : 'Toca la carta para descubrir la pregunta.';
  }

  function renderGame() {
    clearTimeout(paintTimer);
    const card = current();
    if (!card) return finishGame();
    const isChallenge = state.challenge !== null;
    const style = isChallenge ? CHALLENGE_STYLE : state.mode === 'custom' ? CUSTOM_STYLE : byId[card.cat] || CUSTOM_STYLE;
    const text = isChallenge ? state.challenge : card.texto;
    const reader = state.players[state.reader];
    const respondent = state.players[1 - state.reader];
    const max = state.mode === 'deck' ? state.deck.length : Math.max(1, state.round);
    const currentNumber = state.mode === 'deck' ? state.idx + 1 : state.round;
    const percent = state.mode === 'deck' ? Math.round(state.idx / max * 100) : 0;
    $('#progress').textContent = state.mode === 'deck' ? `Carta ${currentNumber} / ${max}` : `Ronda ${state.round}`;
    $('#progress-track').setAttribute('aria-valuenow', String(percent));
    $('#progress-fill').style.width = `${percent}%`;
    $('#game-eyebrow').textContent = isChallenge ? 'EL RETO DEL MOMENTO' : state.mode === 'deck' ? 'UNA PREGUNTA A LA VEZ' : 'UNA PREGUNTA HECHA POR USTEDES';
    $('#turn').textContent = isChallenge ? `¡Te toca, ${respondent}!` : `${reader} pregunta. ${respondent} responde.`;
    $('#card').style.setProperty('--card-color', style.color);
    $('#btn-skip').hidden = isChallenge;
    $('#btn-next').textContent = isChallenge ? 'Reto cumplido ✓' : 'Siguiente carta ↗';
    setRevealed(false);
    // Retrasar el contenido si la carta estaba al frente evita mostrar la siguiente pregunta durante el giro.
    const paint = () => {
      $('#card-cat').textContent = `${style.emoji} ${style.nombre}`;
      $('#card-text').textContent = text;
    };
    paintTimer = setTimeout(paint, 310);
    if (isChallenge) {
      paint();
      clearTimeout(paintTimer);
      setRevealed(true);
      $('#btn-skip').disabled = true;
      $('#game-hint').textContent = 'Siéntanse libres de adaptar el reto a su comodidad.';
    }
  }

  function flip() {
    // La carta revelada no vuelve a ocultarse: evita accidentalmente tapar la pregunta.
    if (!state.revealed) {
      clearTimeout(paintTimer);
      const card = current();
      const style = state.mode === 'custom' ? CUSTOM_STYLE : byId[card.cat] || CUSTOM_STYLE;
      $('#card-cat').textContent = `${style.emoji} ${style.nombre}`;
      $('#card-text').textContent = card.texto;
      setRevealed(true);
    }
  }

  function skip() {
    if (!state.revealed || state.challenge !== null) return;
    state.challenge = getChallenge();
    state.challenges++;
    renderGame();
  }

  function next() {
    if (!state.revealed) return;
    state.done++;
    state.challenge = null;
    state.reader = 1 - state.reader;
    if (state.mode === 'deck') {
      state.idx++;
      if (state.idx >= state.deck.length) return finishGame();
      renderGame();
    } else {
      state.round++;
      openWrite();
    }
  }

  function finishGame() {
    $('#progress-fill').style.width = '100%';
    const cards = state.done;
    const challenges = state.challenges;
    $('#end-stats').textContent = cards
      ? `Compartieron ${cards} ${cards === 1 ? 'carta' : 'cartas'}${challenges ? ` y realizaron ${challenges} ${challenges === 1 ? 'reto' : 'retos'}` : ''}. ¡Qué buena conexión!`
      : 'Una buena conversación puede comenzar cuando quieran.';
    show('end');
  }

  function again() {
    if (state.mode === 'deck') {
      resetRun();
      state.deck = shuffle(CARDS.filter(card => state.selected.has(card.cat)));
      renderGame();
      show('game');
    } else {
      resetRun();
      openWrite();
    }
  }

  function backHome() { resetRun(); show('home'); }
  async function share() {
    if (!/^https?:$/.test(window.location.protocol)) {
      $('#share-status').textContent = 'Publica el juego en GitHub Pages para compartir un enlace.';
      window.alert('Publica el juego en GitHub Pages para compartir un enlace.');
      return;
    }
    try {
      if (navigator.share) await navigator.share({ title: 'Sin Filtros', text: '¿Jugamos Sin Filtros?', url: window.location.href });
      else if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
        $('#share-status').textContent = 'Enlace copiado al portapapeles.';
        window.alert('¡Enlace copiado!');
      }
    } catch (error) { if (error.name !== 'AbortError') $('#share-status').textContent = 'No se pudo compartir el enlace.'; }
  }

  $('#btn-start').addEventListener('click', startDeck);
  $('#btn-custom').addEventListener('click', startCustom);
  $('#btn-toggle-all').addEventListener('click', toggleAll);
  $('#btn-write-done').addEventListener('click', finishWrite);
  $('#btn-write-back').addEventListener('click', backHome);
  $('#write-text').addEventListener('input', event => $('#write-count').textContent = `${event.target.value.length} / 220`);
  $('#btn-next').addEventListener('click', next);
  $('#btn-skip').addEventListener('click', skip);
  $('#btn-end').addEventListener('click', finishGame);
  $('#btn-again').addEventListener('click', again);
  $('#btn-restart').addEventListener('click', backHome);
  $('#brand-home').addEventListener('click', event => { event.preventDefault(); backHome(); });
  $('#btn-share').addEventListener('click', share);
  $('#card').addEventListener('click', flip);
  $('#card').addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); flip(); } });
  renderCategories();
})();
