import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    title: "Dating App",
    image: "/images/demo1.png",
    description: "Connect with people, find matches, and build meaningful relationships effortlessly.",
    link: "/project",
  },
  {
    title: "Matrimonial App",
    image: "/images/demo2.png",
    description: "A platform designed to bring compatible individuals together for lifelong commitments.",
    link: "/project",
  },
  {
    title: "Astrology App",
    image: "/images/astro-image.png",
    description: "Get personalized horoscope readings, compatibility insights, and cosmic guidance.",
    link: "/project",
  },
];


const ProjectShowcase = () => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "60px 20px",
      backgroundColor: "#21304a", // soft background
    },
    heading: {
      fontSize: "2.8rem",
      fontWeight: "600",
      color: "#333",
      marginBottom: "50px",
      textTransform: "uppercase",
      letterSpacing: "3px",
      textAlign: "center",
      color: "#ff69b4", // sweet pink header
    },
    projectGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: "30px",
      maxWidth: "1200px",
      width: "100%",
      margin: "0 auto",
    },
    projectCard: {
      position: "relative",
      borderRadius: "15px",
      overflow: "hidden",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      backgroundColor: "#fff",
      cursor: "pointer",
    },
    projectCardHover: {
      transform: "scale(1.05)",
      boxShadow: "0 12px 40px rgba(0, 0, 0, 0.2)",
    },
    projectImage: {
      width: "100%",
      height: "auto",
      transition: "transform 0.3s ease",
      borderRadius: "15px",
    },
    overlay: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "#fff",
      textAlign: "center",
      fontSize: "1.3rem",
      fontWeight: "600",
      letterSpacing: "1px",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      padding: "10px 20px",
      borderRadius: "5px",
    },
    projectTitle: {
      fontSize: "1.6rem",
      fontWeight: "500",
      marginTop: "20px",
      color: "#333",
    },
    projectDescription: {
      fontSize: "1rem",
      color: "#666",
      marginTop: "10px",
      lineHeight: "1.4",
    },
    viewMoreBtn: {
      display: "inline-block",
      padding: "12px 20px",
      backgroundColor: "#ff1493", // sweet button color
      color: "#fff",
      borderRadius: "25px",
      textDecoration: "none",
      fontWeight: "700",
      textTransform: "uppercase",
      letterSpacing: "1px",
      marginTop: "15px",
      transition: "background-color 0.3s ease, transform 0.3s ease",
    },
    viewMoreBtnHover: {
      backgroundColor: "#ff69b4", // hover effect darker pink
      transform: "scale(1.05)",
    },
  };

  return (
    <section className="py-28 relative z-10 ">
    <div style={styles.container}>
      <div className="text-center">
      <h5 className="font-Rajdhani text-[19px] font-semibold text-PrimaryColor-0 inline-block relative pl-5 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:h-[10px] before:w-[10px] before:bg-PrimaryColor-0 before:rounded-full">
         Project Demo
          </h5>
          <h1 className="font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[44px] xl:leading-[46px] 2xl:text-[48px] 2xl:leading-[50px] text-white mt-3 mb-4">
        Some of Our Demo {" "}
            <span className="text-PrimaryColor-0">Project</span>
          </h1>
        </div>
      <div style={styles.projectGrid}>
        {projects.map((project, index) => (
          <div
            key={index}
            style={styles.projectCard}
            className="project-card"
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = styles.projectCardHover.transform)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            <img
              src={project.image}
              alt={project.title}
              style={styles.projectImage}
            />
            <div style={styles.overlay}>
              <h3>{project.title}</h3>
            </div>
            <div style={{ padding: "20px" }}>
              <p style={styles.projectDescription}>{project.description}</p>
              <a
                href={project.link}
              >
              <button class="primary-btn aos-init aos-animate mt-5">View More</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default ProjectShowcase;
