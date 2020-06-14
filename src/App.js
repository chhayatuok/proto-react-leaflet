import React, { Component } from 'react';
// eslint-disable-next-line
import { Map, CircleMarker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css"

class App extends Component {
  render() {
    return (
      <div>
        <Map
          style={{ height: "580px", width: "80%" }}
          zoom={10}
          center={[45.5017, -73.5673]}>
          <TileLayer
            url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution = '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          />
        </Map>
      </div>
    );
  }
}

export default App;
