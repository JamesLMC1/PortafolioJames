import { TechnicalSkill } from '../types';

export const technicalSkills: TechnicalSkill[] = [
  {
    categoria: 'Backend',
    tecnologias: ['Django Rest Framework', 'MySQL', 'Trino']
  },
  {
    categoria: 'Frontend',
    tecnologias: ['Angular', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript', 'TypeScript']
  },
  {
    categoria: 'DevOps & Tools',
    tecnologias: ['Docker', 'Git', 'Postman', 'Linux']
  },
  {
    categoria: 'Experimental',
    tecnologias: ['GSAP', 'Three.js', 'Tweakpane', 'GLSL Shaders', 'Trino', 'React', 'MongoDB']
  }
];

export const faqItems = [
  {
    pregunta: '¿Qué tecnologías dominas para el backend?',
    respuesta: 'Django Rest Framework es mi especialidad principal, complementado con MySQL para bases de datos relacionales. También tengo experiencia con PHP, MongoDB y Trino para consultas distribuidas.'
  },
  {
    pregunta: '¿Cuál es tu stack preferido para frontend?',
    respuesta: 'Angular con Tailwind CSS para aplicaciones robustas y escalables. Para proyectos experimentales'
  },
  {
    pregunta: '¿Cómo manejas el despliegue y la infraestructura?',
    respuesta: 'Utilizo Docker para contenerización, asegurando ambientes consistentes. Git para control de versiones y Postman para documentación y testing de APIs.'
  },
  {
    pregunta: '¿Qué te inspira en el diseño web?',
    respuesta: 'Me inspiro en el minimalismo técnico y la experimentación visual.'
  },
  {
    pregunta: '¿Desarrollas solo o en equipo?',
    respuesta: 'Tengo experiencia en ambas modalidades. He liderado proyectos individuales completos y colaborado en equipos ágiles, adaptándome a diferentes metodologías de trabajo.'
  }
];
