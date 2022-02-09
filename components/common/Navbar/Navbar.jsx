import Link from "next/link";
import { WiDaySunny, WiNightClear } from "react-icons/wi";
import { BrazilFlag, USAFlag } from "@/components/icons";
import Toggle from "react-toggle";
import { useTheme } from "store/theme-context";
import { useLanguage } from "store/language-context";

import styles from "./Navbar.module.css";
import "react-toggle/style.css";

export default function Navbar() {
  const { isDark, toggleMode } = useTheme();
  const { isEnglish, toggleLanguage } = useLanguage();
  const styleIcons = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "1.5em",
  };
  const styleFlags = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
  };

  return (
    <header
      className={styles.root}
      style={{
        backgroundColor: isDark ? "rgba(0,0,0,.2)" : "rgba(255,255,255,.2)",
      }}
    >
      <Link passHref href="/">
        <h1 className="logo">José Eduardo</h1>
      </Link>
      <ul>
        <Link passHref href="#about">
          <li>{isEnglish ? "ABOUT" : "SOBRE"}</li>
        </Link>
        <Link passHref href="#work">
          <li>{isEnglish ? "WORK" : "TRABALHOS"}</li>
        </Link>
        <Link passHref href="#contact">
          <li>{isEnglish ? "CONTACT" : "CONTATO"}</li>
        </Link>
      </ul>
      <label
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
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
        <Toggle
          icons={{
            checked: (
              <span
                style={{
                  ...styleIcons,
                  color: "white",
                  left: "-15%",
                  fontSize: "16px",
                }}
              >
                EN
              </span>
            ),
            unchecked: (
              <span
                style={{
                  ...styleIcons,
                  color: "white",
                  left: "-15%",
                  fontSize: "16px",
                }}
              >
                PT
              </span>
            ),
          }}
          onChange={toggleLanguage}
        />
      </label>
    </header>
  );
}
