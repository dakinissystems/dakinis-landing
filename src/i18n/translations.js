/** @typedef {'en' | 'es'} Locale */

/** @type {Record<Locale, Record<string, unknown>>} */
export const translations = {
  es: {
    htmlLang: 'es',
    nav: {
      label: 'Principal',
      servicios: 'Servicios',
      proceso: 'Proceso',
      trabajos: 'Trabajos',
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
      ctaPrimary: 'Empezar ahora',
      ctaSecondary: 'Ver servicios',
    },
    services: {
      title: 'Servicios principales',
      items: {
        web: {
          name: 'Web Apps a Medida',
          desc: 'React, Next.js y paneles internos',
        },
        backend: {
          name: 'Backend Escalable',
          desc: 'APIs, arquitectura modular y seguridad',
        },
        auto: {
          name: 'Automatizaciones',
          desc: 'Integraciones y flujos para ahorrar tiempo',
        },
        devops: {
          name: 'DevOps y Cloud',
          desc: 'Docker, despliegues y observabilidad',
        },
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
      openAria: 'Abrir {name} (se abre en una pestaña nueva)',
      projects: {
        akoenet: {
          name: 'AkoeNet',
          description: 'Plataforma de comunidad con enfoque en tiempo real.',
        },
        'stream-automator': {
          name: 'Streamer Scheduler',
          description: 'Panel para gestion y automatizacion de contenidos.',
        },
      },
    },
    contacto: {
      title: 'Hablemos de tu proyecto',
      body: 'Cuentanos que necesitas y te proponemos una solucion tecnica, tiempos y roadmap de desarrollo.',
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
      proceso: 'Process',
      trabajos: 'Work',
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
      ctaPrimary: 'Get started',
      ctaSecondary: 'View services',
    },
    services: {
      title: 'Core services',
      items: {
        web: {
          name: 'Custom web apps',
          desc: 'React, Next.js, and internal dashboards',
        },
        backend: {
          name: 'Scalable backend',
          desc: 'APIs, modular architecture, and security',
        },
        auto: {
          name: 'Automation',
          desc: 'Integrations and workflows that save time',
        },
        devops: {
          name: 'DevOps & cloud',
          desc: 'Docker, deployments, and observability',
        },
      },
    },
    proceso: {
      title: 'How we work',
      steps: [
        {
          kicker: '01 Discovery',
          body: 'We align on your business goals and technical priorities.',
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
      openAria: 'Open {name} (opens in a new tab)',
      projects: {
        akoenet: {
          name: 'AkoeNet',
          description: 'Community platform with a real-time experience.',
        },
        'stream-automator': {
          name: 'Streamer Scheduler',
          description: 'Dashboard for scheduling and content automation.',
        },
      },
    },
    contacto: {
      title: "Let's talk about your project",
      body: 'Tell us what you need and we will propose a technical approach, timeline, and delivery roadmap.',
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
