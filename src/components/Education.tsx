import { useState, useEffect, useRef } from 'react';
import { education } from '../data/education';
import { Award, ChevronUp, ChevronDown } from 'lucide-react';
import ImageModal from './ImageModal';
import Reveal from './Reveal';

export default function Education() {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const total = education.length;

  /* Limpia cualquier intervalo o timeout activo */
  const clearTimers = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (resumeRef.current) {
      clearTimeout(resumeRef.current);
      resumeRef.current = null;
    }
  };

  /* Inicia el auto-play (avanza cada 3 segundos) */
  const startAutoPlay = () => {
    clearTimers();
    intervalRef.current = setInterval(() => {
      setActiveIndex((current) => (current + 1) % total);
    }, 3000);
  };

  /* Detiene el auto-play y lo retoma después de 5 segundos */
  const pauseTemporarily = () => {
    clearTimers();
    resumeRef.current = setTimeout(() => {
      startAutoPlay();
    }, 5000);
  };

  /* Iniciar auto-play al montar y limpiar al desmontar */
  useEffect(() => {
    startAutoPlay();
    return clearTimers;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total]);

  /* Navega al siguiente */
  const next = () => {
    pauseTemporarily();
    setActiveIndex((current) => (current + 1) % total);
  };

  /* Navega al anterior */
  const prev = () => {
    pauseTemporarily();
    setActiveIndex((current) => (current - 1 + total) % total);
  };

  /* Ir a un índice específico (dots) */
  const goToIndex = (idx: number) => {
    pauseTemporarily();
    setActiveIndex(idx);
  };

  /*
   * Calcula la posición relativa de cada card respecto a la activa.
   * Elige el camino más corto en el carrusel circular.
   */
  const getOffset = (idx: number) => {
    let offset = idx - activeIndex;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;
    return offset;
  };

  /* Estilo de cada card según su distancia a la activa */
  const getCardStyle = (offset: number) => {
    const abs = Math.abs(offset);
    if (abs > 2) {
      return {
        opacity: 0,
        zIndex: 0,
        pointerEvents: 'none' as const,
        filter: 'none',
      };
    }
    return {
      opacity: abs === 0 ? 1 : 0.45 - (abs - 1) * 0.2,
      zIndex: 10 - abs,
      pointerEvents: (abs === 0 ? 'auto' : 'none') as 'auto' | 'none',
      filter: abs === 0 ? 'none' : `blur(${abs * 0.6}px)`,
    };
  };

  return (
    <section className="min-h-screen py-20 px-6 md:px-12 lg:px-24 bg-gray-100 dark:bg-gray-800 transition-colors duration-300 relative overflow-hidden">
      {/* Fondos artísticos abstractos */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Círculo grande difuminado */}
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full border border-gray-300 dark:border-gray-700 opacity-20" style={{ animation: 'blobFloat 22s ease-in-out infinite' }} />
        <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] rounded-full border border-gray-300 dark:border-gray-700 opacity-15" style={{ animation: 'blobFloat 28s ease-in-out infinite reverse' }} />

        {/* Líneas decorativas */}
        <div className="absolute top-[20%] -right-10 w-[350px] h-[1px] bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-600 to-transparent rotate-[15deg] opacity-25" />
        <div className="absolute bottom-[25%] -left-10 w-[280px] h-[1px] bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-600 to-transparent -rotate-[20deg] opacity-20" />

        {/* Puntos decorativos */}
        <div className="absolute top-[12%] left-[8%] w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600 opacity-30" />
        <div className="absolute top-[35%] right-[5%] w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-600 opacity-25" />
        <div className="absolute bottom-[18%] left-[15%] w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600 opacity-20" />
        <div className="absolute bottom-[40%] right-[12%] w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-600 opacity-30" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <Reveal>
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-mono font-bold text-black dark:text-white mb-4 transition-colors duration-300">
              Educación & Certificados
            </h2>
            <p className="text-sm md:text-base font-mono text-gray-600 dark:text-gray-400 transition-colors duration-300">
              Experiencias educativas, cursos y certificaciones relevantes.
            </p>
          </div>
        </Reveal>

        {/* Carrusel vertical tipo coverflow */}
        <div className="flex flex-col items-center gap-4">
          {/* Botón anterior */}
          <button
            onClick={prev}
            aria-label="Anterior"
            className="p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition-all duration-300 relative z-20"
          >
            <ChevronUp className="w-5 h-5" />
          </button>

          {/* Escenario del carrusel */}
          <div className="relative w-full max-w-4xl h-[520px] md:h-[480px]">
            {education.map((item, idx) => {
              const offset = getOffset(idx);
              const style = getCardStyle(offset);
              const isActive = offset === 0;

              return (
                <div
                  key={item.id ?? idx}
                  className="absolute inset-x-0 top-1/2 -translate-y-1/2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    transform: `translateY(calc(-50% + ${offset * 135}px)) scale(${offset === 0 ? 1 : 1 - Math.abs(offset) * 0.12})`,
                    opacity: style.opacity,
                    zIndex: style.zIndex,
                    pointerEvents: style.pointerEvents,
                    filter: style.filter,
                  }}
                >
                  <div
                    className={`bg-white dark:bg-gray-700 border p-8 md:p-10 transition-all duration-700 ${
                      isActive
                        ? 'border-black dark:border-white shadow-xl'
                        : 'border-gray-200 dark:border-gray-600'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                        <Award className="w-5 h-5" />
                        <span className="text-sm font-mono uppercase tracking-wider">Educación</span>
                      </div>
                      <span className="text-sm md:text-base font-mono text-gray-500 dark:text-gray-400">
                        {item.year}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-mono font-bold text-black dark:text-white mb-3 transition-colors duration-300">
                      {item.title}
                    </h3>

                    {item.description && (
                      <p className="text-base md:text-lg font-mono text-gray-600 dark:text-gray-300 leading-relaxed mb-3 transition-colors duration-300">
                        {item.description}
                      </p>
                    )}

                    {item.institution && (
                      <p className="text-sm md:text-base font-mono text-gray-500 dark:text-gray-400">{item.institution}</p>
                    )}

                    {item.link && (
                      <div className="mt-3">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm font-mono text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          Ver certificado
                        </a>
                      </div>
                    )}

                    {'image' in item && typeof (item as Record<string, unknown>).image === 'string' && (
                      <div className="mt-4 w-full md:w-1/3">
                        <img
                          src={(item as Record<string, string>).image}
                          alt={item.title}
                          onClick={() => setModalImage((item as Record<string, string>).image)}
                          className="w-full object-cover rounded-md border border-gray-200 dark:border-gray-600 cursor-pointer"
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Degradados superior/inferior */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-gray-100 dark:from-gray-800 to-transparent pointer-events-none z-20" />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-100 dark:from-gray-800 to-transparent pointer-events-none z-20" />

            {/* Indicadores laterales (puntos) */}
            <div className="absolute right-0 md:-right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-30">
              {education.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToIndex(idx)}
                  aria-label={`Ir a educación ${idx + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? 'bg-black dark:bg-white scale-125'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Botón siguiente */}
          <button
            onClick={next}
            aria-label="Siguiente"
            className="p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition-all duration-300 relative z-20"
          >
            <ChevronDown className="w-5 h-5" />
          </button>

          {/* Contador */}
          <span className="text-xs font-mono text-gray-500 dark:text-gray-400 tracking-widest">
            {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </div>

        {modalImage && <ImageModal src={modalImage} onClose={() => setModalImage(null)} />}
      </div>
    </section>
  );
}
