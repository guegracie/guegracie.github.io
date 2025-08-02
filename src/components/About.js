import React from "react";
import "../styles/About.css";

class About extends React.Component {
  render() {
    const one = (
      <p>
       I’m passionate about personal growth both in my career, and personally through my physical and mental well-being. 
       I believe in living with purpose and creating a meaningful impact through everything I do. 
       Outside of tech, I love traveling and spending time with my family and friends.
      </p>
    );

    return (
      <div id="about">
        <div className="about-content">
          <h1 className="about-title">about me</h1>
          <div className="about-description">
            {one}
          </div>
        </div>
      </div>
    );
  }
}

export default About;
