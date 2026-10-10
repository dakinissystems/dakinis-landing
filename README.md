# Dakinis Systems — Landing

Sitio corporativo público: propuesta de valor, productos y entrada al ecosistema.

| | |
|---|---|
| **Producción** | https://dakinissystems.com |
| **Repo** | [dakinissystems/dakinis-landing](https://github.com/dakinissystems/dakinis-landing) |
| **Copy / mensaje** | [MESSAGING](https://github.com/dakinissystems/dakinis-systems/blob/main/docs/company/MESSAGING.md) · [LANDING-COPY](https://github.com/dakinissystems/dakinis-systems/blob/main/docs/company/LANDING-COPY.md) |

## Stack

React 19 · Vite · Tailwind CSS

## Local

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

| Comando | Uso |
|---------|-----|
| `npm install` | Dependencias |
| `npm run dev` | Desarrollo |
| `npm run build` | Build estático `dist/` |
| `npm run preview` | Preview del build |

## Contenido

- Textos y posicionamiento: docs canónicas `MESSAGING` / `LANDING-COPY` (no inventar claims en el código).
- Assets de marca: paquetes DES / `src/assets` según el repo.

Tras cambiar copy o enlaces: `npm run build` y comprobar rutas a productos (Core, Hub, SA, AkoeNet).

## Deploy

Railway (o estático `dist/`). Dominio: `dakinissystems.com` (Cloudflare).

## Docs canónicas

Estado → [STATUS](https://github.com/dakinissystems/dakinis-systems/blob/main/docs/STATUS.md) ·
Mapa → [SYSTEMS](https://github.com/dakinissystems/dakinis-systems/blob/main/docs/SYSTEMS.md) ·
Índice → [docs](https://github.com/dakinissystems/dakinis-systems/tree/main/docs)
