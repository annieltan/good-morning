import React, {Component} from 'react';
import {BrowserRouter, Route, NavLink, withRouter} from 'react-router-dom';
import Main from './Main';

class Enter extends Component {
  constructor(){
    super()
    this.state = {enterName: false,
                  name: '',
                  zipcode: ''}

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    this.setState({ enterName: true })
  }

	render(){
    const { enterName, name, zipcode } = this.state;
    const submitStyle = { width: "0", height:"0", opacity:0 }

		return (
			<div className="container">
        {
          enterName == false ?
            (<div className="container">
              <h1 className="give-me-your-name"> Hi, what's your name and zipcode? </h1>
              <div className="col-md-4 pull-right jumbotron name-zipcode">
                <form className="name"
                  onSubmit={ this.handleSubmit }>
                    <div className="form-group">
                      <input
                        name="name"
                        type="name"
                        className="name"
                        placeholder="Your Name"
                        onChange={ this.handleChange }
                        required
                        autoComplete="off"
                      />
                      <input
                        name="zipcode"
                        type="zipcode"
                        className="zipcode"
                        placeholder="Your Zipcode"
                        onChange={ this.handleChange }
                        required
                        autoComplete="off"
                      />
                      <input type="submit" style={ submitStyle }/>
                    </div>
                </form>
              </div>
            </div>) :
           <Main name={ name } zipcode={ zipcode }/>
        }
			</div>
		)
	}
}

export default Enter;
