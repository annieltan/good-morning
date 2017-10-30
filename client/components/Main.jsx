import React, {Component} from 'react';
import {BrowserRouter, Route, NavLink, withRouter} from 'react-router-dom';
import Quote from './Quote';
import Weather from './Weather';
import Music from './Music';
import Enter from './Enter';

class Main extends Component {

	render(){
		const { name, zipcode } = this.props;

		return (
			<div className="container">
				<div className="container">
					<Weather zipcode={ zipcode }/>
				</div>
				<h1 className="text-center">Good Morning, { name }</h1>
				<div>
					<Quote />
				</div>
			</div>
		)
	}
}

export default Main;
