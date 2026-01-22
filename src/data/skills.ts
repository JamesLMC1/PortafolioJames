import { TechnicalSkill } from '../types';

export const technicalSkills: TechnicalSkill[] = [
  {
    category: 'Backend',
    technologies: ['Django Rest Framework', 'MySQL', 'Trino']
  },
  {
    category: 'Frontend',
    technologies: ['Angular', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript', 'TypeScript']
  },
  {
    category: 'DevOps & Tools',
    technologies: ['Docker', 'Git', 'Postman', 'Linux']
  },
  {
    category: 'Experimental',
    technologies: ['GSAP', 'Three.js', 'Tweakpane', 'GLSL Shaders', 'Trino', 'React', 'MongoDB']
  }
];

export const faqItems = [
  {
    question: '¿Qué tecnologías dominas para el backend?',
    answer: 'Django Rest Framework es mi especialidad principal, complementado con MySQL para bases de datos relacionales. También tengo experiencia con PHP, MongoDB y Trino para consultas distribuidas.'
  },
  {
    question: '¿Cuál es tu stack preferido para frontend?',
    answer: 'Angular con Tailwind CSS para aplicaciones robustas y escalables. Para proyectos experimentales'
  },
  {
    question: '¿Cómo manejas el despliegue y la infraestructura?',
    answer: 'Utilizo Docker para contenerización, asegurando ambientes consistentes. Git para control de versiones y Postman para documentación y testing de APIs.'
  },
  {
    question: '¿Qué te inspira en el diseño web?',
    answer: 'Me inspiro en el minimalismo técnico y la experimentación visual.'
  },
  {
    question: '¿Desarrollas solo o en equipo?',
    answer: 'Tengo experiencia en ambas modalidades. He liderado proyectos individuales completos y colaborado en equipos ágiles, adaptándome a diferentes metodologías de trabajo.'
  }
];
