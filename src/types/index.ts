export interface Project {
  id: string;
  titulo: string;
  año: number;
  rol: 'Dev' | 'Design' | 'Design & Dev';
  descripcion: string;
  tecnologias: string[];
  link?: string;
}

export interface TechnicalSkill {
  categoria: string;
  tecnologias: string[];
}
