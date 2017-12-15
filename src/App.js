import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppNavbar from './navbar/navbar';
import Home from './home/home';
import Projects from './projects/projects';

class App extends Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <Router>
          <div>
            <hr />
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
