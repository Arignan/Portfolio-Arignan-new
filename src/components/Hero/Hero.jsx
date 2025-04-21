import React from 'react';
import styles from './Hero.module.css';
import { TypeAnimation } from 'react-type-animation';

// --- Icon Imports ---
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si'; // Simple Icons for LeetCode
import { FiDownload, FiSend } from 'react-icons/fi'; // Download & Send (for contact) icons

// --- Image Import ---
// *** IMPORTANT: Make sure this path is correct! ***
import profilePic from '../../assets/img/profilepic.jpeg';

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`${styles.heroContainer} container`}>

        {/* === Text Content Area === */}
        <div className={styles.heroTextContent}>
          <h1 className={styles.heroGreeting}>
            {/* Note: The 3D effect is applied via CSS to the highlight span */}
            I'm <span className={styles.highlight3d}>Arignan Sritharan</span>
          </h1>

          {/* Typing Animation for Roles */}
          <div className={styles.heroRoles}>
            <TypeAnimation
              sequence={[
                'AI and Robotics Enthusiast.',
                2000,
                'Fullstack Developer.',
                2000,
                'Data Scientist.', // Add another role if desired
                2000,
                'Software Engineer.',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className={styles.typingText} // Use for styling the animated text
              repeat={Infinity}
            />
          </div>

          {/* Action Buttons */}
          <div className={styles.heroActions}>
            <a
              href="/path/to/your/cv.pdf" // *** UPDATE CV PATH ***
              download
              className={`${styles.ctaButton} ${styles.resumeButton}`}
              aria-label="Download my CV"
            >
              <FiDownload className={styles.buttonIcon} />
              Download CV
            </a>
            <a
              href="#contact" // Links to your contact section
              className={`${styles.ctaButton} ${styles.contactButton}`}
              aria-label="Go to contact section"
            >
              <FiSend className={styles.buttonIcon} /> {/* Changed icon */}
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className={styles.heroSocials}>
             <a
              href="YOUR_LINKEDIN_URL" // *** Update URL ***
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a
              href="YOUR_LEETCODE_URL" // *** Update URL ***
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LeetCode Profile"
            >
              <SiLeetcode />
            </a>
            <a
              href="YOUR_FACEBOOK_URL" // *** Update URL ***
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Facebook Profile"
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com/arignan" // *** Update URL ***
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a
              href="YOUR_INSTAGRAM_URL" // *** Update URL ***
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
          {/* Image Background Shape REMOVED */}
          <img
            src={profilePic}
            alt="Arignan Sritharan"
            className={styles.profileImage}
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;