import { useLanguage } from "store/language-context";

import styles from "./Footer.module.css";

export default function Footer() {
  const { isEnglish } = useLanguage();
  return (
    <footer className={styles.root}>
      <p>
        {new Date().getFullYear()}.{" "}
        {isEnglish
          ? "Made with NextJS. All rights reserved."
          : "Feito com NextJS. Todos os direitos reservados."}
      </p>
    </footer>
  );
}
