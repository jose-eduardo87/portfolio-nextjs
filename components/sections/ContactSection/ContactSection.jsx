import { createRef, useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
const Globe = dynamic(import("react-globe.gl"), { ssr: false });
import { GlobeWrapper } from "@/components/GlobeWrapper";
import { useTheme } from "store/theme-context";
import { useGSAP } from "store/GSAP-context";
import { EARTH_IMAGE } from "helpers/paths";
// import { setActive } from "helpers/functions";

import styles from "./ContactSection.module.css";

export default function ContactSection({ clientIP }) {
  const globeRef = createRef();
  // const { isDark } = useTheme();
  // const MAP_CENTER = { lat: 37.6, lng: -16.6, altitude: 0.4 };
  // const arcsData = [
  //   {
  //     startLat: -8.00937,
  //     startLng: -34.8553,
  //     endLat: 40.73061,
  //     endLng: -73.935242,
  //     // color: [
  //     //   ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
  //     //   ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
  //     // ],
  //   },
  // ];

  // // console.log(clientIP);

  // // useEffect(() => globeRef.current.pointOfView(MAP_CENTER, 4000));

  return (
    <section id="contact" className={styles.root}>
      <div className={styles.contactForm}></div>
      <div id="globeViz" className={styles.globeContainer}>
        <GlobeWrapper ref={globeRef} />
        {/* <Globe
          ref={globeRef}
          width={600}
          height={600}
          atmosphereAltitude={0.3}
          backgroundColor={isDark ? "#000000" : "#FFFFFF"}
          globeImageUrl={EARTH_IMAGE}
          arcsData={arcsData}
          arcLabel={() => "We are now connected!"}
          arcDashLength={0.4}
          arcDashGap={0.2}
          arcDashAnimateTime={3000}
          pointColor={() => "orange"}
          pointAltitude={0}
          pointRadius={0.04}
          pointsMerge={true}
        /> */}
      </div>
    </section>
  );
}
