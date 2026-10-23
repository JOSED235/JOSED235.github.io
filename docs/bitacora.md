# Bitácora del portafolio

Registro de lo que se habló, se decidió y se hizo en la sesión del **23 de octubre de 2026**, y lo que quedó pendiente.

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

## 5. Pendientes

### Para hacer yo (José)

- [ ] **Activar GitHub Pages** con fuente **GitHub Actions** (ver la sección 1).
- [ ] **Arreglar el PATH** de Node de forma permanente (ver la sección 2).
- [ ] **Revisar en http://localhost:5173** el hero, los parches y las runas, en modo claro y oscuro, en computador y en celular.
- [ ] **Hacer el commit y el push** de todo lo de esta sesión. Todavía no hay nada subido.

### Siguientes secciones a rehacer (una a la vez)

- [ ] **Experiencia:** sigue con la línea de tiempo vieja.
- [ ] **Certificados:** formato viejo.
- [ ] **Formación** ("Más allá del código"): formato viejo. Podría alojar algo personal: música (MCR, Three Days Grace, Billie Eilish, Olivia Rodrigo, Bad Bunny, Karol G, Feid), baloncesto, gimnasio, Pokémon, Hora de Aventura y Steven Universe.
- [ ] **Contacto:** formato viejo. Hay que revisar si dice algo que suene a folleto.
- [ ] **Nav:** el enlace "Stack" podría llamarse "Runas".
- [ ] **Footer:** dice "React + Vite". Revisar si aporta algo.

### Información que todavía falta (sección 1 de las reglas)

- [ ] Colores o estéticas que **no** me gustan.
- [ ] Frases o expresiones mías que uso de verdad.
- [ ] Sitios web de referencia que me gusten.
- [ ] Material de proceso: fotos del ESP32 armado, bocetos o versiones descartadas.

### Mejoras opcionales

- [ ] Subir las versiones de las acciones del workflow para quitar el aviso de Node 20.
- [ ] Revisar el peso del bundle de JavaScript (332 kB; con gzip, 114 kB).

---

## 6. Checklist de las reglas (estado actual)

| Pregunta | Respuesta |
|---|---|
| ¿Alguien que me conozca reconocería que esto es mío? | Más que antes: LoL, Steven Universe, Hora de Aventura y mis proyectos contados con mis palabras. Faltan las secciones personales. |
| ¿Hay al menos 3 detalles que no existirían en otro portafolio? | Sí: parches con versión, página de runas, paleta SU/HdA y bugs reales de cada proyecto. |
| ¿Hay algún dato, cifra o frase que yo no haya dicho? | No. Todo sale de los repos o de mis respuestas. |
| ¿Alguna frase suena a folleto corporativo? | En las secciones hechas, no. Experiencia y Contacto están sin revisar. |
| ¿Las secciones se ven todas iguales? | No: parches, hotfixes, runas y hero tienen composiciones distintas. |
| ¿Se nota un concepto central? | Sí, en colores, tipografía, textos y estructura. |
| ¿Cada proyecto cuenta una historia? | Sí: los 6 tienen Nuevo, Bug conocido y Aprendido. |
| ¿Es accesible y funciona en celular? | Sí: contraste AA, runas y pestañas manejables con teclado, sin scroll horizontal. |
