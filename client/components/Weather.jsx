import React, {Component} from 'react';
import {BrowserRouter, Route, NavLink, withRouter} from 'react-router-dom';
import axios from 'axios';

class Weather extends Component {

  constructor(){
    super()

    this.state = {
      weather: {}
    }

    this.KtoF = this.KtoF.bind(this);
  }

  KtoF(kelvin){
    return Math.round(((9/5)*(kelvin- 273)) + 32)
  }

  componentWillMount(){
    console.log('will mount');
    const { zipcode } = this.props;

    axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=ea447465c3770fe495e7bf1c5298f30f`)
    .then((res)=>res.data)
    .then(weather =>{
      this.setState({ weather })
    })
  }

	render(){
    if(!this.state.weather.name){
      return false //return false or a <Loader/> when you don't have anything in your message[]
    }

    const { weather } = this.state;
    console.log('weather', weather)
    const name = weather.name;
    const temp = this.KtoF(weather.main.temp*1);
    const code = `owf owf-2x owf-${weather.cod}`;
    const desc = weather.weather[0].description;
    const sunrise = new Date(weather.sys.sunrise*1000);
    const sunset = new Date(weather.sys.sunset*1000);

		return (
      <div className="pull-right">
        <i className= { code } id="weather-icon" ></i>
        {
          <p className="temperature-city pull-right"> {temp} °F in {name} </p>
        }
        <div>
          {
            <p className="description pull-right"> { desc } </p>
          }
          {
            <p className="sunrise"> SUNRISE: </p>
          }
          {
            <p className="sunset"> SUNSET: </p>
          }
        </div>


      </div>
    )
	}
}

export default Weather;
