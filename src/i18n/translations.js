/** @typedef {'en' | 'es'} Locale */

/** @type {Record<Locale, Record<string, unknown>>} */
export const translations = {
  es: {
    htmlLang: 'es',
    nav: {
      label: 'Principal',
      servicios: 'Servicios',
      plataforma: 'Plataforma',
      proceso: 'Proceso',
      trabajos: 'Trabajos',
      confianza: 'Por que Dakinis',
      contacto: 'Contacto',
    },
    lang: {
      switchLabel: 'Idioma',
      en: 'EN',
      es: 'ES',
    },
    brand: {
      homeAria: 'Inicio {name}',
    },
    hero: {
      line1: 'Desarrollo de software',
      line2: 'a medida para tu negocio',
      body: 'En {name} creamos soluciones digitales personalizadas: aplicaciones web, backend, automatizaciones e infraestructura para ayudarte a crecer con tecnologia estable y escalable.',
      productLine:
        'Dakinis Systems es una plataforma modular para construir y escalar productos digitales en tiempo real y apps de negocio.',
      productPillars: 'SaaS + desarrollo a medida · adaptable por vertical · escalable desde MVP',
      ctaPrimary: 'Empezar ahora',
      ctaSecondary: 'Ver servicios',
      platformTitle: 'Plataforma modular para verticales',
      platformBody:
        'Tu landing en dakinissystems.onrender.com puede mostrar que Dakinis no es un solo caso, sino una plataforma modular configurable para verticales diferentes sin reescribir logica.',
      platformNextStep:
        'Siguiente paso: conectar ese selector al backend (/api/config?adapter=...) para que la demo muestre datos reales de la API y no solo del frontend, hasta subir D:\\Dakinis Scheduler + CRM + WhatsApp.',
    },
    services: {
      title: 'Soluciones clave',
      items: {
        web: {
          name: 'Custom Digital Platforms',
          desc: 'React, Next.js y paneles internos',
        },
        backend: {
          name: 'Scalable Backend Systems',
          desc: 'APIs, arquitectura modular y seguridad',
        },
        auto: {
          name: 'Business Automation',
          desc: 'Integraciones y flujos para ahorrar tiempo',
        },
        devops: {
          name: 'Cloud & Infrastructure',
          desc: 'Docker, despliegues y observabilidad',
        },
      },
    },
    platform: {
      title: 'Dakinis Platform',
      subtitle: 'Arquitectura modular para lanzar y escalar mas rapido.',
      bullets: ['Core engine', 'Adapters por vertical', 'Servicios en tiempo real', 'Infraestructura escalable'],
      footnote: 'Preparada para configuracion dinamica con /api/config?adapter=...',
    },
    proceso: {
      title: 'Como trabajamos',
      microcopy: 'De la idea a produccion en semanas, no meses.',
      steps: [
        {
          kicker: '01 Descubrimiento',
          body: 'Analisis real del negocio, objetivos y cuellos de botella tecnicos.',
        },
        {
          kicker: '02 Construccion',
          body: 'MVP funcional rapido, con sprints cortos y feedback continuo.',
        },
        {
          kicker: '03 Escalado',
          body: 'Crecimiento, automatizacion y estabilidad para produccion.',
        },
      ],
    },
    trabajos: {
      title: 'Trabajos realizados',
      openProject: 'Abrir proyecto',
      openAria: 'Abrir {name} (se abre en una pestaña nueva)',
      projects: {
        akoenet: {
          name: 'AkoeNet',
          description: 'Plataforma de comunicacion en tiempo real para comunidades privadas.',
        },
        'stream-automator': {
          name: 'Streamer Scheduler',
          description: 'Sistema para planificacion y automatizacion de operaciones de streaming.',
        },
      },
    },
    trust: {
      title: 'Why Dakinis',
      items: [
        '15+ anos en IT e infraestructura',
        'Experiencia full-stack + DevOps',
        'Experiencia real en produccion',
        'Enfoque en sistemas escalables',
      ],
    },
    contacto: {
      title: 'Listo para construir o escalar tu producto',
      body: 'Tell me your idea. Let\'s build your MVP. Looking to scale? Te propongo enfoque tecnico, tiempos y roadmap.',
      email: 'Escribir por email',
      whatsapp: 'Contactar por WhatsApp',
      navAria: 'Contacto',
    },
    footer: {
      navAria: 'Pie de página',
      rights: 'Todos los derechos reservados.',
    },
    contact: {
      emailSubject: 'Proyecto a medida',
    },
  },

  en: {
    htmlLang: 'en',
    nav: {
      label: 'Primary',
      servicios: 'Services',
      plataforma: 'Platform',
      proceso: 'Process',
      trabajos: 'Work',
      confianza: 'Why Dakinis',
      contacto: 'Contact',
    },
    lang: {
      switchLabel: 'Language',
      en: 'EN',
      es: 'ES',
    },
    brand: {
      homeAria: 'Home {name}',
    },
    hero: {
      line1: 'Custom software',
      line2: 'development for your business',
      body: 'At {name} we build tailored digital solutions: web apps, backend, automation, and infrastructure so you can grow with stable, scalable technology.',
      productLine:
        'Dakinis Systems is a modular platform to build and scale real-time digital products and business apps.',
      productPillars: 'SaaS + custom development · vertical-ready adapters · scalable from MVP',
      ctaPrimary: 'Get started',
      ctaSecondary: 'View services',
      platformTitle: 'Modular platform for multiple verticals',
      platformBody:
        'Your landing at dakinissystems.onrender.com can show Dakinis is not a single-use case, but a modular platform configurable for different verticals without rewriting core logic.',
      platformNextStep:
        'Next step: connect that selector to the backend (/api/config?adapter=...) so the demo shows real API data and not only frontend mocks, until D:\\Dakinis Scheduler + CRM + WhatsApp is uploaded.',
    },
    services: {
      title: 'Core solutions',
      items: {
        web: {
          name: 'Custom Digital Platforms',
          desc: 'React, Next.js, and internal dashboards',
        },
        backend: {
          name: 'Scalable Backend Systems',
          desc: 'APIs, modular architecture, and security',
        },
        auto: {
          name: 'Business Automation',
          desc: 'Integrations and workflows that save time',
        },
        devops: {
          name: 'Cloud & Infrastructure',
          desc: 'Docker, deployments, and observability',
        },
      },
    },
    platform: {
      title: 'Dakinis Platform',
      subtitle: 'Modular architecture to launch and scale faster.',
      bullets: ['Core engine', 'Business adapters', 'Real-time services', 'Scalable infrastructure'],
      footnote: 'Ready for dynamic configuration with /api/config?adapter=...',
    },
    proceso: {
      title: 'How we work',
      microcopy: 'From idea to production in weeks, not months.',
      steps: [
        {
          kicker: '01 Discovery',
          body: 'Real business analysis to map goals, constraints, and opportunities.',
        },
        {
          kicker: '02 Build',
          body: 'Fast, functional MVP delivered in short sprints with continuous feedback.',
        },
        {
          kicker: '03 Scale',
          body: 'Growth, automation, and resilience for production operations.',
        },
      ],
    },
    trabajos: {
      title: 'Selected work',
      openProject: 'Open project',
      openAria: 'Open {name} (opens in a new tab)',
      projects: {
        akoenet: {
          name: 'AkoeNet',
          description: 'Real-time communication platform focused on private communities.',
        },
        'stream-automator': {
          name: 'Streamer Scheduler',
          description: 'Operations dashboard for scheduling and stream workflow automation.',
        },
      },
    },
    trust: {
      title: 'Why Dakinis',
      items: [
        '15+ years in IT and infrastructure',
        'Full-stack + DevOps expertise',
        'Real production experience',
        'Focus on scalable systems',
      ],
    },
    contacto: {
      title: "Ready to build or scale your product?",
      body: "Tell me your idea. Let's build your MVP. Looking to scale? We will define technical approach, timeline, and roadmap.",
      email: 'Email us',
      whatsapp: 'WhatsApp',
      navAria: 'Contact',
    },
    footer: {
      navAria: 'Footer',
      rights: 'All rights reserved.',
    },
    contact: {
      emailSubject: 'Custom software project',
    },
  },
}

export const LOCALES = /** @type {const} */ (['en', 'es'])
export const DEFAULT_LOCALE = /** @type {Locale} */ ('en')
