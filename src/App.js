import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Roles from './components/Roles';
import Contact from './components/Contact';



const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Education />
      <Projects />
      <Roles />
      <Contact />
    </div>
  );
};

export default App;
