import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import GettingStarted from './components/GettingStarted/GettingStarted';
import Navigator from './components/Navigator/Navigator';
import Splash from './components/Splash/Splash';
import Header from './components/Header/Header';

const headerStyle = {
  height: "80px"
};

class App extends Component {
  render() {
    return (
      <Router>
        <header style={headerStyle}>
          <Header />
        </header>
        <Navigator />
        
          <Route exact path="/" component={Splash} />
          <Route exact path="/getting-started" component={GettingStarted} />
      </Router>
    );
  }
}

export default App;
