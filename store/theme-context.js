import { useState, useEffect, createContext, useContext } from "react";

const ThemeContext = createContext({
  isDark: false,
  toggleMode: () => {},
});

export default function ThemeWrapper({ children }) {
  const [isDark, setIsDark] = useState(false);
  const toggleMode = () => setIsDark((currentState) => !currentState);

  useEffect(() => {
    if (isDark) {
      document.body.style.backgroundColor = "#000000";
      document.body.style.color = "#FFFFFF";

      return;
    }

    document.body.style.backgroundColor = "#FFFFFF";
    document.body.style.color = "#000000";
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
