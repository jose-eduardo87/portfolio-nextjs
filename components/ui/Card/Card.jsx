import Image from "next/image";
import { FaGithubSquare } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { PROFILE_PHOTO } from "helpers/paths";

import styles from "./Card.module.css";

export default function Card({ i, title, description, githubLink, liveLink }) {
  return (
    <div
      className={
        i % 2 === 0
          ? `cardSelector revealFromLeft ${styles.root}`
          : `cardSelector revealFromRight ${styles.root}`
      }
    >
      <div className={styles.topRow}>
        <Image alt="Test photo" src={PROFILE_PHOTO} width={400} height={300} />
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
