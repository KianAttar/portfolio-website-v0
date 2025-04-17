import { useEffect, useState } from "react";

const useTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    const selectedTheme = localStorage.getItem('selected-theme');
    if (selectedTheme === "dark") {
      setIsDarkTheme(true);
    }
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      document.body.classList[isDarkTheme ? "add" : "remove"]("dark-theme");
    }
  }, [isDarkTheme, isMounted]);

  const toggleTheme = () => {
    const newTheme = isDarkTheme ? "light" : "dark";
    localStorage.setItem('selected-theme', newTheme);
    setIsDarkTheme(!isDarkTheme);
  };

  return {
    isDarkTheme,
    toggleTheme,
    isMounted,
  };
};

export default useTheme;
