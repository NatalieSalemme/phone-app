import React, { Component } from 'react';
import './App.scss';
import Menu from './components/Menu';
import Opening from './components/Opening';
import Steps from './components/Steps';
import Product from './components/Product';
import Identity from './components/Identity';
import Technology from './components/Technology';
import Vision from './components/Vision';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Opening />
        <Steps />
        <Product />

        <Identity />
        <Technology />
        <Vision />
      </div>
    );
  }
}

export default App;
