import { publicUrl } from '../lib/publicUrl'

export const SITE = {
  name: 'Dakinis Systems',
}

export const BRAND_ASSETS = {
  logoDesktop: publicUrl('brands/dakinis-logo-lg.jpeg'),
  logoMobile: publicUrl('brands/dakinis-logo-sm.jpeg'),
}

/** Orden de bloques en la sección servicios (textos en i18n). */
export const SERVICE_IDS = ['web', 'backend', 'auto', 'devops']

/** Solo datos no traducidos (URLs, assets). */
export const PROJECTS = [
  {
    id: 'akoenet',
    url: 'https://akoenet-frontend.onrender.com/',
    logoSrc: publicUrl('brands/akoenet.png'),
    logoWidth: 56,
    logoHeight: 56,
  },
  {
    id: 'stream-automator',
    url: 'https://streamautomator.com/dashboard',
    logoSrc: publicUrl('brands/stream-automator.png'),
    logoWidth: 56,
    logoHeight: 56,
  },
]

export const CONTACT = {
  email: 'dakinissystems@gmail.com',
  whatsappHref: 'https://wa.me/5490000000000',
}
