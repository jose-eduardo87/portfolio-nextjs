import { createContext, useContext, useState, useCallback } from "react";

const LanguageContext = createContext({
  isEnglish: true,
  setIsEnglish: (boolean) => {},
  toggleLanguage: () => {},
});

export default function LanguageProvider({ children }) {
  const [isEnglish, setIsEnglish] = useState(true);
  const toggleLanguage = useCallback(
    () => setIsEnglish((currentState) => !currentState),
    []
  );

  return (
    <LanguageContext.Provider
      value={{ isEnglish, setIsEnglish, toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
