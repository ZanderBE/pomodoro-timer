import React, { Component } from 'react';
import './Clocktimer.css';

class Clocktimer extends Component {
  constructor(props) {
    super(props);
    this.clockify = this.clockify.bind(this);
    this.timerControl = this.timerControl.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.timerCountdown = this.timerCountdown.bind(this);
    this.timerChecker = this.timerChecker.bind(this);
  }
  clockify() {
    let minutes = Math.floor(this.props.currentTimer / 60);
    let seconds = this.props.currentTimer - minutes * 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return minutes + ':' + seconds;
  }
  timerControl() {
    this.props.currentTimerState == 'Stopped' ? (this.props.switchTimerState('Running'), 
                                                 this.startTimer(), 
                                                 this.props.setStartBtnColor({backgroundColor: '#CC3363'}),
                                                 this.props.setButtonState('Stop')) : (this.props.switchTimerState('Stopped'), 
                                                                                        this.props.setStartBtnColor({backgroundColor: '#62C370'}),
                                                                                        this.props.setButtonState('Start')); 
  }
  startTimer() {
      let time = setInterval(() => {
      // this.props.switchTimerState('Running');
      this.timerCountdown();
      this.timerChecker();
      if (this.props.currentTimerState == 'Stopped') {
        clearInterval(time);
      }
       }, 1000);
      
      }
  timerCountdown() {
    let timeTracker = this.props.currentTimer - 1;
    this.props.decrementTimer(timeTracker);
    
  }
  timerChecker() {
    let time = this.props.currentTimer;
    if (time < 60 && this.props.currentTimerState == 'Running') {
      this.props.setTimerColor({backgroundColor: '#CC3363'})
    } else if (time > 60 && this.props.currentTimerState == 'Running'){
      this.props.setTimerColor({backgroundColor: '#62C370'})
    } else {
      this.props.setTimerColor({backgroundColor: '#CFCFCF'})
    }
    if (time < 0) {
      this.props.currentTimeType == 'Session' ? (this.props.setTimeType('Break'),
                                                this.props.setTimer(this.props.currentBreak * 60),
                                                this.props.setCompleted(this.props.currentCompleted + 1)) : (this.props.setTimeType('Session'),
                                                                                                             this.props.setTimer(this.props.currentSession * 60));
    }
  }
  
  render() {
    return (
      <div className="clock-container-main">
        <div className="clock-timer">
          <div className="clock-container-sub" style={this.props.currentTimerColor}>
            <p className="timer">{this.clockify()}</p>
            <p className="timer-type">{this.props.currentTimeType}</p>
          </div>
          <button className="start-btn" style={this.props.startBtnColor}onClick={this.timerControl}>{this.props.currentButtonState}</button>
        </div>
      </div>
    );
  }
}

export default Clocktimer;