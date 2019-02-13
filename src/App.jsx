import React, { Component } from 'react';
import './App.css';
import ButtonSpin from './ButtonSpin';

class App extends Component {
  render() {
    return (
      <div className="app">
          <div className="slots">
              <ButtonSpin/>
          </div>
      </div>
    );
  }
}

export default App;
