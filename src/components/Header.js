import React, { Component } from 'react';
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="wrap">
          <h1 className="name">Nick Eddy</h1>
          <nav>
            <ul className="menu">
              <li className="menu__item"><a href="#about">About</a></li>
              <li className="menu__item"><a href="#projects">Projects</a></li>
              <li className="menu__item"><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
