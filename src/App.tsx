import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import LoadingAnimation from './components/LoadingAnimation';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TechnicalSkills from './components/TechnicalSkills';
import Footer from './components/Footer';
import Experiences from './components/Experiences';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Pequeño delay para la transición suave
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  return (
    <ThemeProvider>
      {/* Animación de carga inicial */}
      {isLoading && <LoadingAnimation onComplete={handleLoadingComplete} />}
      
      {/* Contenido principal del portfolio */}
      <div className={`min-h-screen bg-white dark:bg-gray-900 transition-all duration-500 relative ${
        showContent ? 'opacity-100' : 'opacity-0'
      }`} style={{ zIndex: 10 }}>
        <Navigation />
        <div id="hero">
          <Hero />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="skills">
          <TechnicalSkills />
        </div>
        <div id="experiences">
          <Experiences />
        </div>
        <div id="contact">
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
