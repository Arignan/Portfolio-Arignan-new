// src/components/Contact/Contact.jsx
import React from 'react';
import styles from './Contact.module.css';

// Import necessary icons
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { MdLocationPin } from 'react-icons/md';
import { PiDogFill } from "react-icons/pi"; // Dagshub substitute

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={`${styles.contactContainer} container`}>
        <h2 className={styles.sectionTitle}>Get In Touch</h2>
        <p className={styles.contactIntro}>
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions. Feel free to connect!
        </p>

        {/* Combined Contact Info: Social Links & Address */}
        <div className={styles.contactDetails}>

           {/* Social Links Section */}
           <div className={styles.socialLinks}>
             {/* Version 1: Icons only */}
             <a href="YOUR_LINKEDIN_URL" /* ** UPDATE ** */ target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className={styles.socialLinkItem}><FaLinkedin /></a>
             <a href="YOUR_LEETCODE_URL" /* ** UPDATE ** */ target="_blank" rel="noopener noreferrer" aria-label="LeetCode Profile" className={styles.socialLinkItem}><SiLeetcode /></a>
             <a href="YOUR_FACEBOOK_URL" /* ** UPDATE ** */ target="_blank" rel="noopener noreferrer" aria-label="Facebook Profile" className={styles.socialLinkItem}><FaFacebook /></a>
             <a href="https://github.com/arignan" /* ** UPDATE ** */ target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className={styles.socialLinkItem}><FaGithub /></a>
             <a href="YOUR_DAGSHUB_URL" /* ** UPDATE ** */ target="_blank" rel="noopener noreferrer" aria-label="Dagshub Profile" className={styles.socialLinkItem}><PiDogFill /></a>
             <a href="YOUR_INSTAGRAM_URL" /* ** UPDATE ** */ target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile" className={styles.socialLinkItem}><FaInstagram /></a>

              {/* --- OR --- */}
             {/* Version 2: Icons with text (Uncomment below, comment above) */}
             {/*
             <a href="YOUR_LINKEDIN_URL" target="_blank" rel="noopener noreferrer" className={styles.socialLinkItemText}> <FaLinkedin /> LinkedIn </a>
             <a href="YOUR_LEETCODE_URL" target="_blank" rel="noopener noreferrer" className={styles.socialLinkItemText}> <SiLeetcode /> LeetCode </a>
             <a href="YOUR_FACEBOOK_URL" target="_blank" rel="noopener noreferrer" className={styles.socialLinkItemText}> <FaFacebook /> Facebook </a>
             <a href="https://github.com/arignan" target="_blank" rel="noopener noreferrer" className={styles.socialLinkItemText}> <FaGithub /> GitHub </a>
             <a href="YOUR_DAGSHUB_URL" target="_blank" rel="noopener noreferrer" className={styles.socialLinkItemText}> <PiDogFill /> Dagshub </a>
             <a href="YOUR_INSTAGRAM_URL" target="_blank" rel="noopener noreferrer" className={styles.socialLinkItemText}> <FaInstagram /> Instagram </a>
             */}
           </div>

           {/* Address Section */}
           <div className={styles.addressInfo}>
               <MdLocationPin className={styles.addressIcon} aria-hidden="true"/>
               <span>Kilinochchi, Sri Lanka</span>
           </div>
        </div>

        {/* Commented-out Form Placeholder */}
        {/*
        <h3 className={styles.formHeading}>Or Send a Message</h3>
        <form className={styles.contactForm}>
            // ... form fields ...
        </form>
        */}
      </div>
    </section>
  );
};

export default Contact;