import React, { Component } from 'react';
import "./Projects.css";
import Project from "./Project";

class Projects extends Component {
  render() {
    return (
        <div>
            <h2 className="heading">Projects</h2>
            <Project />
        </div>
    );
  }
}

export default Projects;
