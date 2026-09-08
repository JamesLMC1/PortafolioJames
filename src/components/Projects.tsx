import { useState } from 'react';
import { projects } from '../data/projects';
import { Project } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { ui } from '../data/translations';
import { Code2, } from 'lucide-react';
import { SiReact, SiTypescript, SiTailwindcss, SiVite, SiDjango, SiPostgresql, SiAngular, SiTrino } from 'react-icons/si';
import ImageModal from './ImageModal';
import Reveal from './Reveal';
import Tilt3D from './Tilt3D';

type FilterType = 'all' | 'personal' | 'company';

export default function Projects() {
  const [filter, setFilter] = useState<FilterType>('all');
  const [modalImage, setModalImage] = useState<string | null>(null);
  const { t } = useLanguage();

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  const getRoleIcon = (role: Project['role']) => {
    switch (role) {
      case 'Dev':
        return <Code2 className="w-4 h-4 text-black dark:text-white" />;
      default:
        return null;
    }
  };

  const getTechIcon = (tech: string) => {
    const tch = tech.toLowerCase();
    switch (tch) {
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
      case 'angular':
        return <SiAngular className="w-5 h-5 text-black dark:text-white" />;
      case 'trino':
        return <SiTrino className="w-5 h-5 text-black dark:text-white" />;
      default:
        return <span className="text-xs font-mono text-black dark:text-white">{tech}</span>;
    }
  };

  const filters: { key: FilterType; label: string }[] = [
    { key: 'all', label: t(ui.projects.all) },
    { key: 'personal', label: t(ui.projects.personal) },
    { key: 'company', label: t(ui.projects.company) },
  ];

  return (
    <section className="min-h-screen py-20 px-6 md:px-12 lg:px-24 bg-gray-100 dark:bg-gray-800 transition-colors duration-300 relative dot-grid">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent rotate-[25deg] opacity-40" />
        <div className="absolute top-1/3 -left-10 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent -rotate-[15deg] opacity-30" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <Reveal>
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-mono font-bold text-black dark:text-white mb-4 transition-colors duration-300">
              {t(ui.projects.title)}
            </h2>
            <p className="text-sm md:text-base font-mono text-gray-600 dark:text-gray-400 transition-colors duration-300">
              {t(ui.projects.subtitle)}
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mb-12 flex flex-wrap gap-3">
            {filters.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-4 py-2 font-mono text-sm transition-all duration-300 border ${filter === key
                    ? 'bg-black dark:bg-white text-white dark:text-black border-black dark:border-white'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-black dark:hover:border-white'
                  }`}
              >
                {label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="space-y-6">
          {filteredProjects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 120}>
              <Tilt3D maxTilt={6}>
                <div
                  className="animate-float glass-card glow-on-hover card-3d border border-gray-200 dark:border-gray-600 p-6 md:p-8 transition-[background-color,border-color,box-shadow] duration-300 hover:border-black dark:hover:border-white hover:shadow-lg group relative overflow-hidden"
                  style={{ animationDelay: `${(idx % 4) * 1.2}s` }}
                >
                <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none" aria-hidden="true">
                  <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-gray-400 dark:from-gray-500 to-transparent opacity-40" />
                  <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-gray-400 dark:from-gray-500 to-transparent opacity-40" />
                </div>

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
                        {project.link || project.repo ? (
                          <a
                            href={project.link ?? project.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            {project.title}
                          </a>
                        ) : (
                          <span>{project.title}</span>
                        )}
                      </span>
                    </h3>

                    <p className="text-sm md:text-base font-mono text-gray-600 dark:text-gray-300 leading-relaxed mb-4 transition-colors duration-300">
                      {t(project.description)}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-mono border border-gray-200 dark:border-gray-600 group-hover:border-gray-400 dark:group-hover:border-gray-500 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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
                        {project.technologies.map((tech, techIdx) => (
                          <div key={techIdx} title={tech} className="text-gray-600 dark:text-gray-300">
                            {getTechIcon(tech)}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                </div>
              </Tilt3D>
            </Reveal>
          ))}
        </div>
        {modalImage && (
          <ImageModal src={modalImage} onClose={() => setModalImage(null)} />
        )}
      </div>
    </section>
  );
}
