import React, { Component } from "react";
import axios from "axios";

class Meteo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: 0
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/forecast?id=6454573&APPID=b7ad2dc31ed987880d1368c9c3eb1af9"
      )
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        this.setState({
          temperature: data.results
        });
      });
  }

  render() {
    return <div>
      {this.state.temperature}
      {'coucou'}
    </div>;
  }
}
export default Meteo;
