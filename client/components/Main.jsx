import React, {Component} from 'react';
import {BrowserRouter, Route, NavLink, withRouter} from 'react-router-dom';
import Weather from './Weather';
import Enter from './Enter';
import Slider from './Slider';

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
					<Slider />
				</div>
			</div>
		)
	}
}

export default Main;
