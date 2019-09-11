import React, { Component } from 'react';
import './Completedpomos.css';


class Completedpomos extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="completed-pomos">
        <img className="check-mark" src="https://cdn.glitch.com/75b20657-0548-4a22-850e-40762042f668%2Fcheckmark.svg?v=1568144295046" alt="check mark"></img>
        <p className="equal-sign">=</p>
        <p className="completed-pomos-number">{this.props.currentCompleted}</p>
      </div>
    );
  }
}

export default Completedpomos;