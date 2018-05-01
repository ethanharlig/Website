import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppNavbar from './navbar/navbar';
import Home from './home/home';
import Projects from './projects/projects';
import Ticker from './ticker/ticker';
import Sources from './sources/sources';
import Ecofeminism from './ecofeminism/ecofeminism';

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
            <Route path="/sources" component={Sources} />
            <Route path="/ecofeminism" component={Ecofeminism} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
