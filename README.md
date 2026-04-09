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
├── public/                 # assets estáticos (SVGs auxiliares, etc.)
├── src/
│   ├── App.jsx             # monta la landing
│   ├── LandingPage.jsx     # secciones y contenido principal
│   ├── main.jsx            # entrada React
│   └── index.css           # Tailwind + estilos base
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Assets de marca

En la raíz del proyecto hay imágenes usadas por la landing (logos Dakinis, proyectos, etc.). No las subas a repositorios públicos si contienen material confidencial; en ese caso usa variables de entorno o CDN privado.

## Despliegue

1. Ejecuta `npm run build`.
2. Publica el contenido de la carpeta **`dist/`** en tu proveedor (Vercel, Netlify, Cloudflare Pages, GitHub Pages, etc.).

Para **GitHub Pages** con Vite, configura `base` en `vite.config.js` si el sitio no está en la raíz del dominio (por ejemplo `/DakinisSystems/`).

## Licencia

Uso interno / propiedad de Dakinis Systems salvo que indiques otra licencia en este repositorio.
