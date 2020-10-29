import React, { Component } from 'react';
import { connect } from 'react-redux';

class Venues extends Component {

  render() {

    let venues = this.props.venues.map(venue => <li key={venue.id}>{venue.venueName}</li>);

    return (
      <div>
        <ul>
          {venues}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { venues: state.venues }
}

export default connect(mapStateToProps)(Venues);