import { useRef, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { HERO_VIDEO } from "helpers/paths";
import { useTheme } from "store/theme-context";
import { useGSAP } from "store/GSAP-context";

import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const sectionRef = useRef(null);
  const { isDark } = useTheme();
  const { fromTo } = useGSAP();

  useEffect(() => {
    const sectionElement = sectionRef.current;

    fromTo(
      sectionElement.querySelector(".headingHero"),
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 3 }
    );
  }, [fromTo]);

  useEffect(() => {
    const sectionElement = sectionRef.current;

    fromTo(
      sectionElement.querySelector(".paragraph"),
      { opacity: 0, y: -15 },
      { opacity: 1, y: 0, duration: 1, delay: 2 }
    );
  }, [fromTo]);

  return (
    <section className={styles.root} ref={sectionRef}>
      <video id={styles.backgroundVideo} autoPlay loop muted>
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>
      <div className={styles.heroContent}>
        <h1 className="headingHero">
          Hello there. <br />
          My name is Eduardo.
        </h1>
        <p className="paragraph">
          I develop{" "}
          <span>
            <Typewriter
              words={[
                "amazing websites.",
                "test1",
                "test2",
                "thoughts into code.",
              ]}
              loop={5}
              cursor
              cursorStyle={"l"}
              typeSpeed={90}
              deleteSpeed={70}
              delaySpeed={1000}
            />
          </span>
        </p>
      </div>
    </section>
  );
}
