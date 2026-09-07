import { technicalSkills } from '../data/skills';
import Reveal from './Reveal';

/*
 * Iconos únicos de todas las tecnologías (sin repetir)
 * Se usan para el fondo animado de la sección
 */
const uniqueIcons = Array.from(
  new Set(
    technicalSkills
      .flatMap((skill) => skill.technologies.map((tech) => tech.icon))
      .filter((icon): icon is NonNullable<typeof icon> => Boolean(icon))
  )
);

/*
 * Posiciones predefinidas (en porcentaje) para distribuir
 * los iconos de fondo por toda la sección
 */
const iconPositions = [
  { top: '6%', left: '4%' },
  { top: '10%', left: '88%' },
  { top: '24%', left: '14%' },
  { top: '30%', left: '76%' },
  { top: '44%', left: '3%' },
  { top: '48%', left: '92%' },
  { top: '62%', left: '12%' },
  { top: '68%', left: '84%' },
  { top: '82%', left: '8%' },
  { top: '86%', left: '70%' },
  { top: '18%', left: '52%' },
  { top: '40%', left: '60%' },
  { top: '58%', left: '38%' },
  { top: '78%', left: '48%' },
  { top: '8%', left: '32%' },
  { top: '90%', left: '28%' },
];

export default function TechnicalSkills() {
  return (
    <section className="min-h-screen py-20 px-6 md:px-12 lg:px-24 bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
      {/* Glow radial de fondo */}
      <div className="absolute inset-0 radial-glow pointer-events-none" aria-hidden="true" />

      {/* Líneas decorativas diagonales */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-[10%] -left-20 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent rotate-[20deg] opacity-30" />
        <div className="absolute top-[50%] -right-10 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent -rotate-[30deg] opacity-25" />
        <div className="absolute bottom-[15%] left-[10%] w-[300px] h-[1px] bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent rotate-[10deg] opacity-20" />
      </div>

      {/*
       * Fondo animado: iconos de las tecnologías flotando lentamente.
       * Colores sutiles + ligero glow para efecto luminoso
       */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {uniqueIcons.map((Icon, i) => {
          const position = iconPositions[i % iconPositions.length];
          return (
            <div
              key={i}
              className="animate-drift absolute"
              style={{
                ...position,
                animationDuration: `${12 + (i % 5) * 3}s`,
                animationDelay: `${(i % 7) * 1.4}s`,
              }}
            >
              <Icon
                className="w-8 h-8 md:w-12 md:h-12 text-gray-200 dark:text-gray-700"
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.06))',
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Contenido principal por encima del fondo animado */}
      <div className="max-w-6xl mx-auto relative z-10">
        <Reveal>
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-mono font-bold text-black dark:text-white mb-4 transition-colors duration-300">
              Habilidades técnicas
            </h2>
            <p className="text-sm md:text-base font-mono text-gray-600 dark:text-gray-400 transition-colors duration-300">
              Tecnologías y herramientas que domino
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {technicalSkills.map((skill, idx) => (
            <Reveal key={idx} delay={idx * 120}>
              <div
                className="border border-gray-200 dark:border-gray-700 p-6 hover:border-black dark:hover:border-white transition-all duration-300 bg-white dark:bg-gray-800 h-full glow-on-hover relative overflow-hidden group"
              >
                {/* Acento luminoso en hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent dark:from-gray-700/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <h3 className="text-lg md:text-xl font-mono font-bold text-black dark:text-white mb-4 transition-colors duration-300 relative z-10">
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {skill.technologies.map((tech, techIdx) => {
                    const Icon = tech.icon;
                    return (
                      <span
                        key={techIdx}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs md:text-sm font-mono border border-gray-200 dark:border-gray-600 transition-all duration-300 flex items-center gap-2 hover:border-gray-400 dark:hover:border-gray-500"
                      >
                        {Icon && <Icon className="w-4 h-4 text-gray-600 dark:text-gray-300" />}
                        {tech.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
