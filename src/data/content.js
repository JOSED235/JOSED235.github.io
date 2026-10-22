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
    stack: ['React 19', 'TypeScript', 'Vite', 'NestJS 11', 'PostgreSQL', 'TypeORM', 'PWA · Workbox', 'IndexedDB', 'Gemini API', 'Docker', 'Nginx', 'Playwright', 'Vitest', 'GitHub Actions'],
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
    stack: ['ESP32', 'C++ · PlatformIO', 'MQTT', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'JWT · bcrypt', 'React 19', 'Tailwind', 'Recharts', 'Docker Compose', 'Nginx'],
  },
  agroiot: {
    repo: 'https://github.com/JOSED235/ProyectoFinalSyC1',
    stack: ['Python', 'MQTT · Mosquitto', 'Node-RED', 'InfluxDB v2', 'scikit-learn', 'Pandas', 'Matplotlib', 'Jupyter', 'Docker Compose'],
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
    stack: ['Java 17', 'JavaFX', 'FXML', 'Maven', 'JUnit 5', 'Hilos / concurrencia', 'Grafos', 'Dijkstra', 'BFS'],
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
    stack: ['Java 17', 'JavaFX', 'Canvas', 'Maven', 'JUnit 5', 'A*', 'Árbol AVL', 'Montículo binario', 'Tabla hash', 'Simulación determinista'],
    shots: [
      { src: 'img/sg-despacho.webp', key: 'despacho' },
      { src: 'img/sg-conduccion.webp', key: 'conduccion' },
      { src: 'img/sg-informe.webp', key: 'informe' },
      { src: 'img/sg-menu.webp', key: 'menu' },
    ],
  },
}

const hackerRank = (id) => `https://www.hackerrank.com/certificates/${id}`

const es = {
  nav: { projects: 'Proyectos', experience: 'Experiencia', skills: 'Stack', certs: 'Certificados', about: 'Formación', contact: 'Contacto' },
  hero: {
    hello: 'Hola, soy',
    roles: ['Full Stack Developer', 'Desarrollador IoT', 'Ingeniero de Sistemas en formación', 'Ingeniero Telemático en formación'],
    summary:
      'Construyo software de extremo a extremo: desde el firmware de un ESP32 y la telemetría MQTT, hasta APIs seguras y aplicaciones web que la gente realmente usa. Estudio Ingeniería de Sistemas e Ingeniería Telemática en la Universidad Icesi.',
    ctaProjects: 'Ver proyectos',
    ctaCv: 'Descargar CV',
    available: 'Disponible · Cali, presencial, híbrido o remoto',
    stats: [
      { value: '2', label: 'carreras en paralelo' },
      { value: '3', label: 'sistemas de punta a punta' },
      { value: '1', label: 'producto en producción' },
    ],
  },
  projects: {
    eyebrow: 'Proyectos destacados',
    title: 'Lo que he construido',
    live: 'Ver en vivo',
    repo: 'Código',
    privateCode: 'Código privado',
    stack: 'Tecnologías',
    myRole: 'Mi rol',
    featured: 'En producción',
    caminoLegal: {
      name: 'Camino Legal',
      tagline: 'Asistente legal para el campo colombiano',
      meta: 'Hackatón VeredaClara · Equipo de 2 · Oct 2026',
      description:
        'Aplicación web progresiva que ayuda a comunidades rurales a redactar un derecho de petición y a revisar contratos con un semáforo de riesgos, en lenguaje sencillo y funcionando sin señal.',
      role: 'Arquitectura, seguridad e integración: API, PWA, sincronización offline, canales y despliegue.',
      highlights: [
        'Monolito modular: API NestJS y PWA React comparten un paquete de dominio con la máquina de estados de las conversaciones.',
        'Offline-first: instalable, guarda casos en IndexedDB y los sincroniza de forma idempotente al volver la conexión.',
        'Seguridad: cifrado AES-256-GCM, HMAC para teléfonos, JWT por roles, bloqueo por PIN fallidos y purga programada.',
        'Canales SMS y WhatsApp sobre el mismo motor, y asistente de redacción con IA que el usuario siempre revisa.',
        'Accesibilidad: letra grande, lectura en voz alta y pruebas automáticas con Playwright y axe en CI.',
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
        'Telemetría MQTT por lotes JSON con vía HTTP redundante y control remoto START/STOP desde la web.',
        'API FastAPI + PostgreSQL con autenticación JWT/bcrypt y roles Admin, Doctor y Paciente.',
        'Dashboard React con gráficas de oscilación y fuerza de agarre; 3 capas en Docker Compose.',
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
      shots: { despacho: 'Despacho', conduccion: 'Conducción', informe: 'Informe', menu: 'Menú' },
    },
  },
  experience: {
    eyebrow: 'Trayectoria',
    title: 'Experiencia',
    items: [
      {
        role: 'Pasante de Desarrollo Front-End y Web',
        org: 'Fundación Algo en Común',
        date: 'Jun – Ago 2026',
        place: 'Cali · Híbrido',
        points: [
          'Lideré el rediseño y desarrollo de la plataforma web institucional, mejorando la interfaz y la navegación.',
          'Diseñé layouts responsivos y optimicé componentes visuales para distintos dispositivos.',
          'Apoyé la administración de contenido y el soporte técnico de los sitios de la fundación (Wix).',
        ],
      },
      {
        role: 'Asistente de Laboratorio',
        org: 'Fablab Cali · Universidad Autónoma de Occidente',
        date: 'Ago 2022 – Ene 2023',
        points: ['Atención a estudiantes y docentes; gestión y mantenimiento de equipos de fabricación digital.'],
      },
      {
        role: 'Monitor Administrativo',
        org: 'Centro para la Excelencia Académica · UAO',
        date: 'Mar – May 2022',
        points: ['Apoyo administrativo y atención a estudiantes y docentes.'],
      },
      {
        role: 'Vendedor (temporada)',
        org: 'Calipieles',
        date: 'Dic 2022 – Feb 2023 · Dic 2023 – Feb 2024',
        points: ['Atención al cliente y manejo de caja.'],
      },
    ],
  },
  skills: {
    eyebrow: 'Herramientas',
    title: 'Stack técnico',
    groups: [
      { name: 'Lenguajes', items: ['Java', 'Python', 'TypeScript', 'JavaScript', 'SQL', 'C++', 'R'] },
      { name: 'Backend y datos', items: ['Spring Boot', 'FastAPI', 'NestJS', 'APIs REST · OpenAPI', 'PostgreSQL', 'TypeORM', 'SQLAlchemy', 'InfluxDB', 'IndexedDB'] },
      { name: 'Frontend y escritorio', items: ['React', 'HTML', 'CSS', 'Tailwind', 'Vite', 'PWA · offline-first', 'Accesibilidad web', 'JavaFX', 'Wix'] },
      { name: 'IoT y redes', items: ['ESP32', 'MQTT', 'Node-RED', 'Cisco Packet Tracer', 'IPv4/IPv6 · VLANs', 'MATLAB'] },
      { name: 'Datos, IA y automatización', items: ['scikit-learn', 'Pandas', 'Jupyter', 'Integración de LLM (Gemini)', 'Automation Anywhere'] },
      { name: 'DevOps, seguridad y calidad', items: ['Docker', 'Docker Compose', 'Nginx', 'Git', 'GitHub Actions', 'JWT · roles', 'Cifrado AES-256-GCM', 'JUnit 5', 'Vitest', 'Playwright'] },
    ],
  },
  certs: {
    eyebrow: 'Credenciales',
    title: 'Certificaciones',
    verify: 'Ver credencial',
    credId: 'ID',
    issuers: [
      {
        issuer: 'HackerRank',
        mark: 'HR',
        items: [
          { name: 'SQL (Intermediate)', date: 'Oct 2026', skills: ['SQL'], credId: 'dda3926c5f05', url: hackerRank('dda3926c5f05') },
          { name: 'SQL (Basic)', date: 'Oct 2026', skills: ['SQL', 'PostgreSQL'], credId: '7df411b95865', url: hackerRank('7df411b95865') },
          { name: 'Python (Basic)', date: 'Oct 2026', skills: ['Python'], credId: '350d36f89345', url: hackerRank('350d36f89345') },
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
          { name: 'Reunión Nacional de Ramas 2026', date: 'Sep 2026', skills: ['Networking'] },
          { name: 'Reunión Nacional de Ramas 2025', date: 'Sep 2025' },
        ],
      },
      {
        issuer: 'Universidad Icesi · Centro de Talento',
        mark: 'UI',
        items: [{ name: 'Certificación de pasantía', date: 'Oct 2023', skills: ['Desarrollo front end', 'Wix'] }],
      },
    ],
  },
  about: {
    eyebrow: 'Formación y comunidad',
    title: 'Más allá del código',
    education: 'Formación',
    community: 'Comunidad',
    studies: [
      { name: 'Ingeniería de Sistemas', org: 'Universidad Icesi', date: '2024 – 2029 (est.)', note: '6.º semestre' },
      { name: 'Ingeniería Telemática', org: 'Universidad Icesi', date: '2024 – 2029 (est.)', note: '6.º semestre' },
      { name: 'Bootcamp de Automatización', org: 'Comfandi & Universidad Icesi', date: 'Jul 2026', note: 'Automation Anywhere, ciberseguridad y Lean' },
      { name: 'Fundamentos de Programación', org: 'Universidad Tecnológica de Pereira', date: '2021' },
    ],
    activities: [
      { name: 'IEEE · Rama estudiantil Icesi', date: 'Desde 2024', note: 'Representé a la rama en el Encuentro Nacional de Ramas (RNR) 2026, donde fue reconocida con varios premios.' },
      { name: 'IEEE ComSoc Icesi', date: 'Desde 2025' },
      { name: 'Semillero de Astrobiología Icesi', date: 'Desde 2025' },
    ],
    languages: 'Español nativo · Inglés B1',
  },
  contact: {
    eyebrow: 'Contacto',
    title: '¿Construimos algo juntos?',
    text: 'Busco oportunidades en proyectos full stack, backend o de sistemas conectados. Escríbeme y te respondo pronto.',
    copy: 'Copiar correo',
    copied: '¡Copiado!',
  },
  footer: 'Diseñado y construido por Jose David Rodríguez Pinilla',
  ui: { theme: 'Cambiar tema', lang: 'Switch to English', menu: 'Menú', prev: 'Anterior', next: 'Siguiente' },
}

const en = {
  nav: { projects: 'Projects', experience: 'Experience', skills: 'Stack', certs: 'Certificates', about: 'Education', contact: 'Contact' },
  hero: {
    hello: "Hi, I'm",
    roles: ['Full Stack Developer', 'IoT Developer', 'Systems Engineering student', 'Telematics Engineering student'],
    summary:
      'I build software end to end: from ESP32 firmware and MQTT telemetry to secure APIs and web apps people actually use. Dual-degree student in Systems and Telematics Engineering at Universidad Icesi.',
    ctaProjects: 'See projects',
    ctaCv: 'Download CV',
    available: 'Available · Cali, on-site, hybrid or remote',
    stats: [
      { value: '2', label: 'degrees in parallel' },
      { value: '3', label: 'end-to-end systems' },
      { value: '1', label: 'product in production' },
    ],
  },
  projects: {
    eyebrow: 'Featured projects',
    title: "What I've built",
    live: 'Live demo',
    repo: 'Code',
    privateCode: 'Private source',
    stack: 'Tech stack',
    myRole: 'My role',
    featured: 'In production',
    caminoLegal: {
      name: 'Camino Legal',
      tagline: 'Legal assistant for rural Colombia',
      meta: 'VeredaClara Hackathon · Team of 2 · Oct 2026',
      description:
        'Progressive web app that helps rural communities draft a formal petition and review contracts with a risk traffic light, in plain language and working without signal.',
      role: 'Architecture, security and integration: API, PWA, offline sync, messaging channels and deployment.',
      highlights: [
        'Modular monolith: a NestJS API and a React PWA share a domain package with the conversation state machine.',
        'Offline-first: installable, stores cases in IndexedDB and syncs them idempotently when back online.',
        'Security: AES-256-GCM encryption, HMAC for phone numbers, role-based JWT, PIN lockout and scheduled purges.',
        'SMS and WhatsApp channels on the same engine, plus an AI writing assistant the user always reviews.',
        'Accessibility: large text, read-aloud and automated Playwright + axe tests in CI.',
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
        'Batched JSON telemetry over MQTT with a redundant HTTP path and remote START/STOP from the web.',
        'FastAPI + PostgreSQL API with JWT/bcrypt auth and Admin, Doctor and Patient roles.',
        'React dashboard charting oscillation and grip force; 3 layers on Docker Compose.',
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
      shots: { despacho: 'Dispatch', conduccion: 'Driving', informe: 'Report', menu: 'Menu' },
    },
  },
  experience: {
    eyebrow: 'Background',
    title: 'Experience',
    items: [
      {
        role: 'Front-End & Web Development Intern',
        org: 'Fundación Algo en Común',
        date: 'Jun – Aug 2026',
        place: 'Cali · Hybrid',
        points: [
          "Led the redesign and development of the organization's website, improving its interface and navigation.",
          'Built responsive layouts and optimized visual components across devices.',
          "Supported content management and technical support for the foundation's sites (Wix).",
        ],
      },
      {
        role: 'Lab Assistant',
        org: 'Fablab Cali · Universidad Autónoma de Occidente',
        date: 'Aug 2022 – Jan 2023',
        points: ['Supported students and faculty; managed and maintained digital fabrication equipment.'],
      },
      {
        role: 'Administrative Assistant',
        org: 'Center for Academic Excellence · UAO',
        date: 'Mar – May 2022',
        points: ['Administrative support and assistance to students and faculty.'],
      },
      {
        role: 'Sales Associate (seasonal)',
        org: 'Calipieles',
        date: 'Dec 2022 – Feb 2023 · Dec 2023 – Feb 2024',
        points: ['Customer service and cash handling.'],
      },
    ],
  },
  skills: {
    eyebrow: 'Toolbox',
    title: 'Tech stack',
    groups: [
      { name: 'Languages', items: ['Java', 'Python', 'TypeScript', 'JavaScript', 'SQL', 'C++', 'R'] },
      { name: 'Backend & data', items: ['Spring Boot', 'FastAPI', 'NestJS', 'REST APIs · OpenAPI', 'PostgreSQL', 'TypeORM', 'SQLAlchemy', 'InfluxDB', 'IndexedDB'] },
      { name: 'Frontend & desktop', items: ['React', 'HTML', 'CSS', 'Tailwind', 'Vite', 'PWA · offline-first', 'Web accessibility', 'JavaFX', 'Wix'] },
      { name: 'IoT & networking', items: ['ESP32', 'MQTT', 'Node-RED', 'Cisco Packet Tracer', 'IPv4/IPv6 · VLANs', 'MATLAB'] },
      { name: 'Data, AI & automation', items: ['scikit-learn', 'Pandas', 'Jupyter', 'LLM integration (Gemini)', 'Automation Anywhere'] },
      { name: 'DevOps, security & quality', items: ['Docker', 'Docker Compose', 'Nginx', 'Git', 'GitHub Actions', 'JWT · roles', 'AES-256-GCM encryption', 'JUnit 5', 'Vitest', 'Playwright'] },
    ],
  },
  certs: {
    eyebrow: 'Credentials',
    title: 'Certifications',
    verify: 'View credential',
    credId: 'ID',
    issuers: [
      {
        issuer: 'HackerRank',
        mark: 'HR',
        items: [
          { name: 'SQL (Intermediate)', date: 'Oct 2026', skills: ['SQL'], credId: 'dda3926c5f05', url: hackerRank('dda3926c5f05') },
          { name: 'SQL (Basic)', date: 'Oct 2026', skills: ['SQL', 'PostgreSQL'], credId: '7df411b95865', url: hackerRank('7df411b95865') },
          { name: 'Python (Basic)', date: 'Oct 2026', skills: ['Python'], credId: '350d36f89345', url: hackerRank('350d36f89345') },
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
          { name: 'National Student Branch Meeting 2026', date: 'Sep 2026', skills: ['Networking'] },
          { name: 'National Student Branch Meeting 2025', date: 'Sep 2025' },
        ],
      },
      {
        issuer: 'Universidad Icesi · Talent Center',
        mark: 'UI',
        items: [{ name: 'Internship certificate', date: 'Oct 2023', skills: ['Front-end development', 'Wix'] }],
      },
    ],
  },
  about: {
    eyebrow: 'Education & community',
    title: 'Beyond the code',
    education: 'Education',
    community: 'Community',
    studies: [
      { name: 'Systems Engineering', org: 'Universidad Icesi', date: '2024 – 2029 (exp.)', note: '6th semester' },
      { name: 'Telematics Engineering', org: 'Universidad Icesi', date: '2024 – 2029 (exp.)', note: '6th semester' },
      { name: 'Automation Bootcamp', org: 'Comfandi & Universidad Icesi', date: 'Jul 2026', note: 'Automation Anywhere, cybersecurity and Lean' },
      { name: 'Programming Fundamentals', org: 'Universidad Tecnológica de Pereira', date: '2021' },
    ],
    activities: [
      { name: 'IEEE · Icesi Student Branch', date: 'Since 2024', note: 'Represented the branch at the 2026 National Student Branch Meeting (RNR), where it received several awards.' },
      { name: 'IEEE ComSoc Icesi', date: 'Since 2025' },
      { name: 'Icesi Astrobiology Research Group', date: 'Since 2025' },
    ],
    languages: 'Spanish (native) · English B1',
  },
  contact: {
    eyebrow: 'Contact',
    title: "Let's build something together",
    text: "I'm looking for full stack, backend or connected-systems opportunities. Drop me a line and I'll get back to you soon.",
    copy: 'Copy email',
    copied: 'Copied!',
  },
  footer: 'Designed and built by Jose David Rodríguez Pinilla',
  ui: { theme: 'Toggle theme', lang: 'Cambiar a español', menu: 'Menu', prev: 'Previous', next: 'Next' },
}

export const content = { es, en }
export { projectsMeta }
