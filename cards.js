/*
 * CONTENIDO DEL JUEGO  (archivo de la Persona A)
 * ------------------------------------------------
 * Aquí solo se edita texto. No hace falta tocar app.js para agregar cartas.
 *
 * CATEGORIES: las 5 categorías de preguntas. Cada una tiene
 *   id          -> identificador corto, sin espacios (se usa en CARDS)
 *   nombre      -> lo que ve el jugador
 *   emoji       -> icono
 *   color       -> color de fondo de la carta (usar tonos claros, el texto es oscuro)
 *   descripcion -> frase corta que aparece al pasar el mouse sobre la categoría
 *
 * CARDS: preguntas abiertas. Cada una tiene
 *   cat    -> id de una categoría
 *   texto  -> la pregunta (máx. ~220 caracteres para que quepa en la carta)
 *
 * RETOS: lista de retos fáciles. Salen cuando alguien decide pasar una pregunta.
 *   Son solo textos, sin categoría.
 */

window.CATEGORIES = [
  {
    id: 'liquidas',
    nombre: 'Relaciones líquidas',
    emoji: '💧',
    color: '#9fbac4',
    descripcion: 'Vínculos frágiles, tendencias y compromiso',
  },
  {
    id: 'proceso',
    nombre: 'Proceso amoroso',
    emoji: '🌱',
    color: '#e4b5a0',
    descripcion: 'Flechazo, enamoramiento y amor que madura',
  },
  {
    id: 'necesidades',
    nombre: 'Necesidades y límites',
    emoji: '🧭',
    color: '#cfb3a2',
    descripcion: 'Lo que cada uno necesita para una relación sana',
  },
  {
    id: 'comunicacion',
    nombre: 'Comunicación',
    emoji: '🗣️',
    color: '#b5d8c8',
    descripcion: 'Escucha, emociones y manejo del conflicto',
  },
  {
    id: 'madurez',
    nombre: 'Madurez afectiva',
    emoji: '🌳',
    color: '#d9a9a0',
    descripcion: 'Compromiso, errores comunes y proyecto a largo plazo',
  },
];

window.CARDS = [
  // ---------- RELACIONES LÍQUIDAS (20) ----------
  { cat: 'liquidas', texto: 'Hoy es muy fácil "conectarse" con alguien y dejarlo con un clic. ¿Qué crees que se pierde cuando las relaciones se vuelven tan desechables?' },
  { cat: 'liquidas', texto: '¿Cuál es la diferencia entre estar conectado con alguien y estar realmente vinculado? Da un ejemplo de tu vida.' },
  { cat: 'liquidas', texto: '¿Alguna vez has sentido miedo de comprometerte por no perder tu individualidad? ¿Qué es exactamente lo que temes perder?' },
  { cat: 'liquidas', texto: 'Cuando algo se daña en una relación, ¿tu primer impulso es arreglarlo o alejarte? ¿De dónde crees que viene esa reacción?' },
  { cat: 'liquidas', texto: '¿Crees que las apps y redes sociales hacen más fácil o más difícil construir una relación duradera? Explica por qué.' },
  { cat: 'liquidas', texto: 'Hay quien trata los vínculos como objetos: probar, usar y tirar cuando se cansa. ¿Has visto esto a tu alrededor? ¿Qué opinas?' },
  { cat: 'liquidas', texto: '¿Tiendes a proyectar tus relaciones a corto o a largo plazo? ¿Qué te llevó a pensar así?' },
  { cat: 'liquidas', texto: 'Dejar de responder a alguien sin dar explicaciones (ghosting) es común. ¿Lo has hecho o te lo han hecho? ¿Cómo se sintió?' },
  { cat: 'liquidas', texto: 'Se dice que amar con madurez es aceptar las imperfecciones del otro en vez de buscar perfección. ¿Qué imperfección tuya te cuesta que acepten?' },
  { cat: 'liquidas', texto: '¿Preferirías una relación intensa pero corta, o una más tranquila pero duradera? ¿Qué dice eso de ti?' },
  { cat: 'liquidas', texto: '¿Qué tan fácil es para ti terminar una conversación o una relación con un mensaje de texto? ¿Crees que eso cambia lo que significa una relación?' },
  { cat: 'liquidas', texto: 'Cuando conoces a alguien, ¿prefieres ir con calma o buscar rápido una definición de la relación? ¿Por qué?' },
  { cat: 'liquidas', texto: '¿Qué piensas de tener a varias personas "en espera" mientras decides con quién quedarte? ¿Cómo te sentirías si fueras una de ellas?' },
  { cat: 'liquidas', texto: '¿Crees que hoy hay tantas opciones para conocer gente que eso nos vuelve menos comprometidos? Explica tu punto de vista.' },
  { cat: 'liquidas', texto: 'Si una relación deja de emocionarte, ¿qué harías primero: buscar cómo reavivarla o pensar en terminarla? ¿Por qué?' },
  { cat: 'liquidas', texto: '¿Qué diferencia hay entre "me gusta pasar tiempo contigo" y "quiero construir algo contigo"?' },
  { cat: 'liquidas', texto: '¿Te ha pasado que alguien te trate como una opción más y no como una prioridad? ¿Cómo lo manejaste?' },
  { cat: 'liquidas', texto: '¿Qué crees que busca alguien que prefiere relaciones sin compromiso? ¿Y qué crees que evita?' },
  { cat: 'liquidas', texto: '¿Qué tanto influyen las redes sociales (likes, historias, ver quién te ve) en cómo vives tus relaciones?' },
  { cat: 'liquidas', texto: 'Una relación sólida aguanta las dificultades en lugar de desecharse a la primera. ¿Qué dificultad valdría la pena enfrentar juntos y cuál no?' },

  // ---------- PROCESO AMOROSO (20) ----------
  { cat: 'proceso', texto: '¿Sientes que hoy estás con disposición real para querer a alguien? ¿Qué te hace sentir listo/a, o qué te frena?' },
  { cat: 'proceso', texto: '¿Qué diferencia hay, para ti, entre un flechazo y enamorarse de verdad?' },
  { cat: 'proceso', texto: 'Cuando alguien te atrae, tu atención y tu cuerpo reaccionan. ¿Cómo te das cuenta y cómo lo manejas?' },
  { cat: 'proceso', texto: '¿Alguna vez te enamoraste de la persona que imaginaste y no de la real? Cuenta qué pasó cuando la conociste mejor.' },
  { cat: 'proceso', texto: 'Enamorarse implica querer conocer al otro y sacar lo mejor de él o ella. ¿Qué significa "sacar lo mejor de alguien" para ti?' },
  { cat: 'proceso', texto: '¿Con quién (o dónde) eres tu mejor versión? ¿Qué pasa ahí que te permite serlo?' },
  { cat: 'proceso', texto: 'De estas tres: estar con alguien, estar solo con alguien, estar siempre con alguien. ¿Cuál te resulta más difícil y por qué?' },
  { cat: 'proceso', texto: 'Si el enamoramiento no es correspondido, ¿qué señales te harían darte cuenta a tiempo?' },
  { cat: 'proceso', texto: 'Los enamorados suelen crear "nuestra canción, nuestro lugar, nuestros proyectos". ¿Qué tienen (o les gustaría tener) que sea solo de ustedes?' },
  { cat: 'proceso', texto: 'Pirámide del amor: me gustas, te quiero, te amo. ¿En qué escalón sientes que estás tú hoy? ¿Y en cuál crees que está la otra persona?' },
  { cat: 'proceso', texto: 'Cuando la emoción inicial baja, ¿qué crees que decide si la relación sigue: la sensación, el sentimiento o la decisión? ¿Por qué?' },
  { cat: 'proceso', texto: '¿Cómo supiste (o cómo sabrías) que lo que sientes por alguien va más allá de la atracción física?' },
  { cat: 'proceso', texto: 'El amor suele avanzar por etapas: encontrarse, conocerse y comprometerse. ¿En cuál de ellas te cuesta más avanzar?' },
  { cat: 'proceso', texto: '¿Qué cambios notas en ti (sueño, atención, ánimo) cuando alguien te gusta de verdad?' },
  { cat: 'proceso', texto: '¿Qué esperas encontrar en otra persona: lo que te falta o alguien que te acompañe a ser mejor? ¿Por qué?' },
  { cat: 'proceso', texto: '¿Qué hace que "estar con alguien" siga siendo especial más allá de la emoción de los primeros días?' },
  { cat: 'proceso', texto: '¿Cuál ha sido el momento en que más sentiste que una persona era tu lugar seguro? ¿Qué hizo?' },
  { cat: 'proceso', texto: '¿Crees que enamorarse es un sentimiento que llega solo o también una decisión? ¿Por qué?' },
  { cat: 'proceso', texto: 'Dar y recibir, interés genuino, sinceridad y lealtad: ¿cuál de estas cosas es la que más te hace sentir correspondido/a?' },
  { cat: 'proceso', texto: '¿Qué te gustaría que quede cuando la emoción de los primeros momentos se calme?' },

  // ---------- NECESIDADES Y LÍMITES (20) ----------
  { cat: 'necesidades', texto: 'Tolerancia, afecto, compromiso, límites, reciprocidad, escucha, valores, aceptar al otro: ¿cuál necesitas más hoy? Elige una y cuenta por qué.' },
  { cat: 'necesidades', texto: '¿Qué límite tuyo sientes que a veces no se respeta, o que no te atreves a poner?' },
  { cat: 'necesidades', texto: '¿Qué significa reciprocidad para ti? ¿Sientes que la hay entre ustedes, o en tus relaciones en general?' },
  { cat: 'necesidades', texto: '¿Qué valor es innegociable para ti en una relación? ¿De dónde lo aprendiste?' },
  { cat: 'necesidades', texto: '¿Qué te duele más: la deshonestidad, la deslealtad o la falta de compromiso? Explica tu elección.' },
  { cat: 'necesidades', texto: '¿Qué cosa de la otra persona te cuesta aceptar y estás aprendiendo a aceptar?' },
  { cat: 'necesidades', texto: '¿Cómo te gusta recibir afecto: palabras, tiempo, detalles, contacto? ¿Y cómo lo das tú?' },
  { cat: 'necesidades', texto: 'Propón un compromiso pequeño y concreto que puedan asumir esta semana para cuidar la relación.' },
  { cat: 'necesidades', texto: '¿Alguna vez sentiste presión social (familia, amigos, redes) sobre cómo debería ser tu relación? ¿Cómo lo manejaste?' },
  { cat: 'necesidades', texto: '¿Qué necesitas de la otra persona cuando tienes un mal día? ¿Cómo se lo puedes pedir?' },
  { cat: 'necesidades', texto: '¿Qué significa para ti ser tolerante con alguien que quieres? ¿Dónde está el límite de esa tolerancia?' },
  { cat: 'necesidades', texto: '¿Cuánto espacio personal necesitas? ¿Cómo sabes que el otro lo respeta?' },
  { cat: 'necesidades', texto: '¿Qué cosa pequeña del día a día te hace sentir querido/a?' },
  { cat: 'necesidades', texto: '¿Qué tema te resulta más difícil poner como límite, y por qué?' },
  { cat: 'necesidades', texto: '¿Cómo sabes que alguien te respeta? Da un ejemplo concreto.' },
  { cat: 'necesidades', texto: '¿Qué es lo que más valoras de la otra persona y quisieras que nunca cambiara?' },
  { cat: 'necesidades', texto: '¿Cuál es tu mayor miedo en una relación? ¿Qué te ayudaría a sentirte más seguro/a?' },
  { cat: 'necesidades', texto: '¿Qué esperas de la otra persona cuando cometes un error? ¿Qué te gustaría que hiciera?' },
  { cat: 'necesidades', texto: '¿Qué significa para ti la lealtad en la vida diaria? ¿Cómo se ve en acciones concretas?' },
  { cat: 'necesidades', texto: '¿Qué actitud tuya crees que podrías mejorar para cuidar mejor a las personas que quieres?' },

  // ---------- COMUNICACIÓN (20) ----------
  { cat: 'comunicacion', texto: '¿Qué emoción te cuesta más decir en voz alta? ¿Qué pasa cuando te la guardas?' },
  { cat: 'comunicacion', texto: 'Cuando hay un conflicto, ¿tiendes a evitar, cambiar de tema o alejarte? Cuenta un ejemplo reciente.' },
  { cat: 'comunicacion', texto: '¿En qué momentos sientes que no te escuchan de verdad? ¿Qué haría que te sintieras escuchado/a?' },
  { cat: 'comunicacion', texto: 'Dime algo que hayas querido decirme y no te has atrevido. Quien escucha solo agradece, sin defenderse.' },
  { cat: 'comunicacion', texto: '¿Cómo prefieres que te digan algo difícil: de frente, con tiempo para pensarlo, por escrito o en un audio?' },
  { cat: 'comunicacion', texto: '¿Qué actitudes (tuyas o de la otra persona) generan distancia emocional? Sé específico/a.' },
  { cat: 'comunicacion', texto: 'Cuenta alguna vez en que ocultar algo "para no pelear" terminó empeorando las cosas.' },
  { cat: 'comunicacion', texto: '¿Qué acuerdo de comunicación les haría falta? Por ejemplo: pedir una pausa, no hablar de temas pesados cuando están cansados, avisar cuando algo molesta.' },
  { cat: 'comunicacion', texto: '¿Alguna vez has fingido que todo estaba bien cuando no era así? ¿Qué te llevó a hacerlo?' },
  { cat: 'comunicacion', texto: '¿Cómo reaccionas cuando alguien te dice algo que no quieres oír? ¿Qué te gustaría hacer diferente?' },
  { cat: 'comunicacion', texto: '¿Qué haces cuando algo te molesta: lo hablas enseguida, esperas o te lo guardas? ¿Por qué?' },
  { cat: 'comunicacion', texto: '¿Qué te cuesta más: pedir perdón o perdonar? Cuenta un ejemplo.' },
  { cat: 'comunicacion', texto: '¿Cómo te das cuenta de que alguien cercano está mal aunque no lo diga? ¿Qué haces cuando lo notas?' },
  { cat: 'comunicacion', texto: '¿Prefieres hablar un problema en el momento o esperar a estar tranquilo/a? ¿Por qué?' },
  { cat: 'comunicacion', texto: '¿Qué palabras o frases te duelen más en una discusión? ¿Qué te gustaría escuchar en su lugar?' },
  { cat: 'comunicacion', texto: '¿Alguna vez has dicho "estoy bien" sin estarlo? ¿Qué necesitabas realmente en ese momento?' },
  { cat: 'comunicacion', texto: '¿Qué significa para ti escuchar con atención? ¿Qué cosas te distraen cuando alguien te habla?' },
  { cat: 'comunicacion', texto: '¿Qué conversación pendiente crees que sería bueno tener con alguien importante para ti?' },
  { cat: 'comunicacion', texto: '¿Cómo les gustaría resolver un desacuerdo: con calma, por escrito, con una pausa? ¿Qué reglas pondrían?' },
  { cat: 'comunicacion', texto: '¿Cómo muestras que quieres a alguien cuando te cuesta decirlo con palabras?' },

  // ---------- MADUREZ AFECTIVA (20) ----------
  { cat: 'madurez', texto: '¿Qué crees que significa tener madurez afectiva? ¿En qué aspectos sientes que todavía estás aprendiendo?' },
  { cat: 'madurez', texto: 'Hay quien piensa que el amor es un camino fácil que no requiere esfuerzo. ¿Qué opinas? ¿Qué esfuerzo crees que sí hace falta?' },
  { cat: 'madurez', texto: '¿Alguna vez creíste que el amor se acaba cuando baja la emoción? ¿Qué piensas ahora?' },
  { cat: 'madurez', texto: '¿Qué señales te harían pensar que alguien está más enamorado de la sensación que de ti?' },
  { cat: 'madurez', texto: '¿Qué significa para ti "luchar por mantener y reparar" una relación en vez de desecharla?' },
  { cat: 'madurez', texto: '¿Qué te cuesta más: dar amor o recibirlo? Explica por qué.' },
  { cat: 'madurez', texto: '¿Crees que los sentimientos se pueden gobernar o solo se pueden sentir? ¿Qué opinas?' },
  { cat: 'madurez', texto: '¿Qué proyecto o sueño compartido te gustaría construir con alguien a largo plazo?' },
  { cat: 'madurez', texto: '¿Cómo sabes que alguien está listo para comprometerse? ¿Y cómo sabes si tú lo estás?' },
  { cat: 'madurez', texto: 'Piensa en alguien que sabe cuidar sus relaciones. ¿Qué es lo que más admiras de cómo lo hace?' },
  { cat: 'madurez', texto: '¿Ver a una persona como perfecta puede dañar una relación? ¿Por qué?' },
  { cat: 'madurez', texto: '¿Qué hábito tuyo crees que afectaría una relación a largo plazo y te gustaría trabajar?' },
  { cat: 'madurez', texto: '¿Cómo imaginas una relación sana dentro de cinco años? ¿Qué cosas habrían pasado?' },
  { cat: 'madurez', texto: 'Si alguien dice quererte pero casi no quiere estar contigo, ¿qué piensas? ¿Qué harías?' },
  { cat: 'madurez', texto: '¿Qué significa para ti la exclusividad y por qué es importante (o no) en una relación?' },
  { cat: 'madurez', texto: '¿Prefieres una verdad incómoda o un silencio cómodo? Cuenta un ejemplo.' },
  { cat: 'madurez', texto: 'Contarle a otros los problemas de pareja: ¿cuándo ayuda y cuándo daña? ¿Qué límites pondrías?' },
  { cat: 'madurez', texto: '¿Qué aprendiste de una relación pasada (de pareja, amistad o familia) que hoy te ayuda a querer mejor?' },
  { cat: 'madurez', texto: '¿Dónde está la línea entre aceptar las imperfecciones del otro y aguantar lo que no está bien?' },
  { cat: 'madurez', texto: '¿Qué sería para ti una señal de que una relación va hacia adelante y no se quedó estancada?' },
];

window.RETOS = [
  'Cuenta de 55 en 55 hasta acercarte a 1000, sin equivocarte.',
  'Di el abecedario al revés, de la Z a la A, lo más rápido que puedas.',
  'Nombra 10 frutas sin repetir ninguna.',
  'Imita un animal para que la otra persona adivine cuál es.',
  'Cuéntale un chiste a la otra persona e intenta hacerla reír.',
  'Haz tu mejor imitación de un personaje famoso, un cantante o un profesor.',
  'Actúa una película con mímica (sin hablar) hasta que la otra persona adivine cuál es.',
  'Di "tres tristes tigres tragaban trigo en un trigal" tres veces seguidas sin equivocarte.',
  'Describe a la otra persona usando solo tres palabras.',
  'Dibuja con el dedo en el aire un objeto para que la otra persona adivine cuál es.',
  'Describe tu comida favorita sin decir su nombre, para que la otra persona la adivine.',
  'Di tu próxima frase con voz de robot.',
  'Cuenta de 7 en 7, empezando en 7, hasta llegar a 70 sin equivocarte.',
  'Haz tres caras seguidas: sorpresa, enojo y felicidad.',
  'Inventa un apodo cariñoso para la otra persona y explica por qué se lo pusiste.',
  'Cuéntale a la otra persona cuál fue tu primera impresión de ella.',
  'Hazle un cumplido original a la otra persona, uno que nunca le hayas dicho.',
  'Inventa una historia de tres frases usando tres palabras que la otra persona te diga.',
  'Haz un paso de baile de tu canción favorita (aunque no haya música).',
  'Nombra cinco canciones que te gusten, sin repetir artista.',
];
