// Importamos React Context API y hooks necesarios
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Definimos los tipos de tema disponibles
type Theme = 'light' | 'dark';

// Interface que define qué expone nuestro contexto de tema
interface ThemeContextType {
  theme: Theme; // El tema actual
  toggleTheme: () => void; // Función para alternar entre temas
}

// Creamos el contexto de React para el tema
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Hook personalizado para usar el contexto de tema
 * Valida que se use dentro de un ThemeProvider
 * @returns {ThemeContextType} El contexto del tema con estado y funciones
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Props para el componente ThemeProvider
interface ThemeProviderProps {
  children: ReactNode;
}

/**
 * ThemeProvider - Proveedor de contexto para manejar temas
 * Maneja la persistencia en localStorage y detección automática del tema del sistema
 */
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // Estado del tema con inicialización inteligente
  const [theme, setTheme] = useState<Theme>(() => {
    // Verificar si hay una preferencia guardada en localStorage
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('portfolio-theme') as Theme;
      if (savedTheme) {
        return savedTheme;
      }
      // Si no hay preferencia guardada, usar la preferencia del sistema
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('portfolio-theme', newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    const root = window.document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};