import { useRef, useEffect } from "react";
import Image from "next/image";
import { usePopper } from "react-popper";
import { Card } from "@/components/ui";
import { VintageMan } from "@/components/icons";
import { WORK } from "helpers/paths";
// import { useGSAP } from "store/GSAP-context";

import styles from "./WorkSection.module.css";

export default function WorkSection() {
  const workRef = useRef(null);
  // const vintageDudeRef = useRef();
  // const tooltipRef = useRef(null);
  // const { styles, attributes } = usePopper(
  //   vintageDudeRef.current,
  //   tooltipRef.current,
  //   { placement: "bottom" }
  // );

  const renderWork = WORK.map(
    ({ title, description, githubLink, liveLink }, key) => (
      <Card
        key={key}
        title={title}
        description={description}
        githubLink={githubLink}
        liveLink={liveLink}
      />
    )
  );

  return (
    <section id="work" className={styles.root} ref={workRef}>
      {/* <span
        style={styles.popper}
        className={styles.tooltip}
        {...attributes.popper}
      >
        This is the tooltip.
      </span> */}
      <span className={styles.vintageMan}>
        <VintageMan width={240} height={252} />
      </span>
      {renderWork}
    </section>
  );
}
