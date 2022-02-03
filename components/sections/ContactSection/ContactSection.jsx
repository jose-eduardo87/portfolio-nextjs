import { useRef, useEffect } from "react";
import { useGSAP } from "store/GSAP-context";
import { setActive } from "helpers/functions";

import styles from "./ContactSection.module.css";

export default function ContactSection() {
  const contactRef = useRef(null);
  const { links, from } = useGSAP();

  useEffect(() => {
    if (links.length > 0) {
      from(contactRef.current, {
        scrollTrigger: {
          trigger: contactRef.current,
          scrub: true,
          pin: true,
          start: "top top",
          end: "+=100%",
          onEnter: () => setActive(links, 1),
          onEnterBack: () => setActive(links, 1),
        },
        scaleX: 0,
        transformOrigin: "left center",
        ease: "none",
      });
    }
  }, [links, from]);

  return (
    <section id="contact" className={styles.root} ref={contactRef}>
      CONTACT SECTION
    </section>
  );
}
