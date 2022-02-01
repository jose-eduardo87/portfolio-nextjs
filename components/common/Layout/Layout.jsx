import { Navbar, Footer } from "@/components/common";
import ThemeWrapper from "store/theme-context";

import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.layoutContainer}>
      <ThemeWrapper>
        <Navbar />
        {children}
        <Footer />
      </ThemeWrapper>
    </div>
  );
}
