import React, { Component } from "react";
import { Card } from 'reactstrap';

import axios from "axios";

class Meteo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meteo: 'loading...',
      temperature: 'loading...',
      ville: 'loading...',
      weather: 'loading...'
    };
  }

  componentDidMount() {
    axios.get("http://api.openweathermap.org/data/2.5/weather?id=6454573&APPID=b7ad2dc31ed987880d1368c9c3eb1af9")
      .then((response) => {
        this.setState({ meteo: response.data.main, ville: response.data, weather: response.data.weather[0] });
      });
  }


  render() {
    const { meteo, ville, weather } = this.state
    const tempC = meteo.temp - 273.15;
    const tempStyle = {
      color: "white",
      fontSize: "20px"
    }



    return (
      <div>
        <Card body fluid style={{ backgroundColor: 'transparent', color: '#FFFFFF', border: "1px solid #3c3e4b", borderRadius: "15px", margin: "20px 0 0 0" }} >
          <div style={tempStyle} ><b>{ville.name}</b><br /><br /></div>
          <div style={tempStyle} >{tempC.toFixed(1)}°C</div>
          <div style={tempStyle} >{weather.description}</div>
        </Card>
      </div>
    )
  }
}

export default Meteo;
