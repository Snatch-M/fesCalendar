import React, { Component } from 'react';

export default class Calendar extends Component {

  test = () => {
  	console.log('hoge');
  }

  render() {
    return (
      <div>
        {this.test()}
        calendar
      </div>
    );
  }
}