# Organizar el perfil de GitHub

Textos listos para copiar y pegar. Se hace a mano en github.com: desde aquí no hay acceso a tu cuenta.
Nada de esto inventa datos: sale de la página y de los README de cada repo.

---

## 1. Bio del perfil

**Dónde:** github.com/JOSED235 → *Edit profile*.

- **Bio** (máx. 160 caracteres):
  `Full stack e IoT · Ing. de Sistemas + Telemática en Icesi · De la placa ESP32 a la app web. Cali, Colombia.`
- **Location:** `Cali, Colombia`
- **Website:** `https://josed235.github.io`
- **Social:** el enlace de LinkedIn.

## 2. README del perfil

**Dónde:** crea un repo **público** llamado exactamente `JOSED235` (igual que tu usuario), marca "Add a README" y pega esto en el `README.md`:

```markdown
### Hola, soy Jose David

Estudio Ingeniería de Sistemas e Ingeniería Telemática en la Universidad Icesi (Cali, Colombia).
Construyo software de punta a punta: desde el firmware de un ESP32 y la telemetría MQTT
hasta la API, la base de datos y la aplicación web.

**Disponible** para medio tiempo o por horas durante el semestre, y tiempo completo en vacaciones.
Presencial o remoto.

#### Proyectos
- **Camino Legal**: PWA offline-first para que comunidades rurales redacten un derecho de petición.
  NestJS + React + PostgreSQL, en producción en [caminolegal.space](https://caminolegal.space) (código privado).
- **[Proyecto Arquímedes](https://github.com/JOSED235/ProyectoIntegrador1-Tel)**: ESP32 con 3 sensores a 100 Hz,
  MQTT, FastAPI y React para medir el temblor en manos.
- **[SGMMS](https://github.com/JOSED235/SIMULADOR-SGMMS)**: simulador de despacho de emergencias con A* sobre
  un grafo vial dinámico, AVL propio y 52 pruebas JUnit.
- **[AgroIoT](https://github.com/JOSED235/ProyectoFinalSyC1)**: MQTT → Node-RED → InfluxDB, con un modelo que
  aprende en línea.

Todo, con lo que falló y lo que aprendí: **[josed235.github.io](https://josed235.github.io)**

TypeScript · React · NestJS · Python · PostgreSQL · Docker · MQTT · ESP32 · Java
```


## 3. Fijar repos (Pinned)

**Dónde:** en tu perfil → *Customize your pins*. Máximo 6, en este orden:

1. `ProyectoIntegrador1-Tel` (Arquímedes)
2. `SIMULADOR-SGMMS`
3. `ProyectoFinalSyC1` (AgroIoT)
4. `Pacman-aj`
5. `SIMONLEON-TEAM` (Beat Potato)
6. `JOSED235.github.io`

Camino Legal no se puede fijar porque es privado; ya queda en el README del perfil.
La red 5G y Redes Rurales **no se fijan** hasta que estén más avanzadas.

## 4. Descripción y temas de cada repo

**Dónde:** en cada repo, el engranaje ⚙ junto a "About". Pega la descripción, el sitio web y los temas (*topics*).

| Repo | Descripción | Topics |
|---|---|---|
| `ProyectoIntegrador1-Tel` | Sistema IoT clínico para medir el temblor en manos en la prueba de la espiral de Arquímedes. ESP32 + MQTT + FastAPI + React. | `esp32` `iot` `mqtt` `fastapi` `react` `postgresql` `docker` |
| `SIMULADOR-SGMMS` | Simulador de despacho de emergencias sobre un grafo vial dinámico. A*, AVL propio, JavaFX y 52 pruebas JUnit. | `java` `javafx` `graphs` `a-star` `data-structures` `junit5` |
| `ProyectoFinalSyC1` | Monitoreo agroclimático en tiempo real: MQTT, Node-RED, InfluxDB y machine learning en línea. | `iot` `mqtt` `node-red` `influxdb` `machine-learning` `python` |
| `Pacman-aj` | Pac-Man en JavaFX donde el laberinto es un grafo: Dijkstra, BFS y estructuras propias. | `java` `javafx` `graphs` `dijkstra` `game` |
| `SIMONLEON-TEAM` | Beat Potato: duelo rítmico 1v1 en Unity, hecho en 24 h en la GameHub Game Jam (IEEE CIS Icesi). | `unity` `csharp` `game-jam` `rhythm-game` |
| `JOSED235.github.io` | Mi portafolio: proyectos contados como notas del parche. React + Vite. | `portfolio` `react` `vite` |

En **Website** de cada repo puedes poner el enlace a su proyecto en la página, por ejemplo
`https://josed235.github.io/#p-sgmms` (los anclas son `#p-caminoLegal`, `#p-archimedes`, `#p-sgmms`,
`#p-agroiot`, `#p-pacman` y `#p-beatPotato`).

## 5. Los repos de clase sueltos

`Taller1Compunet2`, `git-lab-infraestructura`, `Infraestructura1` y `SITM-MIOLNJ` no tienen descripción.
No hace falta borrarlos: con los fijados arriba ya no son lo primero que se ve. Como mínimo, ponles una
descripción de una línea (materia y qué hace), o márcalos como **Archived** si ya no los vas a tocar
(Settings → Danger Zone → Archive).

**No cambies nombres de repos** que salen en la página: GitHub redirige el nombre viejo, pero es mejor
no depender de eso. Si cambias alguno, avísame y actualizo el enlace en `src/data/content.js`.

## 6. Cada README de proyecto

Para los 5 fijados, lo ideal es que el README empiece con:

1. Una línea de qué es.
2. Una captura (las WebP de `public/img/` sirven).
3. Cómo correrlo.
4. Tu parte, si fue en equipo.

Si quieres, lo hacemos repo por repo.
