import React, { Component } from 'react';
import './Sound.css';


class Sound extends Component {
  constructor(props) {
    super(props);
    this.toggleSound = this.toggleSound.bind(this);
  }
  toggleSound() {
    this.props.soundStatus === 'On' ? (this.props.setSound('Off'), this.props.setSoundBtnColor({backgroundColor: "#CC3363"})) : (this.props.setSound('On'), this.props.setSoundBtnColor({backgroundColor: "#62C370"}));
    
  }
  render() {
    return (
      <div className="break-controls">
        <button className="sound-btn" style={this.props.soundColor} onClick={this.toggleSound}>Sound: {this.props.soundStatus}</button>
      </div>
    );
  }
}

export default Sound;