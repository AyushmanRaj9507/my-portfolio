import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);  // STEP 1

  // ✅ STEP 3: useEffect to apply/remove dark-mode class
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>

      {/* ✅ Toggle Button */}
      <button
        className={styles.toggleBtn}
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "🌙 Dark" : "☀️ Light"}
      </button>

      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          <li><a className={styles.menuLink} href="#about">About</a></li>
          <li><a className={styles.menuLink} href="#experience">Experience</a></li>
          <li><a className={styles.menuLink} href="#projects">Projects</a></li>
          <li><a className={styles.menuLink} href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};
