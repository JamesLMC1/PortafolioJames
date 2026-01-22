import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Portfolio Experimental',
    year: 2025,
    role: 'Design & Dev',
    description: 'Sitio experimental basado en estética minimalista, explorando animaciones suaves y diseño tipográfico.',
    image: '/images/portfolio-experimental.png',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite']
  },
  {
    id: '2',
    title: 'BOGOSPOTS',
    year: 2025,
    role: 'Design & Dev',
    description: 'Aplicación web para descubrir y compartir lugares interesantes en Bogotá, con funcionalidades de geolocalización y reseñas de usuarios.',
    image: 'prueba.png',
    technologies: ['Django Rest Framework', 'React', 'PostgreSQL']
  },
  {
    id: '3',
    title: 'IZY DATA',
    year: 2025,
    role: 'Dev',
    description: 'Trabaje con el desarrollo de los primeros laboratorios de la plataforma web de IZY DATA.',
    image: '/images/webmentor-figma.png',
    technologies: ['DJANGO REST FRAMEWORK', 'REACT', 'POSTGRESQL','TRINO', 'DOCKER']
  },
  {
    id: '4',
    title: 'IZY TESTING',
    year: 2025,
    role: 'Dev',
    description: 'Trabaje con el equipo de desarrollo frontend y backend en la solucion IZY TESTING, una plataforma para la gestion y ejecucion de pruebas de software.',
    image: '/images/webmentor-figma.png',
    technologies: ['DJANGO REST FRAMEWORK', 'REACT', 'POSTGRESQL','TRINO', 'DOCKER']
  }
];
