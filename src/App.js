import React, { Component } from 'react';
import logo from './LoreLogo.png';
import './App.css';
import { compose, withProps } from "recompose";
import MyMapComponent, { MyFancyComponent } from "./Components/SimpleMap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The World of Lore Map</h1>
        </header>
        <p className="App-intro">
          Click on the pointer to see what episode the location is from.
        </p>
        <MyMapComponent/>
      </div>
    );
  }
}

export default App;

 