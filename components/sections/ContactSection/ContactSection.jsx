import { createRef, useEffect, useRef, useState } from "react";
// import { gsap } from "gsap/dist/gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { GlobeWrapper } from "@/components/GlobeWrapper";
import { Form } from "@/components/Form";
import { useTheme } from "store/theme-context";
import { useLanguage } from "store/language-context";

import styles from "./ContactSection.module.css";

export default function ContactSection({ coords }) {
  const contactRef = useRef();
  const globeRef = createRef();
  const [coordinates, setCoordinates] = useState({
    latitude: "",
    longitude: "",
  });
  const { isDark } = useTheme();
  const { isEnglish } = useLanguage();
  // const { selector } = gsap.utils;
  // const queryContact = selector(contactRef);
  const renderHeading = isEnglish ? (
    <h2>LET&apos;S CONNECT!</h2>
  ) : (
    <h2>{"VAMOS NOS CONECTAR!"}</h2>
  );

  useEffect(() => {
    const fetchData = async () => {
      const { latitude, longitude } = coords;

      setCoordinates({ latitude, longitude });
    };

    fetchData();
  }, [coords]);

  // DISABLED. CAUSING TOO MANY RERENDERS TO THE CONTACT SECTION
  // useEffect(() => {
  //   const animateFormOnEnter = (element) => {
  //     gsap.fromTo(element, { autoAlpha: 0 }, { autoAlpha: 1, duration: 2.5 });
  //   };
  //   const hide = (form) => gsap.set(form, { autoAlpha: 0 });

  //   gsap.registerPlugin(ScrollTrigger);

  //   queryContact(".formSelector").forEach((form) => {
  //     hide(form);

  //     ScrollTrigger.create({
  //       trigger: form,
  //       onEnter: () => animateFormOnEnter(form),
  //       onEnterBack: () => animateFormOnEnter(form),
  //       onLeave: () => hide(form),
  //     });
  //   });

  //   () => ScrollTrigger.getAll().forEach((t) => t.kill());
  // }, [queryContact]);

  return (
    <section id="contact" className={styles.root} ref={contactRef}>
      <h1 style={{ WebkitTextStrokeColor: isDark ? "white" : "black" }}>
        {isEnglish ? "CONTACT" : "CONTATO"}
      </h1>
      <div className={styles.flexContainer}>
        <div className={styles.contactForm}>
          {renderHeading}
          <p style={{ color: isDark ? "#B3D9B3" : "#2D636D" }}>
            {isEnglish
              ? "Still have questions or maybe just want to say hi? Please fill in the form below and I will get to you as soon as I can."
              : "Alguma dúvida ficou no ar ou quer apenas dizer um oi? Preencha o formulário abaixo e eu entrarei em contato o mais rápido que puder."}
          </p>
          <Form isEnglish={isEnglish} />
        </div>
        <div id="globeViz" className={styles.globeContainer}>
          <GlobeWrapper
            endLat={coordinates.latitude}
            endLng={coordinates.longitude}
            ref={globeRef}
          />
        </div>
      </div>
    </section>
  );
}
