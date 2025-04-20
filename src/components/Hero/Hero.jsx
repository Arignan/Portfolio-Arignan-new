import React from 'react';
import styles from './Hero.module.css';
import { TypeAnimation } from 'react-type-animation'; // Assuming you installed this
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Add other icons if needed
import { FiDownload } from 'react-icons/fi'; // Download icon
// Optional: Add a down arrow icon for scroll hint
import { FiArrowDownCircle } from 'react-icons/fi';

const Hero = () => {
  return (
    // Using <section> is semantically correct for a major page part
    <section id="hero" className={styles.hero}>
      {/* Optional: Add decorative background elements here if desired */}
      {/* <div className={styles.backgroundShapes}></div> */}

      <div className={`${styles.heroContainer} container`}>
        <h1 className={styles.heroTitle}>
          Hi, I'm <span className={styles.highlight}>Arignan Sritharan</span>
        </h1>

        <div className={styles.heroSubtitle}>
          <span className={styles.staticText}>I'm a </span>
          <TypeAnimation
            sequence={[
              'Web Developer.',
              1500,
              'AI and Robotics Engineering Enthusiast.',
              1500,
              'Problem Solver.',
              1500,
              'Lifelong Learner.',
              1500,
            ]}
            wrapper="span"
            speed={50}
            className={styles.typingText} // Apply specific styles
            repeat={Infinity}
          />
        </div>

        <p className={styles.heroDescription}>
          I specialize in building modern, responsive, and user-friendly web
          applications. Let's create something amazing together!
        </p>

        {/* Call to Action Buttons & Links */}
        <div className={styles.heroActions}>
          <a
            href="/path/to/your/resume.pdf" // *** IMPORTANT: Update this path ***
            download
            className={`${styles.ctaButton} ${styles.resumeButton}`}
          >
            <FiDownload className={styles.buttonIcon} />
            My Resume
          </a>
          <a
            href="#contact" // Link to contact section
            className={`${styles.ctaButton} ${styles.contactButton}`}
          >
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
        <div className={styles.heroSocials}>
          <a
            href="https://github.com/arignan" // *** IMPORTANT: Update this URL ***
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/your-profile" // *** IMPORTANT: Update this URL ***
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
          {/* Add other social links as needed */}
        </div>
      </div>

      {/* Optional Scroll Down Hint */}
      <a href="#about" className={styles.scrollDownHint} aria-label="Scroll down to About section">
         <FiArrowDownCircle />
      </a>
    </section>
  );
};

export default Hero;