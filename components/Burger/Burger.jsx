import { useEffect, useState } from "react";
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import { useTheme } from "store/theme-context";

const BURGER_STYLES = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "36px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};

export default function Burger() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, currentBGHex } = useTheme();

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
      isOpen={isMenuOpen}
      onStateChange={onChangeHandler}
      styles={BURGER_STYLES}
    >
      <ul>
        <Link href="/" passHref>
          <li onClick={menuToggleHandler}>Home</li>
        </Link>
        <Link href="/#about" passHref>
          <li onClick={menuToggleHandler}>About</li>
        </Link>
        <Link href="/#work" passHref>
          <li onClick={menuToggleHandler}>Work</li>
        </Link>
        <Link href="/#contact" passHref>
          <li onClick={menuToggleHandler}>Contact</li>
        </Link>
      </ul>
    </Menu>
  );
}
