/*
 * LÓGICA DEL JUEGO  (archivo de la Persona B)
 * Lee CATEGORIES, CARDS y RETOS desde cards.js. No contiene texto de cartas.
 *
 * Dos modos:
 *  - "deck":   se juega con las preguntas de cards.js (según las categorías elegidas).
 *  - "custom": los jugadores escriben sus propias preguntas por turnos.
 * En ambos, si quien responde pasa, en lugar de la pregunta le sale un reto.
 */
(() => {
  'use strict';

  const { CATEGORIES, CARDS, RETOS } = window;
  const catById = Object.fromEntries(CATEGORIES.map((c) => [c.id, c]));

  const RETO_STYLE = { emoji: '🎯', nombre: 'Reto', color: '#e8d28f' };
  const OWN_STYLE = { emoji: '✍️', nombre: 'Carta propia', color: '#d9a9a0' };

  const state = {
    mode: 'deck', // 'deck' | 'custom'
    players: ['Jugador 1', 'Jugador 2'],
    deck: [],
    idx: 0,
    reader: 0, // quien lee (deck) o quien escribe (custom); responde el otro
    round: 1, // solo modo custom
    done: 0,
    own: null, // carta escrita (modo custom)
    retoText: null, // texto del reto activo, o null
    retoQueue: [],
  };

  /* ---------- Utilidades ---------- */
  const $ = (sel) => document.querySelector(sel);

  function el(tag, attrs = {}, ...kids) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === 'class') node.className = v;
      else if (k === 'text') node.textContent = v;
      else node.setAttribute(k, v);
    }
    kids.flat().forEach((kid) => node.append(kid));
    return node;
  }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function show(name) {
    document.querySelectorAll('.screen').forEach((s) => {
      s.classList.toggle('active', s.id === `screen-${name}`);
    });
    window.scrollTo(0, 0);
  }

  function readNames() {
    const names = [$('#name1').value.trim() || 'Jugador 1', $('#name2').value.trim() || 'Jugador 2'];
    if (names[0].toLowerCase() === names[1].toLowerCase()) names[1] += ' (2)';
    return names;
  }

  function nextReto() {
    if (!state.retoQueue.length) state.retoQueue = shuffle(RETOS);
    return state.retoQueue.pop();
  }

  /* ---------- Inicio ---------- */
  function renderCats() {
    const box = $('#cat-list');
    box.replaceChildren();
    CATEGORIES.forEach((cat) => {
      const n = CARDS.filter((c) => c.cat === cat.id).length;
      const input = el('input', { type: 'checkbox', value: cat.id, checked: '' });
      box.append(
        el('label', { class: 'chip', title: cat.descripcion, style: `--c:${cat.color}` },
          input,
          el('span', {}, `${cat.emoji} ${cat.nombre} `, el('small', { text: `(${n})` })))
      );
    });
  }

  function resetRun() {
    state.idx = 0;
    state.reader = 0;
    state.round = 1;
    state.done = 0;
    state.own = null;
    state.retoText = null;
  }

  function startDeck() {
    const cats = [...document.querySelectorAll('#cat-list input:checked')].map((i) => i.value);
    const deck = shuffle(CARDS.filter((c) => cats.includes(c.cat)));
    if (!deck.length) {
      $('#home-msg').textContent = 'Elige al menos una categoría.';
      return;
    }
    $('#home-msg').textContent = '';
    resetRun();
    state.mode = 'deck';
    state.players = readNames();
    state.deck = deck;
    renderGame();
    show('game');
  }

  function startCustom() {
    $('#home-msg').textContent = '';
    resetRun();
    state.mode = 'custom';
    state.players = readNames();
    openWrite();
  }

  /* ---------- Modo cartas propias: escribir ---------- */
  function openWrite() {
    const writer = state.players[state.reader];
    const other = state.players[1 - state.reader];
    $('#write-round').textContent = `Ronda ${state.round}`;
    $('#write-title').textContent = `Turno de ${writer}`;
    $('#write-sub').textContent = `Escribe una pregunta abierta para ${other}. ${other}, ¡no mires!`;
    $('#btn-write-done').textContent = `Listo: pasar el celular a ${other}`;
    $('#write-text').value = '';
    $('#write-msg').textContent = '';
    show('write');
  }

  function finishWrite() {
    const text = $('#write-text').value.trim();
    if (!text) {
      $('#write-msg').textContent = 'Escribe una pregunta antes de continuar.';
      return;
    }
    state.own = { texto: text };
    state.retoText = null;
    renderGame();
    show('game');
  }

  /* ---------- Partida ---------- */
  const current = () => (state.mode === 'deck' ? state.deck[state.idx] : state.own);

  let paintToken = 0;

  function renderGame() {
    const card = current();
    const reader = state.players[state.reader];
    const answerer = state.players[1 - state.reader];
    const isReto = state.retoText !== null;
    const style = isReto ? RETO_STYLE : state.mode === 'custom' ? OWN_STYLE : catById[card.cat];
    const text = isReto ? state.retoText : card.texto;

    $('#progress').textContent =
      state.mode === 'deck' ? `Carta ${state.idx + 1} de ${state.deck.length}` : `Ronda ${state.round}`;

    $('#turn').textContent = isReto
      ? `${answerer}, ¡te toca un reto!`
      : state.mode === 'deck'
        ? `Lee ${reader} · responde ${answerer}`
        : `${reader} preguntó · responde ${answerer}`;

    const cardEl = $('#card');
    const token = ++paintToken;
    const paint = () => {
      if (token !== paintToken) return;
      cardEl.style.setProperty('--c', style.color);
      $('#card-cat').textContent = `${style.emoji} ${style.nombre}`;
      $('#card-text').textContent = text;
    };

    if (isReto) {
      // el reto reemplaza a la pregunta en la misma carta, ya volteada
      paint();
      cardEl.classList.add('flipped');
    } else {
      const wasFlipped = cardEl.classList.contains('flipped');
      cardEl.classList.remove('flipped');
      // esperamos a que gire de vuelta para no dejar ver el texto nuevo antes de tiempo
      if (wasFlipped) setTimeout(paint, 300);
      else paint();
    }

    $('#btn-skip').hidden = isReto;
    $('#btn-skip').textContent = 'Pasar (haré un reto)';
    $('#btn-next').textContent = isReto ? 'Reto cumplido ✓' : 'Siguiente';
  }

  function flip() {
    $('#card').classList.toggle('flipped');
  }

  function skip() {
    state.retoText = nextReto();
    renderGame();
  }

  function next() {
    state.done++;
    state.retoText = null;
    state.reader = 1 - state.reader;
    if (state.mode === 'deck') {
      state.idx++;
      if (state.idx >= state.deck.length) return showEnd();
      renderGame();
    } else {
      state.round++;
      openWrite();
    }
  }

  /* ---------- Final ---------- */
  function showEnd() {
    const n = state.done;
    $('#end-stats').textContent =
      n === 0
        ? 'Todavía no jugaron ninguna carta.'
        : `Jugaron ${n} ${n === 1 ? 'carta' : 'cartas'}. ¡Gracias por ser honestos!`;
    show('end');
  }

  function backHome() {
    renderCats();
    show('home');
  }

  /* ---------- Eventos ---------- */
  $('#btn-start').addEventListener('click', startDeck);
  $('#btn-custom').addEventListener('click', startCustom);
  $('#btn-write-done').addEventListener('click', finishWrite);
  $('#btn-write-back').addEventListener('click', backHome);
  $('#btn-next').addEventListener('click', next);
  $('#btn-skip').addEventListener('click', skip);
  $('#btn-end').addEventListener('click', showEnd);
  $('#btn-restart').addEventListener('click', backHome);

  $('#card').addEventListener('click', flip);
  $('#card').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      flip();
    }
  });

  renderCats();
})();
