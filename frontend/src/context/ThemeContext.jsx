import {
  createContext,
  useEffect,
  useState,
} from "react";

const ThemeContext =
  createContext();

export const ThemeProvider = ({
  children,
}) => {
  const [darkMode, setDarkMode] =
    useState(false);

  /*
    Toggle Theme
  */

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  /*
    Apply Theme
  */

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add(
        "dark"
      );
    } else {
      document.documentElement.classList.remove(
        "dark"
      );
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;