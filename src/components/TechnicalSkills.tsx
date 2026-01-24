import { technicalSkills } from '../data/skills';

export default function TechnicalSkills() {
  return (
    <section className="min-h-screen py-20 px-6 md:px-12 lg:px-24 bg-white dark:bg-gray-900 transition-colors duration-300 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-mono font-bold text-black dark:text-white mb-4 transition-colors duration-300">
            Habilidades técnicas
          </h2>
          <p className="text-sm md:text-base font-mono text-gray-600 dark:text-gray-400 transition-colors duration-300">
            Tecnologías y herramientas que domino
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {technicalSkills.map((skill, idx) => (
            <div
              key={idx}
              className="border border-gray-200 dark:border-gray-700 p-6 hover:border-black dark:hover:border-white transition-all duration-300 bg-white dark:bg-gray-800"
            >
              <h3 className="text-lg md:text-xl font-mono font-bold text-black dark:text-white mb-4 transition-colors duration-300">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, techIdx) => {
                  const Icon = tech.icon;
                  return (
                    <span
                      key={techIdx}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs md:text-sm font-mono border border-gray-200 dark:border-gray-600 transition-colors duration-300 flex items-center gap-2"
                    >
                      {Icon && <Icon className="w-4 h-4 text-gray-600 dark:text-gray-300" />}
                      {tech.name}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
