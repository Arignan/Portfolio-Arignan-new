// src/components/About/About.js
import React from 'react';
import styles from './About.module.css';
// Import your profile picture if it's in src, otherwise use public folder path
// import profilePic from './path/to/your/image.jpg';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <h2>About Me</h2>
        <div className={styles.aboutContent}>
          <div className={styles.aboutImage}>
            {/* If image is in public folder: */}
            <img src="/images/profile.jpg" alt="Arignan G" />
            {/* If image is imported from src: */}
            {/* <img src={profilePic} alt="Arignan G" /> */}
          </div>
          <div className={styles.aboutText}>
            <p>
              Hello! I'm Arignan, a passionate web developer focused on creating
              interactive and user-friendly web applications. I enjoy tackling
              challenges and continuously learning new technologies.
            </p>
            <p>
              My journey into web development started with [Your Story Briefly].
              Since then, I've worked with technologies like React, Node.js,
              and more to build [Types of Projects].
            </p>
            <p>
              When I'm not coding, I enjoy [Your Hobbies/Interests].
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;