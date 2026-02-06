import { Project } from '../types';

// Importa las imágenes en `src/source/` (crea los archivos allí)
import PortaImg from '../source/Porta.png';
import BogospotsImg from '../source/Bogospots.png';
import IzytestingImg from '../source/Izytesting.png';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Portafolio Experimental',
    repo: 'https://github.com/JamesLMC1/PortafolioJames',
    year: 2025,
    role: 'Design & Dev',
    description: 'Sitio experimental basado en estética minimalista, explorando animaciones suaves y diseño tipográfico.',
    image: PortaImg,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite']
  },
  {
    id: '2',
    title: 'BOGOSPOTS',
    repo: 'https://github.com/orgs/RinconesCO/repositories',
    year: 2026,
    role: 'Design & Dev',
    description: 'Proyecto personal en desarrollo. Aplicación web para descubrir y compartir lugares interesantes en Bogotá, con funcionalidades de geolocalización y reseñas de usuarios.',
    image: BogospotsImg,
    technologies: ['Django Rest Framework', 'React', 'PostgreSQL', 'Tailwind CSS']
  },
  {
    id: '3',
    title: 'IZY DATA',
    year: 2025,
    role: 'Dev',
    description: 'Trabajé con el desarrollo de los primeros laboratorios de la plataforma web de IZY DATA.',
    technologies: ['Django Rest Framework', 'Angular', 'PostgreSQL','Trino', 'Tailwind CSS']
  },
  {
    id: '4',
    title: 'IZY TESTING',
    year: 2026,
    role: 'Dev',
    description: 'Trabajé con el equipo de desarrollo frontend y backend en la solución IZY TESTING, una plataforma para la gestión y ejecución de pruebas de software.',
    image: IzytestingImg,
    link: 'https://izytesting.com/',
    technologies: ['Django Rest Framework', 'Angular', 'PostgreSQL']
  }
];
