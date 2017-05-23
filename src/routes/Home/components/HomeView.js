import React, { Component } from 'react';
import DuckImage from '../assets/Duck.jpg'
import Calendar from './Calendar'
import './HomeView.scss'

export default class HomeView extends Component {

  render() {
    return (
      <div>
        <Calendar />
      </div>
    );
  }
}