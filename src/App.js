import React, { Component } from 'react';
import './App.css';

import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MapWithAMarker = withGoogleMap(props =>
  <GoogleMap defaultZoom={11} defaultCenter={{ lat: 59.334591, lng: 18.063240 }} >
    <Marker position={{ lat: 59.334591, lng: 18.063240 }} />
  </GoogleMap>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="sidebar">
            <h1>Welcome to Stockholm Tourism!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="map">
          <MapWithAMarker
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
