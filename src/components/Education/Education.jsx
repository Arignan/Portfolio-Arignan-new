// src/components/Education/Education.jsx
import React from 'react';
import styles from './Education.module.css';
import { education } from '../Experience/resumeData'; // Import the education data

const Education = () => {
  return (
    <section id="education" className={styles.education}>
      <div className="container">
        <h2>Education</h2>
        <div className={styles.educationList}>
          {education.map((edu) => (
            <div key={edu.id} className={styles.educationItem}>
              <h3>{edu.degree}</h3>
              <p className={styles.institution}>
                {edu.institution}, {edu.location}
              </p>
              <p className={styles.years}>{edu.years}</p>
              {edu.description && ( // Conditionally render description if it exists
                 <p className={styles.description}>{edu.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;