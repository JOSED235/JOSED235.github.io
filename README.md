# Portafolio · Jose David Rodríguez Pinilla

Portafolio personal bilingüe (ES / EN) con modo claro y oscuro, hecho con **React + Vite** y publicado en **GitHub Pages**.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/
npm run preview  # sirve dist/ localmente
```

## Estructura

```
public/
  img/                 Foto y capturas (WebP)
  cv/                  CV en PDF (ES y EN), enlazados desde la página
src/
  data/content.js      TODO el texto del sitio en ES y EN, enlaces y proyectos
  components/          Secciones: Nav, Hero, Projects, Experience, Skills, About, Contact
  styles.css           Tokens de color (oscuro/claro) y estilos
.github/workflows/     Despliegue automático a GitHub Pages en cada push a main
```

## Cómo actualizar

- **Texto, experiencia o un proyecto nuevo:** edita `src/data/content.js` en ambos idiomas (`es` y `en`). Los datos que no dependen del idioma (enlaces, tecnologías, capturas) van en `projectsMeta`.
- **Imágenes:** agrégalas en `public/img/` (mejor en `.webp`) y referéncialas como `img/nombre.webp`.
- **CV:** reemplaza los PDF en `public/cv/` manteniendo el mismo nombre.

## Despliegue

1. En GitHub: **Settings → Pages → Source: GitHub Actions**.
2. Cada `git push` a `main` compila y publica el sitio.
