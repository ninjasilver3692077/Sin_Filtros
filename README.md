# Sin filtros — juego de cartas digital para parejas

Juego web para dos personas. Una lee una pregunta abierta y la otra responde de forma honesta; en cada carta se cambian los roles. Sin instalación y sin backend: HTML + CSS + JS puro.

## Cómo se juega

- **Jugar con las cartas:** 100 preguntas abiertas en 5 categorías (se pueden elegir cuáles usar).
- **Pasar:** si no quieres responder, pulsas "Pasar" y en lugar de la pregunta te sale un reto (hay 20, fáciles y sin tiempo límite).
- **Crea tus propias cartas:** una persona escribe una pregunta, pasa el celular y la otra responde. En la siguiente ronda se invierten los roles, y así sucesivamente.

No hay temporizador, favoritos ni puntaje.

## Cómo correrlo

- Abrir `index.html` en el navegador (doble clic), o
- `npx serve .` dentro de la carpeta, o
- Publicarlo gratis: subir la carpeta a un repo de GitHub → *Settings → Pages → Deploy from branch (main, / root)*. Queda un link que sirve en el celular y en la exposición.

## Estructura (y por qué sirve para trabajar en paralelo)

| Archivo | Qué contiene | Quién lo toca |
|---|---|---|
| `cards.js` | Categorías, preguntas y retos | **Persona A** (contenido) |
| `style.css` | Colores, tipografía, animación de la carta | **Persona A** (diseño) |
| `app.js` | Lógica: modos, turnos, pasar → reto | **Persona B** (lógica) |
| `index.html` | Pantallas y botones | Quien lo necesite, avisando |

Como cada uno trabaja en archivos distintos, casi no habrá conflictos de Git.

### Formato de `cards.js`

```js
// Pregunta
{ cat: 'comunicacion', texto: '¿Qué emoción te cuesta más decir en voz alta?' }

// Reto (solo un texto en la lista RETOS)
'Nombra 10 frutas sin repetir ninguna.'
```

- `cat` debe ser el id de una categoría existente: `liquidas`, `proceso`, `necesidades`, `comunicacion`, `madurez`.
- Máximo ~220 caracteres por pregunta para que quepa en la carta.
- Si cambian el `id` de una categoría, actualicen también las preguntas que lo usan.

## Categorías (20 preguntas cada una)

1. **Relaciones líquidas:** vínculos frágiles, redes sociales, ghosting, miedo al compromiso.
2. **Proceso amoroso:** disposición, flechazo, enamoramiento, pirámide *me gustas / te quiero / te amo*.
3. **Necesidades y límites:** tolerancia, afecto, reciprocidad, valores, aceptar al otro.
4. **Comunicación:** escucha, emociones, conflicto, pedir perdón.
5. **Madurez afectiva:** compromiso, inmadurez afectiva, señales de falso enamoramiento, proyecto a largo plazo.

## Plan de 3 días

**Día 1**
- A: leer las 100 preguntas, ajustar tono y repeticiones, agregar las que falten.
- B: subir a GitHub, activar Pages y probar en un celular real.

**Día 2**
- A: ajustar colores y tipografía a la identidad de su Canva (ilustración de cartas, logo).
- B: pulir detalles de lógica (por ejemplo, evitar que un reto se repita rápido, o un botón de "reiniciar mazo").

**Día 3**
- Probar con 2–3 parejas o amigos; anotar qué preguntas generaron conversación y cuáles no.
- Actualizar la presentación de Canva con capturas y el link publicado.
