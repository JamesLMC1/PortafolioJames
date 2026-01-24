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
      <img
        src={src}
        alt="Enlarged"
        onClick={(e) => e.stopPropagation()}
        className="max-w-[95%] max-h-[95%] rounded-md shadow-2xl transform transition-transform duration-200"
      />
    </div>
  );
}
