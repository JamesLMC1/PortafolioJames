import { TechnicalSkill } from '../types';
import {
  SiReact, SiTypescript, SiTailwindcss, SiJavascript, SiPostman, SiMongodb, SiGit, SiMysql,
  SiHtml5, SiCss3, SiDjango, SiPostgresql, SiFigma, SiAngular, SiDocker, SiTrino, SiThreedotjs,
} from 'react-icons/si';

export const technicalSkills: TechnicalSkill[] = [
  {
    category: 'Backend',
    technologies: [
      { name: 'Django Rest Framework', icon: SiDjango },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Trino', icon: SiTrino },
      { name: 'PostgreSQL', icon: SiPostgresql },
    ],
  },
  {
    category: 'Frontend',
    technologies: [
      { name: 'Angular', icon: SiAngular },
      { name: 'React', icon: SiReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: SiCss3 },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
    ],
  },
  {
    category: 'DevOps & Tools',
    technologies: [
      { name: 'Docker', icon: SiDocker },
      { name: 'Git', icon: SiGit },
      { name: 'Postman', icon: SiPostman },
    ],
  },
  {
    category: 'Experimental',
    technologies: [
      { name: 'Three.js', icon: SiThreedotjs },
      { name: 'Trino', icon: SiTrino },
      { name: 'React', icon: SiReact },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Figma', icon: SiFigma },
    ],
  },
];
