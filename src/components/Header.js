import { useEffect, useState } from "react";

const Header = () => {
  const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const [theme, setTheme] = useState(
    () => JSON.parse(localStorage.getItem("quizzical-theme")) || null
  );

  useEffect(() => {
    if (darkModeQuery && theme === null) {
      setTheme("dark-mode");
    }
    document.body.classList.remove("null", "light-mode", "dark-mode");
    document.body.classList.add(`${theme}`);
  }, [theme, darkModeQuery]);

  const themeToggle = () => {
    if (theme === null || theme === "light-mode") {
      setTheme("dark-mode");
      localStorage.setItem("quizzical-theme", JSON.stringify("dark-mode"));
    } else if (theme === "dark-mode") {
      setTheme("light-mode");
      localStorage.setItem("quizzical-theme", JSON.stringify("light-mode"));
    }
  };

  return (
    <header>
      <span className="theme-toggle" onClick={themeToggle}>
        {theme === "dark-mode" ? "light mode" : "dark mode"}
      </span>
    </header>
  );
};

export default Header;
