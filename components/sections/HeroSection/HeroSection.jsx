import { useRef, useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { Typewriter } from "react-simple-typewriter";
import { HERO_VIDEO } from "helpers/paths";
import { useLanguage } from "store/language-context";

import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const sectionRef = useRef(null);
  const { isEnglish } = useLanguage();
  const queryHero = gsap.utils.selector(sectionRef);
  const renderHeading = isEnglish ? (
    <h1 className="headingHero">
      Hello there. <br />
      My name is Eduardo.
    </h1>
  ) : (
    <h1 className="headingHero">
      Olá. <br />
      Meu nome é Eduardo.
    </h1>
  );
  const WORDS = isEnglish
    ? ["amazing websites.", "efficient applications.", "thoughts into code."]
    : ["websites incríveis.", "aplicações eficientes.", "ideias em códigos."];

  useEffect(() => {
    gsap.fromTo(
      queryHero(".headingHero"),
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 3 }
    );
  }, [queryHero]);

  useEffect(() => {
    gsap.fromTo(
      queryHero(".paragraph"),
      { opacity: 0, y: -15 },
      { opacity: 1, y: 0, duration: 1, delay: 2 }
    );
  }, [queryHero]);

  return (
    <section className={styles.root} ref={sectionRef}>
      <video id={styles.backgroundVideo} autoPlay loop muted>
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>
      <div className={styles.heroContent}>
        {renderHeading}
        <p className="paragraph">
          {isEnglish ? "I develop" : "Eu desenvolvo"}{" "}
          <span>
            <Typewriter
              words={WORDS}
              loop={false}
              cursor
              cursorStyle={"I"}
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
