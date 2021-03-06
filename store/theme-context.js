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

    const LIGHT_BG = ["#F9E7FF", "#FC9EC2", "#BFB7C6"];
    const DARK_BG = ["#000000", "#010B2F", "#1C0635"];

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
