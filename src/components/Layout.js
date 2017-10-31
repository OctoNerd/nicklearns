import React, { Component } from 'react';
import Header from './Header';
import Projects from './Projects';
import About from './About';

class Layout extends Component {
  render() {
    return (
        <div>
            <Header />
            <About />
            <Projects />
        </div>
    );
  }
}

export default Layout;
