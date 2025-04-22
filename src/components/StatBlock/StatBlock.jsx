// src/components/StatBlock/StatBlock.jsx
import React from 'react';
import styles from './StatBlock.module.css';
// Import necessary icons - you'll pass these in
// Example imports (make sure parent imports them)
// import { FiDatabase, FiCpu, FiCode, FiAward, FiFileText, FiBriefcase, FiActivity } from 'react-icons/fi';
// import { VscProject } from "react-icons/vsc";

// Represents a single line item within the stat block
const StatItem = ({ label, value, icon }) => (
    <div className={styles.statItem}>
        {icon && <span className={styles.itemIcon}>{icon}</span>}
        <span className={styles.itemLabel}>{label}</span>
        <span className={styles.itemValue}>{value}</span>
    </div>
);


// The main component to hold categories of stats
const StatBlock = ({ projectStats, careerStats }) => {
  // projectStats and careerStats should be objects like:
  // projectStats = { total: 15, ds: 5, ai: 4, swe: 6, isUpdated: true }
  // careerStats = { certs: 3, awards: 5, publications: 1, expYears: 2 }

  return (
    <div className={styles.statBlockContainer}>
      {/* Optional Blinking dot if needed - maybe on the container */}
      {projectStats.isUpdated && <div className={styles.updateIndicator}></div>}

      <div className={styles.statCategory}>
         <h4 className={styles.categoryTitle}>Project Statistics</h4>
         <StatItem label="Total Personal Projects" value={projectStats.total} icon={projectStats.totalIcon} />
         <StatItem label="Data Science & Analytics" value={projectStats.ds} icon={projectStats.dsIcon}/>
         <StatItem label="AI/ML & Robotics Eng." value={projectStats.ai} icon={projectStats.aiIcon} />
         <StatItem label="Software Engineering" value={projectStats.swe} icon={projectStats.sweIcon}/>
      </div>

      <div className={styles.separator}></div> {/* Visual separator */}

      <div className={styles.statCategory}>
          <h4 className={styles.categoryTitle}>Career & Academic</h4>
          <StatItem label="Certifications" value={careerStats.certs} icon={careerStats.certsIcon}/>
          <StatItem label="Awards / Recognitions" value={careerStats.awards} icon={careerStats.awardsIcon}/>
          <StatItem label="Research Publications" value={careerStats.publications} icon={careerStats.publicationsIcon} />
          <StatItem label="Years of Experience" value={careerStats.expYears} icon={careerStats.expYearsIcon} />
      </div>
    </div>
  );
};

export default StatBlock;