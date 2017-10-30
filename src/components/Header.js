import React, { Component } from 'react';
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header>
          <h1 className="name">Nick Eddy</h1>
          <nav>
            <ul className="menu">
              <li className="menu__item"><a href="#">About</a></li>
              <li className="menu__item"><a href="#">Projects</a></li>
              <li className="menu__item"><a href="#">Contact</a></li>
            </ul>
          </nav>
      </header>
    );
  }
}

export default Header;
