import React, { Component } from 'react';
import './App.css';
import Artists from './components/artists/artists';
import Venues from './components/venues/venues';
import VenueInput from './components/venues/venueInput';
import ArtistInput from './components/artists/artistInput';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h2>Artists</h2>
          <ArtistInput />
          <Artists />
        </div>
        <div>
          <h2>Venues</h2>
          <VenueInput />
          <Venues />
        </div>
      </div>
    );
  }
};

export default App;
