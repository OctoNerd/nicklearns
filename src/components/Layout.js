import React, { Component } from 'react';
import Header from './Header';
import Projects from './Projects';

class Layout extends Component {
  render() {
    return (
        <div>
            <Header />
            <Projects />
        </div>
    );
  }
}

export default Layout;
