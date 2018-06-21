import React, { Component } from 'react';
import logo from './unsolvedlogo.png';
import './App.css';
import { compose, withProps } from "recompose";
import MyMapComponent, { MyFancyComponent } from "./Components/SimpleMap";
import { locations } from './common.js'
import 'semantic-ui-css/semantic.min.css'
import { Dropdown } from 'semantic-ui-react'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Buzzfeed Unsolved Map</h1>
        </header>
        <p className="App-intro">
          Click on the pointer to see a desription of the location.
        </p>
        <MyMapComponent/>
      </div>
    );
  }
 DropdownSelection = () => (
    <Dropdown placeholder='Select location' fluid selection options={locations}/>
  ) 
}

export default App;

 