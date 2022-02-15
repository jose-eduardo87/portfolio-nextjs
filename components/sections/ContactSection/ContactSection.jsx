import { createRef, useEffect, useRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { GlobeWrapper } from "@/components/GlobeWrapper";
import { Form } from "@/components/Form";
import { useLanguage } from "store/language-context";

import styles from "./ContactSection.module.css";

export default function ContactSection({ clientIP }) {
  const contactRef = useRef();
  const globeRef = createRef();
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const { isEnglish } = useLanguage();
  const { selector } = gsap.utils;
  const queryContact = selector(contactRef);
  const renderHeading = isEnglish ? (
    <h2>{"LET'S CONNECT!"}</h2>
  ) : (
    <h2>{"VAMOS NOS CONECTAR!"}</h2>
  );

  useEffect(() => {
    const fetchData = async () => {
      const clientIPTest = "100.36.36.2";
      const response = await fetch(`http://ip-api.com/json/${clientIPTest}`);
      const { lat, lon } = await response.json();

      setLatitude(lat);
      setLongitude(lon);
    };

    fetchData();
  }, [clientIP]);

  useEffect(() => {
    const animateFormOnEnter = (element) => {
      gsap.fromTo(element, { autoAlpha: 0 }, { autoAlpha: 1, duration: 2.5 });
    };
    const hide = (form) => gsap.set(form, { autoAlpha: 0 });

    gsap.registerPlugin(ScrollTrigger);

    queryContact(".formSelector").forEach((form) => {
      hide(form);

      ScrollTrigger.create({
        trigger: form,
        onEnter: () => animateFormOnEnter(form),
        onEnterBack: () => animateFormOnEnter(form),
        onLeave: () => hide(form),
      });
    });

    () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [queryContact]);

  return (
    <section id="contact" className={styles.root} ref={contactRef}>
      <h1>{isEnglish ? "CONTACT" : "CONTATO"}</h1>
      <div className={styles.flexContainer}>
        <div className={styles.contactForm}>
          {renderHeading}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            iure!
          </p>
          <Form isEnglish={isEnglish} />
        </div>
        <div id="globeViz" className={styles.globeContainer}>
          <GlobeWrapper endLat={latitude} endLng={longitude} ref={globeRef} />
        </div>
      </div>
    </section>
  );
}
