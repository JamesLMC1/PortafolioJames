import { TechnicalSkill } from '../types';
import {
  SiReact, SiTypescript, SiTailwindcss, SiJavascript, SiPostman, SiGit, SiMysql,
  SiHtml5, SiCss3, SiDjango, SiPostgresql, SiAngular, SiTrino, SiThreedotjs, SiPython,
} from 'react-icons/si';

export const technicalSkills: TechnicalSkill[] = [
  {
    category: 'Backend',
    technologies: [
      { name: 'Django Rest Framework', icon: SiDjango },
      { name: 'MySQL', icon: SiMysql },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Python', icon: SiPython },
    ],  
  },
  {
    category: 'Frontend',
    technologies: [
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: SiCss3 },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
    ],
  },
  {
    category: 'DevOps & Tools',
    technologies: [
      { name: 'Git', icon: SiGit },
      { name: 'Postman', icon: SiPostman },
    ],
  },
  {
    category: 'Experimental',
    technologies: [
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Angular', icon: SiAngular },
      { name: 'Three.js', icon: SiThreedotjs },
      { name: 'Trino', icon: SiTrino },
      { name: 'React', icon: SiReact },

    ],
  },
];
