import React, { Component } from 'react';
import "./Project.css";

class Project extends Component {
  render() {
    return (
        <div className="project__card">
          <img className="project__image" src={this.props.imagePath} />
          <div className="project__info">
            <p>This is a short blurb of text about this project.</p>
            <div className="project__icons">
              <a alt="a project" href="#"><i className="fa fa-external-link fa-2x"></i></a>
              <a alt="a project" href="#"><i className="fa fa-github fa-2x"></i></a>
            </div>
          </div>
        </div>
    );
  }
}

export default Project;
