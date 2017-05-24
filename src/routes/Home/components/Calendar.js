import React, { Component } from 'react';

export default class Calendar extends Component {

  renderCalendar = () => {
    const weekList = ['日', '月', '火', '水', '木', '金', '土'];
    const dateObj = new Date();
    console.log(dateObj.getFullYear() + '年' + (dateObj.getMonth() + 1) + '月');
    console.log(weekList[dateObj.getDay()]); // 曜日
    dateObj.setDate(1);
    console.log(weekList[dateObj.getDay()]); // 曜日
    const aaa = weekList[dateObj.getDay()];

    let week = [];
    let day = [];
    for (let i = 0; i < 7; i++) {
      day.push(<td>{i}</td>)
    }
    for (let i = 0; i < 5; i++) {
      week.push(<tr>{day}</tr>)
    }

    return week;
  }

  render() {
    return (
      <div>
        <table>
          {this.renderCalendar()}
        </table>
      </div>
    );
  }
}