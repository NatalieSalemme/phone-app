import React, { Component } from 'react';
import './App.scss';
import Menu from './Menu';
import Opening from './Opening';
import Steps from './Steps';
import Product from './Product';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Opening />
        <Steps />
        <Product />
      </div>
    );
  }
}

export default App;
