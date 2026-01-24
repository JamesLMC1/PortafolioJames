import { Github, Linkedin, Mail } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black dark:bg-gray-950 text-white py-16 px-6 md:px-12 lg:px-24 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="w-full">
            <div className="mb-6 border-b border-gray-700 dark:border-gray-800 pb-6">
              <h3 className="text-2xl md:text-3xl font-mono font-bold mb-4">
                Contacto
              </h3>
              <div className="space-y-4 text-sm md:text-base font-mono text-gray-400 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                <p>
                  Podras encontrar mis diferentes formas de contacto aquí.
                </p>
                <div className="mt-2 flex items-center gap-6">
                <a
                  href="https://github.com/JamesLMC1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/3170411437"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-300"
                  aria-label="WhatsApp"
                >
                  <SiWhatsapp className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/james-leonardo-martinez-casta%C3%B1eda-a84745346/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:jamesleonardo230@gmail.com`}
                  className="flex items-center text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-300"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                  <span className="ml-2 text-sm">jamesleonardo230@gmail.com</span>
                </a>
              </div>
              
                <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300">
                  © {currentYear} James Leonardo Martínez Castañeda. Todos los derechos reservados.
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm font-mono text-gray-400 dark:text-gray-300 mb-2 transition-colors duration-300">
                Diseñado y desarrollado con atención al detalle
              </p>
              <p className="text-xs font-mono text-gray-600 dark:text-gray-400 transition-colors duration-300 mb-4">
                Inspirado en el minimalismo técnico y la experimentación visual
              </p>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
