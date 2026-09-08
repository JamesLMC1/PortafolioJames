import { useRef, ReactNode, MouseEvent } from 'react';

interface Tilt3DProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
}

/**
 * Tilt3D - Envuelve contenido con un efecto 3D que reacciona al cursor.
 * La tarjeta rota sutilmente en X e Y siguiendo la posición del mouse,
 * y un brillo especular se desplaza sobre la superficie.
 */
export default function Tilt3D({ children, className = '', maxTilt = 8 }: Tilt3DProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    const rotateY = (px - 0.5) * maxTilt * 2;
    const rotateX = (0.5 - py) * maxTilt * 2;

    el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    el.style.setProperty('--gx', `${px * 100}%`);
    el.style.setProperty('--gy', `${py * 100}%`);
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div className={`perspective-3d ${className}`}>
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="tilt-3d relative h-full"
      >
        {children}
        <div className="glare" aria-hidden="true" />
      </div>
    </div>
  );
}
