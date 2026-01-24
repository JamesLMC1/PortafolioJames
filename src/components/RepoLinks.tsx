import { SiGithub } from 'react-icons/si';
import { ExternalLink } from 'lucide-react';

type Props = {
  repoFront?: string | null;
  repoBack?: string | null;
  link?: string | null;
};

export default function RepoLinks({ repoFront, repoBack, link }: Props) {
  const front = repoFront?.trim();
  const back = repoBack?.trim();

  return (
    <nav aria-label="Repositorios" className="flex flex-col md:flex-row items-start md:items-center gap-2">
      {front && (
        <a
          href={front}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Repositorio front"
          className="group flex items-center gap-2 text-black dark:text-white hover:opacity-90 transition transform hover:scale-105"
        >
          <SiGithub className="w-5 h-5" />
          <span className="hidden md:inline text-xs font-mono">Front</span>
          <span className="sr-only">Repositorio front</span>
        </a>
      )}

      {back && (
        <a
          href={back}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Repositorio back"
          className="group flex items-center gap-2 text-black dark:text-white hover:opacity-90 transition transform hover:scale-105"
        >
          <SiGithub className="w-5 h-5" />
          <span className="hidden md:inline text-xs font-mono">Back</span>
          <span className="sr-only">Repositorio back</span>
        </a>
      )}

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Enlace del proyecto"
          className="group flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:opacity-90 transition transform hover:scale-105"
        >
          <ExternalLink className="w-4 h-4" />
          <span className="hidden md:inline text-xs font-mono">Visitar</span>
          <span className="sr-only">Enlace del proyecto</span>
        </a>
      )}
    </nav>
  );
}
