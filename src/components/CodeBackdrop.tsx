/**
 * CodeBackdrop - Fondo 3D temático de desarrollo.
 * Combina un grid en perspectiva, fragmentos de código flotantes,
 * un cubo 3D giratorio y anillos orbitales.
 */

const FRAGMENTS = [
  { text: 'const dev = () => <Code/>;', top: '18%', left: '62%', delay: '0s', size: '13px', color: 'text-blue-500' },
  { text: 'git commit -m «fix: bug»', top: '70%', left: '12%', delay: '2s', size: '12px', color: 'text-emerald-500' },
  { text: 'npm run build ✓', top: '30%', left: '8%', delay: '4s', size: '12px', color: 'text-purple-500' },
  { text: 'class Developer { code() }', top: '82%', left: '55%', delay: '1s', size: '12px', color: 'text-amber-500' },
  { text: 'def solve(): return 42', top: '12%', left: '30%', delay: '3s', size: '11px', color: 'text-rose-500' },
  { text: 'SELECT * FROM ideas;', top: '55%', left: '78%', delay: '5s', size: '11px', color: 'text-cyan-500' },
  { text: 'while(alive) { learn(); }', top: '88%', left: '28%', delay: '2.5s', size: '12px', color: 'text-indigo-500' },
  { text: 'deploy --production', top: '6%', left: '82%', delay: '1.5s', size: '11px', color: 'text-teal-500' },
];

export default function CodeBackdrop() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Grid "Matrix" en perspectiva */}
      <div className="code-grid code-grid-animate" />

      {/* Cubo 3D giratorio */}
      <div
        className="absolute top-[22%] right-[8%] opacity-25 dark:opacity-30"
        style={{ width: 120, height: 120 }}
      >
        <div
          className="cube w-full h-full text-blue-500 dark:text-blue-400"
        >
          <div className="cube-face" style={{ transform: 'translateZ(60px)' }}>{'{ }'}</div>
          <div className="cube-face" style={{ transform: 'rotateY(180deg) translateZ(60px)' }}>{'</>'}</div>
          <div className="cube-face" style={{ transform: 'rotateY(90deg) translateZ(60px)' }}>{'();'}</div>
          <div className="cube-face" style={{ transform: 'rotateY(-90deg) translateZ(60px)' }}>{'&&'}</div>
          <div className="cube-face" style={{ transform: 'rotateX(90deg) translateZ(60px)' }}>{'= >'}</div>
          <div className="cube-face" style={{ transform: 'rotateX(-90deg) translateZ(60px)' }}>{'/*' }</div>
        </div>
      </div>

      {/* Anillos orbitales 3D */}
      <div className="absolute bottom-[12%] left-[4%] w-64 h-64" style={{ transform: 'perspective(600px)' }}>
        <div className="orbit-ring w-64 h-64">
          <span className="orbit-dot" />
        </div>
        <div className="absolute inset-8 rounded-full border border-black/10 dark:border-white/10" style={{ transform: 'rotateX(70deg)' }} />
      </div>

      {/* Fragmentos de código flotantes */}
      {FRAGMENTS.map((f, i) => (
        <span
          key={i}
          className={`code-fragment ${f.color} dark:opacity-70`}
          style={{
            top: f.top,
            left: f.left,
            fontSize: f.size,
            animationDelay: f.delay,
          }}
        >
          {f.text}
        </span>
      ))}
    </div>
  );
}
