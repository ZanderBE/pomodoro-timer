import React, { Component } from 'react';
import './Reset.css';


class Reset extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="reset-controls">
         <button className="reset-button" onClick={this.props.reset}><img src="https://cdn.glitch.com/75b20657-0548-4a22-850e-40762042f668%2FPath.svg?v=1568144130807" alt="Reset Button"></img></button>
      </div>
    );
  }
}

export default Reset;