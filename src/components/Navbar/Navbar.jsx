import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // ✅ Dark mode default ON
  const [activeSection, setActiveSection] = useState("");

  // ✅ Apply/remove dark-mode class to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  // ✅ Observe scroll position & update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects", "contact"];
      let foundSection = "";

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 100) {
            foundSection = section;
            break;
          }
        }
      }

      setActiveSection(foundSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Portfolio</a>

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
          <li>
            <a
              className={`${styles.menuLink} ${
                activeSection === "about" ? styles.active : ""
              }`}
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className={`${styles.menuLink} ${
                activeSection === "experience" ? styles.active : ""
              }`}
              href="#experience"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              className={`${styles.menuLink} ${
                activeSection === "projects" ? styles.active : ""
              }`}
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className={`${styles.menuLink} ${
                activeSection === "contact" ? styles.active : ""
              }`}
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
