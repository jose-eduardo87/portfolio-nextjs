import Image from "next/image";

import styles from "./Card.module.css";

export default function Card({ title, description, githubLink, liveLink }) {
  return (
    <div className={styles.root}>
      <div className={styles.presentationGroup}>
        <span className={styles.img}></span>
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.description}>
        <p>{description}</p>
      </div>
      <div className={styles.buttonGroup}>
        <button>github</button>
        <button>live</button>
      </div>
    </div>
  );
}
