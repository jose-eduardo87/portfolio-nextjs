import { useRef, useEffect } from "react";
import dynamic from "next/dynamic";
const ReactTooltip = dynamic(() => import("react-tooltip"), {
  ssr: false,
});
import { Card } from "@/components/ui";
import { VintageMan } from "@/components/icons";
import { WORK } from "helpers/paths";
import { useTheme } from "store/theme-context";
import { useGSAP } from "store/GSAP-context";

import styles from "./WorkSection.module.css";

export default function WorkSection() {
  const workRef = useRef(null);
  // const {} = useGSAP();
  const { isDark } = useTheme();

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
      <span className={styles.vintageMan}>
        <VintageMan data-tip data-for="vintageMan" width={240} height={252} />
        <ReactTooltip
          id="vintageMan"
          place="left"
          effect="solid"
          textColor="#000000"
          backgroundColor="#FFFFFF"
          border={true}
          borderColor="#000000"
          className={styles.tooltip}
        >
          <p className={styles.tooltipMessage}>Kinda working now</p>
        </ReactTooltip>
        <div className={styles.hoverInfo}>
          <p
            style={
              isDark
                ? { backgroundColor: "#FFFFFF", color: "#000000" }
                : { backgroundColor: "#000000", color: "#FFFFFF" }
            }
          >
            HOVER OVER MY FACE!
          </p>
        </div>
      </span>
      {renderWork}
    </section>
  );
}
