// src/components/Projects/Projects.jsx
import React, { useState } from 'react'; // Only useState needed
import styles from './Projects.module.css';
import { projects } from './projectData.js'; // Ensure path
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// --- ProjectCard Sub-Component (NO CHANGES NEEDED) ---
// Use the exact same ProjectCard JSX component code as before
const ProjectCard = ({ project }) => {
  const imageSrc = project.imageUrl || '/images/placeholder-project.png';
  return (
    <div className={styles.projectCard}>
        <div className={styles.imageContainer}>
           <img src={imageSrc} alt={`${project.title} screenshot`} className={styles.projectImage} loading="lazy"/>
           <div className={styles.overlay}>{/* ... overlay links ... */}
              {project.liveUrl && ( <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.overlayLink}><FiExternalLink/> Demo</a> )}
              {project.repoUrl && ( <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={styles.overlayLink}><FiGithub/> Code</a> )}
           </div>
        </div>
        <div className={styles.projectInfo}>{/* ... title, tags, description ... */}
           <h3 className={styles.projectTitle}>{project.title}</h3>
           <div className={styles.techStack}>{ project.techStack.map((tech, index) => ( <span key={index} className={styles.techTag}>{tech}</span> ))}</div>
           <p className={styles.projectDescription}>{project.description}</p>
        </div>
    </div>
  );
};


// --- Main Projects Component (with PAGINATION Logic - REVISED) ---
const Projects = () => {
  const projectsPerPage = 8; // Display 8 projects (visually 4x2)
  const [currentPage, setCurrentPage] = useState(1); // Page state

  const totalProjects = projects.length;
  const totalPages = Math.ceil(totalProjects / projectsPerPage);

  // Calculate which projects to display for the current page
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = Math.min(startIndex + projectsPerPage, totalProjects); // Ensure endIndex doesn't exceed total
  const visibleProjects = projects.slice(startIndex, endIndex); // Slice the array

  const handlePrev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1)); // Go back, min page 1
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages)); // Go forward, max page totalPages
  };

  // Scroll to the top of the projects section when page changes (Optional but good UX)
  const projectsSectionRef = React.useRef(null);
  React.useEffect(() => {
      if (projectsSectionRef.current && currentPage !== 1) { // Don't scroll on initial load
          // Small delay to allow rendering maybe?
          // setTimeout(() => {
              projectsSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // }, 100);
      }
  }, [currentPage]);


  return (
    <section id="projects" className={styles.projects} ref={projectsSectionRef}> {/* Added ref */}
      <div className="container">
        <h2 className={styles.sectionTitle}>Featured Projects</h2>

        {/* Grid container - Renders ONLY the 'visibleProjects' slice */}
        <div className={styles.projectsGrid}>
           {visibleProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
           {/* Add empty divs to fill grid space if last page is not full (Optional) */}
           {/* {Array.from({ length: projectsPerPage - visibleProjects.length }).map((_, index) =>
              <div key={`placeholder-${index}`} className={styles.gridPlaceholder}></div>
           )} */}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
           <div className={styles.paginationControls}>
               <button
                   onClick={handlePrev}
                   disabled={currentPage === 1}
                   className={styles.pageButton}
                   aria-label="Previous Page"
               >
                   <FiChevronLeft /> Previous
               </button>
               <span className={styles.pageInfo}>
                   Page {currentPage} of {totalPages}
               </span>
               <button
                   onClick={handleNext}
                   disabled={currentPage === totalPages}
                   className={styles.pageButton}
                   aria-label="Next Page"
               >
                   Next <FiChevronRight />
               </button>
           </div>
        )}

        {projects.length === 0 && (
           <p className={styles.noProjects}>More projects coming soon!</p>
        )}
      </div>
    </section>
  );
};
export default Projects;