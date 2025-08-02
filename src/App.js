import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import './App.css';
import './styles/Global.css';
import 'rsuite/styles/index.less';
import SOCLab from './components/cyber-portfolio/SOCLab';

function App() {
  return (
  <Router>
    <NavBar />
    <Routes>
      <Route
        path="/"
        element={
          <>
          <div className="intro-about-wrapper">
            <Intro />
            <About />
            </div>
            <Certifications />
            <Projects />
          </>
        }
        />
       <Route path="/soc-lab" element={<SOCLab/>} />
    </Routes>
    </Router>
  );
}

export default App;
