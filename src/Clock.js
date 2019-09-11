import React, { Component } from 'react';
import Timercontrols from './Timercontrols.js';
import Clocktimer from './Clocktimer.js';
import Footer from './Footer.js';
import Title from './Title.js';
import Timeforclock from './Timeforclock.js';
import Completedpomos from './Completedpomos.js';
import './Clock.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      session: 25,
      timer: 1500,
      breaks: 5,
      timeType: "Session",
      sound: "On",
      completed: 0,
      timerState: 'Stopped',
      buttonState: 'Start',
      soundBtnColor: {backgroundColor: '#62C370'},
      startBtnColor: {backgroundColor: '#62C370'},
      timerColor: {backgroundColor: '#CFCFCF'}
    };
    this.setSound = this.setSound.bind(this);
    this.setBreak = this.setBreak.bind(this);
    this.setSession = this.setSession.bind(this);
    this.setTimer = this.setTimer.bind(this);
    this.setCompleted = this.setCompleted.bind(this);
    this.setTimeType = this.setTimeType.bind(this);
    this.decrementTimer = this.decrementTimer.bind(this);
    this.switchTimerState = this.switchTimerState.bind(this);
    this.setButtonState = this.setButtonState.bind(this);
    this.reset = this.reset.bind(this);
    this.setSoundBtnColor = this.setSoundBtnColor.bind(this);
    this.setStartBtnColor = this.setStartBtnColor.bind(this);
    this.setTimerColor = this.setTimerColor.bind(this);
  }
  setSound(sound) {
    this.setState({
      sound: sound
    });
  }
  setBreak(breaks) {
    this.setState({
      breaks: breaks
    });
  }
  setSession(session) {
    this.setState({
      session: session
    });
  }
  setTimer(timer) {
    this.setState({
      timer: timer
    });
  }
  setButtonState(buttonState) {
    this.setState({
      buttonState: buttonState
    });
  }
   setCompleted(completed) {
    this.setState({
      completed: completed
    });
  }
  setTimeType(timeType) {
    this.setState({
      timeType: timeType
    })
  }
  decrementTimer(timer) {
    this.setState({
      timer: timer
    });
  }
  switchTimerState(timerState) {
    this.setState({
      timerState: timerState
    });
  }
  reset() {
    this.setState({
      session: 25,
      timer: 1500,
      breaks: 5,
      timeType: "Session",
      sound: "On",
      completed: 0,
      timerState: 'Stopped',
    });
  }
  setSoundBtnColor(soundBtnColor) {
    this.setState({
      soundBtnColor: soundBtnColor
    })
  }
  setStartBtnColor(startBtnColor) {
    this.setState({
      startBtnColor: startBtnColor
    })
  }
  setTimerColor(timerColor) {
    this.setState({
      timerColor: timerColor
    })
  }
   render() {
    return (
       <div className="clock">
        <Title />
        <div className="top-of-clock">
          <Completedpomos 
            currentCompleted={this.state.completed} />
          <Timeforclock />
        </div>
        <Clocktimer 
          currentBreak={this.state.breaks}
          currentSession={this.state.session}
          currentTimer={this.state.timer}
          currentTimeType={this.state.timeType}
          currentTimerState={this.state.timerState}
          currentCompleted={this.state.completed}
          currentButtonState={this.state.buttonState}
          setCompleted={this.setCompleted}
          setTimeType={this.setTimeType}
          setTimer={this.setTimer}
          setSession={this.setSession}
          setButtonState={this.setButtonState}
          decrementTimer={this.decrementTimer}
          switchTimerState={this.switchTimerState}
          startBtnColor={this.state.startBtnColor}
          setStartBtnColor={this.setStartBtnColor}
          setTimerColor={this.setTimerColor}
          currentTimerColor={this.state.timerColor}/>
        <Timercontrols 
          currentBreak={this.state.breaks}
          currentSession={this.state.session}
          currentSessionTime={this.state.timer}
          currentTimerState={this.state.timerState}
          setBreak={this.setBreak}
          setSession={this.setSession}
          setTimer={this.setTimer}
          reset={this.reset}
          soundStatus={this.state.sound}
          setSound={this.setSound}
          soundColor={this.state.soundBtnColor}
          setSoundBtnColor={this.setSoundBtnColor}/>
         <Footer />
      </div>
    );
  }
}



export default Clock; 