// src/components/Skills/Skills.jsx
import React, { useState } from 'react';
import styles from './Skills.module.css';
// ** Make sure path is correct **
import { skillsData } from './skillsData.jsx'; // Import the new data structure

const Skills = () => {
  const [activeTab, setActiveTab] = useState('technical'); // Default tab

  const renderSkillItem = (skill, index) => (
      <div key={index} className={styles.skillItem}>
         {/* Render icon if provided */}
         {skill.icon && <span className={styles.skillIcon}>{skill.icon}</span>}
         <span className={styles.skillName}>{skill.name}</span>
      </div>
  );

  const renderToolCategory = (category, index) => (
      <div key={index} className={styles.toolCategory}>
         <h4 className={styles.toolCategoryTitle}>{category.category}</h4>
         <div className={styles.skillTagList}>
            {category.tools.map((tool, toolIndex) => (
                <span key={toolIndex} className={styles.skillTag}>
                    {/* Optional icon inside tag */}
                   {tool.icon && <span className={styles.tagIcon}>{tool.icon}</span>}
                   {tool.name}
                </span>
            ))}
         </div>
      </div>
  );


  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Skills</h2> {/* Reuse style */}

        {/* Tab Buttons */}
        <div className={styles.skillTabs}>
          <button
            className={`${styles.tabButton} ${activeTab === 'technical' ? styles.active : ''}`}
            onClick={() => setActiveTab('technical')}
          >
            Technical
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === 'tool' ? styles.active : ''}`}
            onClick={() => setActiveTab('tool')}
          >
            Tools & Technologies
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === 'soft' ? styles.active : ''}`}
            onClick={() => setActiveTab('soft')}
          >
            Soft Skills
          </button>
           <button
            className={`${styles.tabButton} ${activeTab === 'other' ? styles.active : ''}`}
            onClick={() => setActiveTab('other')}
          >
            Other
          </button>
        </div>

        {/* Tab Content Area */}
        <div className={styles.tabContentContainer}>
            {/* --- Technical Skills --- */}
            <div id="technical" className={`${styles.tabContent} ${activeTab === 'technical' ? styles.active : ''}`}>
               <div className={styles.skillGrid}> {/* Grid for icon+name items */}
                   {skillsData.technical.map(renderSkillItem)}
               </div>
            </div>

            {/* --- Tool Skills --- */}
             <div id="tool" className={`${styles.tabContent} ${activeTab === 'tool' ? styles.active : ''}`}>
                 <div className={styles.toolCategoriesContainer}> {/* Container for category blocks */}
                    {skillsData.tool.map(renderToolCategory)}
                 </div>
             </div>

            {/* --- Soft Skills --- */}
            <div id="soft" className={`${styles.tabContent} ${activeTab === 'soft' ? styles.active : ''}`}>
               <div className={styles.skillGrid}> {/* Reuse grid style */}
                   {skillsData.soft.map(renderSkillItem)}
               </div>
            </div>

            {/* --- Other Skills --- */}
            <div id="other" className={`${styles.tabContent} ${activeTab === 'other' ? styles.active : ''}`}>
                <div className={styles.skillGrid}> {/* Reuse grid style */}
                   {skillsData.other.map(renderSkillItem)}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;