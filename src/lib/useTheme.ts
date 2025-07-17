import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Función para aplicar el tema
  const applyTheme = (newTheme: 'dark' | 'light') => {
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    setTheme(newTheme);
  };

  // Obtener tema inicial (por defecto dark)
  const getInitialTheme = () => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme') as 'dark' | 'light';
    }
    return 'dark';
  };
  
  // Efecto para aplicar tema inicial inmediatamente
  useEffect(() => {
    const initialTheme = getInitialTheme();
    applyTheme(initialTheme || 'dark');
    // eslint-disable-next-line
  }, []);

  // Función para alternar el tema
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return { theme, toggleTheme };
} 