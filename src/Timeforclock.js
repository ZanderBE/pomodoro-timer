import React, { Component } from 'react';
import './Timeforclock.css';

class Timeforclock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString()
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  }
  render() {
    return (
      <div className="App-clock">
        <p className="time">{this.state.time}</p>
      </div>
    );
  }
}

export default Timeforclock;
