import React, {Component} from 'react'
import Quote from './Quote';

class Slider extends Component {
  constructor() {
    super();

    this.state = { value: 30 };
    this.handleChange = this.handleChange.bind(this);

  }
  handleChange(event){
    this.setState({ value: event.target.value })
  }
  render() {
    const { value } = this.state;

    return (
      <div>
        <Quote seconds={ value } />
        <div id="slidecontainer">
          <input
            type="range"
            min="1"
            max="60"
            defaultValue={ value }
            className="slider"
            onChange={ this.handleChange }
            id="myRange" />
          <p>Quote will change every { value } seconds.</p>
        </div>
      </div>

    );
  }
}

export default Slider;
