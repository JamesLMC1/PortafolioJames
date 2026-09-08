import { Project } from '../types';

import BogospotsImg from '../source/Bogospots.png';
import IzytestingImg from '../source/Izytesting.png';

export const projects: Project[] = [
  {
    id: '1',
    title: 'BOGOSPOTS',
    repo: 'https://github.com/orgs/RinconesCO/repositories',
    year: 2026,
    role: 'Design & Dev',
    category: 'personal',
    description: {
      es: 'Proyecto personal en desarrollo. Aplicación web para descubrir y compartir lugares interesantes en Bogotá, con geolocalización y reseñas de usuarios.',
      en: 'Personal project in progress. Web app to discover and share interesting places in Bogotá, featuring geolocation and user reviews.',
    },
    image: BogospotsImg,
    technologies: ['Django Rest Framework', 'React', 'PostgreSQL', 'Tailwind CSS'],
  },
  {
    id: '2',
    title: 'IZY DATA',
    year: 2026,
    role: 'Dev',
    category: 'company',
    description: {
      es: 'Participé en el desarrollo de los primeros laboratorios de la plataforma web de IZY DATA.',
      en: 'I contributed to the development of the first labs of the IZY DATA web platform.',
    },
    technologies: ['Django Rest Framework', 'Angular', 'PostgreSQL', 'Trino', 'Tailwind CSS'],
  },
  {
    id: '3',
    title: 'IZY TESTING',
    year: 2026,
    role: 'Dev',
    category: 'company',
    description: {
      es: 'Trabajé con el equipo de desarrollo frontend y backend en la solución IZY TESTING, una plataforma para la gestión y ejecución de pruebas de software.',
      en: 'I worked with the frontend and backend teams on IZY TESTING, a platform for managing and executing software tests.',
    },
    image: IzytestingImg,
    link: 'https://izytesting.com/',
    technologies: ['Django Rest Framework', 'Angular', 'PostgreSQL'],
  },
];
