import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Portafolio Experimental',
    year: 2025,
    role: 'Design & Dev',
    description: 'Sitio experimental basado en estética minimalista, explorando animaciones suaves y diseño tipográfico.',
    image: 'Porta.png',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite']
  },
  {
    id: '2',
    title: 'BOGOSPOTS',
    year: 2026,
    role: 'Design & Dev',
    description: 'Proyecto personal en desarrollo. Aplicación web para descubrir y compartir lugares interesantes en Bogotá, con funcionalidades de geolocalización y reseñas de usuarios.',
    image: 'Bogospots.png',
    technologies: ['Django Rest Framework', 'React', 'PostgreSQL', 'Tailwind CSS', 'Figma']
  },
  {
    id: '3',
    title: 'IZY DATA',
    year: 2025,
    role: 'Dev',
    description: 'Trabaje con el desarrollo de los primeros laboratorios de la plataforma web de IZY DATA.',
    technologies: ['Django Rest Framework', 'Angular', 'PostgreSQL','Trino', 'Docker', 'Tailwind CSS']
  },
  {
    id: '4',
    title: 'IZY TESTING',
    year: 2026,
    role: 'Dev',
    description: 'Trabaje con el equipo de desarrollo frontend y backend en la solucion IZY TESTING, una plataforma para la gestion y ejecucion de pruebas de software.',
    image: 'Izytesting.png',
    link: 'https://izytesting.com/',
    technologies: ['Django Rest Framework', 'Angular', 'PostgreSQL','Trino', 'Docker']
  }
];
