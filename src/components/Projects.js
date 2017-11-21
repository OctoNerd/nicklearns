import React, { Component } from 'react';
import "./Projects.css";
import Project from "./Project";

class Projects extends Component {
  render() {
    return (
        <div className = "section-projects" id = "projects">
            <h2 className = "heading">Projects</h2>
            <div className = "projectWrap">
              <Project imagePath="images/mastermindScreenShot.png" projectName="Mastermind" githubLink="https://github.com/OctoNerd/mastermind" liveLink="https://octonerd.github.io/mastermind"/>
              <Project imagePath="images/washcycleScreenShot.png" projectName="Washcycle" githubLink="https://github.com/OctoNerd/washcycle" liveLink="http://www.washcyclewindows.com"/>
              <Project imagePath="images/pokemonScreenShot.png" projectName="Pokemon Type Quiz" githubLink="https://github.com/OctoNerd/pokemonTypeQuiz" liveLink="https://octonerd.github.io/pokemonTypeQuiz"/>
              <Project imagePath="http://placeimg.com/1000/500/tech?t=1509152053103" projectName="Test" githubLink="#" liveLink="#"/>
            </div>
        </div>
    );
  }
}

export default Projects;
