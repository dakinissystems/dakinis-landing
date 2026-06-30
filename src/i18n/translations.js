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
      tryOne: 'Probar gratis',
      ventaja: 'Ventaja',
      dakinisOne: 'Dakinis One',
      proceso: 'Proceso',
      trabajos: 'Trabajos',
    },
    hero: {
      kicker: 'Dakinis One',
      line1: 'Deja de gestionar tu negocio con Excel.',
      line2: 'CRM, Inventario, Reservas, WhatsApp e IA en un solo sistema.',
      pillars: ['Clientes', 'Inventario', 'Ventas', 'WhatsApp', 'Reservas', 'IA'],
      ctaPrimary: 'Probar Dakinis One gratis',
      ctaPricing: 'Ver planes',
      ctaProducts: 'Ver más productos',
      ctaHub: 'Entrar al Hub',
      ctaSecondary: 'Ver servicios',
      trustBullets: [
        'Sin instalación',
        'Desde cualquier dispositivo',
        'Prueba gratuita',
        'Configuración en minutos',
      ],
    },
    savings: {
      kicker: 'Ahorro real',
      headline: 'Empresas ahorran hasta 720 €/mes usando Dakinis One',
      body: '¿Cuántas horas a la semana pierdes en Excel, WhatsApp y papeles? Calcula tu ahorro en menos de un minuto.',
      ctaCalc: 'Calcular mi ahorro',
      ctaTrial: 'Probar gratis',
      footnote: 'Estimación basada en 10 h/semana a 18 €/h. Ajusta el cálculo en la calculadora interactiva.',
    },
    whyOne: {
      title: '¿Por qué Dakinis One?',
      lead: 'Responde de inmediato a lo que buscas cuando haces clic en un anuncio: qué ganas y cómo te ayuda en el día a día.',
      benefits: [
        { title: 'Clientes y ventas', desc: 'CRM, pipeline y seguimiento sin hojas de cálculo.' },
        { title: 'Inventario', desc: 'Stock, alertas y movimientos en tiempo real.' },
        { title: 'WhatsApp', desc: 'Habla con tus clientes desde la misma herramienta.' },
        { title: 'Reservas y citas', desc: 'Agenda para restaurantes, clínicas o servicios.' },
        { title: 'Reportes', desc: 'Métricas claras para decidir con datos, no intuición.' },
        { title: 'IA integrada', desc: 'Copiloto para tareas repetitivas y respuestas rápidas.' },
      ],
      cta: 'Empezar con Dakinis One',
    },
    ecosystem: {
      title: 'Más del ecosistema Dakinis',
      lead: 'Cuando quieras ir más allá del negocio del día a día, estos productos comparten la misma base y soporte.',
    },
    productosHome: {
      title: 'Otros productos',
      lead: 'StreamAutomator, AkoeNet y Finanzas para creadores, comunidades y finanzas personales.',
      oneWhatsapp:
        'WhatsApp en Dakinis One no es un extra suelto: forma parte de la gestión diaria de tu negocio.',
    },
    productos: {
      title: 'Productos Dakinis',
      lead: 'Elige la línea que encaja con tu negocio. Todos comparten identidad y soporte Dakinis Systems.',
      notFound: 'Producto no encontrado',
      kicker: 'Producto',
      more: 'Más información',
      open: 'Abrir producto',
      enterOne: 'Probar Dakinis One gratis',
      detail: {
        'dakinis-one': {
          body:
            'Deja de gestionar tu negocio con Excel. Ventas, clientes, inventario, WhatsApp, reservas e IA en una plataforma modular pensada para pymes.',
          bullets: [
            'CRM, inventario y restaurante en un solo panel',
            'WhatsApp y migración de datos incluidos en el flujo',
            'Calculadora de ahorro y planes claros antes de registrarte',
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
      title: 'Dakinis One',
      body:
        'La plataforma principal para gestionar tu negocio. Dakinis Systems es la empresa; Dakinis One es el producto que usan comercios y restaurantes cada día.',
      cta: 'Probar Dakinis One gratis',
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
        terms: '/terminos',
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
      tryOne: 'Try free',
      ventaja: 'Why us',
      dakinisOne: 'Dakinis One',
      proceso: 'Process',
      trabajos: 'Work',
    },
    hero: {
      kicker: 'Dakinis One',
      line1: 'Stop running your business on Excel.',
      line2: 'CRM, inventory, bookings, WhatsApp and AI in one system.',
      pillars: ['Customers', 'Inventory', 'Sales', 'WhatsApp', 'Bookings', 'AI'],
      ctaPrimary: 'Try Dakinis One free',
      ctaPricing: 'View plans',
      ctaProducts: 'More products',
      ctaHub: 'Open Hub',
      ctaSecondary: 'View services',
      trustBullets: [
        'No installation',
        'Works on any device',
        'Free trial',
        'Set up in minutes',
      ],
    },
    savings: {
      kicker: 'Real savings',
      headline: 'Businesses save up to €720/month with Dakinis One',
      body: 'How many hours per week do you lose in Excel, WhatsApp and paper? Estimate your savings in under a minute.',
      ctaCalc: 'Calculate my savings',
      ctaTrial: 'Try free',
      footnote: 'Estimate based on 10 h/week at €18/h. Adjust in the interactive calculator.',
    },
    whyOne: {
      title: 'Why Dakinis One?',
      lead: 'Answers the question you have when you click an ad: what you get and how it helps day to day.',
      benefits: [
        { title: 'Customers & sales', desc: 'CRM, pipeline and follow-up without spreadsheets.' },
        { title: 'Inventory', desc: 'Stock, alerts and movements in real time.' },
        { title: 'WhatsApp', desc: 'Talk to customers from the same tool.' },
        { title: 'Bookings', desc: 'Scheduling for restaurants, clinics or services.' },
        { title: 'Reports', desc: 'Clear metrics to decide with data, not guesswork.' },
        { title: 'Built-in AI', desc: 'Copilot for repetitive tasks and quick answers.' },
      ],
      cta: 'Get started with Dakinis One',
    },
    ecosystem: {
      title: 'More from the Dakinis ecosystem',
      lead: 'When you need more than day-to-day operations, these products share the same foundation and support.',
    },
    productosHome: {
      title: 'Other products',
      lead: 'StreamAutomator, AkoeNet and Finances for creators, communities and personal finance.',
      oneWhatsapp:
        'WhatsApp in Dakinis One is not a bolt-on — it is part of daily business management.',
    },
    productos: {
      title: 'Dakinis products',
      lead: 'Pick the line that fits your business. Same brand and support across the ecosystem.',
      notFound: 'Product not found',
      kicker: 'Product',
      more: 'Learn more',
      open: 'Open product',
      enterOne: 'Try Dakinis One free',
      detail: {
        'dakinis-one': {
          body:
            'Stop running your business on Excel. Sales, customers, inventory, WhatsApp, bookings and AI in one modular platform built for SMBs.',
          bullets: [
            'CRM, inventory and restaurant in one dashboard',
            'WhatsApp and data migration built into the flow',
            'Savings calculator and clear plans before you sign up',
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
      title: 'Dakinis One',
      body:
        'The main platform to run your business. Dakinis Systems is the company; Dakinis One is what shops and restaurants use every day.',
      cta: 'Try Dakinis One free',
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
        terms: '/terms',
      },
    },
    legal: legalEn,
  },
}

export const LOCALES = /** @type {const} */ (['en', 'es'])
export const DEFAULT_LOCALE = /** @type {Locale} */ ('es')
