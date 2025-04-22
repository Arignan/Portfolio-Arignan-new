// src/components/CertificateDisplayCard/CertificateDisplayCard.jsx
import React from 'react';
import styles from './CertificateDisplayCard.module.css';
import { FiExternalLink } from 'react-icons/fi'; // Icon for external link indicator

const CertificateDisplayCard = ({ title, issuer, date, imageUrl, displayUrl }) => {

  // Determine if the display URL is external (simple check)
  const isExternal = displayUrl && displayUrl.startsWith('http');

  return (
    <div className={styles.card}>
      <a
        href={displayUrl}
        target="_blank"
        rel="noopener noreferrer" // Good practice for external links
        className={styles.imageLink}
        aria-label={`View certificate or verification for ${title}`}
      >
        <img
          src={imageUrl} // Use the specific image URL for display
          alt={`Certificate: ${title}`}
          loading="lazy"
          className={styles.cardImage}
          // Add onError placeholder if needed:
          // onError={(e) => { e.target.onerror = null; e.target.src="/path/to/placeholder.png"; }}
        />
         {/* Simple overlay/icon indicating click action */}
         <div className={styles.clickIndicator}>
            <FiExternalLink />
         </div>
      </a>
      <div className={styles.cardInfo}>
        <h4 className={styles.cardTitle}>{title}</h4>
        <p className={styles.cardMeta}>
          <span className={styles.issuer}>{issuer}</span>
          {date && <span className={styles.date}>Issued: {date}</span>}
        </p>
      </div>
    </div>
  );
};

export default CertificateDisplayCard;