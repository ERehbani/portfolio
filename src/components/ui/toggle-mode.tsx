import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('dark');

  // Función para aplicar el tema
  const applyTheme = (newTheme: string) => {
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
      return localStorage.getItem('theme');
    }
    // Siempre retornar 'dark' como tema por defecto
    return 'dark';
  };

  // Efecto para aplicar tema inicial inmediatamente
  useEffect(() => {
    const initialTheme = getInitialTheme();
    applyTheme(initialTheme || 'dark');
  }, []);

  // Manejar click del botón
  const handleToggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-200">
      <button
        onClick={handleToggle}
        className="p-2 w-fit rounded-lg border border-[#3e3e3e] dark:bg-[#3e3e3e] text-[#3e3e3e] dark:text-gray-200 dark:hover:bg-[#1e1e1e] hover:bg-[#1e1e1e] hover:[&_svg]:text-white transition-colors duration-200 absolute top-2 right-2"
        aria-label="Toggle theme"
      >
        {/* Icono de luna (para modo oscuro) */}
        <svg 
          className={`w-5 h-5 ${theme === 'dark' ? 'hidden' : 'block'}`} 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
        
        {/* Icono de sol (para modo claro) */}
        <svg 
          className={`w-5 h-5 ${theme === 'light' ? 'hidden' : 'block'}`} 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path 
            fillRule="evenodd" 
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" 
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default ThemeToggle;