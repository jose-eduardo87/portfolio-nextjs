import { memo } from "react";

import styles from "./Input.module.css";

const Input = ({ textarea = false, ...inputConfig }) => {
  return textarea ? (
    <textarea
      className={styles.textArea}
      placeholder={inputConfig.placeholder}
      {...inputConfig}
    />
  ) : (
    <input className={styles.input} {...inputConfig} />
  );
};

export default memo(Input);
