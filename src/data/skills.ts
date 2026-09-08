import { TechnicalSkill } from '../types';
import {
  SiReact, SiTypescript, SiTailwindcss, SiJavascript, SiPostman, SiGit, SiMysql,
  SiHtml5, SiCss3, SiDjango, SiPostgresql, SiAngular, SiTrino, SiThreedotjs, SiPython,
  SiSpringboot,
  SiDocker,
  SiElectron,
} from 'react-icons/si';
import { Sparkles, BrainCircuit, Bot, TerminalSquare } from 'lucide-react';

export const technicalSkills: TechnicalSkill[] = [
  {
    category: {
      es: 'Backend',
      en: 'Backend',
    },
    technologies: [
      { name: 'Django Rest Framework', icon: SiDjango },
      { name: 'Java Spring Boot', icon: SiSpringboot },
      { name: 'MySQL', icon: SiMysql },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Python', icon: SiPython },
    ],
  },
  {
    category: {
      es: 'Frontend',
      en: 'Frontend',
    },
    technologies: [
      { name: 'HTML', icon: SiHtml5 },
      { name: 'Angular', icon: SiAngular },
      { name: 'CSS', icon: SiCss3 },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'React', icon: SiReact },
    ],
  },
  {
    category: {
      es: 'DevOps & Herramientas',
      en: 'DevOps & Tools',
    },
    technologies: [
      { name: 'Git', icon: SiGit },
      { name: 'Postman', icon: SiPostman },
    ],
  },
  {
    category: {
      es: 'Desarrollo con IA',
      en: 'AI Development',
    },
    technologies: [
      { name: 'OpenCode', icon: Sparkles },
      { name: 'Cursor', icon: BrainCircuit },
      { name: 'Claude Code', icon: Bot },
      { name: 'Skills', icon: TerminalSquare },
      { name: 'OpenSpec', icon: Sparkles },
    ],
  },
  {
    category: {
      es: 'Experimental',
      en: 'Experimental',
    },
    technologies: [
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Three.js', icon: SiThreedotjs },
      { name: 'Trino', icon: SiTrino },
      { name: 'Docker', icon: SiDocker },
      { name: 'Electron', icon: SiElectron },
    ],
  },
];
