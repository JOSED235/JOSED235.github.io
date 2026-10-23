// Todo el texto del sitio vive aquí. Para agregar un proyecto o experiencia,
// añade una entrada en ambos idiomas; los componentes no cambian.

export const links = {
  email: 'jdrpjd@gmail.com',
  github: 'https://github.com/JOSED235',
  linkedin: 'https://www.linkedin.com/in/jose-david-rodriguez-pinilla-b0752526b',
  cv: { es: 'cv/CV_JoseDavidRodriguez_ES.pdf', en: 'cv/CV_JoseDavidRodriguez_EN.pdf' },
}

const projectsMeta = {
  caminoLegal: {
    live: 'https://caminolegal.space',
    address: 'caminolegal.space',
    shots: [
      { src: 'img/cl-inicio.webp', key: 'inicio' },
      { src: 'img/cl-chat.webp', key: 'chat' },
      { src: 'img/cl-semaforo.webp', key: 'semaforo' },
      { src: 'img/cl-admin.webp', key: 'admin' },
    ],
    mobile: 'img/cl-movil.webp',
    version: '26.10',
    build: ['React', 'TypeScript', 'Vite', 'NestJS', 'PostgreSQL', 'TypeORM', 'PWA', 'Gemini', 'WhatsApp', 'Docker', 'Nginx', 'Vitest', 'Playwright', 'GitHub Actions'],
  },
  archimedes: {
    repo: 'https://github.com/JOSED235/ProyectoIntegrador1-Tel',
    address: 'localhost:5173',
    shots: [
      { src: 'img/ar-analisis.webp', key: 'analisis' },
      { src: 'img/ar-dashboard.webp', key: 'dashboard' },
      { src: 'img/ar-paciente.webp', key: 'paciente' },
      { src: 'img/ar-historial.webp', key: 'historial' },
      { src: 'img/ar-captura.webp', key: 'captura' },
    ],
    version: '26.06',
    build: ['ESP32', 'C++', 'PlatformIO', 'MQTT', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'JWT', 'React', 'Tailwind', 'Recharts', 'Docker', 'Nginx'],
  },
  agroiot: {
    repo: 'https://github.com/JOSED235/ProyectoFinalSyC1',
    version: '26.06',
    build: ['Python', 'MQTT', 'Mosquitto', 'Node-RED', 'InfluxDB', 'scikit-learn', 'Pandas', 'Matplotlib', 'Jupyter', 'Docker'],
    shots: [
      { src: 'img/ag-influx.webp', key: 'influx', address: 'localhost:8086 · InfluxDB' },
      { src: 'img/ag-ml.webp', key: 'ml', address: 'online_monitor.py · Matplotlib' },
      { src: 'img/ag-nodered.webp', key: 'nodered', address: 'localhost:1880 · Node-RED' },
      { src: 'img/ag-transform.webp', key: 'transform', address: 'localhost:1880 · Node-RED' },
    ],
  },
  pacman: {
    repo: 'https://github.com/JOSED235/Pacman-aj',
    address: 'Pac-Man · Grafos — JavaFX',
    version: '25.06',
    build: ['Java', 'JavaFX', 'Maven', 'JUnit 5'],
    shots: [
      { src: 'img/pm-juego.webp', key: 'juego' },
      { src: 'img/pm-susto.webp', key: 'susto' },
      { src: 'img/pm-menu.webp', key: 'menu' },
      { src: 'img/pm-gameover.webp', key: 'gameover' },
    ],
  },
  sgmms: {
    repo: 'https://github.com/JOSED235/SIMULADOR-SGMMS',
    address: 'SGMMS · Despacho — JavaFX',
    version: '26.10',
    build: ['Java', 'JavaFX', 'Maven', 'JUnit 5'],
    shots: [
      { src: 'img/sg-despacho.webp', key: 'despacho' },
      { src: 'img/sg-conduccion.webp', key: 'conduccion' },
      { src: 'img/sg-informe.webp', key: 'informe' },
      { src: 'img/sg-menu.webp', key: 'menu' },
    ],
  },
  beatPotato: {
    repo: 'https://github.com/JOSED235/SIMONLEON-TEAM',
    address: 'Beat Potato — Unity',
    version: '26.10',
    build: ['Unity', 'C#'],
    shots: [
      { src: 'img/bp-duelo.webp', key: 'duelo' },
      { src: 'img/bp-racha.webp', key: 'racha' },
      { src: 'img/bp-menu.webp', key: 'menu' },
      { src: 'img/bp-titulo.webp', key: 'titulo' },
    ],
  },
}

// La versión de la página es la del parche más reciente.
export const latestVersion = Object.values(projectsMeta)
  .map((m) => m.version)
  .sort()
  .at(-1)

// Los que más le importan van como parche completo; el resto, como hotfix.
export const majorPatches = ['caminoLegal', 'archimedes', 'agroiot']
export const hotfixPatches = ['beatPotato', 'sgmms', 'pacman']

// Página de runas: la primera de cada rama es la runa principal.
// Dónde se usó cada una sale de las builds de los proyectos; lo demás, de skills.seen.
export const stackTrees = [
  { key: 'backend', items: ['NestJS', 'FastAPI', 'PostgreSQL', 'TypeORM', 'SQLAlchemy', 'InfluxDB', 'SQL', 'WhatsApp', 'Spring Boot'] },
  { key: 'iot', items: ['ESP32', 'MQTT', 'C++', 'PlatformIO', 'Mosquitto', 'Node-RED', 'Cisco Packet Tracer', 'MATLAB'] },
  { key: 'web', items: ['React', 'TypeScript', 'JavaScript', 'Vite', 'PWA', 'Tailwind', 'Recharts', 'HTML/CSS', 'Wix', 'Lovable'] },
  { key: 'data', items: ['Python', 'scikit-learn', 'Pandas', 'Matplotlib', 'Jupyter', 'Gemini', 'R', 'Automation Anywhere'] },
  { key: 'games', items: ['Java', 'JavaFX', 'Maven', 'JUnit 5', 'Unity', 'C#'] },
  { key: 'devops', items: ['Docker', 'Nginx', 'GitHub Actions', 'Git', 'JWT', 'Vitest', 'Playwright'] },
]

// Regla de semestres: fechas como [año, mes]. Sin `to`, sigue hasta `now`.
// `expected` pinta punteado lo que falta hasta la fecha estimada.
export const timeline = {
  start: 2021,
  end: 2029,
  now: [2026, 10],
  items: [
    { key: 'utp', kind: 'course', from: [2021, 1], to: [2021, 12] },
    { key: 'icesi', kind: 'study', from: [2024, 1], to: [2029, 12], expected: true },
    { key: 'ieee', kind: 'community', from: [2024, 1], marks: [{ key: 'rnr25', at: [2025, 9] }, { key: 'rnr26', at: [2026, 9], star: true }] },
    { key: 'comsoc', kind: 'community', from: [2025, 1] },
    { key: 'astro', kind: 'community', from: [2025, 1] },
    { key: 'bootcamp', kind: 'course', from: [2026, 7], to: [2026, 7] },
  ],
}

const hackerRank = (id) => `https://www.hackerrank.com/certificates/${id}`
const drive = (id) => `https://drive.google.com/file/d/${id}/view`

const es = {
  nav: { projects: 'Proyectos', experience: 'Experiencia', skills: 'Stack', team: 'Equipo', certs: 'Certificados', about: 'Formación', contact: 'Contacto' },
  hero: {
    kicker: 'Notas del parche',
    degrees: 'Ingeniería de Sistemas + Ingeniería Telemática · Universidad Icesi',
    available: 'Cali, Colombia · presencial, híbrido o remoto',
    summary:
      'Construyo software de punta a punta: desde el firmware de un ESP32 y la telemetría MQTT hasta la API, la base de datos y la aplicación web. Abajo están mis proyectos como notas del parche: lo nuevo, lo que falló y lo que aprendí.',
    highlights: 'Lo destacado',
    allPatches: 'Ver todas las notas',
    ctaCv: 'Descargar CV',
  },
  projects: {
    eyebrow: 'Proyectos',
    title: 'Notas del parche',
    live: 'Ver en vivo',
    repo: 'Código',
    privateCode: 'Código privado',
    myRole: 'Mi parte',
    featured: 'En producción',
    patch: 'Parche',
    newLabel: 'Nuevo',
    bugLabel: 'Bug conocido',
    learnLabel: 'Aprendido',
    build: 'Build',
    hotfixes: 'Hotfixes',
    hotfixesNote: 'Otros proyectos, en versión corta.',
    more: 'Ver todo lo nuevo',
    caminoLegal: {
      name: 'Camino Legal',
      tagline: 'Asistente legal para el campo colombiano',
      meta: 'Hackatón LINXCO · Equipo de 2 · Oct 2026',
      description:
        'Aplicación web progresiva que ayuda a comunidades rurales a redactar un derecho de petición y a revisar contratos con un semáforo de riesgos, en lenguaje sencillo y funcionando sin señal.',
      role: 'Yo hice la plataforma: el motor de las conversaciones, la API, la app sin internet, WhatsApp y SMS, el asistente con IA, el cifrado y el tablero de seguimiento. Andrés Felipe Angel validó el contenido jurídico y escribió los documentos legales y el pitch.',
      highlights: [
        'Monolito modular: API NestJS y PWA React comparten un paquete de dominio con la máquina de estados de las conversaciones.',
        'Offline-first: instalable, guarda casos en IndexedDB y los sincroniza de forma idempotente al volver la conexión.',
        'Seguridad: cifrado AES-256-GCM, HMAC para teléfonos, JWT por roles, bloqueo por PIN fallidos y purga programada.',
        'Canales SMS y WhatsApp sobre el mismo motor, y asistente de redacción con IA que el usuario siempre revisa.',
        'Accesibilidad: letra grande, lectura en voz alta y pruebas automáticas con Playwright y axe en CI.',
      ],
      bugs: [
        'Al principio nos costó aterrizar la idea y definir qué enfoque darle.',
        'El conector de WhatsApp no arrancaba: Chromium dejaba el perfil bloqueado dentro del volumen de Docker y fallaba en bucle.',
        'No alcancé a tener más idiomas para la presentación final. Decidimos no publicar traducciones a lenguas indígenas hechas por máquina, así que el catálogo quedó listo pero vacío a propósito.',
        'Los casos que se guardan sin conexión todavía no están cifrados en el teléfono.',
      ],
      learned: [
        'Lo que nos destrabó al inicio fue hablar mucho y repartir bien: yo la plataforma, Andrés lo jurídico.',
        'Fue mi primer proyecto grande y mi primer despliegue: la dejé corriendo en caminolegal.space, con los servidores y los contenedores configurados por mí.',
        'Hacer que muchas piezas hablen entre sí: la PWA, la API, la base de datos, el conector de WhatsApp, los SMS y el correo, todas sobre el mismo motor de conversaciones.',
      ],
      shots: { inicio: 'Inicio', chat: 'Asistente', semaforo: 'Semáforo', admin: 'Panel' },
    },
    archimedes: {
      name: 'Proyecto Archimedes',
      tagline: 'Sistema IoT clínico para medir el temblor en manos',
      meta: 'Proyecto Integrador 1 · Individual · Feb – Jun 2026',
      description:
        'Ecosistema IoT que captura movimiento y presión durante la prueba clínica de la espiral de Arquímedes, para evaluar el temblor de forma cuantitativa y no solo visual.',
      highlights: [
        'ESP32 con MPU6050, LSM303DLHC y FSR402 (I2C / ADC de 12 bits) muestreando a 100 Hz.',
        'Telemetría MQTT por lotes JSON y control remoto START/STOP desde la web, sin tocar el botón físico.',
        'API FastAPI + PostgreSQL con autenticación JWT/bcrypt y roles Admin, Doctor y Paciente: cada paciente ve solo su historial.',
        'Dashboard React con gráficas de oscilación y fuerza de agarre; 3 capas en Docker Compose.',
      ],
      bugs: [
        'Por un tiempo no llegaba ni un dato por MQTT: el backend escuchaba un broker y un tópico distintos a los del ESP32. Lo arreglé pasando los dos a un broker público con tópicos propios.',
        'Un error HTTP 500 en el backend que tardé dos días en corregir.',
        'Si se cae el WiFi en plena prueba se pierden muestras: la vía HTTP de respaldo quedó desactivada.',
        'Al principio tenía más ideas de las que una sola persona podía construir y me costó encaminarlas.',
      ],
      learned: [
        'El diseño inicial era telemetría genérica. Construyéndolo entendí que era un sistema clínico: necesitaba roles y poder seguir cada muestra hasta su paciente.',
        'Cambié la base de datos en la nube por un PostgreSQL en contenedor: prefiero controlar el entorno a depender de una cuenta externa.',
      ],
      shots: { analisis: 'Análisis', dashboard: 'Panel', paciente: 'Paciente', historial: 'Historial', captura: 'Captura' },
      shotsNote: 'Capturas con pacientes y señales de demostración.',
    },
    agroiot: {
      name: 'AgroIoT + Machine Learning',
      tagline: 'Monitoreo agroclimático en tiempo real',
      meta: 'Sistemas y Comunicaciones I · Individual · Feb – Jun 2026',
      description:
        'Plataforma de telemetría y analítica predictiva para cultivos de café y palma de aceite: detecta anomalías climáticas antes de que se conviertan en pérdidas.',
      highlights: [
        'Telemetría simulada de 8 parcelas (temperatura, humedad, lluvia, pH) publicada por MQTT.',
        'Gateway en Node-RED que valida rangos, calcula variables derivadas (déficit de presión de vapor), guarda en InfluxDB y genera alertas por umbrales agronómicos.',
        'Modelo híbrido en línea: aprendizaje incremental (PassiveAggressive) más reentrenamiento periódico con HistGradientBoosting.',
        'Detección de anomalías por Z-Score y comparativa offline con validación cruzada (MAE ≈ 2 °C en temperatura).',
      ],
      bugs: [
        'Los datos vienen de un simulador de 8 parcelas, no de sensores instalados en un cultivo.',
      ],
      learned: [
        'Mi primera vez con un gateway (Node-RED), con una base de datos de series de tiempo (InfluxDB) y con machine learning, y mi segunda con MQTT.',
        'Armar un simulador que genera datos todo el tiempo y un modelo que va aprendiendo de lo que llega para hacer predicciones.',
      ],
      shots: { influx: 'InfluxDB', ml: 'ML en línea', nodered: 'Node-RED', transform: 'Transform Data' },
      shotsNote: 'Capturas del sistema corriendo con el simulador de sensores.',
    },
    pacman: {
      name: 'Pac-Man · Grafos',
      tagline: 'Juego de escritorio donde el laberinto es un grafo',
      meta: 'Discretas I · Equipo de 2 · May – Jun 2025',
      description:
        'Pac-Man completo en JavaFX: cada casilla es un vértice y los fantasmas recorren el grafo con algoritmos clásicos, sobre estructuras de datos implementadas desde cero.',
      role: 'Estructuras de datos, grafos y algoritmos, IA de los fantasmas, interfaz JavaFX y pruebas.',
      highlights: [
        'Estructuras propias: lista enlazada, pila, cola, cola de prioridad, tabla hash y union-find.',
        'Laberinto como grafo dirigido: puerta de la casa de un solo sentido y túneles como aristas.',
        'Fantasma rojo con Dijkstra (sobre la cola de prioridad propia), rosado con BFS; cada fantasma en su propio hilo.',
        'Biblioteca de BFS, DFS, Dijkstra, Floyd-Warshall, Kruskal y Prim con 17 pruebas JUnit.',
      ],
      bugs: [
        'En la entrega de 2025 nos falló el manejo de colisiones. En 2026, con más experiencia, lo retomé para corregirlo y terminar el juego.',
      ],
      learned: [
        'Cómo funcionan por dentro las estructuras de datos y los algoritmos de búsqueda en grafos, y mucho más JavaFX.',
      ],
      shots: { juego: 'Juego', susto: 'Pastilla de poder', menu: 'Menú', gameover: 'Game over' },
    },
    sgmms: {
      name: 'SGMMS · Despacho de emergencias',
      tagline: 'Simulador de despacho sobre un grafo vial dinámico',
      meta: 'APO II · Equipo de 3 · 2025 · Reconstruido en 2026',
      description:
        'Simulador de un centro de despacho de emergencias: asignas patrullas, ambulancias y bomberos antes de que venza el plazo de cada incidente, en una ciudad donde el tráfico cambia el costo de cada calle en tiempo real.',
      role: 'Reconstrucción completa: motor de simulación, grafo dinámico, rutas con A*, tráfico, estructuras de datos, interfaz JavaFX y pruebas.',
      highlights: [
        'Grafo vial dinámico: el peso de cada carril depende de la congestión del tráfico civil y los accidentes cierran calles en ambos sentidos.',
        'A* con orígenes y destinos múltiples para vehículos a mitad de cuadra: expande entre 43 y 52 % menos nodos que Dijkstra con el mismo costo óptimo (medido en 2000 rutas).',
        'Cola de triage por plazo en un árbol AVL propio; tabla hash, montículo y lista enlazada también implementados desde cero.',
        'Motor determinista de paso fijo separado de JavaFX: el mismo código corre en el juego, en 52 pruebas JUnit y en un benchmark de estrategias de despacho.',
        'Tráfico con seguimiento vehicular, replanificación con histéresis, conducción manual con GPS e informe de métricas (P90 y cumplimiento de plazos).',
      ],
      bugs: [
        'La versión original en equipo quedó incompleta: los incidentes no se veían ni se podían resolver, y las estructuras no estaban conectadas al juego.',
        'Tener en cuenta el tráfico mejoró la respuesta solo entre 1.6 y 2.1 %, y en Difícil la estrategia dinámica cumplió menos plazos que la estática.',
      ],
      learned: [
        'Medí la causa antes de presumir: en una cuadrícula, cualquier desvío agrega una cuadra entera y cuesta más de lo que ahorra esquivar un trancón corto. Donde A* sí ganó fue en cómputo.',
      ],
      shots: { despacho: 'Despacho', conduccion: 'Conducción', informe: 'Informe', menu: 'Menú' },
    },
    beatPotato: {
      name: 'Beat Potato',
      tagline: 'Duelo rítmico 1v1 con una papa a punto de explotar',
      meta: 'GameHub Game Jam · IEEE CIS Icesi · Equipo de 5 · 24 h · Oct 2026',
      description:
        'Juego de ritmo para dos jugadores en el mismo teclado: cada uno pulsa notas en cuatro carriles al compás de la música y mantener el ritmo empuja la papa hacia el lado del rival.',
      role: 'Backend de partida: el bus de eventos que conecta ritmo, entrada, puntaje e interfaz en la versión entregada, más el ciclo de rondas, rachas, poderes y calor de la papa con sus pruebas (en la rama backend).',
      highlights: [
        'Bus de eventos estático (21 eventos) como contrato entre ritmo, gameplay y presentación: la entrada, el puntaje, los combos, las animaciones y el medidor de presión se comunican sin conocerse.',
        'Reloj musical con AudioSettings.dspTime: la precisión (Perfect, Good, Bad, Miss) se mide contra el tiempo de la nota, no contra su posición en pantalla ni los FPS.',
        'MatchManager con cuenta regresiva y rondas por eventos, sistema de rachas, poderes y calor de la papa, probados fuera del Editor con dobles de UnityEngine.',
        'Trabajo en paralelo de 5 personas con ramas por funcionalidad y pull requests.',
      ],
      bugs: [
        'Hice el backend y toda la lógica del sistema de combos, pero no alcanzamos a integrarlo en Unity antes de la entrega y el equipo decidió dejarlo fuera.',
      ],
      learned: [
        'Fue mi primera vez haciendo un videojuego en Unity. Del lado del backend, el reto era ir preguntando cómo quería el equipo que funcionara el juego y qué poderes tenía cada personaje, y convertir eso en sistemas.',
        'Dividirnos y ver cómo cada uno ponía su parte, desde la historia y los personajes hasta el código, y que todo encajara.',
      ],
      shots: { duelo: 'Duelo', racha: 'Racha', menu: 'Menú', titulo: 'Título' },
      shotsNote: 'Fotogramas del video de la partida grabado por el equipo.',
    },
  },
  experience: {
    eyebrow: 'Historial de partidas',
    title: 'Experiencia',
    matches: 'partidas',
    modes: { internship: 'Pasantía', job: 'Trabajo', seasonal: 'Temporada' },
    did: 'Lo que hice',
    learned: 'Lo que aprendí',
    build: 'Build',
    // De la más reciente a la más vieja, como el historial de LoL.
    items: [
      {
        mode: 'internship',
        role: 'Pasante de desarrollo front-end y web',
        org: 'Fundación Algo en Común',
        date: 'Jun – Ago 2026',
        place: 'Cali · Híbrido · Jornada parcial',
        did: [
          'Me encargué de rediseñar, desarrollar y mantener al día la página web de la fundación: la interfaz y la forma de navegarla.',
          'Configuré las páginas y armé diseños que se adaptan a celular, tableta y computador.',
          'Ayudé con el contenido de los sitios en Wix y con el soporte técnico, para apoyar la comunicación de la fundación.',
        ],
        learned: [
          'Nunca había usado Wix ni Lovable: ahí aprendí a manejarlos para armar y actualizar los sitios.',
          'Aprendí mucho de diseño UX/UI, sobre todo al rediseñar la navegación y adaptar las páginas a cada pantalla.',
        ],
        build: ['Wix', 'Lovable'],
      },
      { mode: 'seasonal', role: 'Vendedor', org: 'Calipieles', date: 'Dic 2023 – Feb 2024', note: 'Atención al cliente y manejo de caja.' },
      { mode: 'seasonal', role: 'Vendedor', org: 'Calipieles', date: 'Dic 2022 – Feb 2023', note: 'Atención al cliente y manejo de caja.' },
      {
        mode: 'job',
        role: 'Asistente de laboratorio',
        org: 'Fablab Cali · Universidad Autónoma de Occidente',
        date: 'Ago 2022 – Ene 2023',
        note: 'Atendía a estudiantes y docentes, y cuidaba y mantenía los equipos de fabricación digital.',
      },
      {
        mode: 'job',
        role: 'Monitor administrativo',
        org: 'Centro para la Excelencia Académica · UAO',
        date: 'Mar – May 2022',
        note: 'Apoyo administrativo y atención a estudiantes y docentes.',
      },
    ],
  },
  skills: {
    eyebrow: 'Herramientas',
    title: 'Página de runas',
    hint: 'Toca una runa para ver en qué proyecto la usé. Las de borde punteado no salen en un proyecto de aquí, pero dicen dónde las vi.',
    usedIn: 'Usado en',
    seenIn: 'Visto en',
    trees: {
      backend: 'Backend',
      iot: 'IoT y redes',
      web: 'Web',
      data: 'Datos e IA',
      games: 'Juegos y escritorio',
      devops: 'DevOps y calidad',
    },
    seen: {
      SQL: 'Certificados SQL (Basic e Intermediate) de HackerRank',
      Python: 'Certificado Python (Basic) de HackerRank',
      MATLAB: 'Curso Telecomunicaciones Onramp de MathWorks',
      Wix: 'Pasantía en la Fundación Algo en Común',
      Lovable: 'Pasantía en la Fundación Algo en Común',
      'Automation Anywhere': 'Bootcamp de Automatización de Comfandi e Icesi',
      JavaScript: 'Este portafolio',
      'HTML/CSS': 'Este portafolio',
      Git: 'Todos los proyectos de esta página',
      'Spring Boot': 'Computación en Internet 2 e Infraestructura 2',
      R: 'Inferencia Estadística y Teoría de Probabilidades',
      'Cisco Packet Tracer': 'Introducción a la Ingeniería Telemática, Arquitecturas TIC e Infraestructura 1 y 2',
    },
  },
  team: {
    eyebrow: 'Fuera del código',
    title: 'Mi equipo',
    trainer: 'Equipo de Jose David · Cali, Colombia',
    typeLabel: 'Tipo',
    members: [
      {
        key: 'series',
        name: 'Steven Universe y Hora de Aventura',
        type: 'Series',
        text: 'Mis series favoritas. De ahí salen los colores de esta página: el modo oscuro es Ciudad Playa de noche y el claro es Ooo de día. Prueba el botón de sol y luna.',
      },
      { key: 'rock', name: 'My Chemical Romance · Three Days Grace', type: 'Rock' },
      { key: 'pop', name: 'Billie Eilish · Olivia Rodrigo', type: 'Pop' },
      { key: 'urbano', name: 'Bad Bunny · Karol G · Feid', type: 'Urbano' },
      { key: 'cancha', name: 'Baloncesto', type: 'Cancha', text: 'Con amigos.' },
      { key: 'gym', name: 'Gimnasio', type: 'Fuerza' },
    ],
  },
  certs: {
    eyebrow: 'Credenciales',
    title: 'Certificaciones',
    verify: 'Verificar',
    view: 'Ver certificado',
    noLink: 'Sin enlace público',
    credId: 'ID',
    issuers: [
      {
        issuer: 'HackerRank',
        mark: 'HR',
        items: [
          { name: 'SQL (Intermediate)', date: 'Oct 2026', skills: ['SQL'], credId: 'dda3926c5f05', url: hackerRank('dda3926c5f05') },
          { name: 'SQL (Basic)', date: 'Oct 2026', skills: ['SQL', 'PostgreSQL'], credId: '7df411b95865', url: hackerRank('7df411b95865') },
          { name: 'Python (Basic)', date: 'Oct 2026', skills: ['Python'], credId: '350d36f89345', url: hackerRank('350d36f89345') },
          { name: 'Java (Basic)', date: 'Oct 2026', skills: ['Java'], credId: 'df71be511dda', url: hackerRank('df71be511dda') },
        ],
      },
      {
        issuer: 'MathWorks',
        mark: 'MW',
        items: [{ name: 'Telecomunicaciones Onramp', date: 'Sep 2026', skills: ['MATLAB', 'Python'] }],
      },
      {
        issuer: 'IEEE Sección Colombia',
        mark: 'IEEE',
        items: [
          { name: 'Reunión Nacional de Ramas 2026', date: 'Sep 2026', skills: ['Networking'], url: drive('1LmyJSaz7JwI9rGzhWL75NwBA8MSl-Vid') },
          { name: 'Reunión Nacional de Ramas 2025', date: 'Sep 2025', url: drive('1x-ZQC7huuGseuTtI08tHXe6WnuIlN1dP') },
        ],
      },
      {
        issuer: 'Universidad Icesi · Centro de Talento',
        mark: 'UI',
        items: [{ name: 'Certificación de pasantía', date: 'Oct 2026', skills: ['Desarrollo front end', 'Wix'], url: drive('1pfcbsh0MfMO4yr4ix2FPK6L5xUvIo30m') }],
      },
      {
        issuer: 'EUDII 50',
        mark: 'EUDII',
        items: [
          {
            name: 'Asistencia al Encuentro de Ingenieros Industriales',
            date: 'Oct 2026',
            credId: 'd8afbf7b-ea76-4352-8360-671cfbd8804e',
            url: 'https://hashproof.dev/verify/d8afbf7b-ea76-4352-8360-671cfbd8804e',
          },
        ],
      },
    ],
  },
  about: {
    eyebrow: 'De 2021 a 2029',
    title: 'Formación y comunidad',
    now: 'Aquí voy · 6.º semestre',
    expected: 'est.',
    kinds: { study: 'Carrera', community: 'Comunidad', course: 'Curso' },
    items: {
      utp: { name: 'Fundamentos de Programación', org: 'Universidad Tecnológica de Pereira', date: '2021' },
      icesi: { name: 'Ingeniería de Sistemas + Ingeniería Telemática', org: 'Universidad Icesi · las dos a la vez', date: '2024 – 2029 (est.)' },
      ieee: { name: 'IEEE · Rama estudiantil Icesi', date: 'Desde 2024' },
      comsoc: { name: 'IEEE ComSoc Icesi', date: 'Desde 2025' },
      astro: { name: 'Semillero de Astrobiología Icesi', date: 'Desde 2025' },
      bootcamp: { name: 'Bootcamp de Automatización', org: 'Comfandi y Universidad Icesi', date: 'Jul 2026', note: 'Automation Anywhere, ciberseguridad y Lean' },
    },
    marks: {
      rnr25: 'RNR 2025 (sep)',
      rnr26: 'RNR 2026 (sep): representé a la rama y fue reconocida con varios premios.',
    },
    languages: 'Español nativo · Inglés B1',
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Eso es todo para el parche',
    text: 'Busco oportunidades en proyectos full stack, backend o de sistemas conectados. Estoy en Cali y puedo trabajar presencial, híbrido o remoto. Escríbeme y te respondo pronto.',
    rows: { email: 'Correo', linkedin: 'LinkedIn', github: 'GitHub', cv: 'CV' },
    cvLangs: { es: 'Español', en: 'Inglés' },
    copy: 'Copiar correo',
    copied: '¡Copiado!',
  },
  footer: 'Diseñado y construido por Jose David Rodríguez Pinilla',
  ui: { theme: 'Cambiar tema', lang: 'Switch to English', menu: 'Menú', prev: 'Anterior', next: 'Siguiente' },
}

const en = {
  nav: { projects: 'Projects', experience: 'Experience', skills: 'Stack', team: 'Team', certs: 'Certificates', about: 'Education', contact: 'Contact' },
  hero: {
    kicker: 'Patch notes',
    degrees: 'Systems Engineering + Telematics Engineering · Universidad Icesi',
    available: 'Cali, Colombia · on-site, hybrid or remote',
    summary:
      'I build software end to end: from ESP32 firmware and MQTT telemetry to the API, the database and the web app. Below are my projects as patch notes: what’s new, what broke and what I learned.',
    highlights: 'Highlights',
    allPatches: 'See all notes',
    ctaCv: 'Download CV',
  },
  projects: {
    eyebrow: 'Projects',
    title: 'Patch notes',
    live: 'Live demo',
    repo: 'Code',
    privateCode: 'Private source',
    myRole: 'My part',
    featured: 'In production',
    patch: 'Patch',
    newLabel: 'New',
    bugLabel: 'Known issue',
    learnLabel: 'Learned',
    build: 'Build',
    hotfixes: 'Hotfixes',
    hotfixesNote: 'Other projects, short version.',
    more: 'See everything new',
    caminoLegal: {
      name: 'Camino Legal',
      tagline: 'Legal assistant for rural Colombia',
      meta: 'LINXCO Hackathon · Team of 2 · Oct 2026',
      description:
        'Progressive web app that helps rural communities draft a formal petition and review contracts with a risk traffic light, in plain language and working without signal.',
      role: 'I built the platform: the conversation engine, the API, the offline app, WhatsApp and SMS, the AI assistant, encryption and the tracking dashboard. Andrés Felipe Angel validated the legal content and wrote the legal documents and the pitch.',
      highlights: [
        'Modular monolith: a NestJS API and a React PWA share a domain package with the conversation state machine.',
        'Offline-first: installable, stores cases in IndexedDB and syncs them idempotently when back online.',
        'Security: AES-256-GCM encryption, HMAC for phone numbers, role-based JWT, PIN lockout and scheduled purges.',
        'SMS and WhatsApp channels on the same engine, plus an AI writing assistant the user always reviews.',
        'Accessibility: large text, read-aloud and automated Playwright + axe tests in CI.',
      ],
      bugs: [
        'At first it was hard to pin down the idea and decide what angle to take.',
        'The WhatsApp connector would not start: Chromium left its profile locked inside the Docker volume and crashed in a loop.',
        'I didn’t get to more languages before the final presentation. We chose not to publish machine translations into Indigenous languages, so the catalog is ready but empty on purpose.',
        'Cases saved offline are not encrypted on the phone yet.',
      ],
      learned: [
        'What got us unstuck early on was talking a lot and splitting the work cleanly: I took the platform, Andrés took the legal side.',
        'It was my first big project and my first deployment: I got it running at caminolegal.space, with the servers and containers set up by me.',
        'Getting many pieces to talk to each other: the PWA, the API, the database, the WhatsApp connector, SMS and email, all on the same conversation engine.',
      ],
      shots: { inicio: 'Home', chat: 'Assistant', semaforo: 'Traffic light', admin: 'Admin' },
    },
    archimedes: {
      name: 'Project Archimedes',
      tagline: 'Clinical IoT system to measure hand tremor',
      meta: 'Integrative Project 1 · Solo · Feb – Jun 2026',
      description:
        'IoT ecosystem that captures motion and pressure during the clinical Archimedes spiral test, so tremor can be assessed quantitatively instead of only visually.',
      highlights: [
        'ESP32 with MPU6050, LSM303DLHC and FSR402 sensors (I2C / 12-bit ADC) sampling at 100 Hz.',
        'Batched JSON telemetry over MQTT and remote START/STOP from the web, no need to press the physical button.',
        'FastAPI + PostgreSQL API with JWT/bcrypt auth and Admin, Doctor and Patient roles: each patient sees only their own history.',
        'React dashboard charting oscillation and grip force; 3 layers on Docker Compose.',
      ],
      bugs: [
        'For a while not a single reading arrived over MQTT: the backend was listening on a different broker and topic than the ESP32. I fixed it by moving both to a public broker with their own topics.',
        'An HTTP 500 error in the backend that took me two days to fix.',
        'If Wi-Fi drops mid-test, samples are lost: the backup HTTP path ended up disabled.',
        'At the start I had more ideas than one person could build, and it was hard to narrow them down.',
      ],
      learned: [
        'The first design was generic telemetry. Building it, I realized it was a clinical system: it needed roles and a way to trace every sample back to its patient.',
        'I swapped the cloud database for PostgreSQL in a container: I’d rather control the environment than depend on an outside account.',
      ],
      shots: { analisis: 'Analysis', dashboard: 'Dashboard', paciente: 'Patient', historial: 'History', captura: 'Capture' },
      shotsNote: 'Screenshots use demo patients and signals.',
    },
    agroiot: {
      name: 'AgroIoT + Machine Learning',
      tagline: 'Real-time agroclimatic monitoring',
      meta: 'Systems & Communications I · Solo · Feb – Jun 2026',
      description:
        'Telemetry and predictive analytics platform for coffee and oil palm crops: spots climate anomalies before they turn into losses.',
      highlights: [
        'Simulated telemetry from 8 plots (temperature, humidity, rain, pH) published over MQTT.',
        'Node-RED gateway that validates ranges, derives variables (vapor pressure deficit), writes to InfluxDB and raises alerts from agronomic thresholds.',
        'Hybrid online model: incremental learning (PassiveAggressive) plus periodic HistGradientBoosting retraining.',
        'Z-Score anomaly detection and a cross-validated offline benchmark (MAE ≈ 2 °C on temperature).',
      ],
      bugs: [
        'The data comes from a simulator of 8 plots, not from sensors installed on a real crop.',
      ],
      learned: [
        'My first time with a gateway (Node-RED), a time-series database (InfluxDB) and machine learning, and my second with MQTT.',
        'Building a simulator that keeps generating data and a model that keeps learning from what arrives to make predictions.',
      ],
      shots: { influx: 'InfluxDB', ml: 'Online ML', nodered: 'Node-RED', transform: 'Transform Data' },
      shotsNote: 'Screenshots of the system running with the sensor simulator.',
    },
    pacman: {
      name: 'Pac-Man · Graphs',
      tagline: 'Desktop game where the maze is a graph',
      meta: 'Discrete Math I · Team of 2 · May – Jun 2025',
      description:
        'Full Pac-Man in JavaFX: every tile is a vertex and the ghosts traverse the graph with classic algorithms, built on data structures implemented from scratch.',
      role: 'Data structures, graphs and algorithms, ghost AI, JavaFX interface and tests.',
      highlights: [
        'Custom structures: linked list, stack, queue, priority queue, hash table and union-find.',
        'Maze as a directed graph: one-way ghost-house door and tunnels as edges.',
        'Red ghost uses Dijkstra (on the custom priority queue), pink uses BFS; each ghost runs on its own thread.',
        'Library of BFS, DFS, Dijkstra, Floyd-Warshall, Kruskal and Prim backed by 17 JUnit tests.',
      ],
      bugs: [
        'In the 2025 submission our collision handling failed. In 2026, with more experience, I came back to fix it and finish the game.',
      ],
      learned: [
        'How data structures and graph search algorithms work from the inside, and a lot more JavaFX.',
      ],
      shots: { juego: 'Gameplay', susto: 'Power pellet', menu: 'Menu', gameover: 'Game over' },
    },
    sgmms: {
      name: 'SGMMS · Emergency Dispatch',
      tagline: 'Dispatch simulator on a dynamic road graph',
      meta: 'Programming II · Team of 3 · 2025 · Rebuilt in 2026',
      description:
        'Emergency dispatch center simulator: assign police cars, ambulances and fire trucks before each incident deadline expires, in a city where traffic changes the cost of every street in real time.',
      role: 'Full rebuild: simulation engine, dynamic graph, A* routing, traffic, data structures, JavaFX interface and tests.',
      highlights: [
        'Dynamic road graph: each lane weight depends on live civilian traffic congestion, and accidents close streets in both directions.',
        'Multi-source, multi-target A* for vehicles in the middle of a block: expands 43–52% fewer nodes than Dijkstra with the same optimal cost (measured over 2,000 routes).',
        'Deadline-ordered triage queue on a custom AVL tree; hash table, heap and linked list also built from scratch.',
        'Deterministic fixed-step engine decoupled from JavaFX: the same code runs the game, 52 JUnit tests and a dispatch-strategy benchmark.',
        'Car-following traffic, rerouting with hysteresis, manual driving with GPS and a metrics report (P90 and deadline compliance).',
      ],
      bugs: [
        'The original team version was left unfinished: incidents were not visible or solvable, and the data structures were not wired into the game.',
        'Taking traffic into account improved response time by only 1.6–2.1%, and on Hard the dynamic strategy met fewer deadlines than the static one.',
      ],
      learned: [
        'I measured the cause before bragging: on a grid, any detour adds a whole block and costs more than dodging a short jam saves. Where A* did win was compute.',
      ],
      shots: { despacho: 'Dispatch', conduccion: 'Driving', informe: 'Report', menu: 'Menu' },
    },
    beatPotato: {
      name: 'Beat Potato',
      tagline: '1v1 rhythm duel with a potato about to explode',
      meta: 'GameHub Game Jam · IEEE CIS Icesi · Team of 5 · 24 h · Oct 2026',
      description:
        'Two-player rhythm game on a single keyboard: each player hits notes across four lanes to the beat, and keeping the rhythm pushes the potato toward the opponent’s side.',
      role: 'Match backend: the event bus that connects rhythm, input, scoring and UI in the shipped build, plus the round cycle, streaks, power-ups and potato heat with their tests (on the backend branch).',
      highlights: [
        'Static event bus (21 events) as the contract between rhythm, gameplay and presentation: input, scoring, combos, animations and the pressure meter talk without knowing each other.',
        'Music clock on AudioSettings.dspTime: accuracy (Perfect, Good, Bad, Miss) is judged against the note’s scheduled time, not its on-screen position or the frame rate.',
        'Event-driven MatchManager with countdown and rounds, plus streak, power-up and potato-heat systems, tested outside the Editor with UnityEngine test doubles.',
        'Five people working in parallel with feature branches and pull requests.',
      ],
      bugs: [
        'I built the backend and all the logic for the combo system, but we couldn’t wire it into Unity before the deadline and the team decided to leave it out.',
      ],
      learned: [
        'It was my first time making a video game in Unity. On the backend side, the challenge was asking the team how they wanted the game to work and what powers each character had, and turning that into systems.',
        'Splitting the work and watching everyone bring their part, from the story and characters to the code, and seeing it all fit together.',
      ],
      shots: { duelo: 'Duel', racha: 'Streak', menu: 'Menu', titulo: 'Title' },
      shotsNote: 'Frames from the gameplay video recorded by the team.',
    },
  },
  experience: {
    eyebrow: 'Match history',
    title: 'Experience',
    matches: 'matches',
    modes: { internship: 'Internship', job: 'Job', seasonal: 'Seasonal' },
    did: 'What I did',
    learned: 'What I learned',
    build: 'Build',
    items: [
      {
        mode: 'internship',
        role: 'Front-end & web development intern',
        org: 'Fundación Algo en Común',
        date: 'Jun – Aug 2026',
        place: 'Cali · Hybrid · Part-time',
        did: [
          "I was in charge of redesigning, building and keeping the foundation's website up to date: its interface and how you move around it.",
          'I set up the pages and built layouts that adapt to phones, tablets and computers.',
          "I helped with the content of the foundation's Wix sites and with tech support, backing its communication work.",
        ],
        learned: [
          'I had never used Wix or Lovable before: that is where I learned to work with them to build and update the sites.',
          'I learned a lot about UX/UI design, especially while redesigning the navigation and adapting the pages to each screen.',
        ],
        build: ['Wix', 'Lovable'],
      },
      { mode: 'seasonal', role: 'Sales associate', org: 'Calipieles', date: 'Dec 2023 – Feb 2024', note: 'Customer service and cash handling.' },
      { mode: 'seasonal', role: 'Sales associate', org: 'Calipieles', date: 'Dec 2022 – Feb 2023', note: 'Customer service and cash handling.' },
      {
        mode: 'job',
        role: 'Lab assistant',
        org: 'Fablab Cali · Universidad Autónoma de Occidente',
        date: 'Aug 2022 – Jan 2023',
        note: 'I helped students and faculty, and looked after and maintained the digital fabrication equipment.',
      },
      {
        mode: 'job',
        role: 'Administrative assistant',
        org: 'Center for Academic Excellence · UAO',
        date: 'Mar – May 2022',
        note: 'Administrative support and assistance to students and faculty.',
      },
    ],
  },
  skills: {
    eyebrow: 'Toolbox',
    title: 'Rune page',
    hint: 'Tap a rune to see which project I used it in. Dashed ones don’t appear in a project here, but they say where I picked them up.',
    usedIn: 'Used in',
    seenIn: 'Seen in',
    trees: {
      backend: 'Backend',
      iot: 'IoT & networking',
      web: 'Web',
      data: 'Data & AI',
      games: 'Games & desktop',
      devops: 'DevOps & quality',
    },
    seen: {
      SQL: 'HackerRank SQL certificates (Basic and Intermediate)',
      Python: 'HackerRank Python (Basic) certificate',
      MATLAB: 'MathWorks Telecommunications Onramp course',
      Wix: 'Internship at Fundación Algo en Común',
      Lovable: 'Internship at Fundación Algo en Común',
      'Automation Anywhere': 'Comfandi & Icesi Automation Bootcamp',
      JavaScript: 'This portfolio',
      'HTML/CSS': 'This portfolio',
      Git: 'Every project on this page',
      'Spring Boot': 'Internet Computing 2 and Infrastructure 2 courses',
      R: 'Statistical Inference and Probability Theory courses',
      'Cisco Packet Tracer': 'Intro to Telematics Engineering, ICT Architectures and Infrastructure 1 and 2 courses',
    },
  },
  team: {
    eyebrow: 'Off the clock',
    title: 'My team',
    trainer: "Jose David's team · Cali, Colombia",
    typeLabel: 'Type',
    members: [
      {
        key: 'series',
        name: 'Steven Universe and Adventure Time',
        type: 'Shows',
        text: 'My favorite shows. The colors of this page come from them: dark mode is Beach City at night and light mode is Ooo by day. Try the sun and moon button.',
      },
      { key: 'rock', name: 'My Chemical Romance · Three Days Grace', type: 'Rock' },
      { key: 'pop', name: 'Billie Eilish · Olivia Rodrigo', type: 'Pop' },
      { key: 'urbano', name: 'Bad Bunny · Karol G · Feid', type: 'Urbano' },
      { key: 'cancha', name: 'Basketball', type: 'Court', text: 'With friends.' },
      { key: 'gym', name: 'Gym', type: 'Strength' },
    ],
  },
  certs: {
    eyebrow: 'Credentials',
    title: 'Certifications',
    verify: 'Verify',
    view: 'View certificate',
    noLink: 'No public link',
    credId: 'ID',
    issuers: [
      {
        issuer: 'HackerRank',
        mark: 'HR',
        items: [
          { name: 'SQL (Intermediate)', date: 'Oct 2026', skills: ['SQL'], credId: 'dda3926c5f05', url: hackerRank('dda3926c5f05') },
          { name: 'SQL (Basic)', date: 'Oct 2026', skills: ['SQL', 'PostgreSQL'], credId: '7df411b95865', url: hackerRank('7df411b95865') },
          { name: 'Python (Basic)', date: 'Oct 2026', skills: ['Python'], credId: '350d36f89345', url: hackerRank('350d36f89345') },
          { name: 'Java (Basic)', date: 'Oct 2026', skills: ['Java'], credId: 'df71be511dda', url: hackerRank('df71be511dda') },
        ],
      },
      {
        issuer: 'MathWorks',
        mark: 'MW',
        items: [{ name: 'Telecommunications Onramp', date: 'Sep 2026', skills: ['MATLAB', 'Python'] }],
      },
      {
        issuer: 'IEEE Colombia Section',
        mark: 'IEEE',
        items: [
          { name: 'National Student Branch Meeting 2026', date: 'Sep 2026', skills: ['Networking'], url: drive('1LmyJSaz7JwI9rGzhWL75NwBA8MSl-Vid') },
          { name: 'National Student Branch Meeting 2025', date: 'Sep 2025', url: drive('1x-ZQC7huuGseuTtI08tHXe6WnuIlN1dP') },
        ],
      },
      {
        issuer: 'Universidad Icesi · Talent Center',
        mark: 'UI',
        items: [{ name: 'Internship certificate', date: 'Oct 2026', skills: ['Front-end development', 'Wix'], url: drive('1pfcbsh0MfMO4yr4ix2FPK6L5xUvIo30m') }],
      },
      {
        issuer: 'EUDII 50',
        mark: 'EUDII',
        items: [
          {
            name: "Attendance, Industrial Engineers Meeting",
            date: 'Oct 2026',
            credId: 'd8afbf7b-ea76-4352-8360-671cfbd8804e',
            url: 'https://hashproof.dev/verify/d8afbf7b-ea76-4352-8360-671cfbd8804e',
          },
        ],
      },
    ],
  },
  about: {
    eyebrow: 'From 2021 to 2029',
    title: 'Education & community',
    now: "I'm here · 6th semester",
    expected: 'exp.',
    kinds: { study: 'Degree', community: 'Community', course: 'Course' },
    items: {
      utp: { name: 'Programming Fundamentals', org: 'Universidad Tecnológica de Pereira', date: '2021' },
      icesi: { name: 'Systems Engineering + Telematics Engineering', org: 'Universidad Icesi · both at once', date: '2024 – 2029 (exp.)' },
      ieee: { name: 'IEEE · Icesi Student Branch', date: 'Since 2024' },
      comsoc: { name: 'IEEE ComSoc Icesi', date: 'Since 2025' },
      astro: { name: 'Icesi Astrobiology Research Group', date: 'Since 2025' },
      bootcamp: { name: 'Automation Bootcamp', org: 'Comfandi & Universidad Icesi', date: 'Jul 2026', note: 'Automation Anywhere, cybersecurity and Lean' },
    },
    marks: {
      rnr25: 'RNR 2025 (Sep)',
      rnr26: 'RNR 2026 (Sep): represented the branch, which received several awards.',
    },
    languages: 'Spanish (native) · English B1',
  },
  contact: {
    eyebrow: 'Contact',
    title: "That's all for patch",
    text: "I'm looking for full stack, backend or connected-systems opportunities. I'm based in Cali and can work on-site, hybrid or remote. Drop me a line and I'll get back to you soon.",
    rows: { email: 'Email', linkedin: 'LinkedIn', github: 'GitHub', cv: 'CV' },
    cvLangs: { es: 'Spanish', en: 'English' },
    copy: 'Copy email',
    copied: 'Copied!',
  },
  footer: 'Designed and built by Jose David Rodríguez Pinilla',
  ui: { theme: 'Toggle theme', lang: 'Cambiar a español', menu: 'Menu', prev: 'Previous', next: 'Next' },
}

export const content = { es, en }
export { projectsMeta }
