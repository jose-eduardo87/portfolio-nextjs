import { useState } from "react";
import { useTheme } from "store/theme-context";

import styles from "./Button.module.css";

const buttonStyle = (hoverState, isDark, isDisabled) => {
  return {
    minWidth: "100px",
    minHeight: "60px",
    fontWeight: 300,
    border: "none",
    textDecoration: "none",
    textAlign: "center",
    cursor: isDisabled ? "not-allowed" : "pointer",
    outline: "none",
    fontSize: "inherit",
    padding: ".35em 1.2em",
    transition: ".5s all",
    backgroundColor: hoverState
      ? `${isDark ? "#FFFFFF" : "#000000"}`
      : `${isDark ? "#00564d" : "#8ABAAE"}`,
    color: hoverState
      ? `${isDark ? "#000000" : "#FFFFFF"}`
      : `${isDark ? "#FFFFFF" : "#000000"}`,
  };
};

export default function Button({ children, isDisabled }) {
  const [isHovering, setIsHovering] = useState(false);
  const { isDark } = useTheme();

  const hoverButtonHandler = (type) => {
    type === "enter" ? setIsHovering(true) : setIsHovering(false);
  };
  return (
    <button
      onMouseEnter={() => hoverButtonHandler("enter")}
      onMouseLeave={() => hoverButtonHandler()}
      className={styles.root}
      style={buttonStyle(isHovering, isDark, isDisabled)}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}
