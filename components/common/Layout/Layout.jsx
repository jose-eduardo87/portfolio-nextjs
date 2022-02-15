import { Navbar, Footer } from "@/components/common";
import { Burger } from "@/components/Burger";
import LanguageProvider from "store/language-context";
import ThemeWrapper from "store/theme-context";

import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.layoutContainer}>
      <LanguageProvider>
        <ThemeWrapper>
          <div className={styles.burgerWrapper}>
            <Burger />
          </div>
          <div className={styles.navbarWrapper}>
            <Navbar />
          </div>
          {children}
          <Footer />
        </ThemeWrapper>
      </LanguageProvider>
    </div>
  );
}
