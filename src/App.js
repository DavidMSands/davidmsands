import './App.css';
import React, { useState } from 'react';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Greeting from './Components/Greeting';
import Navbar from './Components/Navbar';
import Blog from './Components/Blog';
import Footer from './Components/Footer';


function App() {
  const [deg, setDeg] = useState(360)

  function transformMouse(e) {
    setDeg(e.clientX/-3)
  }
  

  return (
    <div className="App" onMouseMove={transformMouse}>
      <Navbar />
      <Greeting deg={deg}/>
      <Projects />
      <About />
      <Skills />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
