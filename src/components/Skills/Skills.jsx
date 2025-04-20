// src/components/Skills/Skills.js
import React from 'react';
import styles from './Skills.module.css';

// You can store skills data here or import from a separate file
const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript (ES6+)", "HTML5", "CSS3", "Python"] // Add your skills
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React", "Node.js", "Express", /* Add others */ ]
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "npm/yarn", "Vite", /* Add others */ ]
  },
  {
    title: "Databases",
    skills: ["MongoDB", "SQL (Basic)", /* Add others */ ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <h2>My Skills</h2>
        <div className={styles.skillsGrid}>
          {skillCategories.map((category, index) => (
            <div key={index} className={styles.skillCategory}>
              <h3>{category.title}</h3>
              <ul>
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;