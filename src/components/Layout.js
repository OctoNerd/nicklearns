import React, { Component } from 'react';
import Header from './Header';
import Projects from './Projects';
import About from './About';
import Technologies from './Technologies';

class Layout extends Component {
  render() {
    return (
        <div>
            <Header />
            <About />
            <Technologies />
            <Projects />
        </div>
    );
  }
}

export default Layout;
