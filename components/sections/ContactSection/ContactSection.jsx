import { createRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Globe = dynamic(import("react-globe.gl"), { ssr: false });
import { GlobeWrapper } from "@/components/GlobeWrapper";
import { Form } from "@/components/Form";
import { useTheme } from "store/theme-context";
import { useGSAP } from "store/GSAP-context";
import { EARTH_IMAGE } from "helpers/paths";
// import { setActive } from "helpers/functions";

import styles from "./ContactSection.module.css";

export default function ContactSection({ clientIP }) {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const globeRef = createRef();
  // const { isDark } = useTheme();

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
      <h1>{"LET'S CONNECT!"}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, iure!
      </p>
      <div className={styles.flexContainer}>
        <div className={styles.contactForm}>
          <Form />
        </div>
        <div id="globeViz" className={styles.globeContainer}>
          <GlobeWrapper endLat={latitude} endLng={longitude} ref={globeRef} />
        </div>
      </div>
    </section>
  );
}
