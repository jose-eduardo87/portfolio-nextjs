import { memo, useState } from "react";
import Ticker from "react-ticker";
import PageVisibility from "react-page-visibility";

import styles from "./Marquee.module.css";

const Marquee = ({ children }) => {
  const [pageIsVisible, setPageIsVisible] = useState(true);

  const handleVisibilityChange = (isVisible) => {
    setPageIsVisible(isVisible);
  };

  return (
    <div className={styles.root}>
      <PageVisibility onChange={handleVisibilityChange}>
        {pageIsVisible && <Ticker speed={5}>{() => <>{children}</>}</Ticker>}
      </PageVisibility>
    </div>
  );
};

export default memo(Marquee);
