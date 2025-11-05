import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TechnicalSkills from './components/TechnicalSkills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
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
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

export default App;
