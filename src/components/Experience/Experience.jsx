// src/components/Experience/Experience.jsx
import React from 'react';
import styles from './Experience.module.css';
import { experience } from './resumeData'; // Import the experience data

const Experience = () => {
  return (
    <section id="experience" className={styles.experience}>
      <div className="container">
        <h2>Work Experience</h2>
        <div className={styles.timeline}>
          {experience.map((job) => (
            <div key={job.id} className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>{job.title}</h3>
                <p className={styles.company}>
                  {job.company} | {job.location}
                </p>
                <span className={styles.years}>{job.years}</span>
                <ul className={styles.responsibilities}>
                  {job.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;