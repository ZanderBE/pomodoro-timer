import React, { Component } from 'react';
import './Sessiontime.css';


class Sessiontime extends Component {
  constructor(props) {
    super(props);
    this.addSessionTime = this.addSessionTime.bind(this);
    this.minusSessionTime = this.minusSessionTime.bind(this);
  }
  addSessionTime() {
    if (this.props.currentSession < 60 && this.props.currentTimerState === "Stopped") {
      let currentSession = this.props.currentSession + 1;
      let currentSessionTime = this.props.currentSessionTime + 60;
      this.props.setSession(currentSession);
      this.props.setTimer(currentSessionTime);
    }
  }
  minusSessionTime() {
    if (this.props.currentSession > 1 && this.props.currentTimerState === "Stopped") {
      let currentSession = this.props.currentSession - 1;
      let currentSessionTime = this.props.currentSessionTime - 60;
      this.props.setSession(currentSession);
      this.props.setTimer(currentSessionTime);
    }
  }
  render() {
    return (
      <div className="session-controls">
        <p className="session-title">Session</p>
        <button className="plus-button" onClick={this.addSessionTime}><img src="https://cdn.glitch.com/75b20657-0548-4a22-850e-40762042f668%2Fplus.svg?v=1568144303007" alt="plus button"></img></button>
        <p className="session-number">{this.props.currentSession}</p>
        <button className="minus-button" onClick={this.minusSessionTime}><img src="https://cdn.glitch.com/75b20657-0548-4a22-850e-40762042f668%2Fminus.svg?v=1568144298877" alt="minus button"></img></button>
      </div>
    );
  }
}

export default Sessiontime;