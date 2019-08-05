/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './App.scss';
import Img from 'assets/images/Inn.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hi, I am Shovan - The developer</h1>
          <h2>Let Code</h2>
          <img src={Img} alt="background" />
        </header>
      </div>
    );
  }
}

export default App;
