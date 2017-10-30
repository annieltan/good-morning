import React, {Component} from 'react'
import {BrowserRouter, Route, NavLink, withRouter} from 'react-router-dom'
import output from '../../output.json';

class Quote extends Component {
	constructor(){
		super()
		this.state = { quote: '' }
    this.fetchQuote = this.fetchQuote.bind(this)
	}

  fetchQuote(){
    const length = output.length++;
    const number = Math.floor(Math.random() * length);
    this.setState({ quote: output[number] })
  }

  componentDidMount() {
    this.interval = setInterval(this.fetchQuote, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

	render(){
		const { quote } = this.state;
    console.log('quote rendered', quote)
		return (
			<div className="jumbotron quote text-center">
				<p className="display-3 lead">{ quote }</p>
			</div>
		)
	}
}

export default Quote;
