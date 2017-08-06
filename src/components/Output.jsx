import React, { Component } from 'react';

class Output extends Component {
  render() {
      let height = this.props.data.height;
      let weight = this.props.data.weight;
      let bmi = this.props.data.bmi;
      let bmiClass = this.props.data.bmiClass;
    return <div className="output">
        <h3>
          {height}cm
        </h3>
        <h3>
          {weight}kg
        </h3>
        <h3>
          {bmi}
        </h3>
        <h3 className={this.props.data.bmiClass === "Obese" ? "danger" : ""}>
          {bmiClass} {this.props.data.bmiClass === "Obese" ? <a href='http://healthyfoods.com'>What can I do?</a> : ""}
        </h3>
      </div>;
  }
}

export default Output;
