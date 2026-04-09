# Dakinis Systems — Landing

Landing corporativa para **Dakinis Systems**: empresa de **desarrollo de software a medida** (aplicaciones web, backend, automatizaciones e infraestructura).

## Repositorio

[github.com/ChristianDVillar/DakinisSystems](https://github.com/ChristianDVillar/DakinisSystems)

## Contenido de la página

- Hero con propuesta de valor y llamadas a la acción
- Servicios principales
- Proceso de trabajo (descubrimiento, construcción, escalado)
- Trabajos realizados con enlaces a proyectos:
  - [AkoeNet](https://akoenet-frontend.onrender.com/)
  - [Streamer Scheduler / Stream Automator](https://streamautomator.com/dashboard)
- Bloque de contacto (email y WhatsApp; actualiza URLs en el código si cambian)

## Stack

| Herramienta | Uso |
|-------------|-----|
| [React](https://react.dev/) 19 | UI |
| [Vite](https://vite.dev/) 8 | Build y dev server |
| [Tailwind CSS](https://tailwindcss.com/) v4 | Estilos (`@import "tailwindcss"` + PostCSS) |

## Requisitos

- Node.js **18+** (recomendado LTS)
- npm

## Scripts

```bash
npm install      # dependencias
npm run dev      # servidor de desarrollo (http://localhost:5173)
npm run build    # genera carpeta dist/
npm run preview  # sirve el build de producción localmente
```

## Estructura del proyecto

```
├── public/
│   └── brands/             # logos servidos como estáticos (no pasan por el bundle JS)
├── src/
│   ├── components/         # BrandMark, SiteHeader, ProjectCard
│   ├── config/site.js      # textos, enlaces, rutas de logos, contacto
│   ├── lib/publicUrl.js    # URLs bajo `base` de Vite (GitHub Pages, etc.)
│   ├── App.jsx
│   ├── LandingPage.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Assets de marca (`public/brands/`)

Los logos van aquí con nombres estables (`dakinis-logo-lg.jpeg`, `dakinis-logo-sm.jpeg`, `akoenet.png`, `stream-automator.png`) para:

- **Mejor rendimiento**: no se incrustan PNG grandes en el bundle de JavaScript.
- **Cache del CDN/navegador** como archivos estáticos.
- **Rutas correctas** en subcarpetas del sitio vía `import.meta.env.BASE_URL` (`publicUrl()`).

## Git: rama `Development` vs `development` del repo padre

Este proyecto tiene su propio repositorio en la carpeta **Dakini systems**. La rama de trabajo habitual es **`Development`** (existe también **`main`** en el mismo repo).

Si Cursor o la terminal muestran la rama **`development`** en minúsculas, suele ser porque abriste como carpeta raíz el repo padre **`DEV`** (donde viven muchos proyectos). Ahí Git es otro repositorio y otra rama.

**Recomendación:** abre en Cursor la carpeta `Dakini systems` como workspace raíz, o ejecuta `git status` dentro de esa carpeta para ver la rama **`Development`** y el remoto **DakinisSystems**.

## Despliegue

1. Ejecuta `npm run build`.
2. Publica el contenido de la carpeta **`dist/`** en tu proveedor (Vercel, Netlify, Cloudflare Pages, GitHub Pages, etc.).

Para **GitHub Pages** con Vite, configura `base` en `vite.config.js` si el sitio no está en la raíz del dominio (por ejemplo `/DakinisSystems/`).

## Licencia

Uso interno / propiedad de Dakinis Systems salvo que indiques otra licencia en este repositorio.
