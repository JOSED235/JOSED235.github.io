# Bitácora del portafolio

Registro de lo que se habló, se decidió y se hizo el **23 de octubre de 2026** (primera parte: secciones 1 a 4; segunda parte: secciones 5 a 10), y lo que quedó pendiente.

Archivos relacionados en esta carpeta:

- `instrucciones.md.txt`: las reglas anti "plantilla de IA". Se leen antes de cualquier cambio.
- `identidad.md`: la sección 1 de las reglas (quién soy, gustos, tono). No se inventa nada fuera de ahí.
- `proyectos.md`: lo que dicen los repos de cada proyecto y mis respuestas sobre qué falló y qué aprendí.

---

## 1. Despliegue en GitHub Pages

**Problema:** el workflow `.github/workflows/deploy.yml` fallaba en el paso `actions/configure-pages@v5` con `Get Pages site failed … Not Found`. El build (`npm run build`) sí pasaba.

**Causa:** GitHub Pages no está activado para el repositorio, o no está configurado para desplegar con GitHub Actions. No es un error del código.

**Solución (manual, en GitHub):**

1. Ir a **github.com/JOSED235/JOSED235.github.io → Settings → Pages**.
2. En **Build and deployment → Source**, elegir **GitHub Actions**.
3. Volver a correr el workflow desde **Actions → Deploy to GitHub Pages → Run workflow**, o hacer un push.

Los avisos de "Node.js 20 is deprecated" y "ubuntu-latest migrará a Ubuntu 26" no bloquean el despliegue.

## 2. Correr la página en mi computador

Node.js v24 está instalado en `C:\Program Files\nodejs`, pero no estaba en el PATH, por eso `npm` y `node` no se reconocían.

Para la ventana actual de PowerShell:

```powershell
$env:Path += ";C:\Program Files\nodejs"
cd "C:\Users\Fa1097la\OneDrive - Universidad Icesi\JOSED235.github.io"
npm install
npm run dev
```

Luego abrir **http://localhost:5173**.

Para arreglarlo de forma permanente (sin permisos de administrador):

```powershell
[Environment]::SetEnvironmentVariable('Path', [Environment]::GetEnvironmentVariable('Path','User') + ';C:\Program Files\nodejs', 'User')
```

Después hay que cerrar y volver a abrir PowerShell y VS Code.

---

## 3. Decisiones tomadas

| Tema | Decisión | Por qué |
|---|---|---|
| Concepto central | **Notas del parche** (estilo patch notes de League of Legends) | LoL es mi juego principal, y el formato Nuevo / Bug conocido / Aprendido obliga a contar qué falló en cada proyecto. |
| Paleta | **Modo oscuro = Steven Universe** (noche en Ciudad Playa). **Modo claro = Hora de Aventura** (Ooo de día). | Son mis series favoritas y la página tenía que ser más colorida. |
| Propuesta de paleta azul/turquesa/violeta | **Rechazada (opción A).** Se tomó solo su estructura de roles: título, subtítulo, hover, enlaces, código y deshabilitado. | Era la paleta "tech" genérica y chocaba con el concepto. |
| Proyectos | **Parches grandes + hotfixes**. | El tamaño refleja lo que más me importa, no una cuadrícula pareja. |
| Numeración | **Año.mes** (26.10 = octubre de 2026). | Sale de las fechas reales, como los parches de LoL. |
| Íconos de tecnologías | **Build por proyecto** (casillas como los items de LoL) y además la **página de runas**. Logos de Simple Icons. | Cada ícono queda ligado a un proyecto o a una fuente real. |
| Stack | Se mantiene, como **página de runas**. | Quería conservarlo, pero personalizado y con íconos. |
| Hero | **Cabecera de parche**. | El anillo que giraba, los chips flotantes y la máquina de escribir se veían de plantilla. |
| Uso de IA en el desarrollo | **No se menciona en la página.** | No quiero que un reclutador piense que solo trabajo con IA. |
| Nombres de compañeros | Solo **Andrés Felipe Angel** (Camino Legal), porque ya aparecemos los dos en la página del proyecto. A los demás no se los nombra; se cuenta solo mi parte. | No se dice que un proyecto de equipo es todo mío. |
| Modo claro y oscuro | Se mantienen, con el botón sol/luna. | Lo pedí yo, no está por verse "profesional". |

---

## 4. Lo que se hizo

### Paleta (`src/styles.css`, tokens al inicio)

**Oscuro, Steven Universe:**

- Fondo `#1b1830` (cielo violeta nocturno) y texto `#e9e1ee`.
- Acento `#ffd447`, la estrella de Steven.
- Nuevo `#a6e35a` (Peridot), Bug `#ff7d8c` (Garnet), Aprendido `#7ee3e0` (Perla), extra `#b9a0f5` (Amatista).

**Claro, Hora de Aventura:**

- Fondo `#fff8e8` (crema) y texto `#1f2a44`.
- Acento `#1565c0`, la camiseta de Finn.
- Nuevo `#2e7d32` (pasto), Bug `#c62828` (Marceline), Aprendido `#c2185b` (Dulce Princesa), resaltado `#ffc93c` (Jake).

**Roles nuevos:** `--heading`, `--heading-2`, `--accent-hover`, `--link`, `--code-bg`, `--disabled`, `--shadow` y `--highlight-text`. Este último es el amarillo Jake oscurecido para que se pueda leer como texto en el modo claro.

Todo el texto pasa el contraste mínimo AA (4.5:1).

### Proyectos (`src/components/Projects.jsx`)

- La sección se llama **"Notas del parche"**.
- **Parches grandes:**
  - Camino Legal (26.10)
  - Proyecto Arquímedes (26.06)
  - AgroIoT (26.06)

  Cada uno tiene un sello "PARCHE 26.10" torcido (el elemento fuera de la cuadrícula), las capturas, "Mi parte", las listas **+ Nuevo**, **! Bug conocido** y **→ Aprendido**, la build de íconos y los enlaces.
- **Hotfixes:**
  - Beat Potato (26.10)
  - SGMMS (26.10)
  - Pac-Man (25.06)

  Van en filas sin tarjeta: versión, mi parte, bug, aprendido, una captura, la build pequeña y "Ver todo lo nuevo".
- Cada proyecto tiene un ancla `#p-<id>`, que usan el hero y las runas.

**Cambios de contenido:**

- Camino Legal ahora dice **Hackatón LINXCO** (antes decía VeredaClara) y nombra a Andrés con su parte.
- Arquímedes ya no dice "vía HTTP redundante", porque quedó desactivada. Ahora aparece como bug conocido.
- Se quitó de Beat Potato la mención al registro de uso de IA.

### Página de runas (`src/components/Skills.jsx`)

- Seis ramas: Backend, IoT y redes, Web, Datos e IA, Juegos y escritorio, DevOps y calidad. Cada una tiene su color y su runa principal.
- Al tocar una runa se ve **en qué parches se usó**. Ese dato se calcula desde las builds, así que no se puede desincronizar.
- Las runas con **borde punteado** no salen en un proyecto de la página. Dicen dónde las vi:
  - SQL y Python: certificados de HackerRank.
  - MATLAB: curso Onramp de MathWorks.
  - Wix: pasantía en la Fundación Algo en Común.
  - Automation Anywhere: bootcamp de Comfandi e Icesi.
  - JavaScript y HTML/CSS: este portafolio.
  - R: Inferencia Estadística y Teoría de Probabilidades.
  - Cisco Packet Tracer: Introducción a la Ingeniería Telemática, Arquitecturas TIC e Infraestructura 1 y 2.
  - Spring Boot: Computación en Internet 2 e Infraestructura 2.

### Hero (`src/components/Hero.jsx`)

- "NOTAS DEL PARCHE 26.10". La versión se calcula del parche más reciente.
- Nombre, foto pequeña torcida, carreras, ubicación y modalidad.
- Texto nuevo, sin "aplicaciones web que la gente realmente usa".
- Enlaces en texto: GitHub, LinkedIn, correo y Descargar CV.
- Recuadro **"Lo destacado"** con los 3 parches grandes.
- **Se eliminaron** el anillo giratorio, los chips flotantes, la máquina de escribir, los contadores y los dos botones genéricos, con sus estilos.

### Archivos nuevos o tocados

| Archivo | Qué es |
|---|---|
| `src/data/content.js` | Todos los textos (ES/EN). Agrega `version`, `build`, `bugs`, `learned`, `majorPatches`, `hotfixPatches` y `stackTrees`. |
| `src/components/techIcons.js` | Mapa de nombre de tecnología → logo de Simple Icons. |
| `src/components/TechIcon.jsx` | Muestra el logo, o las iniciales si no hay logo (JavaFX, C#, Playwright, Recharts, Matplotlib, MATLAB, Automation Anywhere). |
| `src/components/Projects.jsx` | Parches y hotfixes. |
| `src/components/Skills.jsx` | Página de runas. |
| `src/components/Hero.jsx` | Cabecera de parche. |
| `src/styles.css` | Paleta, parches, build, runas, hero y limpieza de estilos viejos. |
| `package.json` | Dependencia nueva: `simple-icons@15`. |
| `docs/identidad.md`, `docs/proyectos.md`, `docs/bitacora.md` | Documentación de esta sesión. |


---

# Segunda parte (23 de octubre de 2026, tarde)

Se rehicieron todas las secciones que seguían con el formato viejo, una a la vez y con 2 o 3 opciones de diseño en cada una. El orden de la página quedó así:

| # | Sección | Composición | Archivo |
|---|---|---|---|
| — | Hero | Cabecera de parche | `Hero.jsx` |
| 01 | Notas del parche | Parches grandes + hotfixes | `Projects.jsx` |
| 02 | Experiencia | Historial de partidas (LoL) | `Experience.jsx` |
| 03 | Página de runas | Ramas de runas | `Skills.jsx` |
| 04 | Mi equipo | Pantalla de equipo de Pokémon | `Team.jsx` (nuevo) |
| 05 | Certificaciones | Talonario de boletas | `Certifications.jsx` |
| 06 | Formación y comunidad | Regla de semestres 2021–2029 | `About.jsx` |
| 07 | Contacto | Cierre del parche | `Contact.jsx` |

Commits de esta parte, en orden: `40cdb01` Mi equipo · `9abce44` Formación · `bf03b60` Experiencia · `5667395` Certificados · `56f69de` enlaces de certificados y Contacto.

## 5. Decisiones de la segunda parte

| Sección | Opciones que se ofrecieron | Elegí | Por qué |
|---|---|---|---|
| Sección personal | Equipo Pokémon · Perfil de invocador · Lado A / Lado B (casete) | **Equipo Pokémon** | Rompe el ritmo de los parches con otro juego mío y no se puede pegar en otro portafolio. |
| ¿Gustos y formación juntos? | Separarlos · Misma sección | **Separarlos** | Cada uno con su composición. |
| Formación | Regla de semestres · Historial de partidas · Carnet + medallas | **Regla de semestres** | Es la única sección con eje horizontal y solo usa fechas reales. |
| Título de Formación | "Dos carreras a la vez" · "Formación y comunidad" · "De dónde salgo" | **Formación y comunidad** | Directo; el carácter lo pone la composición. |
| Experiencia | Historial de partidas · Lo técnico + lo de antes · Fichas de turno | **Historial de partidas** | Encaja con trabajos cortos sin inflarlos. |
| Certificados | Talonario de boletas · Desafíos (LoL) · Pared de diplomas | **Talonario de boletas** | El ID de cada credencial por fin tiene sentido visual, y varía el ritmo. |
| Contacto | Cierre del parche · Sala de espera (LoL) · Carta corta | **Cierre del parche** | Cierra el concepto donde empezó y deja de ser el bloque centrado. |
| Nota de Mi equipo ("Pokémon no tiene casilla…") | — | **Se quitó** | Lo pedí yo. |

## 6. Lo que se hizo en la segunda parte

### Mi equipo (`Team.jsx`, nuevo)

- Composición de la pantalla de equipo de Pokémon (Gen III): **una casilla líder grande y torcida** a la izquierda y cinco filas a la derecha.
- Cada casilla tiene una **pokébola hecha con CSS**, con la mitad de arriba del color de su tipo. Sombras duras, como de pantalla de juego.
- Sin PS, niveles ni cifras.
- Casillas:
  - **Líder · Series:** Steven Universe y Hora de Aventura. Explica que los colores de la página salen de ahí.
  - **Rock:** My Chemical Romance · Three Days Grace.
  - **Pop:** Billie Eilish · Olivia Rodrigo.
  - **Urbano:** Bad Bunny · Karol G · Feid.
  - **Cancha:** baloncesto, con amigos.
  - **Fuerza:** gimnasio.
- Encabezado: "Equipo de Jose David · Cali, Colombia". Va entre Runas y Certificados.

### Formación y comunidad (`About.jsx`)

- Una regla de **enero de 2021 a diciembre de 2029**, ubicada por meses, con una marca **"Aquí voy · 6.º semestre"** en octubre de 2026.
- Filas, de la más vieja a la más nueva:
  - **Curso:** Fundamentos de Programación, UTP, 2021.
  - **Carrera:** Ing. de Sistemas + Ing. Telemática, Icesi, "las dos a la vez". Barra sólida hasta hoy y punteada hasta 2029 (est.).
  - **Comunidad:** rama IEEE Icesi desde 2024, con un círculo en la **RNR 2025** y una estrella en la **RNR 2026** (representé a la rama y fue reconocida con varios premios).
  - **Comunidad:** IEEE ComSoc Icesi y Semillero de Astrobiología, desde 2025.
  - **Curso:** Bootcamp de Automatización, Comfandi e Icesi, julio de 2026.
- Las fechas viven en `timeline` (en `content.js`), separadas de los textos.

### Experiencia (`Experience.jsx`)

- Historial de partidas: una fila por trabajo con su **modo** y su color (Pasantía, Temporada, Trabajo). Cada fila se abre con `<details>`, y la pasantía arranca abierta.
- Sin victoria ni derrota.
- **Pasantía en la Fundación Algo en Común** (jun–ago 2026 · Cali · Híbrido · Jornada parcial):
  - *Lo que hice:* rediseñar, desarrollar y mantener al día la página web; configurar las páginas y armar diseños para celular, tableta y computador; ayudar con el contenido en Wix y el soporte técnico, para apoyar la comunicación de la fundación.
  - *Lo que aprendí:* nunca había usado **Wix ni Lovable** y ahí aprendí a manejarlos; aprendí mucho de **diseño UX/UI**, sobre todo al rediseñar la navegación y adaptar las páginas a cada pantalla.
  - *Build:* Wix y Lovable.
- Los textos salen de LinkedIn, pero sin el relleno ("boost digital impact", "ensure optimal performance").
- Las otras filas: Calipieles (dos temporadas), Fablab Cali (UAO) y la monitoría en la UAO.
- `Build` pasó a su propio archivo (`Build.jsx`) para compartirlo con Proyectos.

### Certificaciones (`Certifications.jsx`)

- Cada certificado es una **boleta con talón troquelado**, que lleva la fecha, el ID real y "Verificar ↗" o "Ver certificado ↗". La segunda boleta va torcida.
- Un color por emisor: HackerRank verde, MathWorks Perla, IEEE Amatista/Jake, Icesi el acento y EUDII Garnet/Marceline.
- Certificados:
  - **HackerRank** (oct 2026): SQL Intermediate, SQL Basic, Python Basic y **Java Basic** (nuevo).
  - **MathWorks:** Telecomunicaciones Onramp (sep 2026), **sin enlace todavía**.
  - **IEEE:** RNR 2026 y RNR 2025, con enlace de Drive.
  - **Icesi, Centro de Talento:** certificación de pasantía. Corregida de oct 2023 a **oct 2026**, con enlace de Drive.
  - **EUDII 50** (nuevo): asistencia al Encuentro de Ingenieros Industriales, oct 2026. ID `d8afbf7b-…` y verificación en hashproof.dev.

### Contacto (`Contact.jsx`)

- "Eso es todo para el parche **26.10**". La versión sale de `latestVersion` en `content.js`, el mismo cálculo que usa el Hero.
- Lo que busco (full stack, backend, sistemas conectados), Cali y modalidad.
- Filas con "+": Correo con botón de copiar, LinkedIn, GitHub y CV en Español e Inglés.
- Firma "Jose David" torcida.
- Se quitó el bloque centrado con "¿Construimos algo juntos?".

### Otros cambios

- **Lovable** entró a la página de runas (rama Web), con borde punteado y "Visto en: Pasantía en la Fundación Algo en Común". No tiene logo en Simple Icons, así que se muestra con sus iniciales.
- **Nav:** se agregó "Equipo". Las secciones se renumeraron del 01 al 07.
- **CSS borrado** porque quedó sin uso: la línea de tiempo vieja, `.highlights`, `.entry*`, `.about-grid`, `.cert*` y `.contact*`.

## 7. Mis gustos y respuestas (resumen para retomar)

Todo esto ya está en `identidad.md` y `proyectos.md`. Va aquí para tenerlo a mano.

- **Me llaman:** Jose David. Soy de Cali, toda la vida; me gusta viajar.
- **Estudio:** Ing. de Sistemas + Ing. Telemática en Icesi (6.º semestre, 2024–2029 est.).
- **Música:** rock (My Chemical Romance, Three Days Grace), pop (Billie Eilish, Olivia Rodrigo) y urbano (Bad Bunny, Karol G, Feid).
- **Deporte:** gimnasio y baloncesto con amigos.
- **Juegos:** League of Legends (el principal) y Pokémon.
- **Series:** Hora de Aventura y Steven Universe.
- **Tono:** equilibrado, ni muy formal ni muy informal.
- **Página:** bilingüe (ES/EN) y con modo claro y oscuro, porque me encanta.
- **Uso de IA:** no se menciona en la página.
- **Compañeros:** solo se nombra a Andrés Felipe Angel (Camino Legal). En los demás proyectos se cuenta solo mi parte.
- **Proyectos favoritos:** Camino Legal y Proyecto Arquímedes. AgroIoT también va grande.
- **Pasantía:** Wix y Lovable eran nuevos para mí; aprendí mucho de UX/UI.
- **Commits:** los hago yo. Claude deja los cambios listos y me da los comandos.

---

## 8. Pendientes

### Para hacer yo (José)

- [x] Activar GitHub Pages con fuente GitHub Actions. Ya despliega solo con cada push.
- [x] Arreglar el PATH de Node de forma permanente.
- [x] Commit y push de la primera y la segunda parte.
- [ ] Revisar la página completa en vivo (https://josed235.github.io/), en modo claro y oscuro, en computador y en celular.
- [ ] Pasar el enlace del certificado de **MathWorks Telecomunicaciones Onramp** (y cualquier otro que falte).
- [ ] Confirmar el nombre exacto del certificado **EUDII 50** y quién lo emite. Hoy dice "Asistencia al Encuentro de Ingenieros Industriales" con emisor "EUDII 50".
- [ ] Confirmar el nombre de la **RNR**: el texto viejo decía "Encuentro Nacional de Ramas" y el certificado dice "Reunión Nacional de Ramas". En la regla de Formación quedó solo "RNR".
- [ ] Decir en qué **mes** empecé Icesi, IEEE, ComSoc y el semillero. Hoy las barras arrancan en enero.

### Detalles pequeños que quedan

- [ ] **Nav:** el enlace "Stack" podría llamarse "Runas".
- [ ] **Footer:** dice "React + Vite". Revisar si aporta algo o se cambia por algo propio.
- [ ] **Mi equipo:** si tengo un Pokémon favorito (o un campeón o rol de LoL), sería un buen detalle.

### Información que todavía falta (sección 1 de las reglas)

- [ ] Colores o estéticas que **no** me gustan.
- [ ] Frases o expresiones mías que uso de verdad.
- [ ] Sitios web de referencia que me gusten.
- [ ] Material de proceso: fotos del ESP32 armado, bocetos o versiones descartadas.

### Mejoras opcionales

- [ ] Subir las versiones de las acciones del workflow para quitar el aviso de Node 20.
- [ ] Revisar el peso del bundle de JavaScript: 349 kB (con gzip, 120 kB). Lo más pesado son los logos de `simple-icons`.

---

## 9. Checklist de las reglas (estado actual)

| Pregunta | Respuesta |
|---|---|
| ¿Alguien que me conozca reconocería que esto es mío? | Sí: LoL en toda la estructura, Pokémon en Mi equipo, mi música, el baloncesto, el gym, Steven Universe y Hora de Aventura en los colores. |
| ¿Hay al menos 3 detalles que no existirían en otro portafolio? | Sí: parches con versión, runas, equipo Pokémon con mis gustos, regla de semestres con "aquí voy", historial de partidas y talonario de boletas. |
| ¿Hay algún dato, cifra o frase que yo no haya dicho? | No. Todo sale de los repos, de LinkedIn, de los certificados o de mis respuestas. Lo que faltaba quedó como `[PENDIENTE]` o en esta lista. |
| ¿Alguna frase suena a folleto corporativo? | No. Se reescribieron la pasantía y el contacto. |
| ¿Las secciones se ven todas iguales? | No: las 8 tienen composiciones distintas. |
| ¿Se nota un concepto central? | Sí: notas del parche de principio (Hero) a fin (Contacto). |
| ¿Cada proyecto cuenta una historia? | Sí: los 6 tienen Nuevo, Bug conocido y Aprendido. |
| ¿Es accesible y funciona en celular? | Sí: revisado con capturas a 390 px y en los dos temas, sin scroll horizontal; `<details>` y botones manejables con teclado. |

## 10. Cómo retomar

1. Leer `instrucciones.md.txt`, `identidad.md`, `proyectos.md` y esta bitácora.
2. `npm run dev` y abrir http://localhost:5173.
3. Todos los textos están en `src/data/content.js`, en los dos idiomas. Las fechas de la regla están en `timeline` y las de los proyectos en `projectsMeta`.
4. Seguir con la lista de pendientes de la sección 8, una cosa a la vez.
