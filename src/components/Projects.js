import React from "react";
import "../styles/Projects.css";
import ExternalLinks from "./ExternalLinks";
import FolderOpenIcon from '@mui/icons-material/FolderOpen';

class Projects extends React.Component {

  render() {

    const projects = {
      "Distributed Computing": {
        desc: "Utilized the Ray library in Python to implement distributed web scraping for real estate listings using Rapid API script amongst two virtual machines.",
        techStack: "Python, Ray, Rapid API",
        link: "https://github.com/guegracie/web-scraping-project"
      }
    };

    return (
      <div id="projects">
        <div className="section-header">
          <span className="section-title">projects</span>
        </div>
      <div className="project-container">
        <ul className="projects-grid">
          {Object.keys(projects).map((key, i) => (
            <li key={key} className="projects-card">
              <div className="card-header">
                <div className="folder-icon">
                  <FolderOpenIcon
                    style={{ fontSize: 35 }}
                  />
                </div>
                <ExternalLinks
                  githubLink={projects[key]["link"]}
                />
              </div>
              <div className="card-title">{key}</div>
              <div className="card-desc">{projects[key]["desc"]}</div>
              <div className="card-tech">{projects[key]["techStack"]}</div>
            </li>
          ))}
        </ul>
      </div>
      </div>
    );
  }
}

export default Projects;
