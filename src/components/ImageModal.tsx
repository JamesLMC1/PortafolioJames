import { useEffect } from 'react';

type Props = {
  src: string | null;
  onClose: () => void;
};

export default function ImageModal({ src, onClose }: Props) {
  useEffect(() => {
    if (!src) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [src, onClose]);

  if (!src) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="relative max-w-[95%] max-h-[95%]">
        <div className="absolute top-2 right-2 flex gap-2 z-10">
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 text-sm rounded-md shadow-sm text-black dark:text-white"
          >
            Abrir
          </a>
          <button
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 text-sm rounded-md shadow-sm text-black dark:text-white"
            aria-label="Cerrar imagen"
          >
            Cerrar
          </button>
        </div>

        <img
          src={src}
          alt="Enlarged"
          onClick={(e) => e.stopPropagation()}
          className="w-auto h-auto max-w-full max-h-[90vh] rounded-md shadow-2xl"
        />
      </div>
    </div>
  );
}
