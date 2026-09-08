import { Localized } from '../types';

export const ui = {
  nav: {
    projects: { es: 'PROYECTOS', en: 'PROJECTS' },
    skills: { es: 'HABILIDADES', en: 'SKILLS' },
    education: { es: 'EDUCACIÓN', en: 'EDUCATION' },
    experience: { es: 'EXPERIENCIA', en: 'EXPERIENCE' },
    contact: { es: 'CONTACTO', en: 'CONTACT' },
    cv: { es: 'CV', en: 'CV' },
    toggleTheme: { es: 'Cambiar tema', en: 'Toggle theme' },
    toggleMenu: { es: 'Abrir menú', en: 'Toggle menu' },
    langLabel: { es: 'ES', en: 'EN' },
  } satisfies Record<string, Localized>,
  hero: {
    role: { es: 'Desarrollador', en: 'Developer' },
    roleHighlight: { es: ' Full Stack', en: ' Full Stack' },
    roleJunior: { es: ', Junior', en: ', Junior' },
    intro: {
      es: 'Soy Desarrollador FullStack Junior con experiencia en frontend con',
      en: 'I am a Junior FullStack Developer with frontend experience in',
    },
    highlightAngular: { es: ' Angular', en: ' Angular' },
    highlightTs: { es: ' TypeScript', en: ' TypeScript' },
    backendWith: { es: ' y backend con', en: ' and backend with' },
    highlightDjango: { es: ' Django-Rest-Framework', en: ' Django-Rest-Framework' },
    introEnd: {
      es: '. Busco crecer en equipos ágiles desarrollando soluciones de backend y frontend.',
      en: '. I aim to grow in agile teams building backend and frontend solutions.',
    },
    tagline: {
      es: 'El desarrollo de software también puede ser un arte técnico, combinando estructura, lógica y estética.',
      en: 'Software development can also be a technical art, combining structure, logic and aesthetics.',
    },
    explore: { es: 'EXPLORAR', en: 'EXPLORE' },
  },
  projects: {
    title: { es: 'Proyectos', en: 'Projects' },
    subtitle: { es: 'Cronología de proyectos realizados (2025–2026)', en: 'Timeline of completed projects (2025–2026)' },
    all: { es: 'Todos', en: 'All' },
    personal: { es: 'Personales', en: 'Personal' },
    company: { es: 'Empresa', en: 'Company' },
  },
  skills: {
    title: { es: 'Habilidades técnicas', en: 'Technical skills' },
    subtitle: { es: 'Tecnologías y herramientas que domino', en: 'Technologies and tools I master' },
    aiDevelopment: { es: 'Desarrollo con IA', en: 'AI Development' },
  },
  education: {
    title: { es: 'Educación & Certificados', en: 'Education & Certificates' },
    subtitle: {
      es: 'Experiencias educativas, cursos y certificaciones relevantes.',
      en: 'Educational background, courses and relevant certifications.',
    },
    badge: { es: 'Educación', en: 'Education' },
    viewCertificate: { es: 'Ver certificado', en: 'View certificate' },
    prev: { es: 'Anterior', en: 'Previous' },
    next: { es: 'Siguiente', en: 'Next' },
    goTo: { es: 'Ir a educación', en: 'Go to education' },
  },
  experiences: {
    title: { es: 'Experiencias laborales', en: 'Work experience' },
    subtitle: { es: 'Historial laboral y roles', en: 'Employment history and roles' },
  },
  footer: {
    title: { es: 'Contacto', en: 'Contact' },
    description: {
      es: 'Podrás encontrar mis diferentes formas de contacto aquí.',
      en: 'You will find my different contact methods here.',
    },
    rights: {
      es: 'Todos los derechos reservados.',
      en: 'All rights reserved.',
    },
  },
  imageModal: {
    open: { es: 'Abrir', en: 'Open' },
    close: { es: 'Cerrar', en: 'Close' },
    closeImage: { es: 'Cerrar imagen', en: 'Close image' },
    enlarged: { es: 'Imagen ampliada', en: 'Enlarged image' },
  },
} as const;
