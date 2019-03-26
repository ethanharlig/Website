import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppNavbar from './navbar/navbar';
import Home from './home/home';
import Projects from './projects/projects';
import Ticker from './ticker/ticker';
import Cat from './cat/cat';

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
            <Route path="/ticker" component={Ticker} />
            <Route path="/cat" component={Cat} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
