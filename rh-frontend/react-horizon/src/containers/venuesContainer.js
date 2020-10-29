import React, { Component } from 'react'
import VenueInput from '../components/venueInput';
import Venues from '../components/venues';
import { connect } from 'react-redux'

class VenuesContainer extends Component {
  render() {
    return (
      <div>
        <VenueInput addVenue={this.props.addVenue}/>
        <Venues venues={this.props.venues}/>
      </div>
    )
  }
}

const mapStateToProps = ({ venues }) => ({ venues })

const mapDispatchToProps = dispatch => ({ addVenue: venue => dispatch({ type: "ADD_VENUE", venue }) })

export default connect(mapStateToProps, mapDispatchToProps)(VenuesContainer)