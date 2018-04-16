import React, { Component } from 'react';
import "./Projects.css";
import Project from "./Project";

class Projects extends Component {
  render() {
    return (
        <div className = "section-projects" id = "projects">
            <h2 className = "heading">Projects</h2>
            <div className = "projectWrap">
              <Project imagePath="images/weatherScreenShot.png" 
                       projectName="React Weather App" 
                       githubLink="https://github.com/OctoNerd/react-weather"
                       liveLink="https://octonerd.github.io/react-weather" 
                       projectDescription="Weather app built with react.js using Open Weather Maps API"
                       technologiesUsed="React, owm API, sass, webpack, node"/>
              <Project imagePath="images/mastermindScreenShot.png" 
                       projectName="Mastermind" 
                       githubLink="https://github.com/OctoNerd/mastermind" 
                       liveLink="https://octonerd.github.io/mastermind" 
                       projectDescription="Recreation of the 1970 boardgame of the same name. Built with Javascript."
                       technologiesUsed="Javascript"/>
              <Project imagePath="images/washcycleScreenShot.png" 
                       projectName="Washcycle company site" 
                       githubLink="https://github.com/OctoNerd/washcycle" 
                       liveLink="http://www.washcyclewindows.com" 
                       projectDescription="Web presence for a Portland window cleaning company."
                       technologiesUsed="HTML, CSS"/>
              <Project imagePath="images/pokemonScreenShot.png" 
                       projectName="Pokemon Type Quiz" 
                       githubLink="https://github.com/OctoNerd/pokemonTypeQuiz" 
                       liveLink="https://octonerd.github.io/pokemonTypeQuiz" 
                       projectDescription="Quiz game built with Javascript and css."
                       technologiesUsed="Javascript"/>
            </div>
        </div>
    );
  }
}

export default Projects;