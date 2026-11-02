# Sin Filtros — Entrega de Persona A

**Responsable:** contenido y diseño. **Alcance:** `cards.js`, `style.css`, `favicon.svg`, textos propuestos y capturas.

## Entregables

| Archivo | Uso |
|---|---|
| `cards.js` | 100 preguntas reescritas (20 por categoría) y 20 retos revisados. Compatible con `app.js` original. |
| `style.css` | Diseño compatible con el `index.html` **original** de `ninjasilver3692077/Sin_Filtros`. |
| `favicon.svg` | Ícono en formato SVG; requiere una línea en el `<head>` de `index.html`. |
| `PROPUESTA-TEXTOS-INDEX.md` | Propuesta de revisión de la bienvenida y las reglas; **no se editó** `index.html` original. |
| `capturas/` | Capturas reales de un prototipo visual 2.0 (no de la versión original en GitHub) para presentar en Canva. |

## Qué mejoró en el contenido

Se conservaron los identificadores: `liquidas`, `proceso`, `necesidades`, `comunicacion`, `madurez`.

Se revisaron las 100 preguntas originales, se eliminaron repeticiones temáticas y se reformularon preguntas que eran demasiado largas o sonaban como un cuestionario académico. Esta es una **versión editorial reescrita** (no una edición mínima que mantenga palabra por palabra el borrador). El criterio fue que cada pregunta pudiera leerse en voz alta y abrir una conversación.

**Temas incorporados o reforzados:**

- Relaciones líquidas: comparaciones en redes, ghosting, compromiso y señales de distancia.
- Proceso amoroso: idealización, intereses individuales y la diferencia entre atracción y conexión.
- Necesidades y límites: consentimiento digital (fotos/mensajes), autonomía, cuidado versus control y espacio personal.
- Comunicación: malentendidos por chat, escucha activa, confidencialidad y humor durante conflictos.
- Madurez afectiva: reparación de la confianza, cambios sostenidos, metas individuales y diferencias de proyecto de vida.

Los 20 retos se ajustaron para que sean breves, amables, sin plazos ni castigos. Nadie debe sentirse obligado a contestar una pregunta personal.

## Cómo incorporar tu parte al repositorio original

1. Clonar o abrir `ninjasilver3692077/Sin_Filtros`.
2. Crear una rama de trabajo, por ejemplo `feat/contenido-diseno`.
3. Reemplazar **solamente** `cards.js` y `style.css` con los de esta carpeta. Son compatibles con la estructura original.
4. Agregar `favicon.svg` a la raíz. El ícono no aparecerá hasta que quien edite el HTML apruebe e incorpore la línea propuesta en `PROPUESTA-TEXTOS-INDEX.md`.
5. Revisar con Juanes los cambios propuestos para el texto de inicio y las reglas; solo después editar `index.html`.
6. Probar en un navegador, commit y Pull Request para revisión conjunta.

Comandos orientativos:

```bash
git switch -c feat/contenido-diseno
git add cards.js style.css favicon.svg
git commit -m "feat: revisar preguntas, retos e identidad visual de Sin Filtros"
git push -u origin feat/contenido-diseno
```

## Sobre la identidad de Canva

Se utilizó una propuesta coherente con la paleta crema/terracota/salvia que ya estaba en los archivos del proyecto. **No se pudo verificar la plantilla original de Canva**, por lo que deben confirmar los tonos exactos y la tipografía con Laura/Juanes antes de entregar. La ilustración del reverso se realizó mediante CSS, sin descargar imágenes externas. El favicon usa una roseta similar.

## Capturas

Las capturas muestran una **propuesta visual 2.0** construida por separado, por lo que **no representan el estado publicado del repositorio original**. Sirven como referencias para Canva y la exposición. Si desean esa interfaz en el producto final, tendrán que integrar también los archivos de la demo 2.0 con quien lleve `index.html` y `app.js`.

**Estado remoto:** no hubo subida a GitHub. La instalación de GitHub conectada permite leer el repositorio, pero rechaza cambios con error HTTP 403 porque está instalada en una cuenta distinta de la propietaria.
