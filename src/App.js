import React from 'react';
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
    <div className="App">  
      <NavBar />
      <div id="content">
      <Intro />
      <About />
      <Certifications />
      <Projects />
      </div>
      </div>
  
  
  );
}

export default App;
