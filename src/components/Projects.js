import React from "react";
import "../styles/Projects.css";
import ExternalLinks from "./ExternalLinks";
import FolderOpenIcon from '@mui/icons-material/FolderOpen';

class Projects extends React.Component {

  render() {

    const projects = {
      "Automated Threat Detection & Response Workflow": {
        desc: "Designed and implemented a Security Orchestration, Automation, and Response (SOAR) workflow using LimaCharlie, Tines, Slack, and email notifications to detect LaZagne on an endpoint.",
        techStack: "LimaCharlie, Tines, Slack, Email",
        link: "https://github.com/guegracie/EDR-LaZagne-Detection",
        mediumLink: "https://medium.com/@gracielaguev7/soar-edr-project-limacharlie-and-lazagne-b628e0427082"
      },
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
              <div className="card-desc">
               <p> {projects[key]["desc"]} </p>
                {projects[key]["mediumLink"] && (
                  <p> 
                      <strong>Medium Article:</strong>{" "}
                      <a href={projects[key]["mediumLink"]} target="_blank" rel="noopener noreferrer">
                        Read on Medium
                      </a>
                  </p>
                  )}
              </div>
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
