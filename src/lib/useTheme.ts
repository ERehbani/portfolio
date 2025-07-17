import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const applyTheme = (newTheme: 'dark' | 'light') => {
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    setTheme(newTheme);
  };

  const getInitialTheme = () => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme') as 'dark' | 'light';
    }
    return 'dark';
  };
  

  useEffect(() => {
    const initialTheme = getInitialTheme();
    applyTheme(initialTheme || 'dark');

  }, []);


  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return { theme, toggleTheme };
} 