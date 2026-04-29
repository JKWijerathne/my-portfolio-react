import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/navbar';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';

function App() {
  const [isLightMode, setIsLightMode] = useState(() => {
    // Check local storage for theme preference
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'light';
  });

  useEffect(() => {
    // Update body class based on theme state
    if (isLightMode) {
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    }
  }, [isLightMode]);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <div className="App">
      <Navbar isLightMode={isLightMode} toggleTheme={toggleTheme} />
      <Home />
      <Skills />
      <Projects />
      <Blogs />
      <Education />
      <Contact />
    </div>
  );
}

export default App;