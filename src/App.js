import React, { Component } from 'react';
import './App.scss';
import Menu from './components/Menu';
import Opening from './components/Opening';
import Steps from './components/Steps';
import Product from './components/Product';
import Identity from './components/Identity';
import Technology from './components/Technology';
import Vision from './components/Vision';
import FAQ from './components/FAQ';
import About from './components/About';
import Footer from './components/Footer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faIgloo);

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
        <FAQ />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
