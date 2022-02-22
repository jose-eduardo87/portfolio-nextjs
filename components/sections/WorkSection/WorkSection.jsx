import { useRef, useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
const ReactTooltip = dynamic(() => import("react-tooltip"), {
  ssr: false,
});
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Card } from "@/components/ui";
import { VintageMan } from "@/components/icons";
import { WORK } from "helpers/paths";
import { useTheme } from "store/theme-context";
import { useLanguage } from "store/language-context";

import styles from "./WorkSection.module.css";

export default function WorkSection() {
  const workRef = useRef(null);
  const queryWork = gsap.utils.selector(workRef);
  const { isDark } = useTheme();
  const { isEnglish } = useLanguage();
  const renderWork = useMemo(
    () =>
      WORK.map(({ title, description, githubLink, liveLink }, key) => (
        <Card
          key={key}
          i={key}
          title={isEnglish ? title["en"] : title["ptBR"]}
          description={isEnglish ? description["en"] : description["ptBR"]}
          githubLink={githubLink}
          liveLink={liveLink}
        />
      )),
    [isEnglish]
  );

  useEffect(() => {
    const animateWork = (element) => {
      gsap.fromTo(
        element,
        { opacity: 0, transform: "scale(0.9)" },
        { opacity: 1, transform: "scale(1)" }
      );
    };

    gsap.registerPlugin(ScrollTrigger);

    queryWork(".cardSelector").forEach((element) => {
      ScrollTrigger.create({
        trigger: element,
        onEnter: () => animateWork(element),
      });
    });

    () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [queryWork]);

  return (
    <section id="work" className={styles.root} ref={workRef}>
      <h1
        style={
          isDark
            ? { webkitTextStrokeColor: "white" }
            : { webkitTextStrokeColor: "black" }
        }
      >
        {isEnglish ? "WORK" : "TRABALHOS"}
      </h1>
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
          {isEnglish ? (
            <p className={styles.tooltipMessage}>
              THIS SECTION WILL BE IN CONSTANT
              <br />
              CHANGE! COME BACK HERE <br />
              TO SEE NEW STUFF.
            </p>
          ) : (
            <p className={styles.tooltipMessage}>
              ESTA SEÇÃO ESTARÁ EM MUDANÇA <br />
              CONSTANTE! VOLTE AQUI DEPOIS PARA <br />
              VER COISAS NOVAS.
            </p>
          )}
        </ReactTooltip>
        <div className={styles.hoverInfo}>
          <p
            style={
              isDark
                ? { backgroundColor: "#FFFFFF", color: "#000000" }
                : { backgroundColor: "#000000", color: "#FFFFFF" }
            }
            className={styles.hoverMe}
          >
            {isEnglish
              ? "HOVER OVER MY FACE!"
              : "PASSE O MOUSE SOBRE MEU ROSTO!"}
          </p>
        </div>
      </span>
      {renderWork}
    </section>
  );
}
