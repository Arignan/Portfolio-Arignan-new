// src/components/Education/Education.jsx
import React from 'react';
import styles from './Education.module.css';
// Corrected Path
import { education } from '../Experience/resumeData';
import { MdSchool, MdCalendarToday, MdLocationOn } from 'react-icons/md'; // Include necessary icons

const Education = () => {
  return (
    <section id="education" className={styles.education}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Education</h2>

        <div className={styles.educationContainer}> {/* Main container */}
          {education && education.length > 0 ? (
            education.map((edu, index) => (
              // Wrapper for each distinct entry
              <div key={edu.id} className={styles.educationEntry}>

                {/* Years positioned separately */}
                <div className={styles.entryYears}>
                  <MdCalendarToday className={styles.metaIcon} aria-hidden="true"/>
                  <span>{edu.years}</span>
                </div>

                {/* Main details block */}
                <div className={styles.entryDetails}>
                   <div className={styles.degreeInstitution}>
                     <MdSchool className={styles.degreeIcon} aria-hidden="true"/>
                     {/* Degree and Institution Grouped */}
                     <div>
                       <h3>{edu.degree}</h3>
                       <p className={styles.institution}>{edu.institution}</p>
                     </div>
                   </div>

                   {/* Location sits below Institution/Degree */}
                   <p className={styles.location}>
                      <MdLocationOn className={styles.metaIcon} aria-hidden="true" />
                      {edu.location}
                   </p>

                   {/* Description (if it exists) */}
                   {edu.description && (
                     <p className={styles.description}>{edu.description}</p>
                   )}
                </div>
              </div>
            ))
          ) : (
            <p className={styles.noEducation}>No education information available yet.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;