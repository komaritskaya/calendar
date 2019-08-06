import React, { Component } from 'react';
import Week from './Week';

class Month extends Component {
  renderMonth = (startDay, endDay) => {
    let weekStart = startDay;
    let weeksCount = 0;
    let month = [];
    while (weekStart < endDay) {
      weekStart = new Date(
        startDay.getFullYear(),
        startDay.getMonth(),
        startDay.getDate() + 7 * weeksCount,
      );
      weeksCount++;
      month.push(weekStart);
    }
    return month.map(item => <Week weekStart={item} date={this.props.date} />);
  };

  render() {
    const { date, getLocalWeekDay } = this.props;
    const monthStart = new Date(date.getFullYear(), date.getMonth(), 1);
    const monthEnd = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const firstWeekStart = new Date(
      date.getFullYear(),
      date.getMonth(),
      1 - getLocalWeekDay(monthStart),
    );
    const lastWeekStart = new Date(
      date.getFullYear(),
      date.getMonth(),
      monthEnd.getDate() - getLocalWeekDay(monthEnd),
    );
    return <tbody>{this.renderMonth(firstWeekStart, lastWeekStart)}</tbody>;
  }
}

export default Month;
