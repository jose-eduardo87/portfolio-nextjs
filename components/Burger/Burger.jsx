import { useEffect, useState } from "react";
import Link from "next/link";
import { pushRotate as Menu } from "react-burger-menu";
import { Moon, Sun, Brazil, USA } from "../icons";
import { useTheme } from "store/theme-context";
import { useLanguage } from "store/language-context";

import styles from "./Burger.module.css";

const BURGER_STYLES = (isDark, currentBGHex) => {
  const color = isDark ? "#FFFFFF" : "#000000";
  return {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      left: "36px",
      top: "36px",
    },
    bmBurgerBars: {
      background: color,
    },
    bmBurgerBarsHover: {
      background: color,
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: color,
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: currentBGHex,
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: color,
      padding: "0.8em",
    },
    bmItem: {
      display: "inline-block",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };
};

export default function Burger() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleMode, currentBGHex } = useTheme();
  const { isEnglish, toggleLanguage } = useLanguage();
  const iconsProps = (type) => {
    return {
      style: { cursor: "pointer" },
      width: 32,
      height: 32,
      onClick: type === "theme" ? toggleMode : toggleLanguage,
    };
  };
  const renderThemeIcon = isDark ? (
    <Sun {...iconsProps("theme")} />
  ) : (
    <Moon {...iconsProps("theme")} />
  );
  const renderLanguageIcon = isEnglish ? (
    <Brazil {...iconsProps()} />
  ) : (
    <USA {...iconsProps()} />
  );

  const menuToggleHandler = () =>
    setIsMenuOpen((currentState) => !currentState);

  const onChangeHandler = (newState) => setIsMenuOpen(newState.isOpen);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isMenuOpen]);

  return (
    <Menu
      noOverlay
      width={"100%"}
      isOpen={isMenuOpen}
      onStateChange={onChangeHandler}
      styles={BURGER_STYLES(isDark, currentBGHex)}
    >
      <ul className={styles.navContainer}>
        <Link href="/" passHref>
          <li onClick={menuToggleHandler}>Home</li>
        </Link>
        <Link href="/#about" passHref>
          <li onClick={menuToggleHandler}>{isEnglish ? "About" : "Sobre"}</li>
        </Link>
        <Link href="/#work" passHref>
          <li onClick={menuToggleHandler}>
            {isEnglish ? "Work" : "Trabalhos"}
          </li>
        </Link>
        <Link href="/#contact" passHref>
          <li onClick={menuToggleHandler}>
            {isEnglish ? "Contact" : "Contato"}
          </li>
        </Link>
        <div className={styles.iconsWrapper}>
          {renderThemeIcon}
          {renderLanguageIcon}
        </div>
      </ul>
    </Menu>
  );
}
