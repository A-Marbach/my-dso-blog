import { useState } from 'react';
import styles from './my-project-highlights.module.css';


export default function MyProjectHighlights() {
  const projects = [
    {
      img: "img/vikunja-aws-image.png",
      title: "Vikunja AWS Fargate",
      description:
        "Built and operated an AWS ECS Fargate environment with Terraform, including private networking, ALB, RDS PostgreSQL, S3 persistence, Secrets Manager, CloudWatch alarms, SNS notifications, backup and restore testing, and Terraform CI.",
      techIcons: [
        "img/container.png",
        "img/yaml.png",
        "img/security.png",
        "img/cicd.png"
      ],
      github: "https://github.com/A-Marbach/vikunja-aws-fargate",
      doc: "/myPortfolio/docs/projects/vikunja-aws-fargate"
    },
    {
      img: "img/aws-img.png",
      title: "Conduit AWS Infrastructure",
      description: "Built AWS infrastructure with Terraform, including VPC, IAM, security groups, and EC2. Automated Ubuntu configuration with Ansible, deployed the application with Docker, and added GitHub Actions and CloudWatch monitoring.",
      techIcons: [
        "img/container.png",
        "img/yaml.png",
        "img/security.png",
        "img/cicd.png"
      ],
      github: "https://github.com/A-Marbach/conduit-aws",
      doc: "/myPortfolio/docs/projects/conduit-aws"
    },
    {
      img: "img/bookstore-img.png",
      title: "Book-Store API",
      description: "Built a containerized ASP.NET Core 8 REST API with MongoDB — featuring a multi-stage Dockerfile, automated CI/CD pipeline with Hadolint, Trivy and Gitleaks security scanning, and live monitoring via Prometheus and Grafana on a Hetzner VM.",
      techIcons: [
        "img/container.png",
        "img/shell.png",
        "img/cicd.png",
        "img/yaml.png",
        "img/security.png"],
      github: "https://github.com/A-Marbach/bookStoreAPI",
      doc: "/myPortfolio/docs/projects/bookstore-api"
    },
    {
      img: "img/monitoring-stack-img.png",
      title: "Monitoring Stack",
      description: "Built a monitoring platform with Prometheus and Grafana for infrastructure and container observability, including metrics collection, dashboards, and alerting.",
      techIcons: [
        "img/container.png",
        "img/shell.png",
        "img/yaml.png",
        "img/security.png"
      ],
      github: "https://github.com/A-Marbach/monitoring-stack",
      doc: "/myPortfolio/docs/projects/monitoring-stack"
    },

    {
      img: "img/k3s-img.png",
      title: "k3s Infrastructure",
      description: "Provisioned and configured a multi-node Kubernetes (k3s) cluster on Hetzner Cloud using Terraform and Ansible, with automated HTTPS via Traefik and cert-manager, and Kubernetes-native observability using the kube-prometheus-stack Helm chart.",
      techIcons: [
        "img/container.png",
        "img/security.png",
        "img/yaml.png"
      ],
      github: "https://github.com/A-Marbach/k3s-infrastructure",
      doc: "/myPortfolio/docs/projects/k3s-infrastructure"
    },


  ];
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="my-projects" className={styles.myProjectHighlights}>
      <div className={styles.wrapper}>
        <h1>My Project Highlights</h1>
        <p className={styles.subtitle}>I build and operate Linux and cloud infrastructure using AWS, Docker, Kubernetes, CI/CD pipelines, monitoring, and automation.</p>

        {/* Desktop */}
        <div className={styles.projectsContainer}>
          <div className={styles.projectList}>
            {projects.map((project, index) => (
              <div
                key={index}
                className={`${styles.projectListItem} ${activeIndex === index ? styles.activeItem : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <span className={styles.projectNumber}>{index + 1}.</span> {project.title}

              </div>
            ))}
            <div
              className={styles.seeMoreWrapper}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <a
                href="https://a-marbach.github.io/myPortfolio/docs/projects/overview/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={isHovered ? "img/see-more-hover.png" : "img/see-more.png"}
                  alt="See more projects"
                  className={styles.seeMoreImage}
                />
              </a>
            </div>
          </div>
          <div className={styles.projectCardWrapper}>
            <div className={styles.projectCard}>
              <div className={styles.leftColumn}>
                <h2 className={styles.projectTitle}>{projects[activeIndex].title}</h2>

                <img src={projects[activeIndex].img} alt={projects[activeIndex].title} className={styles.projectImage} />
              </div>
              <div className={styles.rightColumn}>
                {projects[activeIndex].techIcons.length > 0 && (
                  <div className={styles.techIcons}>
                    {projects[activeIndex].techIcons.map((icon, idx) => (
                      <img key={idx} src={icon} alt="Tech icon" />
                    ))}
                  </div>
                )}
                <p className={styles.projectDescription}>{projects[activeIndex].description}</p>
                <div className={styles.buttons}>
                  <a href={projects[activeIndex].doc} target="_blank" rel="noopener noreferrer" className={styles.docBtn}>Documentation</a>
                  <a href={projects[activeIndex].github} target="_blank" rel="noopener noreferrer" className={styles.githubBtn}>GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Responsive */}
        <div className={styles.projectResponsive}>
          {projects.map((project, index) => (
            <div key={index} className={styles.respCard}>
              <h3 className={styles.respTitle}>{index + 1}. {project.title}</h3>
              {project.techIcons.length > 0 && (
                <div className={styles.respTags}>
                  {project.techIcons.map((icon, idx) => (
                    <img key={idx} src={icon} alt="Tech icon" className={styles.respTagIcon} />
                  ))}
                </div>
              )}
              <img src={project.img} alt={project.title} className={styles.respImage} />
              <p className={styles.respDescription}>{project.description}</p>
              <div className={styles.respButtons}>
                <a href={project.doc} target="_blank" rel="noreferrer">
                  <button className={styles.respButtonLight}>Documentation</button>
                </a>
                <a href={project.github} target="_blank" rel="noreferrer">
                  <button className={styles.respButtonOutline}>GitHub</button>
                </a>
              </div>
            </div>
          ))}

          <div className={styles.seeMoreWrapper}>
            <a
              href="https://github.com/A-Marbach?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={isHovered ? "img/see-more-hover.png" : "img/see-more.png"}
                alt="See more projects"
                className={styles.seeMoreImage}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}