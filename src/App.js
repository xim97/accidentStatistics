import React, { Component } from 'react';
import { Map } from "./components/Map";

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Map
          containerElement={<div className="map" />}
          mapElement={<div style={{ height: `100%` }} />} />
      </div>
    );
  }
}