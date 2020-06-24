import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line
import { Map, CircleMarker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css"

import 'reset-css'; //Reset css styles
import styled from 'styled-components';

// eslint-disable-next-line
const Container = styled.div`
    display: flex;
`;

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

ReactDOM.render(<App />, document.getElementById('root'));