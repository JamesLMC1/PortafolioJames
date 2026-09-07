import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start px-6 md:px-12 lg:px-24 bg-white dark:bg-gray-900 transition-colors duration-300 pt-20 relative overflow-hidden">
      {/* ═══ FONDO ARTÍSTICO ═══ */}

      {/* Gradiente mesh blobs — manchas de color suaves */}
      <div className="gradient-blob w-[500px] h-[500px] bg-gray-200 dark:bg-gray-700 -top-40 -right-40" style={{ animation: 'blobFloat 20s ease-in-out infinite' }} />
      <div className="gradient-blob w-[350px] h-[350px] bg-gray-300 dark:bg-gray-600 bottom-20 -left-32" style={{ animation: 'blobFloat 25s ease-in-out infinite reverse' }} />
      <div className="gradient-blob w-[200px] h-[200px] bg-gray-200 dark:bg-gray-700 top-1/3 right-1/4" style={{ animation: 'blobFloat 18s ease-in-out infinite 3s' }} />

      {/* Formas geométricas flotantes */}
      <div className="geo-shape geo-shape-circle w-24 h-24 border border-black dark:border-white top-[15%] right-[10%]" style={{ animation: 'geoFloat1 30s ease-in-out infinite' }} />
      <div className="geo-shape geo-shape-square w-16 h-16 border border-black dark:border-white top-[60%] right-[20%]" style={{ animation: 'geoFloat2 25s ease-in-out infinite 2s' }} />
      <div className="geo-shape geo-shape-diamond w-12 h-12 border border-black dark:border-white top-[25%] left-[60%]" style={{ animation: 'geoFloat1 22s ease-in-out infinite 5s' }} />
      <div className="geo-shape geo-shape-circle w-8 h-8 border border-black dark:border-white bottom-[30%] left-[15%]" style={{ animation: 'geoFloat3 18s ease-in-out infinite 1s' }} />
      <div className="geo-shape geo-shape-line w-32 h-[2px] bg-black dark:bg-white top-[40%] right-[5%] rotate-45" style={{ animation: 'geoFloat2 20s ease-in-out infinite 4s' }} />
      <div className="geo-shape geo-shape-line w-20 h-[2px] bg-black dark:bg-white bottom-[20%] right-[35%] -rotate-12" style={{ animation: 'geoFloat1 28s ease-in-out infinite 7s' }} />
      <div className="geo-shape geo-shape-circle w-40 h-40 border border-black dark:border-white -bottom-10 right-[40%] opacity-[0.04]" style={{ animation: 'geoFloat3 35s ease-in-out infinite' }} />

      {/* ═══ CONTENIDO ═══ */}
      <div className="max-w-4xl relative z-10">
        <div className="mb-8 space-y-1">
          <p className="animate-enter text-sm md:text-base font-mono text-gray-500 dark:text-gray-400 tracking-wider mt-16 md:mt-0" style={{ animationDelay: '0.1s' }}>
            Desarrollador
            <span className="text-black dark:text-white font-semibold"> Full Stack</span>,
            Junior
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold text-black dark:text-white leading-tight transition-colors duration-300">
            <span className="code-underline code-highlight">James Leonardo</span><br />
            <span className="code-underline-delayed code-highlight">Martínez Castañeda</span>
            <span className="blinking-cursor"></span>
          </h1>
        </div>

        <div className="animate-enter space-y-1 max-w-2xl mt-8" style={{ animationDelay: '0.3s' }}>
          <p className="text-base md:text-lg font-mono text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
            Soy Desarrollador FullStack Junior con experiencia en frontend con
            <span className="text-black dark:text-white font-semibold"> Angular</span>,
            <span className="text-black dark:text-white font-semibold"> TypeScript</span> y backend con
            <span className="text-black dark:text-white font-semibold"> Django-Rest-Framework</span>. Busco crecer en equipos ágiles desarrollando soluciones de backend y frontend.
          </p>

          <p className="text-sm md:text-base font-mono text-gray-600 dark:text-gray-400 transition-colors duration-300">
            El desarrollo de software también puede ser un arte técnico,
            combinando estructura, lógica y estética.
          </p>
        </div>

        <div className="animate-enter mt-16 flex items-center gap-3 text-gray-400 dark:text-gray-500 transition-colors duration-300" style={{ animationDelay: '0.5s' }}>
          <ArrowDown className="w-5 h-5 animate-bounce" />
          <span className="text-xs font-mono tracking-wider">EXPLORAR</span>
        </div>
      </div>
    </section>
  );
}
