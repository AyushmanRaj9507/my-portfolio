import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Frontend icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I build responsive and interactive UIs using HTML, CSS, Tailwind, JavaScript, React, and Redux. I focus on creating user-friendly and visually appealing interfaces.
              </p>

              {/* Tech Buttons */}
              <div className={styles.techStack}>
                <span className={styles.tech}>ReactJS</span>
                <span className={styles.tech}>Redux</span>
                <span className={styles.tech}>HTML</span>
                <span className={styles.tech}>CSS</span>
                <span className={styles.tech}>Bootstrap</span>
                <span className={styles.tech}>Tailwind</span>
              </div>
            </div>
          </li>

    
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Backend icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I work with Node.js, Express.js, and MongoDB to develop secure, fast, and scalable backend APIs. I also handle authentication, file handling, and server deployment.
              </p>
              <div className={styles.techStack}>
                <span className={styles.tech}>JS</span>
                <span className={styles.tech}>NodeJs</span>
                <span className={styles.tech}>ExpressJs</span>
                <span className={styles.tech}>EJS</span>
                <span className={styles.tech}>Restful APIs</span>
              </div>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="DSA icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Structures & Algorithms</h3>
              <p>
                I’ve solved over 200+ problems on platforms like LeetCode and Codeforces. I enjoy writing optimized code and applying logical thinking to solve complex problems.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Deployment icon" />
            <div className={styles.aboutItemText}>
              <h3>Deployment Tools , Databases & DevOps</h3>
              <p>
                I deploy full-stack projects on Vercel and render, and manage databases and environment variables efficiently. I ensure smooth CI/CD workflows.I also have knowledge of databases management system. 
              </p>

              <div className={styles.techStack}>
                <span className={styles.tech}>Vercel</span>
                <span className={styles.tech}>Render</span>
                <span className={styles.tech}>Postman</span>
                <span className={styles.tech}>Github</span>
                <span className={styles.tech}>Hoppscotch</span>
              </div>
              <div className={styles.techStack}>
                <span className={styles.tech}>MySQL</span>
                <span className={styles.tech}>Atlas</span>
                <span className={styles.tech}>MongoDB</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
