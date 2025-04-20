// src/components/Projects/Projects.js
import React from 'react';
import styles from './Projects.module.css';
import { projects } from './projectData.js'; // Import project data

// Optional: Create a ProjectCard component for better organization
const ProjectCard = ({ project }) => {
  return (
    <div className={styles.projectCard}>
      <img src={project.imageUrl} alt={project.title} className={styles.projectImage} />
      <div className={styles.projectInfo}>
        <h3>{project.title}</h3>
        <p className={styles.projectDescription}>{project.description}</p>
        <div className={styles.techStack}>
          {project.techStack.map((tech, index) => (
            <span key={index} className={styles.techTag}>{tech}</span>
          ))}
        </div>
        <div className={styles.projectLinks}>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
            Live Demo
          </a>
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <h2>My Projects</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;