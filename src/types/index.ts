export interface Project {
  id: string;
  title: string;
  year: number;
  role: 'Dev' | 'Design' | 'Design & Dev';
  description: string;
  technologies: string[];
  image?: string;
  link?: string;
}

export interface TechnicalSkill {
  category: string;
  technologies: string[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
}
