import React, { Component } from 'react';
import "./Project.css";

class Project extends Component {
  render() {
    return (
        <div className="project__card">
          <img className="project__image" src={this.props.imagePath} alt="Screenshot of this project."/>
          <div className="project__info">
            <h3 className="project__info__name">{this.props.projectName}</h3>
            <div className="project__info__links">
              <a className="project__info__link" href={this.props.githubLink}>View on Github</a>
              <a className="project__info__link" href={this.props.liveLink}>View live site</a>
            </div>
          </div>
          <p className="project__description">{this.props.projectDescription}</p>
          <ul className="project__technologies">
          </ul>
        </div>
    );
  }
}

export default Project;
