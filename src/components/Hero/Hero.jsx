// src/components/Hero/Hero.js
import React from 'react';
import styles from './Hero.module.css';
// You might want a typing animation library later
// import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`${styles.heroContainer} container`}>
        <h1 className={styles.heroTitle}>Hi, I'm Arignan G</h1>
        <p className={styles.heroSubtitle}>
          {/* Replace with a typing animation component later */}
          I'm a Web Developer & Tech Enthusiast
        </p>
        <div className={styles.heroLinks}>
          {/* Add proper links */}
          <a href="/path/to/your/resume.pdf" download className={styles.ctaButton}>
            Download Resume
          </a>
          <a href="https://github.com/arignan" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            GitHub
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;