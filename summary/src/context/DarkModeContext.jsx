import { createContext, useState } from "react";

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false); //다크모드인지 아닌지 상태
  const toggleDarkMode = () => setDarkMode((mode) => !mode);
  //이전모드가 true였다면 false false였다면 true
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
