import React, { Component } from 'react';
import Range from './components/Range';
import Output from './components/Output';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      height: 170,
      weight: 65,
      bmi: 22.49,
      bmiClass: 'Normal'
    }
  }

  heightChange(height){
    this.setState({
      height: height
    }, this.setBmi);
  }

  weightChange(weight){
    this.setState({
      weight: weight
    }, this.setBmi);
  }

  setBmi(){
    let bmi = ((this.state.weight / this.state.height / this.state.height) * 10000).toFixed(2);
    this.setState({
      bmi: bmi,
      bmiClass: this.getBmiClass(bmi)
    }, function(){
      // console.log(this.state);
    });
  }

  getBmiClass(bmi){
    if(bmi < 18.5) return 'Underweight';
    if(bmi >= 18.5 && bmi <= 24.9) return 'Normal';
    if(bmi >= 25 && bmi <= 29.9) return 'Overweight';
    if(bmi >= 30) return 'Obese';
  }

  render() {
    return (
      <div className="App">
        <h1>BMI Calculator</h1>
        <form>
          <div>
            <label htmlFor="">Height</label>
            <Range 
              onChange={this.heightChange.bind(this)}
              value={this.state.height}
            />
          </div>
          <div>
            <label htmlFor="">Weight</label>
            <Range 
              onChange={this.weightChange.bind(this)}
              value={this.state.weight}
            />
          </div>
        </form>
        <br/><br/>
        <Output data={this.state} />
      </div>
    );
  }
}

export default App;
