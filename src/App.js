import React, { Component } from 'react';
import './App.css';
import Menu from './Menu';
import Opening from './Opening';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Opening />
      </div>
    );
  }
}

export default App;
