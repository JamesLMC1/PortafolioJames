import { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface LoadingAnimationProps {
  onComplete?: () => void;
  speed?: number; // ms por carácter
}

/**
 * LoadingAnimation - Componente de carga con animación de texto
 * Animación de texto tipo máquina de escribir elegante
 * Se adapta automáticamente al tema claro/oscuro del Portafolio
 */
export default function LoadingAnimation({ onComplete, speed = 70 }: LoadingAnimationProps) {
  const lines = ['Portafolio de:', 'James Leonardo Martínez Castañeda'];
  const [visible, setVisible] = useState(true);
  const [displayed, setDisplayed] = useState<string[]>(lines.map(() => ''));
  const { theme } = useTheme();

  // Efecto de animación de texto tipo máquina de escribir
  useEffect(() => {
    let mounted = true;

    (async () => {
      // Pequeño delay inicial
      await new Promise(r => setTimeout(r, 800));
      
      for (let li = 0; li < lines.length && mounted; li++) {
        const line = lines[li];
        for (let i = 1; i <= line.length && mounted; i++) {
          setDisplayed(prev => {
            const copy = [...prev];
            copy[li] = line.slice(0, i);
            return copy;
          });
          await new Promise(r => setTimeout(r, speed));
        }
        // pequeña pausa entre líneas
        await new Promise(r => setTimeout(r, 250));
      }

      // pausa final antes de ocultar
      await new Promise(r => setTimeout(r, 1200));
      if (!mounted) return;
      setVisible(false);
      setTimeout(() => {
        onComplete && onComplete();
      }, 500);
    })();

    return () => {
      mounted = false;
    };
  }, [onComplete, speed]);



  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-0 z-50 transition-all duration-500 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Fondo con gradiente sutil */}
      <div className={`absolute inset-0 ${
        theme === 'light' 
          ? 'bg-gradient-to-br from-gray-50 to-white' 
          : 'bg-gradient-to-br from-gray-900 to-black'
      }`} />
      
      {/* Contenido de texto superpuesto */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center px-6">
          {/* Línea decorativa superior */}
          <div className={`w-20 h-0.5 mx-auto mb-8 opacity-60 ${
            theme === 'light' ? 'bg-black' : 'bg-white'
          }`}></div>
          
          {/* Texto animado */}
          {displayed.map((line, idx) => (
            <div key={idx} className="mb-2">
              <p className={`text-2xl md:text-4xl lg:text-5xl font-mono font-bold leading-tight ${
                theme === 'light' ? 'text-black' : 'text-white'
              }`}>
                {line}
                {/* Cursor parpadeante */}
                {idx === displayed.length - 1 && (
                  <span className={`inline-block w-1 h-8 md:h-10 lg:h-12 align-middle ml-2 animate-pulse ${
                    theme === 'light' ? 'bg-black' : 'bg-white'
                  }`} />
                )}
              </p>
            </div>
          ))}
          
          {/* Línea decorativa inferior */}
          <div className={`w-20 h-0.5 mx-auto mt-8 opacity-60 ${
            theme === 'light' ? 'bg-black' : 'bg-white'
          }`}></div>
          

        </div>
      </div>
    </div>
  );
}