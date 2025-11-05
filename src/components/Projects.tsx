import { useState } from 'react';
import { projects } from '../data/projects';
import { Project } from '../types';
import { Code2, Palette, Layers } from 'lucide-react';

type FilterType = 'All' | 'Dev' | 'Design' | 'Design & Dev';

export default function Projects() {
  const [filter, setFilter] = useState<FilterType>('All');

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.rol === filter);

  const getRoleIcon = (rol: Project['rol']) => {
    switch (rol) {
      case 'Dev':
        return <Code2 className="w-4 h-4" />;
      case 'Design':
        return <Palette className="w-4 h-4" />;
      case 'Design & Dev':
        return <Layers className="w-4 h-4" />;
    }
  };

  return (
    <section className="min-h-screen py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-mono font-bold text-black mb-4">
            Projects
          </h2>
          <p className="text-sm md:text-base font-mono text-gray-600">
            Cronología de proyectos realizados (2020–2025)
          </p>
        </div>

        <div className="mb-12 flex flex-wrap gap-3">
          {(['All', 'Dev', 'Design', 'Design & Dev'] as FilterType[]).map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 font-mono text-sm transition-all duration-300 border ${
                filter === type
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-black'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-gray-200 p-6 md:p-8 transition-all duration-300 hover:border-black hover:shadow-lg group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-center gap-3 mb-3 md:mb-0">
                  <div className="flex items-center gap-2 text-gray-700 group-hover:text-black transition-colors">
                    {getRoleIcon(project.rol)}
                    <span className="text-xs font-mono uppercase tracking-wider">
                      {project.rol}
                    </span>
                  </div>
                </div>
                <span className="text-xs md:text-sm font-mono text-gray-500">
                  {project.año}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-mono font-bold text-black mb-3">
                {project.titulo}
              </h3>

              <p className="text-sm md:text-base font-mono text-gray-600 leading-relaxed mb-4">
                {project.descripcion}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tecnologias.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-mono border border-gray-200 group-hover:border-gray-400 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
