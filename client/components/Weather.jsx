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
    this.unixToTime = this.unixToTime.bind(this);

  }

  KtoF(kelvin){
    return Math.round(((9/5)*(kelvin- 273)) + 32)
  }

  unixToTime(timestamp){
    const hour = timestamp.getHours().toString();
    const minutes = timestamp.getMinutes().toString();
    const time = [hour, minutes]

    return time.join(':');
  }
  componentWillMount(){
    console.log('will mount');
    const { zipcode } = this.props;

    const url = `//api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=ea447465c3770fe495e7bf1c5298f30f`

    axios.get(url)
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
    const name = weather.name;
    const temp = this.KtoF(weather.main.temp*1);
    const code = `owf owf-2x owf-${weather.cod}`;
    const desc = weather.weather[0].description;
    const sunrise = this.unixToTime(new Date(weather.sys.sunrise*1000));
    const sunset = this.unixToTime(new Date(weather.sys.sunset*1000));

		return (
      <div className="pull-right">
        <i className= { code } id="weather-icon" ></i>
        {
          <p className="temperature-city"> {temp} °F in {name} </p>
        }
        <div>
          <ul>
            <li>
              {
                <p className="description"> { desc } </p>
              }
            </li>
            <li>
              {
                <p className="sunrise"> Sunrise: { sunrise } </p>
              }
             </li>
             <li>
               {
                 <p className="sunset"> Sunset: { sunset } </p>
               }
              </li>
          </ul>
        </div>
      </div>
    )
	}
}

export default Weather;
