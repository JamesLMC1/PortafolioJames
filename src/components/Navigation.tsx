import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
              onClick={toggleTheme}
              className="p-2 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black dark:text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('projects')}
              className="text-sm font-mono text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors tracking-wider"
            >
              PROJECTS
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-sm font-mono text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors tracking-wider"
            >
              STACK
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-mono text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors tracking-wider"
            >
              CONTACT
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-gray-900 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <button
              onClick={() => scrollToSection('projects')}
              className="text-2xl font-mono text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors tracking-wider"
            >
              PROJECTS
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-2xl font-mono text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors tracking-wider"
            >
              STACK
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-2xl font-mono text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors tracking-wider"
            >
              CONTACT
            </button>
          </div>
        </div>
      )}
    </>
  );
}
