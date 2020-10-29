import React, { Component } from 'react';
import {v4 as uuid} from "uuid";
//import { addVenue } from '../actions/artistVenue';
import { connect } from 'react-redux';

export const addVenue = venue => {
    return {
      type: 'ADD_VENUE',
      venue
    };
  };
  
  export const removeVenue = id => {
    return {
      type: 'REMOVE_VENUE',
      id
    };
  };

export class VenueInput extends Component {

  state = {
    venueName: '',
    venueLocale: '',
    venueType: '',
    venuePrice: '',
    venueSound: '',
    venueComfort: '',
    venueLayout: '',
    venueComment: ''
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      [event.target.locale]: event.target.value,
      [event.target.venue_type]: event.target.value,
      [event.target.prices]: event.target.value,
      [event.target.sound]: event.target.value,
      [event.target.comfort]: event.target.value,
      [event.target.layout]: event.target.value,
      [event.target.comment]: event.target.value
    });
  }


  handleOnSubmit = event => {
    event.preventDefault();
    const venue = {...this.state, id: uuid() };
    this.props.addVenue(venue);
    this.setState({
        venueName: '',
        venueLocale: '',
        venueType: '',
        venuePrice: '',
        venueSound: '',
        venueComfort: '',
        venueLayout: '',
        venueComment: ''
    });
  }

  render() {
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnChange(event)}
            name="venueName"
            value={this.state.venueName}
            placeholder="venue name" />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnChange(event)}
            name="venueLocale"
            value={this.state.venueLocale}
            placeholder="locale" />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnChange(event)}
            name="venueType"
            value={this.state.venueType}
            placeholder="venue type" />
        </p>
        <p>
          <input
            type="integer"
            onChange={(event) => this.handleOnChange(event)}
            name="venuePrice"
            value={this.state.venuePrice}
            placeholder="prices" />
        </p>
        <p>
          <input
            type="integer"
            onChange={(event) => this.handleOnChange(event)}
            name="venueSound"
            value={this.state.venueSound}
            placeholder="sound" />
        </p>
        <p>
          <input
            type="integer"
            onChange={(event) => this.handleOnChange(event)}
            name="venueComfort"
            value={this.state.venueComfort}
            placeholder="comfort" />
        </p>
        <p>
          <input
            type="integer"
            onChange={(event) => this.handleOnChange(event)}
            name="venueLayout"
            value={this.state.venueLayout}
            placeholder="layout" />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnChange(event)}
            name="venueComment"
            value={this.state.venueComment}
            placeholder="comment" />
        </p>
        <input type="submit" />
      </form>
    );
  }
};

export default connect(null, { addVenue })(VenueInput);