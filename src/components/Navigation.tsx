import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { ui } from '../data/translations';
import cvPdf from '../source/CV_James_Leonardo_Martinez_Castañeda.pdf';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { toggleLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700'
            : 'bg-transparent'
        }`}
      >
        <div className="px-6 md:px-12 lg:px-24 py-4 flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-lg md:text-xl font-mono font-bold text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            JLMC
          </button>

          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleLang}
              className="text-xs font-mono font-bold px-2 py-1 border border-gray-300 dark:border-gray-600 text-black dark:text-white hover:border-black dark:hover:border-white transition-colors"
              aria-label="Toggle language"
            >
              {t(ui.nav.langLabel)}
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label={t(ui.nav.toggleTheme)}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black dark:text-white"
              aria-label={t(ui.nav.toggleMenu)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('projects')}
              className="text-sm font-mono text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors tracking-wider"
            >
              {t(ui.nav.projects)}
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-sm font-mono text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors tracking-wider"
            >
              {t(ui.nav.skills)}
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="text-sm font-mono text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors tracking-wider"
            >
              {t(ui.nav.education)}
            </button>
            <button
              onClick={() => scrollToSection('experiences')}
              className="text-sm font-mono text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors tracking-wider"
            >
              {t(ui.nav.experience)}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-mono text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors tracking-wider"
            >
              {t(ui.nav.contact)}
            </button>

            <a
              href={cvPdf}
              download
              className="text-sm font-mono text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors tracking-wider"
            >
              {t(ui.nav.cv)}
            </a>
            <button
              onClick={toggleLang}
              className="text-xs font-mono font-bold px-2 py-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-black dark:hover:border-white transition-colors"
              aria-label="Toggle language"
            >
              {t(ui.nav.langLabel)}
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              aria-label={t(ui.nav.toggleTheme)}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
        <div
          className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
          aria-hidden={!isMenuOpen}
        >
          <div className="px-6 pb-6 pt-2 space-y-2 bg-white/95 dark:bg-gray-900/95 border-b border-gray-200 dark:border-gray-700 backdrop-blur-sm">
            <button
              onClick={() => scrollToSection('projects')}
              className="w-full text-left block text-sm font-mono text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2"
            >
              {t(ui.nav.projects)}
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="w-full text-left block text-sm font-mono text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2"
            >
              {t(ui.nav.skills)}
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="w-full text-left block text-sm font-mono text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2"
            >
              {t(ui.nav.education)}
            </button>
            <button
              onClick={() => scrollToSection('experiences')}
              className="w-full text-left block text-sm font-mono text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2"
            >
              {t(ui.nav.experience)}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full text-left block text-sm font-mono text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2"
            >
              {t(ui.nav.contact)}
            </button>
            <a
              href={cvPdf}
              download
              className="w-full text-left block text-sm font-mono text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2"
            >
              {t(ui.nav.cv)}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
