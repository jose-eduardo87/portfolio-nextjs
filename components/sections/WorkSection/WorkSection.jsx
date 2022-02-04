import { useRef, useEffect } from "react";
import { useGSAP } from "store/GSAP-context";
import { setActive } from "helpers/functions";

import styles from "./WorkSection.module.css";

export default function WorkSection() {
  const workRef = useRef(null);
  const { links, from } = useGSAP();

  // useEffect(() => {
  //   if (links.length > 0) {
  //     from(workRef.current, {
  //       scrollTrigger: {
  //         trigger: workRef.current,
  //         scrub: true,
  //         pin: true,
  //         start: "top top",
  //         end: "+=100%",
  //         onEnter: () => setActive(links, 1),
  //         onEnterBack: () => setActive(links, 1),
  //       },
  //       scaleX: 0,
  //       transformOrigin: "left center",
  //       ease: "none",
  //     });
  //   }
  // }, [links, from]);

  return (
    <section id="work" className={styles.root} ref={workRef}>
      WORK SECTION
    </section>
  );
}