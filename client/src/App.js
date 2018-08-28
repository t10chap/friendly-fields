import React, { Component } from 'react';
import './App.css';
import LandingContainer from './containers/LandingContainer';
import MyRoutes from './config/routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyRoutes />
      </div>
    );
  }
}

export default App;
