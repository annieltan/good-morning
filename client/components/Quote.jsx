import React, {Component} from 'react'
import {BrowserRouter, Route, NavLink, withRouter} from 'react-router-dom'
import output from '../../output.json';

class Quote extends Component {
	constructor(){
		super()
		this.state = { quote: 'How are you today?' }
    this.fetchQuote = this.fetchQuote.bind(this)
	}

  fetchQuote(){
    const length = output.length-1;
    const number = Math.floor(Math.random() * length);
    this.setState({ quote: output[number] })
  }

	componentWillReceiveProps(nextProps){
		clearInterval(this.interval);
		this.interval = setInterval(this.fetchQuote, nextProps.seconds*1000);
	}

  componentDidMount() {
    this.interval = setInterval(this.fetchQuote, this.props.seconds*1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

	render(){
		const { quote } = this.state;
    console.log('quote rendered', quote)
		return (
			<div>
				<div className="jumbotron quote text-center">
					<p className="display-3 lead">{ quote }</p>
				</div>
			</div>

		)
	}
}

export default Quote;
