export const SunIcon = ({ fill = "currentColor", ...props }) => {
  return (
    <svg
      className="theme-toggle__icon theme-toggle__icon--sun"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill={fill}
      {...props}
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
    </svg>
  );
};

export const MoonIcon = ({ fill = "currentColor", ...props }) => {
  return (
    <svg
      className="theme-toggle__icon theme-toggle__icon--moon"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill={fill}
      {...props}
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
    </svg>
  );
};
