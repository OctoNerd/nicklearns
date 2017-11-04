import React, { Component } from 'react';
import "./Project.css";

class Project extends Component {
  render() {
    return (
        <div className="project">
          <img className="project__image" src={this.props.imagePath} />
          <p>This is a short blurb of text about this project.</p>
          <div className="project__icons">
            <a alt="a project" href="#"><i className="fa fa-external-link fa-2x"></i></a>
            <a alt="a project" href="#"><i className="fa fa-github fa-2x"></i></a>
          </div>
        </div>
    );
  }
}

export default Project;
