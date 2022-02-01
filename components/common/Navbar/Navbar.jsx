import Link from "next/link";
import { WiDaySunny, WiNightClear } from "react-icons/wi";
import Toggle from "react-toggle";
import { useTheme } from "store/theme-context";

import styles from "./Navbar.module.css";
import "react-toggle/style.css";

export default function Navbar() {
  const { toggleMode } = useTheme();
  const styleIcons = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "1.5em",
  };

  return (
    <header className={styles.root}>
      <h1>José Eduardo</h1>

      <ul>
        <Link passHref href="/">
          <li>Link 1</li>
        </Link>
        <Link passHref href="/">
          <li>Link 2</li>
        </Link>
        <Link passHref href="/">
          <li>Link 3</li>
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
