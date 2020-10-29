import React, { Component } from 'react';
import { connect } from 'react-redux';

class Artists extends Component {

  render() {

    let artists = this.props.artists.map(artist => <li key={artist.id}>{artist.artistName}</li>);

    return (
      <div>
        <ul>
          {artists}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { artists: state.artists }
}

export default connect(mapStateToProps)(Artists);