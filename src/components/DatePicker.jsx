import React from 'react';
import Month from './Month';

const DatePicker = ({ date, weekdays, getLocalWeekDay }) => {
  const weekHead = weekdays.map(day => (
    <th scope="col" title={day.full}>
      {day.short}
    </th>
  ));
  return (
    <table className="ui-datepicker-calendar">
      <colgroup>
        <col />
        <col />
        <col />
        <col />
        <col />
        <col className="ui-datepicker-week-end" />
        <col className="ui-datepicker-week-end" />
      </colgroup>
      <thead>
        <tr>{weekHead}</tr>
      </thead>
      <Month date={date} getLocalWeekDay={getLocalWeekDay} />
    </table>
  );
};

export default DatePicker;
