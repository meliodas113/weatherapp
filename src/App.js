import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Wheather from "./components/Wheather";

const API_KEY = "c5e6e5f6aad1fd7e21a6ee96121f85a6";

class App extends React.Component {
  state = {
    temprature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    // icon: undefined,
    error: undefined
  };
  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.City.value;
    const country = e.target.elements.Country.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    if (city && country) {
      console.log(data);
      this.setState({
        temprature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].main,
        icon: data.weather[0].icon,
        error: ""
      });
    } else {
      this.setState({
        temprature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        icon: undefined,
        error: "Please enter some value."
      });
    }
  };
  render() {
    return (
      <div className="content">
        <Titles />
        <div className="inner-content">
          <Form getWeather={this.getWeather} />
          <Wheather
            temprature={this.state.temprature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            icon={this.state.icon}
            error={this.state.error}
          />
        </div>
      </div>
    );
  }
}

export default App;
