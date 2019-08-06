import React from 'react';

const Day = ({ day, date }) => {
  const getClass = () => {
    if (day.toDateString() === date.toDateString()) {
      return 'today';
    }
    if (day.getMonth() !== date.getMonth()) {
      return 'other-month';
    }
    return null;
  };

  return <td className={`ui-datepicker-${getClass()}`}>{day.getDate()}</td>;
};

export default Day;
