// src/components/Contact/Contact.js
import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  // Add form state and handling logic later
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <h2>Get In Touch</h2>
        <p className={styles.contactIntro}>
          Have a question or want to work together? Feel free to reach out!
        </p>
        {/* Simple contact info display - replace with a form later */}
        <div className={styles.contactInfo}>
          <p>
            <strong>Email:</strong> <a href="mailto:your.email@example.com">your.email@example.com</a>
          </p>
          <p>
            <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">linkedin.com/in/your-profile</a>
          </p>
           {/* Add GitHub or other links if desired */}
        </div>

        {/* Placeholder for a future form:
        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
        */}
      </div>
    </section>
  );
};

export default Contact;