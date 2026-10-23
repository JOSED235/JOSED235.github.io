# Proyectos: lo que dicen los repos (material para los "parches")

Sacado de los repos públicos el 2026-10-23. Cada "bug" debe confirmarlo José antes de publicarlo.

## Proyecto Arquímedes (ProyectoIntegrador1-Tel)
- **Problema:** la prueba de la espiral de Arquímedes para el temblor de manos (Parkinson, temblor esencial) se evalúa a ojo y es subjetiva. ESP32 + 3 sensores a 100 Hz miden el trazo.
- **Bug real:** el backend escuchaba un broker/tópico MQTT distinto al del firmware, así que nunca llegaban datos. Se arregló con el broker público `broker.emqx.io` y tópicos `icesi/jose/esp32/...`.
- **Bug real:** un error HTTP 500 entre el 22 y el 24 de abril de 2026 ("error http 500 por corregir" y luego "correcion del error http 500").
- **Decisión:** se pasó de Neon (cloud) a PostgreSQL en contenedor propio, y el modelo pasó de telemetría genérica a sistema clínico con roles (admin/doctor/paciente).
- **Decisión:** no se usó Alembic; las migraciones son `ALTER TABLE` manuales.
- **Pendiente honesto:** la vía HTTP de respaldo quedó desactivada; si se cae el WiFi se pierden muestras.
- Abril a junio de 2026. Hay commits de `aprox60` y uno llamado "forntend-ayudado-gem".

## AgroIoT (ProyectoFinalSyC1)
- Autor único. Sistemas y Comunicaciones I, profesor Gonzalo Llano.
- Monitoreo agroclimático: MQTT → Node-RED → InfluxDB, más ML batch y online.

## Pac-Man · Grafos (Pacman-aj)
- Con Albert Valencia Escobar. José: estructuras, grafos, algoritmos, IA de fantasmas, JavaFX y pruebas. Albert: método de ingeniería, laberinto, tabla hash del grafo, controlador y manual.
- Versión original de mayo-junio de 2025; terminada y jugable en octubre de 2026.

## SGMMS (SIMULADOR-SGMMS)
- **Origen:** Tarea Integradora 2 de APO II (2025), en equipo de tres. Quedó incompleta (no se veían ni se resolvían incidentes). José la rehízo casi entera.
- **Lectura honesta del benchmark:** tener en cuenta el tráfico mejora la respuesta solo 1.6–2.1 %. En Difícil, la estrategia dinámica cumple menos (89.0 % contra 89.8 %). Causa medida: en una cuadrícula, un desvío cuesta una cuadra entera.
- **Lo que sí funciona:** A* expande entre 43 y 52 % menos nodos que Dijkstra, con el mismo costo óptimo.

## Beat Potato (SIMONLEON-TEAM)
- Game jam IEEE CIS, 9 y 10 de octubre de 2026. Equipo: José, Fazb3r/FaiberDev, Felipe C.
- José: arquitectura Core (GameEvents, MatchManager con countdown por eventos, 35 pruebas unitarias), ComboSystem.
- **Bug real:** se hizo un rollback de arquitectura al commit 16c4842 y el ComboSystem de José se eliminó por "incompatible con el rollback".

## Camino Legal (repo local: Sexto Semestre/VeredaClara)
- Hackathon LINXCO, 20 y 21 de octubre de 2026. Equipo de dos: José (ING, Sistemas) y Andrés Felipe Angel Imbacuan (DER, Derecho · Economía, Univalle). Los dos aparecen en la página de Camino Legal, así que se puede nombrar a Andrés.
- **Problema:** acceso a la justicia para comunidades rurales de Colombia: redactar un derecho de petición y revisar señales de riesgo en contratos, en lenguaje sencillo y sin conexión.
- **Parte de José** (texto del propio sitio): diseñó y programó la plataforma: el motor de conversaciones, la API, la app sin internet, WhatsApp y SMS, el asistente con IA, el cifrado y la privacidad, el correo con PDF y el tablero de seguimiento.
- **Bugs reales:** el conector de WhatsApp no arrancaba porque Chromium dejaba bloqueos en el perfil (código 21); el conector se caía con `getChat` antes de enviar; cambios que "no aparecían" porque Docker tenía imágenes viejas y el service worker guardaba la versión anterior.
- **Decisión de principio:** no publicar traducciones a lenguas indígenas hechas por máquina; el catálogo quedó listo pero sin textos validados.
- **Pendiente honesto:** el almacenamiento offline (IndexedDB) aún no está cifrado.
- La bitácora registra trabajo con agentes de IA (Claude Code, Codex) dirigidos por José.

## Palabras de José (2026-10-23)
- Los commits de `aprox60` en Arquímedes eran suyos, hechos desde un computador prestado. Arquímedes sí fue solo.
- ComboSystem: hizo todo el backend y la lógica del sistema; en la entrega final, por falta de tiempo para integrarlo en Unity, el equipo decidió dejarlo fuera.
- **No mencionar el uso de IA/agentes** en la página: no quiere que un reclutador piense que solo trabaja con IA.
- No nombrar a Albert, Felipe ni Faiber: se cuenta solo su parte, sin decir que el proyecto es todo suyo.
- Error común: al inicio tenía muchas ideas y le costaba encaminarlas; en Arquímedes podían ser demasiado para una sola persona.
- Camino Legal: no alcanzó a implementar más idiomas antes de la presentación final.
- Le gustó mucho cómo terminaron los proyectos.

## Palabras de José (2026-10-23, segunda tanda)
- Camino Legal: primer despliegue y primer proyecto grande; aprendió a mezclar muchas tecnologías, conectar back y front, configurar servidores, el conector de WhatsApp y la comunicación entre piezas.
- Beat Potato: primera vez haciendo un juego en Unity; le gustó dividirse, crear la historia y los personajes, y en su parte (backend) ir preguntando cómo quería el equipo que funcionara el juego y los poderes.
- AgroIoT: quiere que vaya grande (lo trabajó varios meses). Primera vez con gateway (Node-RED), InfluxDB y machine learning; segunda con MQTT. Hizo un simulador y un modelo que aprende de los datos que llegan.
- Pac-Man: curso de Discretas I. Aprendió estructuras de datos, búsqueda en grafos y JavaFX. Falló el manejo de colisiones; por eso lo retomó y lo terminó en 2026.
- Hero: el anillo con chips flotantes y la máquina de escribir le parecen genéricos. Eligió "cabecera de parche".
- Stack: lo quiere mantener, personalizado y con íconos. Eligió "página de runas".
- R: Inferencia Estadística y Teoría de Probabilidades. Packet Tracer: Intro a la Ing. Telemática, Arquitecturas TIC, Infraestructura 1 y 2. Spring Boot: Computación en Internet 2 e Infraestructura 2.
- AgroIoT: nada se rompió; al final logró lo que pretendía.
