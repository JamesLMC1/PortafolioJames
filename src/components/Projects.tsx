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
    <section className="min-h-screen py-20 px-6 md:px-12 lg:px-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-mono font-bold text-black dark:text-white mb-4 transition-colors duration-300">
            Proyectos
          </h2>
          <p className="text-sm md:text-base font-mono text-gray-600 dark:text-gray-400 transition-colors duration-300">
            Cronología de proyectos realizados (2025–2026)
          </p>
        </div>

        <div className="mb-12 flex flex-wrap gap-3">
          {(['All', 'Dev', 'Design', 'Design & Dev'] as FilterType[]).map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 font-mono text-sm transition-all duration-300 border ${
                filter === type
                  ? 'bg-black dark:bg-white text-white dark:text-black border-black dark:border-white'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-black dark:hover:border-white'
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
              className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 p-6 md:p-8 transition-all duration-300 hover:border-black dark:hover:border-white hover:shadow-lg group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-center gap-3 mb-3 md:mb-0">
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors">
                    {getRoleIcon(project.rol)}
                    <span className="text-xs font-mono uppercase tracking-wider">
                      {project.rol}
                    </span>
                  </div>
                </div>
                <span className="text-xs md:text-sm font-mono text-gray-500 dark:text-gray-400">
                  {project.año}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-mono font-bold text-black dark:text-white mb-3 transition-colors duration-300">
                {project.titulo}
              </h3>

              <p className="text-sm md:text-base font-mono text-gray-600 dark:text-gray-300 leading-relaxed mb-4 transition-colors duration-300">
                {project.descripcion}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tecnologias.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-mono border border-gray-200 dark:border-gray-600 group-hover:border-gray-400 dark:group-hover:border-gray-500 transition-colors"
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
