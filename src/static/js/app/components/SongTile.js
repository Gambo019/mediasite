import React from 'react';
import { Link } from 'react-router';

export default class SongTile extends React.Component {
  render() {
    var songUrl = "/song/" + this.props.songId;
    return (
      <div className="col-lg-2 col-md-3 col-sm-4 song-tile">
        <h4><Link to={songUrl}>{this.props.title}</Link></h4>
        <p>{this.props.author1}</p>
        <p>{this.props.author2}</p>
      </div>
    )
  }
}
