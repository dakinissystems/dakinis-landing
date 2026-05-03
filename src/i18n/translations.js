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
      ventaja: 'Ventaja',
      dakinisOne: 'Dakinis One',
      servicios: 'Servicios',
      proceso: 'Proceso',
      trabajos: 'Trabajos',
      contacto: 'Contacto',
    },
    hero: {
      line1: 'Desarrollo de software a medida',
      line2: 'rápido, escalable y sin empezar desde cero',
      body:
        'En Dakinis Systems desarrollamos soluciones personalizadas apoyadas en una arquitectura propia, lo que permite entregar proyectos más rápido, con menor coste y mayor calidad.',
      ctaPrimary: 'Empezar ahora',
      ctaSecondary: 'Ver servicios',
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
      title: 'Nuestra base tecnológica',
      body:
        'Dakinis One es nuestra plataforma interna que acelera el desarrollo de soluciones a medida. No es un producto genérico, sino una base que adaptamos completamente a cada cliente.',
      cta: 'Ver ejemplo de plataforma',
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
      emailSubject: 'Proyecto a medida',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
    },
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
      ventaja: 'Why us',
      dakinisOne: 'Dakinis One',
      servicios: 'Services',
      proceso: 'Process',
      trabajos: 'Work',
      contacto: 'Contact',
    },
    hero: {
      line1: 'Custom software development',
      line2: 'fast, scalable, and not starting from scratch',
      body:
        'At Dakinis Systems we build tailored solutions on top of our own architecture, so we ship faster, at lower cost, and with higher quality.',
      ctaPrimary: 'Get started',
      ctaSecondary: 'View services',
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
      title: 'Our technology base',
      body:
        'Dakinis One is our internal platform that accelerates tailor-made solutions. It is not a generic product, but a foundation we fully adapt for each client.',
      cta: 'See platform example',
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
      emailSubject: 'Custom software project',
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },
}

export const LOCALES = /** @type {const} */ (['en', 'es'])
export const DEFAULT_LOCALE = /** @type {Locale} */ ('es')
