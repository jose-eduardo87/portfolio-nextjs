import { useRef, useEffect } from "react";
import Image from "next/image";
import MoveStuffAround from "@/components/Ticker/";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedinIn,
  FaTwitterSquare,
} from "react-icons/fa";
import { useGSAP } from "store/GSAP-context";
// import { ICONS } from "helpers/paths";
import { useTheme } from "store/theme-context";

import styles from "./AboutSection.module.css";

export default function AboutSection() {
  const aboutRef = useRef(null);
  const { isDark } = useTheme();
  const { links, from } = useGSAP();

  return (
    <section id="about" className={styles.root} ref={aboutRef}>
      <div className={styles.mainPanel}>
        <div className={styles.profile}>
          <div className={styles.photo}></div>
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
        <div className={styles.aboutInfo}></div>
      </div>

      <MoveStuffAround />
    </section>
  );
}
