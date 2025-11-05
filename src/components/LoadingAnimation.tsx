import { useEffect, useState } from 'react';

interface LoadingAnimationProps {
  onComplete?: () => void;
  speed?: number; // ms por carácter
}

export default function LoadingAnimation({ onComplete, speed = 70 }: LoadingAnimationProps) {
  const lines = ['Portafolio de:', 'James Leonardo Martínez Castañeda'];
  const [visible, setVisible] = useState(true);
  const [displayed, setDisplayed] = useState<string[]>(lines.map(() => ''));

  useEffect(() => {
    let mounted = true;

    (async () => {
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
      await new Promise(r => setTimeout(r, 600));
      if (!mounted) return;
      setVisible(false);
      setTimeout(() => {
        onComplete && onComplete();
      }, 300);
    })();

    return () => {
      mounted = false;
    };
  }, [onComplete, speed]);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } bg-white dark:bg-gray-900`}
    >
      <div className="text-center px-6">
        <div className="w-20 h-0.5 bg-black dark:bg-white mx-auto mb-6 opacity-40"></div>
        {displayed.map((line, idx) => (
          <p
            key={idx}
            className="text-2xl md:text-4xl font-mono font-bold text-black dark:text-white leading-tight"
          >
            {line}
            <span className="inline-block w-1 h-6 align-middle bg-current ml-1 animate-pulse" />
          </p>
        ))}
        <div className="w-20 h-0.5 bg-black dark:bg-white mx-auto mt-6 opacity-40"></div>
      </div>
    </div>
  );
}