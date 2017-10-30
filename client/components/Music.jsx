import React, {Component} from 'react';
import {BrowserRouter, Route, NavLink, withRouter} from 'react-router-dom';

class Music extends Component {

	render(){

		return (
  		<div className="container pull-right">
        <iframe src="https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:37i9dQZF1DX2MyUCsl25eb&theme=white"
          width="300" height="80" allowtransparency="true"></iframe>
      </div>
		)
	}
}

export default Music;
