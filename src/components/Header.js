import React, { Component } from 'react';
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header>
          <h1 className="name">Nick Eddy</h1>
          <nav className="menu">
            <a className="menu__link" href="#">About</a>
            <a className="menu__link" href="#">Projects</a>
            <a className="menu__link" href="#">Contact</a>
          </nav>
      </header>
    );
  }
}

export default Header;
