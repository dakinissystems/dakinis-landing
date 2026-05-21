/** Contenido legal corporativo — alineado con docs/legal/company.json */

const CONTACT = 'contacto@dakinis-systems.com'
const PRIVACY = 'privacy@dakinis-systems.com'
const LEGAL = 'legal@dakinis-systems.com'
const UPDATED = '19 de mayo de 2026'

export const legalEs = {
  back: '← Volver al inicio',
  updated: `Última actualización: ${UPDATED}`,
  footer: {
    privacy: 'Privacidad',
    notice: 'Aviso legal',
    cookies: 'Cookies',
    contact: 'Contacto',
  },
  notice: {
    title: 'Aviso legal',
    sections: [
      {
        h: '1. Titular',
        p: `Dakinis Systems es el nombre comercial de Christian Villar (España). Contacto: ${CONTACT}. Consultas legales: ${LEGAL}.`,
      },
      {
        h: '2. Objeto',
        p: 'Este sitio (dakinissystems.com) presenta servicios de desarrollo de software a medida y productos del ecosistema Dakinis.',
      },
      {
        h: '3. Propiedad intelectual',
        p: 'Los contenidos, diseños y marcas son titularidad de Dakinis Systems o de sus licenciantes. Prohibida su reproducción sin autorización.',
      },
      {
        h: '4. Enlaces',
        p: 'Los enlaces a Dakinis One, StreamAutomator, AkoeNet u otros dominios tienen sus propias condiciones y políticas.',
      },
      {
        h: '5. Responsabilidad y ley aplicable',
        p: 'El sitio se ofrece con diligencia razonable; no garantizamos disponibilidad ininterrumpida. Ley española; tribunales competentes según normativa aplicable.',
      },
    ],
  },
  privacy: {
    title: 'Política de privacidad',
    sections: [
      {
        h: '1. Responsable',
        p: `Dakinis Systems (nombre comercial de Christian Villar). Privacidad: ${PRIVACY}.`,
      },
      {
        h: '2. Datos que tratamos',
        p: 'IP y logs técnicos del hosting (seguridad); datos que nos envíes por email al contactar; preferencia de idioma en almacenamiento local. No vendemos datos ni usamos publicidad comportamental en este sitio.',
      },
      {
        h: '3. Finalidad y base legal',
        p: 'Responder consultas, mantener el sitio seguro y cumplir obligaciones legales (interés legítimo y medidas precontractuales).',
      },
      {
        h: '4. Encargados y conservación',
        p: 'Hosting e infraestructura (p. ej. Railway). Conservamos datos el tiempo necesario para la finalidad y responsabilidades legales.',
      },
      {
        h: '5. Tus derechos',
        p: `Puedes ejercer acceso, rectificación, supresión y demás derechos RGPD en ${PRIVACY}. Reclamación ante la AEPD: www.aepd.es.`,
      },
      {
        h: '6. Productos',
        p: 'Cada producto (Core, StreamAutomator, AkoeNet) tiene política propia en su dominio.',
      },
    ],
  },
  cookies: {
    title: 'Política de cookies',
    sections: [
      {
        h: '1. Resumen',
        p: 'No usamos Google Analytics, Meta Pixel ni cookies de publicidad en este sitio corporativo.',
      },
      {
        h: '2. Almacenamiento necesario',
        p: 'Podemos guardar la preferencia de idioma en tu navegador. Es estrictamente necesario para el funcionamiento básico; no requiere banner de cookies de analítica.',
      },
      {
        h: '3. Contacto externo',
        p: 'Si usas enlaces mailto: o WhatsApp, aplican las políticas de esos servicios.',
      },
    ],
  },
}

export const legalEn = {
  back: '← Back to home',
  updated: `Last updated: May 19, 2026`,
  footer: {
    privacy: 'Privacy',
    notice: 'Legal notice',
    cookies: 'Cookies',
    contact: 'Contact',
  },
  notice: {
    title: 'Legal notice',
    sections: [
      {
        h: '1. Site owner',
        p: `Dakinis Systems is the trading name of Christian Villar (Spain). Contact: ${CONTACT}. Legal: ${LEGAL}.`,
      },
      {
        h: '2. Purpose',
        p: 'This site (dakinissystems.com) presents custom software services and Dakinis ecosystem products.',
      },
      {
        h: '3. Intellectual property',
        p: 'Content, designs, and trademarks belong to Dakinis Systems or licensors. Reproduction without permission is prohibited.',
      },
      {
        h: '4. External links',
        p: 'Links to Dakinis One, StreamAutomator, AkoeNet, or other domains have their own terms and privacy policies.',
      },
      {
        h: '5. Liability and governing law',
        p: 'The site is provided with reasonable care; uninterrupted availability is not guaranteed. Spanish law applies.',
      },
    ],
  },
  privacy: {
    title: 'Privacy policy',
    sections: [
      {
        h: '1. Controller',
        p: `Dakinis Systems (trading name of Christian Villar). Privacy: ${PRIVACY}.`,
      },
      {
        h: '2. Data we process',
        p: 'IP and technical hosting logs (security); data you send by email when contacting us; language preference in local storage. We do not sell data or use behavioral advertising on this site.',
      },
      {
        h: '3. Purpose and legal basis',
        p: 'Reply to inquiries, keep the site secure, and comply with legal obligations (legitimate interest and pre-contractual steps).',
      },
      {
        h: '4. Processors and retention',
        p: 'Hosting providers (e.g. Railway). We keep data as long as needed for the purpose and legal duties.',
      },
      {
        h: '5. Your rights',
        p: `You may exercise GDPR rights at ${PRIVACY}. You may complain to the Spanish DPA (AEPD) at www.aepd.es.`,
      },
      {
        h: '6. Products',
        p: 'Each product (Core, StreamAutomator, AkoeNet) has its own policy on its domain.',
      },
    ],
  },
  cookies: {
    title: 'Cookie policy',
    sections: [
      {
        h: '1. Summary',
        p: 'We do not use Google Analytics, Meta Pixel, or advertising cookies on this corporate site.',
      },
      {
        h: '2. Essential storage',
        p: 'We may store language preference in your browser. This is strictly necessary; no analytics consent banner is required.',
      },
      {
        h: '3. External contact',
        p: 'If you use mailto: or WhatsApp links, those providers’ policies apply.',
      },
    ],
  },
}
