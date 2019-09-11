import React, { Component } from 'react';
import './Breaktime.css';


class Breaktime extends Component {
  constructor(props) {
    super(props);
    this.addBreakTime = this.addBreakTime.bind(this);
    this.minusBreakTime = this.minusBreakTime.bind(this);
  }
  addBreakTime() {
    if (this.props.currentBreak < 60 && this.props.currentTimerState === "Stopped") {
      let currentBreak = this.props.currentBreak + 1
      this.props.setBreak(currentBreak)
    }
    
  }
  minusBreakTime() {
    if (this.props.currentBreak > 1 && this.props.currentTimerState === "Stopped") {
      let currentBreak = this.props.currentBreak - 1
      this.props.setBreak(currentBreak)
    }
  }
  render() {
    return (
      <div className="break-controls">
        <p className="break-title">Break</p>
        <button className="plus-button" onClick={this.addBreakTime}><img src="https://cdn.glitch.com/75b20657-0548-4a22-850e-40762042f668%2Fplus.svg?v=1568144303007" alt="plus button"></img></button>
        <p className="break-number">{this.props.currentBreak}</p>
        <button className="minus-button" onClick={this.minusBreakTime}><img src="https://cdn.glitch.com/75b20657-0548-4a22-850e-40762042f668%2Fminus.svg?v=1568144298877" alt="minus button"></img></button>
      </div>
    );
  }
}

export default Breaktime;