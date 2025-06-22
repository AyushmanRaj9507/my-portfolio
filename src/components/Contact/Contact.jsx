import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaFacebook } from "react-icons/fa";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_lbdvovd",      // ✅ Your Service ID
      "template_0aup2qw",     // ✅ Your Template ID
      form.current,
      "KpugHS1jT4BZwGG1e"     // ✅ Your Public Key
    )
    .then((result) => {
        alert("✅ Message sent successfully!");
        form.current.reset();
    }, (error) => {
        alert("❌ Failed to send message. Please try again later.");
        console.error(error);
    });
  };
  
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Let’s connect! Whether it’s about tech, projects, or just a friendly chat — I'm just one click away.</p>
      </div>

      <section id="contact" className={styles.container}>
        <h2>Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="text" name="title" placeholder="Subject / Title" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="6" placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>
      </section>

      <div className={styles.icons}>
        <a
          href="mailto:araj53062@gmail.com"
          className={`${styles.icon} ${styles.email}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/in/ayushman-raj-166a21368/"
          className={`${styles.icon} ${styles.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/AyushmanRaj9507"
          className={`${styles.icon} ${styles.github}`}
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/ayushmangupta_121/"
          className={`${styles.icon} ${styles.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/yourusername"
          className={`${styles.icon} ${styles.facebook}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
        >
          <FaFacebook />
        </a>
      </div>
    </footer>
  );
};
