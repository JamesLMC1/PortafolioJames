import { useState, useEffect, useRef } from 'react';
import { education } from '../data/education';
import { useLanguage } from '../contexts/LanguageContext';
import { ui } from '../data/translations';
import { Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'lucide-react';
import ImageModal from './ImageModal';
import Reveal from './Reveal';

export default function Education() {
  const { t } = useLanguage();
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const dragData = useRef({ startX: 0, startY: 0 });

  const total = education.length;

  const goToIndex = (idx: number) => {
    setActiveIndex(((idx % total) + total) % total);
  };

  const next = () => goToIndex(activeIndex + 1);

  const prev = () => goToIndex(activeIndex - 1);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const id = setInterval(() => {
      setActiveIndex((current) => (current + 1) % total);
    }, 4500);
    return () => clearInterval(id);
  }, [isAutoPlaying, total]);

  const stopAutoPlay = () => setIsAutoPlaying(false);

  const resumeAutoPlay = () => setIsAutoPlaying(true);

  const getOffset = (idx: number) => {
    let offset = idx - activeIndex;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;
    return offset;
  };

  const getCardStyle = (offset: number): React.CSSProperties => {
    const abs = Math.abs(offset);
    return {
      transform: `translateX(${offset * 55}%) translateZ(${offset === 0 ? 0 : -120 * abs}px) rotateY(${-offset * 28}deg) scale(${offset === 0 ? 1 : 0.82})`,
      opacity: abs === 0 ? 1 : abs === 1 ? 0.55 : 0,
      zIndex: 10 - abs,
      pointerEvents: abs === 0 ? 'auto' : 'none',
      filter: abs === 0 ? 'none' : `blur(${abs * 0.4}px) saturate(0.6)`,
    };
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragData.current = { startX: e.clientX, startY: e.clientY };
    setIsDragging(true);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setIsDragging(false);
    const dx = e.clientX - dragData.current.startX;
    const dy = e.clientY - dragData.current.startY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 60) {
      stopAutoPlay();
      dx > 0 ? prev() : next();
      resumeAutoPlay();
    }
  };

  return (
    <section className="min-h-screen py-20 px-6 md:px-12 lg:px-24 bg-gray-100 dark:bg-gray-800 transition-colors duration-300 relative overflow-hidden">
      {/* Fondos artísticos abstractos */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full border border-gray-300 dark:border-gray-700 opacity-20" style={{ animation: 'blobFloat 22s ease-in-out infinite' }} />
        <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] rounded-full border border-gray-300 dark:border-gray-700 opacity-15" style={{ animation: 'blobFloat 28s ease-in-out infinite reverse' }} />
        <div className="absolute top-[20%] -right-10 w-[350px] h-[1px] bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-600 to-transparent rotate-[15deg] opacity-25" />
        <div className="absolute bottom-[25%] -left-10 w-[280px] h-[1px] bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-600 to-transparent -rotate-[20deg] opacity-20" />
        <div className="absolute top-[12%] left-[8%] w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600 opacity-30" />
        <div className="absolute top-[35%] right-[5%] w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-600 opacity-25" />
        <div className="absolute bottom-[18%] left-[15%] w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600 opacity-20" />
        <div className="absolute bottom-[40%] right-[12%] w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-600 opacity-30" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <Reveal>
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-mono font-bold text-black dark:text-white mb-4 transition-colors duration-300">
              {t(ui.education.title)}
            </h2>
            <p className="text-sm md:text-base font-mono text-gray-600 dark:text-gray-400 transition-colors duration-300">
              {t(ui.education.subtitle)}
            </p>
          </div>
        </Reveal>

        <div className="relative">
          {/* Escenario 3D coverflow */}
          <div
            className="perspective-[1400px] relative w-full h-[480px] md:h-[520px]"
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerLeave={() => setIsDragging(false)}
            onMouseEnter={stopAutoPlay}
            onMouseLeave={resumeAutoPlay}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            {education.map((item, idx) => {
              const offset = getOffset(idx);
              const style = getCardStyle(offset);
              const isActive = offset === 0;

              return (
                <div
                  key={item.id ?? idx}
                  className="absolute inset-0 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    ...style,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div
                    className={`w-full max-w-xl md:max-w-2xl bg-white dark:bg-gray-800 border p-8 md:p-12 rounded-2xl card-3d transition-colors duration-700 ${
                      isActive
                        ? 'border-black dark:border-white shadow-2xl'
                        : 'border-gray-200 dark:border-gray-600'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2.5">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 text-black dark:text-white">
                          <Award className="w-5 h-5" />
                        </span>
                        <span className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400">
                          {t(ui.education.badge)}
                        </span>
                      </div>
                      <span className="text-sm md:text-base font-mono text-gray-500 dark:text-gray-400 whitespace-nowrap px-3 py-1 rounded-full border border-gray-200 dark:border-gray-600">
                        {t(item.year)}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-4xl font-bold text-black dark:text-white mb-4 transition-colors duration-300 leading-tight">
                      {t(item.title)}
                    </h3>

                    {item.description && (
                      <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4 transition-colors duration-300">
                        {t(item.description)}
                      </p>
                    )}

                    {item.institution && (
                      <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 font-medium">{item.institution}</p>
                    )}

                    {item.link && (
                      <div className="mt-6">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm md:text-base font-medium text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          <Link className="w-4 h-4" />
                          {t(ui.education.viewCertificate)}
                        </a>
                      </div>
                    )}

                    {'image' in item && typeof (item as Record<string, unknown>).image === 'string' && (
                      <div className="mt-6">
                        <img
                          src={(item as Record<string, string>).image}
                          alt={t(item.title)}
                          onClick={() => setModalImage((item as Record<string, string>).image)}
                          className="w-full max-w-[260px] object-cover rounded-lg border border-gray-200 dark:border-gray-600 cursor-pointer"
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Flechas */}
          <button
            onClick={() => { stopAutoPlay(); prev(); resumeAutoPlay(); }}
            aria-label={t(ui.education.prev)}
            className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 z-30 p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 bg-opacity-90 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white hover:scale-110 transition-all duration-300 rounded-full shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => { stopAutoPlay(); next(); resumeAutoPlay(); }}
            aria-label={t(ui.education.next)}
            className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 z-30 p-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 bg-opacity-90 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white hover:scale-110 transition-all duration-300 rounded-full shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicadores + contador */}
          <div className="mt-10 flex flex-col items-center gap-3">
            <div className="flex items-center gap-2.5">
              {education.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => { stopAutoPlay(); goToIndex(idx); resumeAutoPlay(); }}
                  aria-label={`${t(ui.education.goTo)} ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    idx === activeIndex
                      ? 'w-10 h-2.5 bg-black dark:bg-white'
                      : 'w-2.5 h-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <span className="text-sm font-mono text-gray-500 dark:text-gray-400 tracking-widest">
              {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
          </div>
        </div>

        {modalImage && <ImageModal src={modalImage} onClose={() => setModalImage(null)} />}
      </div>
    </section>
  );
}
