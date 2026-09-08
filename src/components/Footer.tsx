import { Github, Linkedin, Mail } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { useLanguage } from '../contexts/LanguageContext';
import { ui } from '../data/translations';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="relative overflow-hidden bg-black dark:bg-gray-950 text-white py-16 px-6 md:px-12 lg:px-24 transition-colors duration-300">
      {/* Fondos artísticos */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Gradiente diagonal dramático */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 dark:from-gray-950 dark:via-black dark:to-gray-950" />

        {/* Líneas decorativas sutiles */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-40" />
        <div className="absolute top-[30%] -left-20 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent rotate-[10deg] opacity-20" />
        <div className="absolute bottom-[20%] -right-10 w-[300px] h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent -rotate-[15deg] opacity-15" />

        {/* Círculos decorativos */}
        <div className="absolute -top-20 -right-20 w-[200px] h-[200px] rounded-full border border-gray-800 opacity-20" />
        <div className="absolute -bottom-16 -left-16 w-[150px] h-[150px] rounded-full border border-gray-800 opacity-15" />

        {/* Puntos de luz */}
        <div className="absolute top-[20%] left-[10%] w-1 h-1 rounded-full bg-gray-600 opacity-40" />
        <div className="absolute top-[60%] right-[8%] w-1.5 h-1.5 rounded-full bg-gray-600 opacity-30" />
        <div className="absolute bottom-[30%] left-[50%] w-1 h-1 rounded-full bg-gray-600 opacity-25" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="w-full">
            <div className="mb-6 border-b border-gray-700 dark:border-gray-800 pb-6">
              <h3 className="text-2xl md:text-3xl font-mono font-bold mb-4">
                {t(ui.footer.title)}
              </h3>
              <div className="space-y-4 text-sm md:text-base font-mono text-gray-400 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                <p>
                  {t(ui.footer.description)}
                </p>
                <div className="mt-2 flex items-center gap-6">
                <a
                  href="https://github.com/JamesLMC1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 dark:text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/3170411437"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 dark:text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <SiWhatsapp className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/james-leonardo-martinez-casta%C3%B1eda-a84745346/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 dark:text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:jamesleonardo230@gmail.com`}
                  className="flex items-center text-gray-400 dark:text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                  <span className="ml-2 text-sm">jamesleonardo230@gmail.com</span>
                </a>
              </div>

                <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300">
                  © {currentYear} James Leonardo Martínez Castañeda. {t(ui.footer.rights)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
