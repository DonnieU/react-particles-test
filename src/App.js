import React, { Component } from 'react';
import './App.css';

import Particles from 'react-particles-js';
const particleSettings = require('./Particles/particles.json');

const styles = {
  floatIt: {
    // position: 'fixed',
    width: '100%',
    height: '100%',
    top: 0,
    zIndex: -1,
    backgroundColor: '#000000'
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles params={particleSettings} style={styles.floatIt}/>
      </div>
    );
  }
}

export default App;
