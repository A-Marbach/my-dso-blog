import styles from './hero.module.css';

export default function Hero() {
  return (
    <section id="about-me" className={styles.hero}>
      <div className={styles.wrapper}>

        <div className={styles.heroText}>
          <div className={styles.heroIntro}>
            <h1>Hey there, I am</h1>
            <h2>Artur Marbach</h2>
            <h3>Linux Administration | IT Operations </h3>
          </div>

          <div className={styles.heroBody}>
            <p>
           Linux server administration, troubleshooting and automation
           with Ansible, Terraform, Prometheus and Grafana.
            </p>
            <button
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Contact me
            </button>
          </div>
        </div>

        <div className={styles.heroImage}>
          <img
            className={styles.myPhoto}
            src="img/profile.png"
            alt="Artur Marbach"
          />
        </div>
        <div className={styles.heroBodyMobile}>
       <p>
  Linux server administration, troubleshooting and automation
  with Ansible, Terraform, Prometheus and Grafana.
</p>
          <button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Contact me
          </button>
        </div>
      </div>
    </section>
  );
}
