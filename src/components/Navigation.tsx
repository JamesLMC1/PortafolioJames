import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200'
            : 'bg-transparent'
        }`}
      >
        <div className="px-6 md:px-12 lg:px-24 py-4 flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-lg md:text-xl font-mono font-bold text-black hover:text-gray-600 transition-colors"
          >
            JLMC
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-black"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('projects')}
              className="text-sm font-mono text-gray-700 hover:text-black transition-colors tracking-wider"
            >
              PROJECTS
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-sm font-mono text-gray-700 hover:text-black transition-colors tracking-wider"
            >
              STACK
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-mono text-gray-700 hover:text-black transition-colors tracking-wider"
            >
              CONTACT
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <button
              onClick={() => scrollToSection('projects')}
              className="text-2xl font-mono text-black hover:text-gray-600 transition-colors tracking-wider"
            >
              PROJECTS
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-2xl font-mono text-black hover:text-gray-600 transition-colors tracking-wider"
            >
              STACK
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-2xl font-mono text-black hover:text-gray-600 transition-colors tracking-wider"
            >
              CONTACT
            </button>
          </div>
        </div>
      )}
    </>
  );
}
