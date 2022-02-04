import { useRef, useEffect } from "react";
import { useGSAP } from "store/GSAP-context";
// import { setActive } from "helpers/functions";

import styles from "./ContactSection.module.css";

export default function ContactSection() {
  const contactRef = useRef(null);
  const { links, timeline, from, to } = useGSAP();

  // useEffect(() => {
  //   const tl = timeline({
  //     scrollTrigger: {
  //       trigger: contactRef.current,
  //       scrub: true,
  //       pin: true,
  //       start: "top top",
  //       end: "+=100%",
  //     },
  //   });

  //   tl.from(contactRef.current, {
  //     scale: 0.3,
  //     rotation: 45,
  //     autoAlpha: 0,
  //     ease: "power2",
  //   })
  //     .from(
  //       contactRef.current,
  //       { scaleX: 0, transformOrigin: "left center", ease: "none" },
  //       0
  //     )
  //     .to(contactRef.current, { backgroundColor: "#28a92b" }, 0);
  // }, [timeline]);

  return (
    <section id="contact" className={styles.root} ref={contactRef}>
      CONTACT SECTION
    </section>
  );
}
