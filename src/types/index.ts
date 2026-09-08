import { CSSProperties, ComponentType } from 'react';

export type Lang = 'es' | 'en';

export interface Localized {
  es: string;
  en: string;
}

export type SkillIcon = ComponentType<{ className?: string; style?: CSSProperties }>;

export interface Project {
  id: string;
  title: string;
  year: number;
  role: 'Dev' | 'Design' | 'Design & Dev';
  category: 'personal' | 'company';
  description: Localized;
  technologies: string[];
  image?: string;
  link?: string;
  repo?: string;
}

export interface TechnicalSkill {
  category: Localized;
  technologies: { name: string; icon?: SkillIcon }[];
}

export interface Experience {
  company: string;
  role: Localized;
  duration: Localized;
  description: Localized;
}

export interface Education {
  id?: string;
  title: Localized;
  year: Localized;
  description?: Localized;
  institution: string;
  link?: string;
}
