import { useEffect } from "react";
import { useContext } from "react";
import { createContext, useState } from "react";

export const DarkModecontext = createContext();

//provider
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    // setDarkMode((prev) => !prev);
    // updateDarkMode((prev) => !prev);
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  };

  useEffect(() => {
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark);
    updateDarkMode(isDark);
  }, []);
  return (
    <DarkModecontext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModecontext.Provider>
  );
}

export const useDarkMode = () => useContext(DarkModecontext);

function updateDarkMode(darkMode) {
  if (darkMode) {
    //dark라는 클래스를 넣어주기
    document.documentElement.classList.add("dark");
  } else {
    //dark라는 클래스 빼주기
    document.documentElement.classList.remove("dark");
  }
}
