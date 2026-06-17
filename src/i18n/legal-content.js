/** Contenido legal corporativo — alineado con docs/legal/company.json */

const OWNER = 'Christian David Villar Colodro'
const TRADING = 'Dakinis Systems'
const NIF = '18513473Z'
const ADDRESS = 'Málaga, España'
const COUNTRY_ES = 'España'
const COUNTRY_EN = 'Spain'
const CONTACT = 'contacto@dakinis-systems.com'
const PRIVACY = 'privacy@dakinis-systems.com'
const LEGAL = 'legal@dakinis-systems.com'
const SECURITY = 'security@dakinis-systems.com'
const AEPD = 'https://www.aepd.es'
const UPDATED = '19 mayo 2026'
const CORE_PRIVACY = 'https://core.dakinissystems.com/privacy'
const META_BUSINESS_TOOLS_TERMS = 'https://www.facebook.com/legal/terms/businesstools'
const MIN_AGE = 14

const controllerEs = `Operador / Responsable: ${OWNER}. Nombre comercial: ${TRADING}. NIF: ${NIF}. Domicilio: ${ADDRESS}. País: ${COUNTRY_ES}.`
const controllerEn = `Operator / Controller: ${OWNER}. Trading name: ${TRADING}. Tax ID (NIF): ${NIF}. Address: ${ADDRESS}. Country: ${COUNTRY_EN}.`

const processorsEs =
  'Solo compartimos datos personales con encargados que ofrecen garantías contractuales y técnicas adecuadas conforme al RGPD (p. ej. Railway).'
const processorsEn =
  'We only share personal data with processors that provide adequate contractual and technical safeguards under the GDPR (e.g. Railway).'

const retentionEs =
  'Datos de contacto: mientras sea necesario. Logs de seguridad: hasta 12 meses. Comunicaciones de soporte: hasta 24 meses.'
const retentionEn =
  'Contact data: as long as needed. Security logs: up to 12 months. Support communications: up to 24 months.'

const minAgeEs = `Los servicios no están dirigidos a personas menores de ${MIN_AGE} años.`
const minAgeEn = `The services are not directed to persons under ${MIN_AGE} years of age.`

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
      { h: '1. Titular (LSSI)', p: `${controllerEs} Contacto: ${CONTACT}. Legal: ${LEGAL}.` },
      { h: '2. Objeto', p: 'Este sitio presenta servicios de desarrollo de software y productos del ecosistema Dakinis.' },
      { h: '3. Propiedad intelectual', p: 'Contenidos y marcas protegidos. Prohibida reproducción sin autorización.' },
      { h: '4. Enlaces', p: 'Cada producto (Core, StreamAutomator, AkoeNet) tiene condiciones propias.' },
      { h: '5. Ley aplicable', p: 'Legislación española; tribunales competentes según normativa aplicable.' },
    ],
  },
  privacy: {
    title: 'Política de privacidad',
    sections: [
      { h: '1. Responsable', p: `${controllerEs} Privacidad: ${PRIVACY}.` },
      {
        h: '2. Datos',
        p: 'IP y logs técnicos; datos que nos envíes por email; preferencia de idioma en almacenamiento local. No vendemos datos ni usamos publicidad comportamental.',
      },
      { h: '3. Base legal', p: 'Consultas comerciales, seguridad del sitio y obligaciones legales.' },
      { h: '4. Encargados', p: processorsEs },
      { h: '5. Conservación', p: retentionEs },
      {
        h: '6. Exportación y derechos',
        p: `Derechos RGPD y portabilidad (formato estructurado) en ${PRIVACY}. Reclamación AEPD: ${AEPD}`,
      },
      { h: '7. Menores', p: minAgeEs },
      { h: '8. Productos', p: 'Cada producto tiene política propia en su dominio.' },
      {
        h: '9. WhatsApp / Meta (Dakinis One)',
        p: `Herramientas empresariales Meta: ${META_BUSINESS_TOOLS_TERMS}. Dakinis Systems no controla el tratamiento independiente de Meta. Ver ${CORE_PRIVACY}.`,
      },
      { h: '10. Seguridad', p: `Vulnerabilidades: ${SECURITY} o ${LEGAL}.` },
    ],
  },
  cookies: {
    title: 'Política de cookies',
    sections: [
      {
        h: '1. Resumen',
        p: 'Actualmente no usamos Google Analytics, Meta Pixel ni cookies de publicidad. Si las añadimos, actualizaremos esta política.',
      },
      { h: '2. Necesarias', p: 'Preferencia de idioma en almacenamiento local.' },
      { h: '3. Contacto externo', p: 'Enlaces mailto: o WhatsApp: políticas de tu proveedor o Meta.' },
    ],
  },
}

export const legalEn = {
  back: '← Back to home',
  updated: `Last updated: 19 May 2026`,
  footer: {
    privacy: 'Privacy',
    notice: 'Legal notice',
    cookies: 'Cookies',
    contact: 'Contact',
  },
  notice: {
    title: 'Legal notice',
    sections: [
      { h: '1. Owner (LSSI)', p: `${controllerEn} Contact: ${CONTACT}. Legal: ${LEGAL}.` },
      { h: '2. Purpose', p: 'This site presents software development services and Dakinis ecosystem products.' },
      { h: '3. Intellectual property', p: 'Content and trademarks are protected. Reproduction without authorization is prohibited.' },
      { h: '4. Links', p: 'Each product (Core, StreamAutomator, AkoeNet) has its own terms.' },
      { h: '5. Applicable law', p: 'Spanish law; competent courts as applicable.' },
    ],
  },
  privacy: {
    title: 'Privacy policy',
    sections: [
      { h: '1. Controller', p: `${controllerEn} Privacy: ${PRIVACY}.` },
      {
        h: '2. Data',
        p: 'IP and technical logs; data you send by email; language preference in local storage. We do not sell data or use behavioral advertising.',
      },
      { h: '3. Legal basis', p: 'Commercial inquiries, site security, and legal obligations.' },
      { h: '4. Processors', p: processorsEn },
      { h: '5. Retention', p: retentionEn },
      {
        h: '6. Export and rights',
        p: `GDPR rights and portability (structured format) at ${PRIVACY}. AEPD complaint: ${AEPD}`,
      },
      { h: '7. Minors', p: minAgeEn },
      { h: '8. Products', p: 'Each product has its own policy on its domain.' },
      {
        h: '9. WhatsApp / Meta (Dakinis One)',
        p: `Meta Business Tools: ${META_BUSINESS_TOOLS_TERMS}. Dakinis Systems does not control Meta's independent processing. See ${CORE_PRIVACY}.`,
      },
      { h: '10. Security', p: `Vulnerabilities: ${SECURITY} or ${LEGAL}.` },
    ],
  },
  cookies: {
    title: 'Cookie policy',
    sections: [
      {
        h: '1. Summary',
        p: 'We currently do not use Google Analytics, Meta Pixel, or advertising cookies. If added, we will update this policy.',
      },
      { h: '2. Essential', p: 'Language preference in local storage.' },
      { h: '3. External contact', p: 'mailto: or WhatsApp links: your provider or Meta policies apply.' },
    ],
  },
}
