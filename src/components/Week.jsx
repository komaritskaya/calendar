import React from 'react';
import Day from './Day';

const Week = ({ weekStart, date }) => {
  const renderWeek = () => {
    let week = [];
    for (let i = 0; i <= 6; i++) {
      week.push(
        new Date(
          weekStart.getFullYear(),
          weekStart.getMonth(),
          weekStart.getDate() + i,
        ),
      );
    }
    return week.map(day => <Day day={day} date={date} />);
  };

  return <tr>{renderWeek()}</tr>;
};

export default Week;
