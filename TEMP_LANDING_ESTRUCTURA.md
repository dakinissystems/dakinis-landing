# Estructura temporal de la landing

Este documento resume la estructura actual de la landing de Dakinis Systems para referencia rapida.

## 1) Header

- Componente: `SiteHeader`
- Contiene:
  - Logo/brand
  - Navegacion principal
  - Selector de idioma EN/ES

## 2) Hero (seccion principal)

- Titulo principal (2 lineas)
- Texto de propuesta de valor
- Bloque destacado de plataforma modular:
  - Dakinis como plataforma configurable por vertical
  - Siguiente paso sugerido: integrar selector con `\/api/config?adapter=...`
- CTAs:
  - Boton primario a `#contacto`
  - Boton secundario a `#servicios`

## 3) Servicios (`#servicios`)

- Grid de 4 cards:
  - Web Apps a medida
  - Backend escalable
  - Automatizaciones
  - DevOps y Cloud

## 4) Proceso (`#proceso`)

- 3 pasos:
  - Descubrimiento
  - Construccion
  - Escalado

## 5) Trabajos (`#trabajos`)

- Grid de proyectos destacados
- Usa `ProjectCard`
- Actualmente incluye:
  - AkoeNet
  - Streamer Scheduler / Stream Automator

## 6) Contacto (`#contacto`)

- Bloque con gradiente
- CTA por email (`mailto`)
- CTA por WhatsApp (enlace externo)

## 7) Footer

- Navegacion compacta para mobile
- Copyright

## Notas tecnicas breves

- Vista principal: `src/LandingPage.jsx`
- Textos traducibles: `src/i18n/translations.js`
- Configuracion de datos/URLs: `src/config/site.js`
