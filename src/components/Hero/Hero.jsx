import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";


export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ayushman Raj</h1>
        <h6 className={styles.title1}>Full-Stack Web Developer @MERN</h6>
        <p className={styles.description}> 
          College: National Institute of Technology (NIT) Allahabad <br />
          Department: Electrical Engineering (2nd Year)
        </p>
        <div className={styles.button}>
        <a
            href="mailto:araj53062@gmail.com?subject=Let's%20Connect&body=Hi%20Ayushman,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
            className={styles.contactBtn}
          > Get in Touch  
        </a>
          <a href="#projects" className={styles.contactBtn}>
            Projects
          </a>
        </div>
        <div className={styles.socialIcons}>
          <a href="https://linkedin.com/in/yourid" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className={styles.icon} color="#0A66C2" />
          </a>
          <a href="https://github.com/yourid" target="_blank" rel="noopener noreferrer">
            <FaGithub className={styles.icon} color="#171515" />
          </a>
          <a href="https://instagram.com/yourid" target="_blank" rel="noopener noreferrer">
            <FaInstagram className={styles.icon} color="#E1306C" />
          </a>
          <a href="https://facebook.com/yourid" target="_blank" rel="noopener noreferrer">
            <FaFacebook className={styles.icon} color="#1877F2" />
          </a>
          <a href="mailto:yourid@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className={styles.icon} color="#D44638" />
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
