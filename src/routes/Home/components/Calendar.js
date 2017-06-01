import React, { Component } from 'react';

import './Calendar.scss'

export default class Calendar extends Component {

  renderDate = (date) => {
    return date.map((item, index) => {
      return (<td key={index}>{item}</td>);
    });
  }
  
  renderCalendar = () => {
    const weekList = ['日', '月', '火', '水', '木', '金', '土'];
    const dateObj = new Date();
    // const dateObj = new Date(2017, 7-1, 1);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    console.log(year + '年' + month + '月');
    console.log(weekList[dateObj.getDay()]); // 曜日
    const thisMonthNum = new Date(year, month, 0).getDate(); // 今月の日数
    console.log(thisMonthNum);
    dateObj.setDate(1);
    const dayNum = dateObj.getDay(); //曜日の番号
    // console.log(weekList[dayNum]); // 曜日
    console.log(dayNum);

    // sample 配列
    // const dayArr = [
    //   [null, 1, 2, 3, 4, 5, 6],
    //   [7, 8, 9, 10, 11, 12, 13],
    //   [14, 15, 16, 17, 18, 19, 20],
    //   [21, 22, 23, 24, 25, 26, 27],
    //   [28, 29, 30, 31, null, null, null]
    // ];
    // console.log(dayArr);
    
    // 配列の作成
    let weekArr = [];
    let a = 0;
    for (let i = 0; i < 5; i++) {
      let dateArr = [];
      for (let j = 0; j < 7; j++) {
        const day = i * 7 + j - dayNum + 1;
        if (day <= 0 || day > thisMonthNum) {
          dateArr.push(null);
        } else {
          dateArr.push(day);
        }
      }
      weekArr.push(dateArr);
    }

    // 配列をmapで回してカレンダーを生成
    const week = weekArr.map((item, index) => {
      return (
        <tr key={index}>
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
          <tbody>
            {this.renderCalendar()}
          </tbody>
        </table>
      </div>
    );
  }
}