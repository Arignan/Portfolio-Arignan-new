// src/components/Footer/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';
// Import desired icons (use consistent set, e.g., Fa or Fi)
import { FaGithub, FaLinkedin, FaLink} from 'react-icons/fa';
// Example icons for reference links
import { FiExternalLink, FiInfo } from 'react-icons/fi';

const Footer = () => {
  const startYear = 2024; // Start year fixed
  const endYear = 2025;   // End year fixed (or use new Date().getFullYear() for current)

  return (
    <footer id="footer" className={styles.footer}> {/* Added id for potential linking */}
      <div className={`${styles.footerContainer} container`}> {/* Use styled container */}

         {/* Social Links (Optional - keep if you want them here AND in Hero) */}
         <div className={styles.socialLinks}>
            <a
              href="https://github.com/arignan" // Update if needed
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className={styles.socialLinkItem}
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/arignansritharan/" // ** UPDATE URL **
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className={styles.socialLinkItem}
            >
              <FaLinkedin />
            </a>
            {/* Add other necessary social links here */}
         </div>

        {/* Reference Links */}
        <div className={styles.referenceLinks}>
          {/* Add your reference links here */}
          <a href="/link-to-source-1" target="_blank" rel="noopener noreferrer">
            <FiInfo aria-hidden="true" /> Reference Site 1
          </a>
          <a href="/link-to-source-2" > {/* Internal link example */}
            <FiExternalLink aria-hidden="true" /> link-to-source-2
          </a>
          <a href="/link-to-source-3">
            <FaLink aria-hidden="true" /> link-to-source-3
          </a>
          {/* Add more links as needed */}
        </div>

        {/* Copyright Text */}
        <div className={styles.copyright}>
          Copyright © {startYear} - {endYear} Arignan Sritharan. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;