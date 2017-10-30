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

		return (
			<div className="container">
        {
          enterName == false ?
            (<div>
              <h1 className="give-me-your-name"> Hi, what's your name and zipcode? </h1>
              <div>
                <form className="jumbotron name text-center pull-right form-horizontal"
                  onSubmit={ this.handleSubmit }>
                  <div className="form-group">
                      <label> Name </label>
                      <input type="text" className="form-control name"
                        autoComplete="off"
                        onChange={ this.handleChange }/>
                      <label> Zipcode </label>
                      <input type="text" className="form-control zipcode"
                        autoComplete="off"
                        onChange={ this.handleChange }/>
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
