import { SunIcon, MoonIcon } from "../icons/ToggleThemeIcons";

const ThemeToggle = () => {
  return (
    <button className="theme-toggle" data-theme-toggle title="Change theme" aria-label="Change theme">
      <SunIcon />

      <MoonIcon />
    </button>
  );
};

export default ThemeToggle;
