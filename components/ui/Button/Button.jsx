import styles from "./Button.module.css";

export default function Button({ children, ...styles }) {
  return (
    <button className={styles.root} style={{ ...styles }}>
      {children}
    </button>
  );
}
