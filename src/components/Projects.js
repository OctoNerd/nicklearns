import React, { Component } from 'react';
import "./Projects.css";
import Project from "./Project";

class Projects extends Component {
  render() {
    return (
        <div className = "section-projects" id = "projects">
            <h2 className = "heading">Projects</h2>
            <div className = "projectWrap">
              <Project imagePath="images/mastermindScreenShot.png" projectName="Mastermind"/>
              <Project imagePath="images/washcycleScreenShot.png" projectName="Washcycle"/>
              <Project imagePath="http://placeimg.com/1000/500/tech?t=1509152053103" projectName="Test"/>
              <Project imagePath="http://placeimg.com/1000/500/tech?t=1509152053103" projectName="Test"/>
            </div>
        </div>
    );
  }
}

export default Projects;
