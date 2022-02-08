import { useState, useEffect, createContext, useContext } from "react";

const ThemeContext = createContext({
  isDark: false,
  currentBGHex: "",
  toggleMode: () => {},
});

export default function ThemeWrapper({ children }) {
  const [isDark, setIsDark] = useState(true);
  const [currentBGHex, setCurrentBGHex] = useState("");
  const toggleMode = () => setIsDark((currentState) => !currentState);

  useEffect(() => {
    const LIGHT_BG = [
      "#ACDDDE",
      "#CAF1DE",
      "#E1F8DC",
      "#FEF8DD",
      "#FFE7C7",
      "#F7D8BA",
    ];
    const DARK_BG = [
      "#022465",
      "#011A4B",
      "#000A32",
      "#161616",
      "#400000",
      "#55417B",
    ];
    if (isDark) {
      setCurrentBGHex(
        DARK_BG[Math.round(Math.random() * (DARK_BG.length - 1))]
      );

      document.body.style.backgroundColor = currentBGHex;
      document.body.style.color = "#FFFFFF";

      return;
    }
    setCurrentBGHex(
      LIGHT_BG[Math.round(Math.random() * (LIGHT_BG.length - 1))]
    );

    document.body.style.backgroundColor = currentBGHex;
    document.body.style.color = "#000000";
  }, [isDark, currentBGHex]);

  return (
    <ThemeContext.Provider value={{ isDark, currentBGHex, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
