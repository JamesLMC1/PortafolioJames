import { useState } from 'react';
import { education } from '../data/education';
import { Award } from 'lucide-react';
import ImageModal from './ImageModal';

export default function Education() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <section className="min-h-screen py-20 px-6 md:px-12 lg:px-24 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-mono font-bold text-black dark:text-white mb-4 transition-colors duration-300">
            Educación & Certificados
          </h2>
          <p className="text-sm md:text-base font-mono text-gray-600 dark:text-gray-400 transition-colors duration-300">
            Experiencias educativas, cursos y certificaciones relevantes.
          </p>
        </div>

        <div className="space-y-6">
          {education.map((item, idx) => (
            <div
              key={item.id ?? idx}
              className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 p-6 md:p-8 transition-all duration-300 hover:border-black dark:hover:border-white hover:shadow-lg"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <Award className="w-4 h-4" />
                  <span className="text-xs font-mono uppercase tracking-wider">Educación</span>
                </div>

                <span className="text-xs md:text-sm font-mono text-gray-500 dark:text-gray-400">
                  {item.year}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-mono font-bold text-black dark:text-white mb-2 transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-sm md:text-base font-mono text-gray-600 dark:text-gray-300 leading-relaxed mb-3 transition-colors duration-300">
                {item.description}
              </p>

              {item.institution && (
                <p className="text-sm font-mono text-gray-500 dark:text-gray-400">{item.institution}</p>
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

              {/** Optional item image (if provided in data) */}
              {'image' in item && (item as any).image && (
                <div className="mt-4 w-full md:w-1/3">
                  <img
                    src={(item as any).image}
                    alt={item.title}
                    onDoubleClick={() => setModalImage((item as any).image)}
                    className="w-full object-cover rounded-md border border-gray-200 dark:border-gray-600 cursor-pointer"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {modalImage && <ImageModal src={modalImage} onClose={() => setModalImage(null)} />}
      </div>
    </section>
  );
}
