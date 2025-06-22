import React, { useEffect, useState } from "react";
import styles from "./ScrollToTop.module.css";

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`${styles.scrollBtn} ${visible ? styles.show : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      ⬆️
    </button>
  );
};
