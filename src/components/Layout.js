import React, { Component } from 'react';
import Header from './Header';
import Projects from './Projects';
import About from './About';
import Technologies from './Technologies';
import Contact from './Contact';

class Layout extends Component {
  render() {
    return (
        <div>
            <Header />
            <About />
            <Technologies />
            <Projects />
            <Contact />
        </div>
    );
  }
}

export default Layout;
