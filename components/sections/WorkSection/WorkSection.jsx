import { useRef, useEffect } from "react";
import { Card } from "@/components/ui";
// import { useGSAP } from "store/GSAP-context";

import styles from "./WorkSection.module.css";

export default function WorkSection() {
  const workRef = useRef(null);
  const WORK = [
    {
      title: "Portfolio",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, quidem? Expedita, natus. Ad, voluptatibus tenetur.",
      // image: IMG_PATH,
      githubLink: "",
      liveLink: "",
    },
    {
      title: "Vanila e-commerce application",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, quidem? Expedita, natus. Ad, voluptatibus tenetur.",
      // image: IMG_PATH,
      githubLink: "",
      liveLink: "",
    },
    {
      title: "Apollo Quay Resort",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, quidem? Expedita, natus. Ad, voluptatibus tenetur.",
      // image: IMG_PATH,
      githubLink: "",
      liveLink: "",
    },
  ];
  const renderWork = WORK.map(
    ({ title, description, githubLink, liveLink }, key) => (
      <Card
        key={key}
        title={title}
        description={description}
        githubLink={githubLink}
        liveLink={liveLink}
      />
    )
  );

  return (
    <section id="work" className={styles.root} ref={workRef}>
      <div className={styles.workContainer}>{renderWork}</div>
    </section>
  );
}
