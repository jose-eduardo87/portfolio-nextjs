import { createContext, useContext, useState } from "react";

const LanguageContext = createContext({
  isEnglish: true,
  toggleLanguage: () => {},
});

export default function LanguageProvider({ children }) {
  const [isEnglish, setIsEnglish] = useState(true);
  const toggleLanguage = () => setIsEnglish((currentState) => !currentState);

  return (
    <LanguageContext.Provider value={{ isEnglish, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
