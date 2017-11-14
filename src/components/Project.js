import React, { Component } from 'react';
import "./Project.css";

class Project extends Component {
  render() {
    return (
        <div className="project__card">
          <img className="project__image" src={this.props.imagePath} />
          <div className="project__info">
            <h3 className="project__info__name">{this.props.projectName}</h3>
            <div className="project__info__links">
              <a className="project__info__link" href="https://www.github.com/OctoNerd">View on Github</a>
              <a className="project__info__link" href="#">View live site</a>
            </div>
          </div>
          <p className="project__description">This is a short blurb of text about this project.</p>
          
        </div>
    );
  }
}

export default Project;
