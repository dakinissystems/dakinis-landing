import { legalEn, legalEs } from './legal-content.js'

/** @typedef {'en' | 'es'} Locale */

/** @type {Record<Locale, Record<string, unknown>>} */
export const translations = {
  es: {
    htmlLang: 'es',
    brand: {
      homeAria: 'Inicio Dakinis Systems',
    },
    lang: {
      switchLabel: 'Idioma',
      es: 'ES',
      en: 'EN',
    },
    nav: {
      label: 'Principal',
      empresa: 'Empresa',
      productos: 'Productos',
      servicios: 'Desarrollo a medida',
      casos: 'Casos de éxito',
      contacto: 'Contacto',
      hub: 'Hub',
      login: 'Login',
      ventaja: 'Ventaja',
      dakinisOne: 'Dakinis One',
      proceso: 'Proceso',
      trabajos: 'Trabajos',
    },
    hero: {
      kicker: 'Dakinis Systems',
      line1: 'Transformamos negocios',
      line2: 'mediante software',
      body:
        'Dakinis Systems es la empresa. Dakinis One, StreamAutomator y AkoeNet son productos del mismo ecosistema — más desarrollo a medida cuando lo necesitas.',
      pillars: [
        'Dakinis One',
        'Automatización',
        'IA',
        'Desarrollo a medida',
        'WhatsApp',
      ],
      ctaProducts: 'Ver productos',
      ctaHub: 'Entrar al Hub',
      ctaPrimary: 'Empezar ahora',
      ctaSecondary: 'Ver servicios',
    },
    productosHome: {
      title: 'Productos',
      lead: 'Tres líneas de producto y un equipo para integrarlas en tu negocio.',
      oneWhatsapp:
        'Comunícate con tus clientes por WhatsApp desde Dakinis One — parte del ecosistema, no un extra suelto.',
    },
    productos: {
      title: 'Productos Dakinis',
      lead: 'Elige la línea que encaja con tu negocio. Todos comparten identidad y soporte Dakinis Systems.',
      notFound: 'Producto no encontrado',
      kicker: 'Producto',
      more: 'Más información',
      open: 'Abrir producto',
      enterOne: 'Entrar a Dakinis One',
      detail: {
        'dakinis-one': {
          body:
            'Gestión empresarial modular: CRM, citas, inventario, restaurante, WhatsApp y analítica. Entra por el Hub y activa los módulos que necesites.',
          bullets: [
            'Multi-tenant con datos aislados',
            'Verticales: clínica, restaurante, inmobiliaria, peluquería',
            'Hub central para abrir el resto del ecosistema',
          ],
        },
        streamautomator: {
          body: 'Programación y automatización de contenido para creadores y marcas.',
          bullets: ['Scheduler Twitch', 'Integraciones', 'Panel web'],
        },
        akoenet: {
          body: 'Comunidades con voz y experiencias en tiempo real.',
          bullets: ['Auth central Dakinis', 'Sockets', 'Comunidad'],
        },
      },
    },
    serviciosPage: {
      title: 'Desarrollo a medida',
      lead:
        'Cuando el producto estándar no basta, adaptamos la base Dakinis o construimos integraciones específicas para tu operativa.',
    },
    notFromZero: {
      title: 'No empezamos desde cero',
      body:
        'A diferencia del desarrollo tradicional, utilizamos una base tecnológica propia que ya incluye gestión de usuarios, estructura modular y funcionalidades listas para adaptar a tu negocio.',
      fastTitle: 'Más rápido',
      fastDesc: 'Menos tiempo de desarrollo',
      ecoTitle: 'Más económico',
      ecoDesc: 'Menos horas innecesarias',
      scaleTitle: 'Más escalable',
      scaleDesc: 'Arquitectura preparada para crecer',
    },
    dakinisOne: {
      title: 'Dakinis One — producto principal',
      body:
        'Plataforma SaaS modular para pymes. No confundir con Dakinis Systems: somos la empresa, Dakinis One es el producto estrella.',
      cta: 'Abrir Dakinis One',
    },
    services: {
      title: 'Servicios principales',
      items: {
        web: { name: 'Web Apps a Medida', desc: 'React, Next.js y paneles internos' },
        backend: { name: 'Backend Escalable', desc: 'APIs, arquitectura modular y seguridad' },
        auto: { name: 'Automatizaciones', desc: 'Integraciones y flujos para ahorrar tiempo' },
        devops: { name: 'DevOps y Cloud', desc: 'Docker, despliegues y observabilidad' },
      },
    },
    proceso: {
      title: 'Como trabajamos',
      steps: [
        {
          kicker: '01 Descubrimiento',
          body: 'Entendemos tu negocio, objetivos y prioridades tecnicas.',
        },
        {
          kicker: '02 Construccion',
          body: 'Desarrollamos por sprints con entregables y feedback continuo.',
        },
        {
          kicker: '03 Escalado',
          body: 'Optimizamos rendimiento, seguridad y evolucion del producto.',
        },
      ],
    },
    trabajos: {
      title: 'Trabajos realizados',
      openProject: 'Abrir proyecto',
      openAria: 'Abrir {name}',
      projects: {
        akoenet: {
          description: 'Plataforma de comunidad con enfoque en tiempo real.',
        },
        stream: {
          description: 'Panel para gestion y automatizacion de contenidos.',
        },
      },
    },
    contacto: {
      title: 'Hablemos de tu proyecto',
      body:
        'Cuentanos que necesitas y te proponemos una solucion tecnica, tiempos y roadmap de desarrollo.',
      email: 'Escribir por email',
      whatsapp: 'Contactar por WhatsApp',
      whatsappFabHint: 'También puedes escribirnos por WhatsApp con el botón flotante verde.',
      emailSubject: 'Proyecto a medida',
    },
    footer: {
      copyright: '© {year} Dakinis Systems.',
      rights: 'Todos los derechos reservados.',
      navAria: 'Legal y contacto',
      links: {
        privacy: '/privacidad',
        notice: '/aviso-legal',
        cookies: '/cookies',
      },
    },
    legal: legalEs,
  },

  en: {
    htmlLang: 'en',
    brand: {
      homeAria: 'Home Dakinis Systems',
    },
    lang: {
      switchLabel: 'Language',
      es: 'ES',
      en: 'EN',
    },
    nav: {
      label: 'Primary',
      empresa: 'Company',
      productos: 'Products',
      servicios: 'Custom development',
      casos: 'Case studies',
      contacto: 'Contact',
      hub: 'Hub',
      login: 'Log in',
      ventaja: 'Why us',
      dakinisOne: 'Dakinis One',
      proceso: 'Process',
      trabajos: 'Work',
    },
    hero: {
      kicker: 'Dakinis Systems',
      line1: 'We transform businesses',
      line2: 'through software',
      body:
        'Dakinis Systems is the company. Dakinis One, StreamAutomator and AkoeNet are products in the same ecosystem — plus custom development when you need it.',
      pillars: ['Dakinis One', 'Automation', 'AI', 'Custom development', 'WhatsApp'],
      ctaProducts: 'View products',
      ctaHub: 'Open Hub',
      ctaPrimary: 'Get started',
      ctaSecondary: 'View services',
    },
    productosHome: {
      title: 'Products',
      lead: 'Three product lines and one team to integrate them into your business.',
      oneWhatsapp:
        'Reach customers on WhatsApp from Dakinis One — part of the ecosystem, not a bolt-on.',
    },
    productos: {
      title: 'Dakinis products',
      lead: 'Pick the line that fits your business. Same brand and support across the ecosystem.',
      notFound: 'Product not found',
      kicker: 'Product',
      more: 'Learn more',
      open: 'Open product',
      enterOne: 'Enter Dakinis One',
      detail: {
        'dakinis-one': {
          body:
            'Modular business management: CRM, appointments, inventory, restaurant, WhatsApp and analytics. Enter via the Hub.',
          bullets: [
            'Multi-tenant isolated data',
            'Verticals: clinic, restaurant, real estate, salon',
            'Hub as the single entry point',
          ],
        },
        streamautomator: {
          body: 'Content scheduling and automation for creators and brands.',
          bullets: ['Twitch scheduler', 'Integrations', 'Web dashboard'],
        },
        akoenet: {
          body: 'Communities with voice and real-time experiences.',
          bullets: ['Dakinis central auth', 'Sockets', 'Community'],
        },
      },
    },
    serviciosPage: {
      title: 'Custom development',
      lead:
        'When off-the-shelf is not enough, we extend the Dakinis stack or build bespoke integrations.',
    },
    notFromZero: {
      title: 'We do not start from zero',
      body:
        'Unlike traditional development, we use our own technology base that already includes user management, modular structure, and ready-to-adapt features for your business.',
      fastTitle: 'Faster',
      fastDesc: 'Less development time',
      ecoTitle: 'More cost-effective',
      ecoDesc: 'Fewer unnecessary hours',
      scaleTitle: 'More scalable',
      scaleDesc: 'Architecture built to grow',
    },
    dakinisOne: {
      title: 'Dakinis One — flagship product',
      body:
        'Modular SaaS for SMBs. Dakinis Systems is the company; Dakinis One is the main product line.',
      cta: 'Open Dakinis One',
    },
    services: {
      title: 'Core services',
      items: {
        web: { name: 'Custom web apps', desc: 'React, Next.js, and internal dashboards' },
        backend: { name: 'Scalable backend', desc: 'APIs, modular architecture, and security' },
        auto: { name: 'Automation', desc: 'Integrations and workflows that save time' },
        devops: { name: 'DevOps & cloud', desc: 'Docker, deployments, and observability' },
      },
    },
    proceso: {
      title: 'How we work',
      steps: [
        {
          kicker: '01 Discovery',
          body: 'We align on your business goals, priorities, and technical constraints.',
        },
        {
          kicker: '02 Build',
          body: 'We ship in sprints with clear deliverables and continuous feedback.',
        },
        {
          kicker: '03 Scale',
          body: 'We improve performance, security, and long-term maintainability.',
        },
      ],
    },
    trabajos: {
      title: 'Selected work',
      openProject: 'Open project',
      openAria: 'Open {name}',
      projects: {
        akoenet: {
          description: 'Community platform with a real-time experience.',
        },
        stream: {
          description: 'Dashboard for scheduling and content automation.',
        },
      },
    },
    contacto: {
      title: "Let's talk about your project",
      body: 'Tell us what you need and we will propose a technical approach, timeline, and roadmap.',
      email: 'Email us',
      whatsapp: 'WhatsApp',
      whatsappFabHint: 'You can also message us on WhatsApp using the green floating button.',
      emailSubject: 'Custom software project',
    },
    footer: {
      copyright: '© {year} Dakinis Systems.',
      rights: 'All rights reserved.',
      navAria: 'Legal and contact',
      links: {
        privacy: '/privacy',
        notice: '/legal',
        cookies: '/cookies',
      },
    },
    legal: legalEn,
  },
}

export const LOCALES = /** @type {const} */ (['en', 'es'])
export const DEFAULT_LOCALE = /** @type {Locale} */ ('es')
