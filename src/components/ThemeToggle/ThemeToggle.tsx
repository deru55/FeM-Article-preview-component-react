import { useState, useEffect } from "react";

import { SunIcon, MoonIcon } from "../icons/ToggleThemeIcons";

import "./ThemToggle.css";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme === "dark";
    } else {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  });

  useEffect(() => {
    const html = document.documentElement;
    const theme = isDark ? "dark" : "light";

    html.style.colorScheme = theme;
    localStorage.setItem("theme", theme);
  }, [isDark]);

  return (
    <button
      className="theme-toggle"
      data-theme-toggle
      onClick={() => setIsDark((prev) => !prev)}
      title={isDark ? `Change to light mode` : `Change to dark mode`}
      aria-label={isDark ? `Change to light mode` : `Change to dark mode`}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default ThemeToggle;
