import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GettingStarted from './components/GettingStarted/GettingStarted';
import Navigator from './components/Navigator/Navigator';
import Splash from './components/Splash/Splash';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import FlowEditor from 'components/FlowEditor/FlowEditor';

const headerStyle = {
  height: "80px"
};

export class App extends Component {
  render() {
    return (
      <Router>
        <header style={headerStyle}>
          <Header />
        </header>
        <Navigator />

          <Route exact path="/" component={Splash} />
          <Route exact path="/getting-started" component={GettingStarted} />
          <Route exact path="/dashboard" component={Dashboard} />
		  <Route path="/flows/:id/edit" component={FlowEditor} />
      </Router>
    );
  }
}

export default App;
