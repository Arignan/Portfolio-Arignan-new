// src/components/Experience/Experience.jsx
// NO CHANGES NEEDED - Use the same JSX as before
import React from 'react';
import styles from './Experience.module.css';
import { experience } from './resumeData';
import { MdLocationOn } from 'react-icons/md';


const Experience = () => {
  return (
    <section id="experience" className={styles.experience}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Work Experience</h2>
        <div className={styles.timelineContainer}>
          {experience && experience.length > 0 ? (
            experience.map((job) => (
              <div key={job.id} className={styles.timelineItem}>
                <div className={styles.timelineMarkerContainer}> {/* Added container for animation */}
                   <div className={styles.timelineMarker}></div>
                </div>
                <div className={styles.timelineContent}>
                  <div className={styles.contentHeader}>
                     <h3>{job.title}</h3>
                     <span className={styles.years}>{job.years}</span>
                  </div>
                  <div className={styles.companyLocation}>
                      <span className={styles.companyName}>{job.company}</span>
                      {job.location && (
                          <span className={styles.location}>
                              <MdLocationOn className={styles.locationIcon} aria-hidden="true" />
                              {job.location}
                          </span>
                      )}
                  </div>
                  <ul className={styles.responsibilities}>
                    {job.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))
          ) : (
            <p className={styles.noExperience}>No work experience available yet.</p>
          )}
        </div>
        
      </div>
    </section>
  );
};

export default Experience;