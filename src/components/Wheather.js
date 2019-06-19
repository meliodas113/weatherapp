import React from "react";

class Wheather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      src: props.icon
    };
  }
  render() {
    const { src } = this.state;
    return (
      <div className="actual-content">
        {this.props.city && this.props.country && (
          <p>
            Location : {this.props.city} , {this.props.country}
          </p>
        )}
        {this.props.temprature && <p>Temprature: {this.props.temprature}</p>}
        {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
        {this.props.description && <p>Conditions: {this.props.description}</p>}
        {this.props.icon && <img src={src + ".png"} alt="-" />}
        {this.props.error && <p>{this.props.error}</p>}
      </div>
    );
  }
}

export default Wheather;
