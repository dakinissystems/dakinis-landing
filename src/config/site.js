import { publicUrl } from '../lib/publicUrl'

export const SITE = {
  name: 'Dakinis Systems',
  tagline: 'Desarrollo de software a medida',
}

export const BRAND_ASSETS = {
  logoDesktop: publicUrl('brands/dakinis-logo-lg.jpeg'),
  logoMobile: publicUrl('brands/dakinis-logo-sm.jpeg'),
}

export const NAV_LINKS = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#trabajos', label: 'Trabajos' },
  { href: '#contacto', label: 'Contacto' },
]

export const SERVICES = [
  { id: 'web', name: 'Web Apps a Medida', desc: 'React, Next.js y paneles internos' },
  { id: 'backend', name: 'Backend Escalable', desc: 'APIs, arquitectura modular y seguridad' },
  { id: 'auto', name: 'Automatizaciones', desc: 'Integraciones y flujos para ahorrar tiempo' },
  { id: 'devops', name: 'DevOps y Cloud', desc: 'Docker, despliegues y observabilidad' },
]

export const PROJECTS = [
  {
    id: 'akoenet',
    name: 'AkoeNet',
    description: 'Plataforma de comunidad con enfoque en tiempo real.',
    url: 'https://akoenet-frontend.onrender.com/',
    logoSrc: publicUrl('brands/akoenet.png'),
    logoWidth: 56,
    logoHeight: 56,
  },
  {
    id: 'stream-automator',
    name: 'Streamer Scheduler',
    description: 'Panel para gestion y automatizacion de contenidos.',
    url: 'https://streamautomator.com/dashboard',
    logoSrc: publicUrl('brands/stream-automator.png'),
    logoWidth: 56,
    logoHeight: 56,
  },
]

export const CONTACT = {
  email: 'contacto@dakinis-systems.com',
  emailSubject: 'Proyecto a medida',
  whatsappHref: 'https://wa.me/5490000000000',
}
