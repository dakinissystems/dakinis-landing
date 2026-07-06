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
      tryOne: 'Empezar gratis',
      ventaja: 'Ventaja',
      dakinisOne: 'Dakinis One',
      proceso: 'Proceso',
      trabajos: 'Trabajos',
    },
    meta: {
      title: 'Dakinis Systems | Sistema operativo para empresas modernas',
      description:
        'Plataforma con Hub, facturación e IA integrada. Dakinis One para operaciones diarias. Un login, un lugar.',
    },
    hero: {
      kicker: 'Dakinis Platform',
      line1: 'Un sistema operativo para empresas modernas',
      line2:
        'Gestiona clientes, operaciones, facturación e inteligencia artificial desde un único lugar.',
      line2Hub: 'Empieza en tu Hub',
      line2Tail: 'y abre los productos que necesites — sin duplicar logins ni herramientas.',
      reinforcement: 'Todo vive en el Hub. Tu negocio comienza aquí.',
      trustBar: 'Un login · Un Hub · Una factura · IA con el conocimiento de tu empresa',
      ctaPrimary: 'Empezar gratis',
      ctaSecondary: 'Descubrir Dakinis',
      ctaPricing: 'Ver precios',
      ctaProducts: 'Ver productos',
      ctaHub: 'Entrar al Hub',
      ctaOne: 'Probar Dakinis One',
      trustBullets: ['Sin tarjeta en el registro', 'Planes desde Growth', 'Hecho en España'],
      hubPreviewCaption: 'Tu escritorio Dakinis — Mi día, apps y notificaciones en un solo sitio.',
      hubPreview: {
        windowTitle: 'hub.dakinissystems.com',
        alt: 'Dakinis Hub — escritorio empresarial',
        miDia: 'Mi día',
        appsTitle: 'Tus productos',
        widgets: ['3 citas hoy', '2 alertas', '1 factura'],
        apps: {
          one: 'Dakinis One',
          finanzas: 'Finanzas',
          sa: 'StreamAutomator',
          akoe: 'AkoeNet',
        },
      },
      previewCaption: 'Capturas reales de la demo — no mockups.',
      previewTabs: {
        dashboard: 'Dashboard',
        clientes: 'Clientes',
        inventario: 'Inventario',
      },
    },
    problem: {
      title: 'Deja de pegar cinco herramientas con Excel',
      body:
        'CRM por un lado. Facturación por otro. WhatsApp en el móvil. Documentos en carpetas. Y una IA genérica que no conoce tu negocio.',
      body2:
        'Cada mes pagas más suscripciones. Tu equipo pierde tiempo. Los datos no se hablan.',
      close: 'Dakinis no es otra app más.',
      closePlatform: 'Es Dakinis Platform — y todo empieza en tu Hub.',
    },
    platform: {
      title: 'Dakinis Platform',
      lead:
        'Entras una vez. Abres cualquier producto. Usuarios, datos e IA compartidos para todo tu negocio.',
      leadHub: 'Todo vive en el Hub.',
      pillars: [
        { title: 'Hub', desc: 'Tu escritorio: Mi día, agenda, apps y notificaciones en un solo sitio' },
        { title: 'Dakinis One', desc: 'Operaciones diarias: clientes, citas, inventario, facturación' },
        { title: 'IA Dakinis', desc: 'Asistente que usa el conocimiento de tu empresa — no respuestas genéricas' },
        { title: 'Conocimiento', desc: 'Documentación y FAQ alimentan búsqueda y copilot' },
      ],
    },
    howItWorks: {
      title: 'Tres pasos. Sin caos.',
      steps: [
        { title: 'Entra', desc: 'Un login para toda la plataforma' },
        { title: 'Abre tu Hub', desc: 'Mi día, widgets y acceso a productos con un clic' },
        { title: 'Trabaja', desc: 'Dakinis One para operar; LifeFlow, StreamAutomator u otros si los activas' },
      ],
    },
    hub: {
      eyebrow: 'Tu escritorio Dakinis',
      title: 'Todo empieza en el Hub',
      lead: 'Empieza en tu Hub. Tu negocio comienza aquí.',
      body:
        'No es un menú de enlaces. Es tu workspace: qué toca hoy, alertas, accesos a productos y preferencias de tu equipo.',
      body2:
        'Abre Dakinis One, Finanzas o StreamAutomator desde el mismo sitio — con la misma sesión.',
      bullets: [
        'Mi día y widgets con datos reales',
        'Launcher con SSO a productos conectados',
        'Notificaciones cross-producto',
        'Acceso por tenant: tú decides qué ve cada negocio',
      ],
    },
    dakinisOneProduct: {
      eyebrow: 'Producto · Business OS',
      title: 'Dakinis One — gestiona el día a día',
      lead:
        'El producto principal para operar tu negocio: CRM, citas, inventario, restaurante, mensajes y copilot integrado.',
      bullets: [
        'Clientes y pipeline',
        'Citas y reservas',
        'Stock e inventario (Growth+)',
        'Copilot con contexto de tu negocio (Pro)',
      ],
      cta: 'Probar Dakinis One',
    },
    ai: {
      title: 'IA que conoce tu negocio',
      lead:
        'La IA de Dakinis no es un chat suelto. La IA conoce tu negocio — documentos, FAQ, datos del tenant — para responder, asistir y automatizar desde el Hub o Dakinis One.',
      sub: 'Pregunta en lenguaje natural. Obtén respuestas con contexto, no plantillas vacías.',
    },
    knowledge: {
      title: 'Ctrl+K en toda la plataforma',
      lead:
        'Sube políticas, manuales y FAQ. Busca en segundos. El copilot y la búsqueda comparten la misma memoria de empresa.',
      quote: 'Tu empresa pregunta; Dakinis responde con tus datos.',
    },
    pricing: {
      title: 'Un plan claro para empezar',
      lead:
        'Empieza con lo esencial. Sube a Growth cuando necesites más módulos e IA. Pro para equipos que usan WhatsApp y copilot avanzado.',
      cta: 'Ver precios',
      footnote: 'Facturación segura con Stripe · Cancela cuando quieras',
    },
    beta: {
      title: 'Beta abierta para pilotos en España',
      lead: 'Estamos buscando el primer negocio que centralice operaciones en Dakinis Platform.',
    },
    savings: {
      kicker: 'Ahorro real',
      headline: 'Empresas ahorran hasta 720 €/mes usando Dakinis One',
      credibility: 'Basado en una empresa que dedica 10 h/semana a tareas administrativas.',
      body: '¿Cuántas horas a la semana pierdes en Excel, WhatsApp y papeles? Calcula tu ahorro en menos de un minuto.',
      ctaCalc: 'Calcular mi ahorro',
      ctaTrial: 'Probar gratis',
      footnote: 'Estimación a 18 €/h. Ajusta el cálculo en la calculadora interactiva.',
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
      title: 'Más productos desde el Hub',
      lead: 'Misma cuenta, mismo Hub. Abre estos productos cuando los necesites.',
      footnote: 'Más productos se abren desde el Hub con la misma cuenta.',
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
      title: 'Tu negocio en un solo sistema',
      body: 'Regístrate, entra al Hub y prueba Dakinis One con tu equipo. Sin instalar cinco herramientas distintas.',
      ctaAccount: 'Crear cuenta',
      email: 'Hablar con nosotros',
      whatsapp: 'Contactar por WhatsApp',
      whatsappFabHint: 'También puedes escribirnos por WhatsApp con el botón flotante verde.',
      emailSubject: 'Interés en Dakinis Platform',
      consultoriaEmailSubject: 'Proyecto a medida',
      consultoriaTitle: 'Hablemos de tu proyecto',
      consultoriaBody:
        'Cuentanos que necesitas y te proponemos una solucion tecnica, tiempos y roadmap de desarrollo.',
    },
    sem: {
      meta: {
        title: 'Dakinis One — Deja Excel, gestiona tu negocio | Dakinis Systems',
        description:
          'Deja de gestionar tu negocio con Excel. CRM, inventario, reservas, WhatsApp e IA en un solo sistema. Prueba gratuita.',
      },
      hero: {
        kicker: 'Dakinis One',
        line1: 'Deja de gestionar tu negocio con Excel.',
        line2: 'CRM, Inventario, Reservas, WhatsApp e IA en un solo sistema.',
        pillars: ['Clientes', 'Inventario', 'Ventas', 'WhatsApp', 'Reservas', 'IA'],
        ctaPrimary: 'Probar Dakinis One gratis',
        ctaSubtext: 'Empieza a ahorrar tiempo — gratis',
        ctaPricing: 'Ver planes',
        socialProof: 'Desarrollado tras más de 15 años creando software empresarial.',
        trustBullets: [
          'Sin instalación',
          'Desde cualquier dispositivo',
          'Prueba gratuita',
          'Configuración en minutos',
        ],
      },
    },
    footer: {
      tagline: 'Dakinis Systems — Un sistema operativo para empresas modernas.',
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
      tryOne: 'Get started free',
      ventaja: 'Why us',
      dakinisOne: 'Dakinis One',
      proceso: 'Process',
      trabajos: 'Work',
    },
    meta: {
      title: 'Dakinis Systems | Operating system for modern businesses',
      description:
        'Platform with Hub, billing, and integrated AI. Dakinis One for daily operations. One login, one place.',
    },
    hero: {
      kicker: 'Dakinis Platform',
      line1: 'An operating system for modern businesses',
      line2: 'Manage customers, operations, billing, and AI from one place.',
      line2Hub: 'Start in your Hub',
      line2Tail: 'and open the products you need — without duplicate logins or tools.',
      reinforcement: 'Everything lives in the Hub. Your business starts here.',
      trustBar: 'One login · One Hub · One bill · AI that knows your business',
      ctaPrimary: 'Get started free',
      ctaSecondary: 'Discover Dakinis',
      ctaPricing: 'View pricing',
      ctaProducts: 'View products',
      ctaHub: 'Open Hub',
      ctaOne: 'Try Dakinis One',
      trustBullets: ['No card required to sign up', 'Plans from Growth', 'Built in Spain'],
      hubPreviewCaption: 'Your Dakinis desktop — My day, apps, and notifications in one place.',
      hubPreview: {
        windowTitle: 'hub.dakinissystems.com',
        alt: 'Dakinis Hub — business workspace',
        miDia: 'My day',
        appsTitle: 'Your products',
        widgets: ['3 appointments', '2 alerts', '1 invoice'],
        apps: {
          one: 'Dakinis One',
          finanzas: 'Finances',
          sa: 'StreamAutomator',
          akoe: 'AkoeNet',
        },
      },
      previewCaption: 'Real screenshots from the demo — not mockups.',
      previewTabs: {
        dashboard: 'Dashboard',
        clientes: 'Customers',
        inventario: 'Inventory',
      },
    },
    problem: {
      title: 'Stop gluing five tools together with Excel',
      body:
        'CRM on one side. Billing on another. WhatsApp on your phone. Documents in folders. And generic AI that does not know your business.',
      body2: 'Every month you pay more subscriptions. Your team loses time. Data does not talk.',
      close: 'Dakinis is not another app.',
      closePlatform: 'It is Dakinis Platform — and everything starts in your Hub.',
    },
    platform: {
      title: 'Dakinis Platform',
      lead: 'Sign in once. Open any product. Shared users, data, and AI across your business.',
      leadHub: 'Everything lives in the Hub.',
      pillars: [
        { title: 'Hub', desc: 'Your desktop: My day, schedule, apps, and notifications in one place' },
        { title: 'Dakinis One', desc: 'Daily operations: customers, appointments, inventory, billing' },
        { title: 'Dakinis AI', desc: 'Assistant that uses your company knowledge — not generic answers' },
        { title: 'Knowledge', desc: 'Docs and FAQ power search and copilot' },
      ],
    },
    howItWorks: {
      title: 'Three steps. No chaos.',
      steps: [
        { title: 'Sign in', desc: 'One login for the whole platform' },
        { title: 'Open your Hub', desc: 'My day, widgets, and one-click access to products' },
        { title: 'Work', desc: 'Dakinis One to operate; LifeFlow, StreamAutomator, or others when you need them' },
      ],
    },
    hub: {
      eyebrow: 'Your Dakinis desktop',
      title: 'Everything starts in the Hub',
      lead: 'Start in your Hub. Your business starts here.',
      body:
        'Not a link menu. Your workspace: what is due today, alerts, product access, and team preferences.',
      body2: 'Open Dakinis One, Finances, or StreamAutomator from the same place — same session.',
      bullets: [
        'My day and widgets with real data',
        'SSO launcher to connected products',
        'Cross-product notifications',
        'Per-tenant access: you control what each business sees',
      ],
    },
    dakinisOneProduct: {
      eyebrow: 'Product · Business OS',
      title: 'Dakinis One — run your day to day',
      lead:
        'The main product to run your business: CRM, appointments, inventory, restaurant, messaging, and integrated copilot.',
      bullets: [
        'Customers and pipeline',
        'Appointments and bookings',
        'Stock and inventory (Growth+)',
        'Copilot with your business context (Pro)',
      ],
      cta: 'Try Dakinis One',
    },
    ai: {
      title: 'AI that knows your business',
      lead:
        'Dakinis AI is not a standalone chat. It knows your business — documents, FAQ, tenant data — to answer, assist, and automate from the Hub or Dakinis One.',
      sub: 'Ask in plain language. Get contextual answers, not empty templates.',
    },
    knowledge: {
      title: 'Ctrl+K across the platform',
      lead:
        'Upload policies, manuals, and FAQ. Search in seconds. Copilot and search share the same company memory.',
      quote: 'Your company asks; Dakinis answers with your data.',
    },
    pricing: {
      title: 'A clear plan to start',
      lead:
        'Start with essentials. Move to Growth when you need more modules and AI. Pro for teams using WhatsApp and advanced copilot.',
      cta: 'View pricing',
      footnote: 'Secure billing with Stripe · Cancel anytime',
    },
    beta: {
      title: 'Open beta for pilots in Spain',
      lead: 'We are looking for the first business to centralize operations on Dakinis Platform.',
    },
    savings: {
      kicker: 'Real savings',
      headline: 'Businesses save up to €720/month with Dakinis One',
      credibility: 'Based on a business spending 10 h/week on admin tasks.',
      body: 'How many hours per week do you lose in Excel, WhatsApp and paper? Estimate your savings in under a minute.',
      ctaCalc: 'Calculate my savings',
      ctaTrial: 'Try free',
      footnote: 'Estimate at €18/h. Adjust in the interactive calculator.',
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
      title: 'More products from the Hub',
      lead: 'Same account, same Hub. Open these products when you need them.',
      footnote: 'More products open from the Hub with the same account.',
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
      title: 'Your business in one system',
      body: 'Sign up, enter the Hub, and try Dakinis One with your team. Without installing five separate tools.',
      ctaAccount: 'Create account',
      email: 'Talk to us',
      whatsapp: 'WhatsApp',
      whatsappFabHint: 'You can also message us on WhatsApp using the green floating button.',
      emailSubject: 'Interest in Dakinis Platform',
      consultoriaEmailSubject: 'Custom software project',
      consultoriaTitle: "Let's talk about your project",
      consultoriaBody: 'Tell us what you need and we will propose a technical approach, timeline, and roadmap.',
    },
    sem: {
      meta: {
        title: 'Dakinis One — Stop Excel, run your business | Dakinis Systems',
        description:
          'Stop running your business on Excel. CRM, inventory, bookings, WhatsApp and AI in one system. Free trial.',
      },
      hero: {
        kicker: 'Dakinis One',
        line1: 'Stop running your business on Excel.',
        line2: 'CRM, inventory, bookings, WhatsApp and AI in one system.',
        pillars: ['Customers', 'Inventory', 'Sales', 'WhatsApp', 'Bookings', 'AI'],
        ctaPrimary: 'Try Dakinis One free',
        ctaSubtext: 'Start saving time — free',
        ctaPricing: 'View plans',
        socialProof: 'Built after 15+ years delivering business software.',
        trustBullets: [
          'No installation',
          'Works on any device',
          'Free trial',
          'Set up in minutes',
        ],
      },
    },
    footer: {
      tagline: 'Dakinis Systems — An operating system for modern businesses.',
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
