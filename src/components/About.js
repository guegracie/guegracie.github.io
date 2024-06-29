import React from "react";
import "../styles/About.css";

class About extends React.Component {
  render() {
    const one = (
      <p>
        I’m currently a senior in <b>Computer Science</b> at{" "}
        <a href="https://www.utrgv.edu/">UTRGV</a>. My time as an active member
        of <a href="https://fronteradevs.com">Frontera Devs</a> has allowed me
        to assist young students in starting their academic journey in tech.
      </p>
    );

    const two = (
      <p>
        When I’m not studying, I like to go to the gym and listen to music. I
        also watch a lot of movies and keep up with Formula 1.
      </p>
    );

    const tech_stack = [
      "Python",
      "Java",
      "React.js",
      "C++",
    ];

    return (
      <div id="about">
        <div className="section-header">
          <span className="section-title">about me</span>
        </div>
        <div className="about-content">
          <div className="about-description">
            {one}
            <p>Some languages I've been working with:</p>
            <ul className="tech-stack">
              {tech_stack.map((tech_item, i) => (
                <li key={i}>{tech_item}</li>
              ))}
            </ul>
            {two}
          </div>
          <div className="about-image">
            <img src={"/assets/mee2.JPG"} alt="Gracie Guevara" />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
