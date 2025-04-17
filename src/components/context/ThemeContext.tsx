import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface ThemeContextProps {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    // Check if the user has previously selected a theme
    const selectedTheme = localStorage.getItem("selected-theme");

    // If the user has selected "dark", apply it
    if (selectedTheme === "dark") {
      setIsDarkTheme(true);
    }

    // Mark as mounted to handle theme changes
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      document.body.classList[isDarkTheme ? "add" : "remove"]("dark-theme");
    }
  }, [isDarkTheme, isMounted]);

  const toggleTheme = () => {
    const newTheme = isDarkTheme ? "light" : "dark";
    localStorage.setItem("selected-theme", newTheme);
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
