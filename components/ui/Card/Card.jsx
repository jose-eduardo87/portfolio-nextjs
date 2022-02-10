import Image from "next/image";
import { Button } from "@/components/ui";
import { PROFILE_PHOTO } from "helpers/paths";

import styles from "./Card.module.css";

export default function Card({ title, description, githubLink, liveLink }) {
  // return (
  //   <div className={styles.root}>
  //     <div className={styles.topRow}>
  //       <div className={styles.image}></div>
  //       <div className={styles.presentationGroup}>
  //         <h1 className={styles.title}>{title}</h1>
  //         <p className={styles.description}>{description}</p>
  //       </div>
  //     </div>
  //     <div className={styles.bottomRow}>
  //       <div className={styles.buttonsGroup}>
  //         <Button>github</Button>
  //         <Button>live</Button>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className={styles.root}>
      <div className={styles.topRow}>
        <Image alt="Test photo" src={PROFILE_PHOTO} width={400} height={300} />
        <div className={styles.presentationGroup}>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
        </div>
      </div>
      <div className={styles.bottomRow}>
        <Button>github</Button>
        <Button>live</Button>
      </div>
    </div>
  );
}
