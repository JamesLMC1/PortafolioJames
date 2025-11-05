import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start px-6 md:px-12 lg:px-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl">
        <div className="mb-8 space-y-2">
          <p className="text-sm md:text-base font-mono text-gray-500 dark:text-gray-400 tracking-wider">
            TECHNOLOGIST & DEVELOPER
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold text-black dark:text-white leading-tight transition-colors duration-300">
            James Leonardo<br />
            Martínez Castañeda
          </h1>
        </div>

        <div className="space-y-6 max-w-2xl">
          <p className="text-base md:text-lg font-mono text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
            Busco expresar nuevas formas de diseño y desarrollo a través de la
            <span className="text-black dark:text-white font-semibold"> creatividad</span>, la
            <span className="text-black dark:text-white font-semibold"> experimentación técnica </span>
            y la optimización de la experiencia digital.
          </p>

          <p className="text-sm md:text-base font-mono text-gray-600 dark:text-gray-400 transition-colors duration-300">
            El desarrollo de software también puede ser un arte técnico,
            combinando estructura, lógica y estética.
          </p>
        </div>

        <div className="mt-16 flex items-center gap-3 text-gray-400 dark:text-gray-500 animate-bounce transition-colors duration-300">
          <ArrowDown className="w-5 h-5" />
          <span className="text-xs font-mono tracking-wider">EXPLORAR</span>
        </div>
      </div>
    </section>
  );
}
