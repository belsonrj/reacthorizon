import React, { Component } from 'react';
//import { addArtist } from '../actions/artistVenue';
//import {v4 as uuid} from "uuid";
//import { connect } from 'react-redux';

export const addArtist = artist => {
    return {
      type: 'ADD_ARTIST',
      artist
    };
  };
  
  export const removeArtist = id => {
    return {
      type: 'REMOVE_ARTIST',
      id
    };
  };

class ArtistInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      genre: '',
      times_seen: '',
      met: '',
      comment: ''
    };
  };

  handleOnChange(event) {
    this.setState({
      name: event.target.value,
      genre: event.target.value,
      times_seen: event.target.value,
      met: event.target.value,
      comment: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addArtist(this.state.name)
    this.setState({
      name: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)} >
          <input
            type="text"
            value={this.state.name}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
          <input
            type="text"
            value={this.state.genre}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
          <input
            type="integer"
            value={this.state.times_seen}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
          <input
            type="boolean"
            value={this.state.met}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
          <input
            type="text"
            value={this.state.comment}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ArtistInput;