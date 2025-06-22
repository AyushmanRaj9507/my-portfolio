import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";

export const Hero = () => {
  return (
    <section className={styles.container} id="hero">
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ayushman Raj</h1>
        <h6 className={styles.subtitle}>Full-Stack Web Developer @ MERN Stack</h6>
        <p className={styles.description}>
          🏫 National Institute of Technology (NIT) Allahabad <br />
          ⚡ Electrical Engineering – 2nd Year
        </p>

        <div className={styles.buttons}>
          <a
            href="/resume.pdf"
            download
            className={styles.resumeBtn}
          >
            📄 Download Resume
          </a>
          <a href="#projects" className={styles.contactBtn}>
            🚀 View Projects
          </a>
          <a
            href="mailto:araj53062@gmail.com?subject=Let's%20Connect&body=Hi%20Ayushman,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
            className={styles.contactBtn}
          >
            📬 Get in Touch
          </a>
        </div>

        <div className={styles.socialIcons}>
          <a href="https://linkedin.com/in/ayushman-raj-166a21368" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className={styles.icon} color="#0A66C2" />
          </a>
          <a href="https://github.com/ayushman-raj" target="_blank" rel="noopener noreferrer">
            <FaGithub className={styles.icon} color="#171515" />
          </a>
          <a href="https://instagram.com/your_id" target="_blank" rel="noopener noreferrer">
            <FaInstagram className={styles.icon} color="#E1306C" />
          </a>
          <a href="https://facebook.com/your_id" target="_blank" rel="noopener noreferrer">
            <FaFacebook className={styles.icon} color="#1877F2" />
          </a>
          <a href="mailto:araj53062@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className={styles.icon} color="#D44638" />
          </a>
        </div>
      </div>

      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero of Ayushman"
        className={styles.heroImg}
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
