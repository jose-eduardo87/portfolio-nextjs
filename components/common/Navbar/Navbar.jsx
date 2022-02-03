import { useEffect, useRef } from "react";
import Link from "next/link";
import { WiDaySunny, WiNightClear } from "react-icons/wi";
import Toggle from "react-toggle";
import { useTheme } from "store/theme-context";
import { useGSAP } from "store/GSAP-context";

import styles from "./Navbar.module.css";
import "react-toggle/style.css";

export default function Navbar() {
  const headerRef = useRef(null);
  const { getLinks } = useGSAP();

  useEffect(() => {
    const headerElement = headerRef.current;
    const linksNodeList = headerElement.querySelectorAll("header li");

    getLinks(linksNodeList);
  }, [getLinks]);

  const { isDark, toggleMode } = useTheme();
  const styleIcons = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "1.5em",
  };

  return (
    <header
      className={styles.root}
      style={{
        backgroundColor: isDark ? "rgba(0,0,0,.2)" : "rgba(255,255,255,.2)",
      }}
      ref={headerRef}
    >
      <Link passHref href="/">
        <h1>José Eduardo</h1>
      </Link>
      <ul>
        <Link passHref href="#about" scroll={false}>
          <li>ABOUT</li>
        </Link>
        <Link passHref href="#contact">
          <li>CONTACT</li>
        </Link>
        <Link passHref href="/">
          <li>SECTION 3</li>
        </Link>
      </ul>
      <label>
        <Toggle
          icons={{
            checked: (
              <WiDaySunny
                style={{
                  color: "yellow",
                  left: "-40%",
                  ...styleIcons,
                }}
              />
            ),
            unchecked: (
              <WiNightClear
                style={{ color: "white", left: "-50%", ...styleIcons }}
              />
            ),
          }}
          onChange={toggleMode}
        />
      </label>
    </header>
  );
}
