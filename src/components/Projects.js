import React, { Component } from 'react';
import "./Projects.css";
import Project from "./Project";4

class Projects extends Component {
  render() {
    return (
        <div className = "section-projects" id = "projects">
            <h2 className="heading">Projects</h2>
            <div className = "projectWrap">
              <Project />
              <Project />
              <Project />
              <Project />
            </div>
        </div>
    );
  }
}

export default Projects;
