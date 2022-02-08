import { forwardRef } from "react";

import styles from "./Input.module.css";

const Input = forwardRef(({ textarea = false, ...inputConfig }, ref) => {
  return textarea ? (
    <textarea
      className={styles.textArea}
      placeholder={inputConfig.placeholder}
      ref={ref}
    />
  ) : (
    <input className={styles.input} ref={ref} {...inputConfig} />
  );
});

Input.displayName = "Input";

export default Input;
