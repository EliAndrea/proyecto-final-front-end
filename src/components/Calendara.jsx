import React, { Component } from 'react';
import Calendar from 'react-calendar';
import './Calendara.css';



export default class MyCalendar extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div>
        <div className="color">
        </div>
        <div className="center">
          <Calendar
            onChange={this.onChange}
            value={this.state.date}
          />
        </div>
      </div>
    );
  }
}