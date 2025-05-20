// ---------------------- components/ThemeToggle.jsx ----------------------
import React from 'react';

const ThemeToggle = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    fetch('/api/user/theme', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ theme_preference: newTheme })
    });
    setTheme(newTheme);
  };

  return (
    <button onClick={toggleTheme} className="text-sm px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded">
      Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default ThemeToggle;
