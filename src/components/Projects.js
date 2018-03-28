import React, { Component } from 'react';
import "./Projects.css";
import Project from "./Project";

class Projects extends Component {
  render() {
    return (
        <div className = "section-projects" id = "projects">
            <h2 className = "heading">Projects</h2>
            <div className = "projectWrap">
              <Project imagePath="images/mastermindScreenShot.png" 
                       projectName="Mastermind" 
                       githubLink="https://github.com/OctoNerd/mastermind" 
                       liveLink="https://octonerd.github.io/mastermind" 
                       projectDescription="Recreation of the 1970 boardgame of the same name. Built with Javascript."
                       technologiesUsed="Javascript"/>
              <Project imagePath="images/washcycleScreenShot.png" 
                       projectName="Washcycle" 
                       githubLink="https://github.com/OctoNerd/washcycle" 
                       liveLink="http://www.washcyclewindows.com" 
                       projectDescription="Web presence for a window cleaning company."
                       technologiesUsed="Javascript"/>
              <Project imagePath="images/pokemonScreenShot.png" 
                       projectName="Pokemon Type Quiz" 
                       githubLink="https://github.com/OctoNerd/pokemonTypeQuiz" 
                       liveLink="https://octonerd.github.io/pokemonTypeQuiz" 
                       projectDescription="Quiz game built with Javascript and css."
                       technologiesUsed="Javascript"/>
              <Project imagePath="http://placeimg.com/1000/500/tech?t=1509152053103" 
                       projectName="Test" 
                       githubLink="#" 
                       liveLink="#" 
                       projectDescription="test"
                       technologiesUsed="Javascript"/>
            </div>
        </div>
    );
  }
}

export default Projects;