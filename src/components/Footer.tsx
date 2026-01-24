import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black dark:bg-gray-950 text-white py-16 px-6 md:px-12 lg:px-24 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 border-b border-gray-700 dark:border-gray-800 pb-12">
          <h3 className="text-2xl md:text-3xl font-mono font-bold mb-6">
            Aviso Legal
          </h3>
          <div className="space-y-4 text-sm md:text-base font-mono text-gray-400 dark:text-gray-300 leading-relaxed transition-colors duration-300">
            <p>
              El código fuente y el diseño de este portafolio son propiedad intelectual
              de James Leonardo Martínez Castañeda.
            </p>
            <p>
              No está permitido su uso, copia, modificación o redistribución sin
              autorización expresa y por escrito del autor.
            </p>
            <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300">
              © {currentYear} James Leonardo Martínez Castañeda. Todos los derechos reservados.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <p className="text-sm font-mono text-gray-400 dark:text-gray-300 mb-2 transition-colors duration-300">
              Diseñado y desarrollado con atención al detalle
            </p>
            <p className="text-xs font-mono text-gray-600 dark:text-gray-400 transition-colors duration-300">
              Inspirado en el minimalismo técnico y la experimentación visual
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/jamesleonardo230"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/jamesleonardo230"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:jamesleonardo230@gmail.com"
              className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
