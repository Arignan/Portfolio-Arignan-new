import React, { useState, useEffect, useRef } from 'react'; // Import useRef
import styles from './Navbar.module.css';
import logoImage from '../../assets/img/logo.jpg';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Refs for the menu and the button
  const menuRef = useRef(null); // Ref for the <ul> menu element
  const buttonRef = useRef(null); // Ref for the hamburger <button>

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu (used by links and outside click)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Effect for navbar scroll background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Effect for handling clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if menu is open
      // Check if the click is outside the menuRef element
      // Check if the click is also outside the buttonRef element (important!)
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    // Add listener when the menu is open
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      // Remove listener if menu is closed (or wasn't open)
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup function: Important to remove listener when component unmounts
    // or before the effect runs again if dependencies change
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]); // Re-run this effect when isMenuOpen changes

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`${styles.navbarContainer} container`}>
        {/* Logo */}
        <a href="#hero" className={styles.logoLink} onClick={closeMenu}>
          <img
            src={logoImage}
            alt="Arignan G Logo"
            className={styles.logoImage}
          />
        </a>

        {/* Hamburger Menu Button (Mobile) - Attach the ref */}
        <button
          ref={buttonRef} // <-- Attach button ref here
          className={styles.hamburgerButton}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Menu - Attach the ref */}
        <ul
          ref={menuRef} // <-- Attach menu ref here
          className={`${styles.navMenu} ${
            isMenuOpen ? styles.navMenuMobileOpen : ''
          }`}
        >
          {/* Links remain the same, using closeMenu onClick */}
          <li className={styles.navItem}>
            <a href="#about" className={styles.navLink} onClick={closeMenu}>
              About
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              href="#experience"
              className={styles.navLink}
              onClick={closeMenu}
            >
              Experience
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              href="#education"
              className={styles.navLink}
              onClick={closeMenu}
            >
              Education
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#skills" className={styles.navLink} onClick={closeMenu}>
              Skills
            </a>
          </li>
          <li className={styles.navItem}>
            <a
              href="#projects"
              className={styles.navLink}
              onClick={closeMenu}
            >
              Projects
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#contact" className={styles.navLink} onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;