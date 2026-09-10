import React, { useState } from "react";
import styles from "./contact.module.css";



export default function AddressSection() {
  const [hoverMail, setHoverMail] = useState(false);
  const [hoverLinkedIn, setHoverLinkedIn] = useState(false);

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>Let's Connect!</h2>

        <div className={styles.contentArea}>
          
          <ul className={styles.bulletList}>
            <li>Linux | IT Operations </li>

            <li>Open to opportunities in Linux Administration, IT Operations, System Administration and Linux-focused Cloud Infrastructure.</li>
          </ul>

          <div className={styles.infoBox}>
            {/* Mail */}
            <div className={styles.infoRow}>
              <img
                src={hoverMail ? "img/mail-hover.png" : "img/mail.png"}
                alt="mail"
                onMouseEnter={() => setHoverMail(true)}
                onMouseLeave={() => setHoverMail(false)}
                className={styles.iconImg}
              />
              <a className={styles.link} href="mailto:mail@artur-marbach.de">
                mail@artur-marbach.de
              </a>
            </div>


            <div className={styles.infoRow}>
              <img
                src={hoverLinkedIn ? "img/linkin-hover.png" : "img/linkin.png"}
                alt="linkedin"
                onMouseEnter={() => setHoverLinkedIn(true)}
                onMouseLeave={() => setHoverLinkedIn(false)}
                className={styles.iconImg}
              />
              <a
                className={styles.link}
                href="https://www.linkedin.com/in/artur-marbach/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Profile Page
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
