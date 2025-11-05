import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-4xl">
        <div className="mb-8 space-y-2">
          <p className="text-sm md:text-base font-mono text-gray-500 tracking-wider">
            TECHNOLOGIST & DEVELOPER
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold text-black leading-tight">
            James Leonardo<br />
            Martínez Castañeda
          </h1>
        </div>

        <div className="space-y-6 max-w-2xl">
          <p className="text-base md:text-lg font-mono text-gray-700 leading-relaxed">
            Busco expresar nuevas formas de diseño y desarrollo a través de la
            <span className="text-black font-semibold"> creatividad</span>, la
            <span className="text-black font-semibold"> experimentación técnica </span>
            y la optimización de la experiencia digital.
          </p>

          <p className="text-sm md:text-base font-mono text-gray-600">
            El desarrollo de software también puede ser un arte técnico,
            combinando estructura, lógica y estética.
          </p>
        </div>

        <div className="mt-16 flex items-center gap-3 text-gray-400 animate-bounce">
          <ArrowDown className="w-5 h-5" />
          <span className="text-xs font-mono tracking-wider">EXPLORAR</span>
        </div>
      </div>
    </section>
  );
}
