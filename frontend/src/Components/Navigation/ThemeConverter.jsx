import React, { useEffect, useState } from 'react';
import { FaMoon } from 'react-icons/fa';
import { BsSunFill } from 'react-icons/bs';

const ThemeConverter = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(mql.matches ? "dark" : "light");
    mql.addEventListener("change", () => {
      setTheme(mql.matches ? "dark" : "light");
    });
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div>
      <button
        onClick={handleThemeSwitch}
        className="py-1 px-4 rounded-full font-bold bg-primary text-white"
      >
        {theme === 'dark' ? <FaMoon /> : <BsSunFill />}
      </button>
    </div>
  );
};

export default ThemeConverter;
