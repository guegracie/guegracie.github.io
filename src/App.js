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

function App() {
  return (
  <Router>
    <NavBar />
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Intro />
            <About />
            <Certifications />
            <Projects />
          </>
        }
        />
    </Routes>
    </Router>
  );
}

export default App;
