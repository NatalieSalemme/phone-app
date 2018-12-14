import React, { Component } from 'react';
import './App.scss';
import Menu from './components/Menu';
import Opening from './components/Opening';
import Steps from './components/Steps';
import Product from './components/Product';
import Identity from './components/Identity';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Opening />
        <Steps />
        <Product />
        <Identity />
      </div>
    );
  }
}

export default App;
