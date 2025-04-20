// src/components/Footer/Footer.js
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
           <div className={styles.socialLinks}>
             {/* Repeat social links or add different ones */}
             <a href="https://github.com/arignan" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
               {/* Add icon here later using an icon library or SVG */}
               GitHub
             </a>
             <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
               LinkedIn
             </a>
             {/* Add other links like Twitter, etc. */}
           </div>
           <p className={styles.copyright}>
             © {currentYear} Arignan G. All rights reserved.
           </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;