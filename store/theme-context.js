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
    document.body.style.transition = ".5s background-color";

    const LIGHT_BG = [
      "#E6BEAE",
      "#EFE9AE",
      "#D6E2E9",
      "#FDE2E4",
      "#DAB6FC",
      "#FDC5F5",
    ];
    const DARK_BG = [
      "#161B33",
      "#00296B",
      "#3C096C",
      "#212529",
      "#14213D",
      "#012A4A",
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
