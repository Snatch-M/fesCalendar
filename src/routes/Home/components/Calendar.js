import React, { Component } from 'react';

export default class Calendar extends Component {

  renderDate = (date) => {
    return date.map((item, index) => {
      return (<td>{item}</td>);
    });
  }
  
  renderCalendar = () => {
    const weekList = ['日', '月', '火', '水', '木', '金', '土'];
    const dateObj = new Date();
    console.log(dateObj.getFullYear() + '年' + (dateObj.getMonth() + 1) + '月');
    console.log(weekList[dateObj.getDay()]); // 曜日
    dateObj.setDate(1);
    const dayNum = dateObj.getDay(); //曜日の番号
    console.log(weekList[dayNum]); // 曜日
    const aaa = weekList[dayNum];

    // sample 配列
    const dayArr = [
      [null, 1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12, 13],
      [14, 15, 16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25, 26, 27],
      [28, 29, 30, 31, null, null, null]
    ];

    const week = dayArr.map((item) => {
      return (
        <tr>
          {this.renderDate(item)}
        </tr>
      );
    });

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