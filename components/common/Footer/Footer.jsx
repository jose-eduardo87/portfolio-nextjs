import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.root}>
      <p>{new Date().getFullYear()}. Made with NextJS. All rights reserved.</p>
    </footer>
  );
}
