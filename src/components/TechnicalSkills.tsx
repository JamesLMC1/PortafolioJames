import { useState } from 'react';
import { technicalSkills, faqItems } from '../data/skills';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function TechnicalSkills() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen py-20 px-6 md:px-12 lg:px-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-mono font-bold text-black dark:text-white mb-4 transition-colors duration-300">
            Technical Stack
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
                {skill.categoria}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.tecnologias.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs md:text-sm font-mono border border-gray-200 dark:border-gray-600 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-2xl md:text-4xl font-mono font-bold text-black dark:text-white mb-8 transition-colors duration-300">
            Q&A
          </h3>
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className="border border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-white transition-colors duration-300 bg-white dark:bg-gray-800"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="text-sm md:text-base font-mono text-black dark:text-white font-semibold pr-4 transition-colors duration-300">
                    {item.pregunta}
                  </span>
                  {openIndex === idx ? (
                    <ChevronUp className="w-5 h-5 text-gray-700 dark:text-gray-300 flex-shrink-0 transition-colors duration-300" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-700 dark:text-gray-300 flex-shrink-0 transition-colors duration-300" />
                  )}
                </button>
                {openIndex === idx && (
                  <div className="px-6 pb-5">
                    <p className="text-sm md:text-base font-mono text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                      {item.respuesta}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
