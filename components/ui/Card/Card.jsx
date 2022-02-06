import Image from "next/image";

import styles from "./Card.module.css";

export default function Card({ children }) {
  return (
    <Image
      className={styles.img}
      src={children.src}
      alt={children.alt}
      width={150}
      height={150}
    />
  );
}
