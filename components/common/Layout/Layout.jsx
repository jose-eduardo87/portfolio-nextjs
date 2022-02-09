import { Navbar, Footer } from "@/components/common";
import LanguageProvider from "store/language-context";
import ThemeWrapper from "store/theme-context";

import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.layoutContainer}>
      <LanguageProvider>
        <ThemeWrapper>
          <Navbar />
          {children}
          <Footer />
        </ThemeWrapper>
      </LanguageProvider>
    </div>
  );
}
