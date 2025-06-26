import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-primary text-text-primary transition-colors duration-300">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Achievements />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;