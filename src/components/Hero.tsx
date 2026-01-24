// Importamos el ícono de flecha hacia abajo de la librería Lucide React
import { ArrowDown } from 'lucide-react';

/**
 * Componente Hero - Sección principal del Portafolio
 * Esta es la primera sección que ve el usuario al cargar la página
 * Incluye animaciones CSS personalizadas para el nombre
 */
export default function Hero() {
  return (
    /* 
     * Sección principal que ocupa toda la altura de la pantalla
     * - min-h-screen: altura mínima de 100vh
     * - flex: contenedor flexbox para centrar contenido
     * - padding responsivo: px-6 (móvil) hasta lg:px-24 (desktop)
     * - bg-white/dark:bg-gray-900: colores adaptativos al tema
     * - transition-colors: transición suave entre temas
     */
    <section className="min-h-screen flex flex-col justify-center items-start px-6 md:px-12 lg:px-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Contenedor principal con ancho máximo para no extenderse demasiado */}
      <div className="max-w-4xl">
        {/* Cabecera con título profesional y nombre */}
        <div className="mb-8 space-y-2">
          {/* Subtítulo/profesión */}
          <p className="text-sm md:text-base font-mono text-gray-500 dark:text-gray-400 tracking-wider">
            Desarrollador 
            <span className="text-black dark:text-white font-semibold"> Full Stack</span>,
            Junior
          </p>
          {/* 
           * Nombre principal con animaciones personalizadas
           * - Tamaños responsivos: text-4xl (móvil) hasta lg:text-7xl (desktop)
           * - font-mono: fuente monoespaciada para efecto técnico
           * - Animaciones CSS personalizadas:
           *   * code-underline: subrayado animado para primer nombre
           *   * code-underline-delayed: subrayado con retraso para apellido
           *   * code-highlight: efecto de resaltado de fondo
           *   * blinking-cursor: cursor parpadeante tipo terminal
           */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold text-black dark:text-white leading-tight transition-colors duration-300">
            <span className="code-underline code-highlight">James Leonardo</span><br />
            <span className="code-underline-delayed code-highlight">Martínez Castañeda</span>
            <span className="blinking-cursor"></span>
          </h1>
        </div>

        {/* Sección de descripción personal y profesional */}
        <div className="space-y-6 max-w-2xl">
          {/* 
           * Párrafo principal con descripción profesional
           * - leading-relaxed: espaciado de línea cómodo para lectura
           * - Palabras clave resaltadas con spans que cambian color según el tema
           */}
          <p className="text-base md:text-lg font-mono text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
            Soy Desarrollador FullStack Junior con experiencia en
            <span className="text-black dark:text-white font-semibold"> Angular</span>,
            <span className="text-black dark:text-white font-semibold"> Django-Rest-Framework</span> y
            <span className="text-black dark:text-white font-semibold"> TypeScript</span>. Busco crecer en equipos ágiles desarrollando soluciones de back y front.
          </p>


          <p className="text-sm md:text-base font-mono text-gray-600 dark:text-gray-400 transition-colors duration-300">
            El desarrollo de software también puede ser un arte técnico,
            combinando estructura, lógica y estética.
          </p>
        </div>

        {/* 
         * Indicador de scroll con animación
         * - mt-16: margen superior grande para separación
         * - animate-bounce: animación CSS nativa de Tailwind
         * - Combina ícono y texto para invitar a explorar más contenido
         */}
        <div className="mt-16 flex items-center gap-3 text-gray-400 dark:text-gray-500 animate-bounce transition-colors duration-300">
          <ArrowDown className="w-5 h-5" />
          <span className="text-xs font-mono tracking-wider">EXPLORAR</span>
        </div>
      </div>
    </section>
  );
}
