import React, { Component } from 'react';
import './Title.css';


class Title extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="title">
        <p>Pomodoro</p>
        <p>Timer</p>
      </div>
    );
  }
}

export default Title;