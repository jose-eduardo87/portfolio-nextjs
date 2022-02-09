import { createRef, useEffect, useState } from "react";
// import dynamic from "next/dynamic";
// const Globe = dynamic(import("react-globe.gl"), { ssr: false });
import { GlobeWrapper } from "@/components/GlobeWrapper";
import { Form } from "@/components/Form";
import { useLanguage } from "store/language-context";

import styles from "./ContactSection.module.css";

export default function ContactSection({ clientIP }) {
  const globeRef = createRef();
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const { isEnglish } = useLanguage();
  const renderHeading = isEnglish ? (
    <h1>{"LET'S CONNECT!"}</h1>
  ) : (
    <h1>{"VAMOS NOS CONECTAR!"}</h1>
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

  return (
    <section id="contact" className={styles.root}>
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
