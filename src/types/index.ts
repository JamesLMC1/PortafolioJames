export interface Project {
  id: string;
  title: string;
  year: number;
  role: 'Dev' | 'Design' | 'Design & Dev';
  description: string;
  technologies: string[];
  image?: string;
  link?: string;
  repo?: string;
}

import { IconType } from 'react-icons';

export interface TechnicalSkill {
  category: string;
  technologies: { name: string; icon?: IconType }[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
}

export interface Education {
  id?: string;
  title: string;
  year: string | number;
  description?: string;
  institution: string;
  link?: string;
}
