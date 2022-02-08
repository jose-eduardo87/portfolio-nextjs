import { useRef, useEffect } from "react";
import Image from "next/image";
import { Card, Marquee } from "@/components/ui/";
import {
  MongoDB,
  NextJS,
  NodeJS,
  Postman,
  ReactJS,
  TechGuru,
  TypeScript,
} from "@/components/icons";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedinIn,
  FaTwitterSquare,
} from "react-icons/fa";
import { PROFILE_PHOTO } from "helpers/paths";
import { useGSAP } from "store/GSAP-context";
import { useTheme } from "store/theme-context";

import styles from "./AboutSection.module.css";

export default function AboutSection() {
  const aboutRef = useRef(null);
  const { isDark } = useTheme();
  const iconStyles = {
    width: "150px",
    height: "150px",
  };
  const renderTechStack = [
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

  return (
    <section id="about" className={styles.root} ref={aboutRef}>
      <div className={styles.mainPanel}>
        <div className={styles.profile}>
          <div className={styles.photo}>
            <Image
              alt="Profile image"
              src={PROFILE_PHOTO}
              width={250}
              height={250}
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
              <FaFacebookSquare className={styles.icon} />
            </a>
            <a
              target="_blank"
              href="https://github.com/jose-eduardo87"
              rel="noopener noreferrer"
            >
              <FaGithubSquare className={styles.icon} />
            </a>
            <a target="_blank" href="" rel="noopener noreferrer">
              <FaLinkedinIn className={styles.icon} />
            </a>
            <a
              target="_blank"
              href="https://twitter.com/Eduardod_Araujo"
              rel="noopener noreferrer"
            >
              <FaTwitterSquare className={styles.icon} />
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

      <Marquee>{renderTechStack}</Marquee>
    </section>
  );
}
