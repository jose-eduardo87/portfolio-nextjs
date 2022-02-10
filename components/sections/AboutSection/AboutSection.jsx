import { useRef, useEffect } from "react";
import Image from "next/image";
import { Marquee } from "@/components/ui/";
import {
  Git,
  GSAP,
  MongoDB,
  NextJS,
  NodeJS,
  Postman,
  ReactJS,
  TypeScript,
} from "@/components/icons";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedinIn,
  FaTwitterSquare,
} from "react-icons/fa";
import { PROFILE_PHOTO } from "helpers/paths";
import { useLanguage } from "store/language-context";
import { useGSAP } from "store/GSAP-context";

import styles from "./AboutSection.module.css";

export default function AboutSection() {
  const aboutRef = useRef(null);
  const { isEnglish } = useLanguage();
  const { register, utils, fromTo } = useGSAP();
  const { selector } = utils();
  const queryAbout = selector(aboutRef);
  const iconStyles = {
    width: "150px",
    height: "150px",
  };
  const renderTechStack = [
    <Git key="Git Icon" alt="Git Icon" {...iconStyles} />,
    <GSAP key="GSAP Icon" alt="GSAP Icon" {...iconStyles} />,
    <MongoDB key="MongoDB Icon" alt="MongoDB Icon" {...iconStyles} />,
    <NextJS key="NextJS Icon" alt="NextJS Icon" {...iconStyles} />,
    <NodeJS key="NodeJS Icon" alt="NodeJS Icon" {...iconStyles} />,
    <Postman key="Postman Icon" alt="Postman Icon" {...iconStyles} />,
    <ReactJS key="ReactJS Icon" alt="ReactJS Icon" {...iconStyles} />,
    <TypeScript key="TypeScript Icon" alt="TypeScript Icon" {...iconStyles} />,
  ].map((icon, i) => (
    <div
      style={{
        display: "inline-block",
        marginRight: "1rem",
      }}
      key={i}
    >
      {icon}
    </div>
  ));
  const renderHeading = isEnglish ? (
    <h2>Technologies I am currently working with:</h2>
  ) : (
    <h2>Tecnologias que trabalho atualmente:</h2>
  );

  register();

  useEffect(() => {
    fromTo(queryAbout(".picSelector"), { y: -50 }, { y: 0, duration: 10 });
  }, [fromTo, queryAbout]);

  useEffect(() => {
    Array.from({ length: 4 }).map((_, index) => {
      fromTo(
        queryAbout(`.iconSelector-${index}`),
        { opacity: 0, transform: "scale(0.2)" },
        { opacity: 1, transform: "scale(1)", delay: index * 1 }
      );
    });
  }, [fromTo, queryAbout]);

  return (
    <section id="about" className={styles.root} ref={aboutRef}>
      <div className={styles.mainPanel}>
        <div className={styles.profile}>
          <div className={`picSelector ${styles.photo}`}>
            <Image
              alt="Profile image"
              src={PROFILE_PHOTO}
              width={400}
              height={300}
              layout="responsive"
              quality={80}
            />
          </div>
          <div className={styles.social}>
            <a
              target="_blank"
              href="https://www.facebook.com/eduduu/"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare
                className={`iconSelector-0 ${styles.icon} ${styles.facebookIcon}`}
              />
            </a>
            <a
              target="_blank"
              href="https://github.com/jose-eduardo87"
              rel="noopener noreferrer"
            >
              <FaGithubSquare
                className={`iconSelector-1 ${styles.icon} ${styles.githubIcon}`}
              />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn
                className={`iconSelector-2 ${styles.icon} ${styles.linkedInIcon}`}
              />
            </a>
            <a
              target="_blank"
              href="https://twitter.com/Eduardod_Araujo"
              rel="noopener noreferrer"
            >
              <FaTwitterSquare
                className={`iconSelector-3 ${styles.icon} ${styles.twitterIcon}`}
              />
            </a>
          </div>
        </div>
        <div className={styles.aboutInfo}>
          <h1>Lorem ipsum dolor sit amet.</h1>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde odit
            saepe deserunt atque obcaecati voluptatum, quasi consequuntur sit
            porro neque reprehenderit laboriosam animi quas impedit.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde odit
            saepe deserunt atque obcaecati voluptatum, quasi consequuntur sit
            porro neque reprehenderit laboriosam animi quas impedit.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde odit
            saepe deserunt atque obcaecati voluptatum, quasi consequuntur sit
            porro neque reprehenderit laboriosam animi quas impedit.
          </p>
        </div>
      </div>
      {renderHeading}
      <Marquee>{renderTechStack}</Marquee>
    </section>
  );
}
