import React, { Component } from 'react';
import Breaktime from './Breaktime.js';
import Sessiontime from './Sessiontime.js';
import Sound from './Sound.js';
import Reset from './Reset.js';
import './Timercontrols.css';

class Timercontrols extends Component {
  render() {
    return (
      <div className="timer-controls">
        <div className="break-session-controls">
          <Breaktime 
            currentBreak={this.props.currentBreak}
            currentTimerState={this.props.currentTimerState}
            setBreak={this.props.setBreak}/>
          <Sessiontime 
            currentSession={this.props.currentSession}
            currentSessionTime={this.props.currentSessionTime}
            currentTimerState={this.props.currentTimerState}
            setSession={this.props.setSession}
            setTimer={this.props.setTimer}/>
        </div>
        <div className="sound-reset-controls">
          <Reset      
            reset={this.props.reset}/>
          <Sound 
            soundStatus={this.props.soundStatus}
            setSound={this.props.setSound}
            soundColor={this.props.soundColor}
            setSoundBtnColor={this.props.setSoundBtnColor}/>
        </div>
      </div>
    );
  }
}

export default Timercontrols;
