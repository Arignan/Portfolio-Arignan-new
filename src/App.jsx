// src/App.jsx
import React from 'react';

// Import Components (make sure extensions are .jsx)
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Experience from './components/Experience/Experience.jsx'; // Import Experience
import Education from './components/Education/Education.jsx';   // Import Education
import Skills from './components/Skills/Skills.jsx';
import Projects from './components/Projects/Projects.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience /> {/* Add Experience component */}
        <Education />  {/* Add Education component */}
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;