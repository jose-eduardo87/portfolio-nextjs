import Image from "next/image";
import { FaGithubSquare } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";

import styles from "./Card.module.css";

export default function Card({
  title,
  description,
  image,
  githubLink,
  liveLink,
}) {
  return (
    <div className={`cardSelector ${styles.root}`}>
      <div className={styles.topRow}>
        <div className={styles.projectImage}>
          <Image
            alt={`${title} print screen image`}
            src={image}
            width={450}
            height={350}
          />
        </div>
        <div className={styles.presentationGroup}>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
        </div>
      </div>
      <div className={styles.bottomRow}>
        {githubLink && (
          <a target="_blank" rel="noopener noreferrer" href={githubLink}>
            <FaGithubSquare className={`${styles.icon} ${styles.githubIcon}`} />
          </a>
        )}
        {liveLink && (
          <a target="_blank" rel="noopener noreferrer" href={liveLink}>
            <BiWorld className={`${styles.icon} ${styles.liveIcon}`} />
          </a>
        )}
      </div>
    </div>
  );
}
