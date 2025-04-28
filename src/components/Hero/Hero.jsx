import React from 'react';
import styles from './Hero.module.css';
import { TypeAnimation } from 'react-type-animation';

// --- Icon Imports ---
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { FiDownload, FiSend } from 'react-icons/fi';

// --- Image Import ---
// *** CRITICAL: Ensure this path is correct! ***
import profilePic from '../../assets/img/profilepic.jpeg';

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`${styles.heroContainer} container`}>

        {/* === Text Content Area === */}
        <div className={styles.heroTextContent}>
          <h1 className={styles.heroGreeting}>
            {/* The 3D effect is applied via CSS to the highlight span */}
            Hello, I'm <span className={styles.highlight3d}>Arignan Sritharan</span>
          </h1>

          {/* Typing Animation for Roles */}
          <div className={styles.heroRoles}>
            <TypeAnimation
              sequence={[
                // Start with a slightly longer pause
                1000,
                'AI and Robotics Enthusiast.',
                2000,
                'Fullstack Developer.',
                2000,
                'Data Scientist.',
                2000,
                'Software,AI Engineer.',
                2000,
              ]}
              wrapper="h2" // Using h2 semantically fits better for a role title
              speed={50}
              className={styles.typingText}
              repeat={Infinity}
              cursor={true} // Ensure cursor is visible
            />
          </div>

          {/* Introduction Paragraph - RE-ADDED */}
          <p className={styles.heroIntroduction}>
            I specialize in transforming complex challenges into elegant,
            scalable solutions through cross-disciplinary expertise in <span className={styles.expertise}>Artificial
            Intelligence</span>, <span className={styles.expertise}>Data Science</span>, and <span className={styles.expertise}>Software Engineering</span>.
          </p>

          {/* Action Buttons */}
          <div className={styles.heroActions}>
            <a
              href="/path/to/your/cv.pdf" // *** CRITICAL: UPDATE CV PATH ***
              download
              className={`${styles.ctaButton} ${styles.resumeButton}`}
              aria-label="Download my CV"
            >
              <FiDownload aria-hidden="true" className={styles.buttonIcon} />
              Download CV
            </a>
            <a
              href="#contact" // Links to your contact section
              className={`${styles.ctaButton} ${styles.contactButton}`}
              aria-label="Go to contact section"
            >
              <FiSend aria-hidden="true" className={styles.buttonIcon} />
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className={styles.heroSocials}>
            <span className={styles.socialsLabel}>Connect:</span> {/* Optional Label */}
            <a
              href="https://www.linkedin.com/in/arignansritharan/" // *** CRITICAL: Update URL ***
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://leetcode.com/arignan03/" // *** CRITICAL: Update URL ***
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LeetCode Profile"
            >
              <SiLeetcode />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100008011605475&mibextid=ZbWKwL" // *** CRITICAL: Update URL ***
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Facebook Profile"
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com/arignan" // *** CRITICAL: Update URL ***
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/arignan_03?igsh=MWN5dDN5cXI0cGljYQ==" // *** CRITICAL: Update URL ***
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Instagram Profile"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* === Image Area === */}
        <div className={styles.heroImageContainer}>
          <img
            src={profilePic}
            alt="Arignan Sritharan Portrait" // More descriptive alt text
            className={styles.profileImage}
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;