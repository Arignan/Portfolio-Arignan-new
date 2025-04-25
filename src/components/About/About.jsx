// src/components/About/About.jsx
import React from 'react';
import styles from './About.module.css';
import StatBlock from '../StatBlock/StatBlock'; // Import the new component

// --- ICONS --- (Make sure all needed are imported)
import { FiDatabase, FiCpu, FiCode, FiAward, FiFileText, FiBriefcase, FiActivity, FiBookOpen, FiTrendingUp } from 'react-icons/fi';
import { VscProject } from "react-icons/vsc";

const About = () => {
  // --- STATS DATA (Consolidated) ---
  const projectStats = {
      total: 5, totalIcon: <VscProject />,
      ds: 1,     dsIcon: <FiDatabase />,
      ai: 1,     aiIcon: <FiCpu />,
      swe: 3,    sweIcon: <FiCode />,
      isUpdated: true // For the blinking dot
  };
  const careerStats = {
      certs: 2,           certsIcon: <FiAward />, // Or FiFileText
      awards: 0,          awardsIcon: <FiAward />,
      publications: 0,    publicationsIcon: <FiFileText />,
      expYears: 1,        expYearsIcon: <FiBriefcase />
  };

  // --- ACHIEVEMENTS DATA ---
  const achievements = [
      //{ id: 1, title: "Dean's List - All Semesters", issuer: "University of Technology", year: "2025-2028", icon: <FiAward />},
      //{ id: 2, title: "1st Place - University Hackathon", issuer: "Tech Club", year: "2027", icon: <FiTrendingUp/> }, // Changed Icon
      { id: 3, title: "Top 5% - LeetCode Weekly Contest", issuer: "LeetCode", year: "2026", icon: <FiActivity/> } // Changed Icon
      // Add more
  ];

  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <h2 className={styles.sectionTitle}>About Me</h2>

        {/* --- Unified Statistics Block --- */}
        <div className={styles.statsSection}>
           <StatBlock projectStats={projectStats} careerStats={careerStats} />
        </div>


        {/* --- Curiosity Section - Restyled --- */}
        <div className={styles.curiositySection}>
            <h3 className={styles.subHeading}>Fields of Curiosity</h3>
             {/* Using inline blocks or tags for topics */}
             <div className={styles.topicsContainer}>
                <span className={styles.topicTag}>Artificial Intelligence</span>
                <span className={styles.topicTag}>Software Engineering</span>
                <span className={styles.topicTag}>Data Science & Analytics</span>
                <span className={styles.topicTag}>Mathematics & Physics</span>
                <span className={styles.topicTag}>Robotics</span>
                <span className={styles.topicTag}>Electrical Engineering</span>
                <span className={styles.topicTag}>Mechanical Engineering</span>
             </div>
            <p className={styles.curiosityFooter}>
                Exploring computational insights to innovate beyond traditional boundaries.
            </p>
        </div>


        {/* --- Awards & Achievements Section - Polished --- */}
        <div className={styles.achievementsSection}>
           <h3 className={styles.subHeading}>Awards & Recognition</h3>
            {achievements && achievements.length > 0 ? (
              <ul className={styles.achievementsList}>
                  {achievements.map(ach => (
                      <li key={ach.id} className={styles.achievementItem}> {/* Changed class */}
                           <span className={styles.achievementIcon}>{ach.icon}</span>
                           <div className={styles.achievementText}>
                              <span className={styles.achievementTitle}>{ach.title}</span>
                              <span className={styles.achievementIssuer}>({ach.issuer}, {ach.year})</span>
                          </div>
                      </li>
                  ))}
              </ul>
            ) : (
                <p className={styles.noAchievements}>No notable achievements listed yet.</p>
            )}
        </div>

      </div>
    </section>
  );
};

export default About;