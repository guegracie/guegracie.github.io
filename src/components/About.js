import React from "react";
import "../styles/About.css";

class About extends React.Component {
  render() {
    const one = (
      <p>
        I recently graduated with a Bachelor's degree in <b>Computer Science</b> from {" "}
        <a href="https://www.utrgv.edu/">UTRGV</a>. During my time there, I had the opportunity to be an active member
        of <a href="https://fronteradevs.com">Frontera Devs</a>, where I mentored and assisted students beginning their journey into tech.
      </p>
    );

    const two = (
      <p>
      I'm now CompTIA Security+ (SY0-701) certfied and excited to apply my skills in cybersecurity. I'm actively seeking hands-on experience
      in cybersecurity where I can apply my Security+ certification and software development skills and deepen my knowledge
      of threat detection, incident response, and secure system design.
    </p>
    );

    const three = (
      <p>
        Outside of tech, you'll ususally find me at the gym, listening to music,
        watching movies, or keeping up with the latest in Formula 1.
      </p>
    );

    const tech_stack = [
      "JavaScript",
      "React.js",
      "Python", 
      "C++"
    ];

    return (
      <div id="about">
        <div className="section-header">
          <span className="section-title">about me</span>
        </div>
        <div className="about-content">
          <div className="about-description">
            {one}
            {two}
            <p>Some languages I've been working with:</p>
            <ul className="tech-stack">
              {tech_stack.map((tech_item, i) => (
                <li key={i}>{tech_item}</li>
              ))}
            </ul>
            {three}
          </div>
          <div className="about-image">
            <img src={"/assets/meAtSWE.jpg"} alt="Gracie Guevara" />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
