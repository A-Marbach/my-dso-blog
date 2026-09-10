import React, { useState, useEffect, useRef } from "react";
import styles from './my-skills.module.css';

export default function MySkills() {
const skills = [
  { img: "img/linux.svg", title: "Linux", description: ["System administration", "User & permission management", "SSH, systemd & troubleshooting"] },
  { img: "img/ansible.svg", title: "Ansible", description: ["Configuration management", "Playbook automation", "Server provisioning"] },
  { img: "img/terraform.svg", title: "Terraform", description: ["Infrastructure as Code", "Resource provisioning", "State management"] },
  { img: "img/docker.svg", title: "Docker", description: ["Containerizing applications", "Building Docker images", "Docker Compose deployments"] },
  { img: "img/grafana.svg", title: "Monitoring", description: ["Prometheus & Grafana", "Metrics visualization", "Alerting"] },
  { img: "img/aws.svg", title: "AWS", description: ["Cloud infrastructure", "EC2 & networking", "IAM & CloudWatch"] },
  { img: "img/github.svg", title: "Git / GitHub", description: ["Version control", "Repository management", "Collaborative workflows"] },
  { img: "img/cicd.svg", title: "CI/CD", description: ["Build & test pipelines", "GitHub Actions", "Automated deployments"] },
  { img: "img/kubernetes.svg", title: "Kubernetes", description: ["Cluster operations (k3s)", "Helm deployments", "Ingress & TLS"] },
];
  const [activePage, setActivePage] = useState(0);



  const skillsPerPage = 3;
  const totalPages = Math.ceil(skills.length / skillsPerPage);

  const rowRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftRef = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDown.current = true;
    startX.current = e.pageX - (rowRef.current?.offsetLeft || 0);
    scrollLeftRef.current = rowRef.current?.scrollLeft || 0;
    if (rowRef.current) rowRef.current.style.cursor = 'grabbing';
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    if (rowRef.current) rowRef.current.style.cursor = 'grab';
  };

  const handleMouseUp = () => {
    isDown.current = false;
    if (rowRef.current) rowRef.current.style.cursor = 'grab';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - (rowRef.current?.offsetLeft || 0);
    const walk = (x - startX.current) * 1.5;
    if (rowRef.current) rowRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const [isMobile, setIsMobile] = useState(false);
  // Scroll-Event um aktive Seite zu tracken
  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;
    const handleScroll = () => {
      const cardWidth = row.scrollWidth / totalPages;
      const page = Math.round(row.scrollLeft / cardWidth);
      setActivePage(page);
    };
    row.addEventListener("scroll", handleScroll);
    return () => row.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="my-skills" className={styles.mySkills}>
      <div className={styles.wrapper}>
        <h1>My Skills</h1>

        {/* Desktop */}
        {!isMobile && (
          <div className={styles.skillGrid}>
            {skills.map((skill, index) => (
              <div key={index} className={styles.skillCard}>
                <div className={styles.cardInner}>
                  <div className={styles.cardFront}>
                    <img src={skill.img} alt={skill.title} />
                  </div>
                  <div className={styles.cardBack}>
                    <div className={styles.hoverTextContent}>
                      <h3>{skill.title}</h3>
                      <ul>
                        {skill.description.map((line, idx) => (
                          <li key={idx}>{line}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Mobile Carousel */}
        {isMobile && (
          <div className={styles.mobileSkillContent}>
            <div
              className={styles.mobileRow}
              ref={rowRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div key={pageIndex} className={styles.skillCardGroup}>
                  {skills.slice(pageIndex * 3, pageIndex * 3 + 3).map((skill, idx) => (
                    <div key={idx} className={styles.skillCardMobile}>
                      <img src={skill.img} alt={skill.title} />
                      <div>
                        <ul>
                          {skill.description.map((line, i) => (
                            <li key={i}>{line}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className={styles.paginationDots}>
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div
                  key={pageIndex}
                  className={`${styles.dot}${activePage === pageIndex ? ` ${styles.activeDot}` : ""}`}
                  onClick={() => {
                    if (rowRef.current) {
                      const cardWidth = rowRef.current.scrollWidth / totalPages;
                      rowRef.current.scrollTo({ left: cardWidth * pageIndex, behavior: "smooth" });
                    }
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}