import styles from "./Button.module.css";

export default function Button({ children, onClick, ...styles }) {
  return (
    <button className={styles.root} style={{ ...styles }} onClick={onClick}>
      {children}
    </button>
  );
}
