import { useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
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
import { useTheme } from "store/theme-context";
import { useLanguage } from "store/language-context";

import styles from "./AboutSection.module.css";
import Link from "next/link";

export default function AboutSection() {
  const aboutRef = useRef(null);
  const { isDark } = useTheme();
  const { isEnglish } = useLanguage();
  const queryAbout = gsap.utils.selector(aboutRef);
  const iconStyles = useMemo(() => {
    return {
      width: "150px",
      height: "150px",
    };
  }, []);

  const renderAboutInfo = isEnglish ? (
    <>
      <h2>Building creative stuff for the web.</h2>

      <p>
        I am a Brazilian Full-Stack developer. I can confidently say that
        improve my skills as a software developer become my biggest personal
        objective and I have dedicated all the time I can to fulfill it.
      </p>
      <p>
        New challenges motivate me. To solve a problem brings me satisfaction. I
        value for organization, elegance and optimization in any code I write.
        In my spare time, I like to learn about plants, play videogames and go
        for outside activities. Family is the most important thing to me. I have
        one little kid and the most beautiful spouse in the world.
      </p>
      <p>
        I am interested in all development steps, with emphasis on Front-End. I
        am open to proposals and freelance jobs.
      </p>

      <Link href="/#contact">
        <a
          style={
            isDark
              ? { color: "rgb(0, 86, 77)" }
              : { color: "rgb(138, 186, 174" }
          }
          className={styles.cta}
        >
          <strong>Let&apos;s build something special. &#8594;</strong>
        </a>
      </Link>
    </>
  ) : (
    <>
      <h2>Criando coisas criativas para a web</h2>

      <p>
        Sou um desenvolvedor <i>Full-Stack</i> brasileiro. Posso dizer
        confidente que melhorar minhas habilidades como desenvolvedor de{" "}
        <i>software</i> tornou-se meu maior objetivo pessoal e tenho dedicado
        todo o tempo que posso a alcançar este objetivo.
      </p>
      <p>
        Novos desafios me motivam. Resolver um problema me traz satisfação.
        Prezo por organização, elegância e otimização em qualquer código que eu
        escrevo. Em meu tempo livre, gosto de ler sobre plantas, jogos de{" "}
        <i>videogames</i> e atividades externas. Família é o que há de mais
        importante para mim. Tenho um filho e esposa mais lindos do mundo.
      </p>
      <p>
        Possuo interesse em todas as etapas de desenvolvimento, com ênfase em{" "}
        <i>Front-End</i>. Estou aberto a propostas e trabalhos <i>freelance</i>.
      </p>

      <Link href="/#contact">
        <a className={styles.cta}>Vamos construir algo especial. &#8594;</a>
      </Link>
    </>
  );

  const renderHeading = isEnglish ? (
    <h3>Technologies I am currently working with:</h3>
  ) : (
    <h3>Tecnologias que trabalho atualmente:</h3>
  );
  const renderTechStack = useMemo(
    () =>
      [
        <Git key="Git Icon" alt="Git Icon" {...iconStyles} />,
        <GSAP key="GSAP Icon" alt="GSAP Icon" {...iconStyles} />,
        <MongoDB key="MongoDB Icon" alt="MongoDB Icon" {...iconStyles} />,
        <NextJS key="NextJS Icon" alt="NextJS Icon" {...iconStyles} />,
        <NodeJS key="NodeJS Icon" alt="NodeJS Icon" {...iconStyles} />,
        <Postman key="Postman Icon" alt="Postman Icon" {...iconStyles} />,
        <ReactJS key="ReactJS Icon" alt="ReactJS Icon" {...iconStyles} />,
        <TypeScript
          key="TypeScript Icon"
          alt="TypeScript Icon"
          {...iconStyles}
        />,
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
      )),
    [iconStyles]
  );

  useEffect(() => gsap.registerPlugin(ScrollTrigger), []);

  useEffect(() => {
    const animatePhotoOnEnter = (icon) => {
      gsap.fromTo(icon, { y: -50 }, { y: 0, duration: 0.4 });
    };

    queryAbout(".picSelector").forEach((photo) => {
      ScrollTrigger.create({
        trigger: photo,
        onEnter: () => animatePhotoOnEnter(photo),
      });
    });

    () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [queryAbout]);

  useEffect(() => {
    const animateIconOnEnter = (icon, index) => {
      gsap.fromTo(
        icon,
        { opacity: 0, transform: "scale(0.2)" },
        { opacity: 1, transform: "scale(1)", delay: index * 0.1 }
      );
    };

    queryAbout(".iconSelector").forEach((icon, index) => {
      ScrollTrigger.create({
        trigger: icon,
        onEnter: () => animateIconOnEnter(icon, index),
      });
    });

    () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [queryAbout]);

  return (
    <section id="about" className={styles.root} ref={aboutRef}>
      <h1
        style={
          isDark
            ? { webkitTextStrokeColor: "white" }
            : { webkitTextStrokeColor: "black" }
        }
      >
        {isEnglish ? "ABOUT" : "SOBRE"}
      </h1>
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
                className={`iconSelector iconSelector-0 ${styles.icon} ${styles.facebookIcon}`}
              />
            </a>
            <a
              target="_blank"
              href="https://github.com/jose-eduardo87"
              rel="noopener noreferrer"
            >
              <FaGithubSquare
                className={`iconSelector iconSelector-1 ${styles.icon} ${styles.githubIcon}`}
              />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/eduardoaraujodev"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn
                className={`iconSelector iconSelector-2 ${styles.icon} ${styles.linkedInIcon}`}
              />
            </a>
            <a
              target="_blank"
              href="https://twitter.com/Eduardod_Araujo"
              rel="noopener noreferrer"
            >
              <FaTwitterSquare
                className={`iconSelector iconSelector-3 ${styles.icon} ${styles.twitterIcon}`}
              />
            </a>
          </div>
        </div>
        <div className={styles.aboutInfo}>{renderAboutInfo}</div>
      </div>
      {renderHeading}
      <Marquee>{renderTechStack}</Marquee>
    </section>
  );
}
