/** 
 * Configuración de Tailwind CSS
 * Framework de CSS utilitario que proporciona clases predefinidas
 * @type {import('tailwindcss').Config} 
 */
export default {
  // Archivos donde Tailwind debe buscar clases para incluir en el CSS final
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  
  // Configuración del modo oscuro
  // 'class' significa que se activa/desactiva mediante una clase CSS en el elemento raíz
  // Alternativa sería 'media' que seguiría la preferencia del sistema automáticamente
  darkMode: 'class',
  
  // Tema personalizado
  theme: {
    // Extensiones al tema base de Tailwind
    // Aquí podríamos agregar colores, fuentes, espaciados personalizados
    extend: {
      // Por el momento usamos el tema base sin modificaciones
    },
  },
  
  // Plugins adicionales de Tailwind
  // Podrían incluirse plugins para formularios, tipografía, etc.
  plugins: [],
};
