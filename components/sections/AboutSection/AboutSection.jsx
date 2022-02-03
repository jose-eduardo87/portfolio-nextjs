import { useRef, useEffect } from "react";
import { useGSAP } from "store/GSAP-context";
import { setActive } from "helpers/functions";

import styles from "./AboutSection.module.css";

export default function AboutSection() {
  const aboutRef = useRef(null);
  const { links, from } = useGSAP();

  useEffect(() => {
    if (links.length > 0) {
      from(aboutRef.current, {
        scrollTrigger: {
          trigger: aboutRef.current,
          scrub: true,
          start: "top bottom",
          end: "top top",
          onEnter: () => setActive(links, 0),
          onEnterBack: () => setActive(links, 0),
        },
        scaleX: 0,
        transformOrigin: "left center",
        ease: "none",
      });
    }
  }, [links, from]);

  return (
    <section id="about" className={styles.root} ref={aboutRef}>
      ABOUT SECTION
    </section>
  );
}
