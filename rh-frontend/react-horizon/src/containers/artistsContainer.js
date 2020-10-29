import React, { Component } from 'react'
import ArtistInput from '../components/artistInput';
import Artists from '../components/artists';
import { connect } from 'react-redux'

class ArtistsContainer extends Component {
  render() {
    return (
      <div>
        <ArtistInput addArtist={this.props.addArtist}/>
        <Artists artists={this.props.artists}/>
      </div>
    )
  }
}

const mapStateToProps = ({ artists }) => ({ artists })

const mapDispatchToProps = dispatch => ({ addArtist: artist => dispatch({ type: "ADD_ARTIST", artist }) })

export default connect(mapStateToProps, mapDispatchToProps)(ArtistsContainer)