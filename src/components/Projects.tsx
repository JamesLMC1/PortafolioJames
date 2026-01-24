import { useState } from 'react';
import { projects } from '../data/projects';
import { Project } from '../types';
import { Code2, Palette, Layers } from 'lucide-react';
import { SiReact, SiTypescript, SiTailwindcss, SiVite, SiDjango, SiPostgresql, SiFigma, SiAngular, SiDocker, SiTrino, SiGithub } from 'react-icons/si';
import RepoLinks from './RepoLinks';
import ImageModal from './ImageModal';

type FilterType = 'All' | 'Dev' | 'Design' | 'Design & Dev';

export default function Projects() {
  const [filter, setFilter] = useState<FilterType>('All');
  const [modalImage, setModalImage] = useState<string | null>(null);

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.role === filter);

  const getRoleIcon = (role: Project['role']) => {
    switch (role) {
      case 'Dev':
        return <Code2 className="w-4 h-4 text-black dark:text-white" />;
      case 'Design':
        return <Palette className="w-4 h-4 text-black dark:text-white" />;
      case 'Design & Dev':
        return <Layers className="w-4 h-4 text-black dark:text-white" />;
    }
  };

  const getTechIcon = (tech: string) => {
    const t = tech.toLowerCase();
    switch (t) {
      case 'react':
        return <SiReact className="w-5 h-5 text-black dark:text-white" />;
      case 'typescript':
        return <SiTypescript className="w-5 h-5 text-black dark:text-white" />;
      case 'tailwind css':
      case 'tailwind':
        return <SiTailwindcss className="w-5 h-5 text-black dark:text-white" />;
      case 'vite':
        return <SiVite className="w-5 h-5 text-black dark:text-white" />;
      case 'django rest framework':
      case 'django':
        return <SiDjango className="w-5 h-5 text-black dark:text-white" />;
      case 'postgresql':
      case 'postgres':
        return <SiPostgresql className="w-5 h-5 text-black dark:text-white" />;
      case 'figma':
        return <SiFigma className="w-5 h-5 text-black dark:text-white" />;
      case 'angular':
        return <SiAngular className="w-5 h-5 text-black dark:text-white" />;
      case 'docker':
        return <SiDocker className="w-5 h-5 text-black dark:text-white" />;
      case 'trino':
        return <SiTrino className="w-5 h-5 text-black dark:text-white" />;
      default:
        return <span className="text-xs font-mono text-black dark:text-white">{tech}</span>;
    }
  };

  return (
    <section className="min-h-screen py-20 px-6 md:px-12 lg:px-24 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
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
              className={`px-4 py-2 font-mono text-sm transition-all duration-300 border ${filter === type
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
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors">
                      {getRoleIcon(project.role)}
                      <span className="text-xs font-mono uppercase tracking-wider">
                        {project.role}
                      </span>
                    </div>

                    <span className="text-xs md:text-sm font-mono text-gray-500 dark:text-gray-400">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-mono font-bold text-black dark:text-white mb-2 transition-colors duration-300">
                    <span className="inline-flex items-center gap-3">
                      <span>{project.title}</span>

                      <RepoLinks repoFront={project.repoFront} repoBack={project.repoBack} link={project.link} />
                    </span>
                  </h3>

                  <p className="text-sm md:text-base font-mono text-gray-600 dark:text-gray-300 leading-relaxed mb-4 transition-colors duration-300">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-mono border border-gray-200 dark:border-gray-600 group-hover:border-gray-400 dark:group-hover:border-gray-500 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-gray-500 dark:text-gray-400 mb-4 transition-colors duration-300">
                    {project.link}
                  </a>

                </div>

                {project.image && (
                  <div className="w-full md:w-48 flex-shrink-0 flex flex-col items-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      onClick={() => project.image && setModalImage(project.image)}
                      className="w-full h-32 md:h-40 object-cover rounded-md border border-gray-200 dark:border-gray-600 cursor-pointer"
                    />

                    <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
                      {project.technologies.map((tech, idx) => (
                        <div key={idx} title={tech} className="text-gray-600 dark:text-gray-300">
                          {getTechIcon(tech)}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        {modalImage && (
          <ImageModal src={modalImage} onClose={() => setModalImage(null)} />
        )}
      </div>
    </section>
  );
}
