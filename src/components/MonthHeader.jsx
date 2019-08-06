import React from 'react';

const MonthHeader = ({ date, months }) => {
  return (
    <div className="ui-datepicker-header">
      <div className="ui-datepicker-title">
        <span className="ui-datepicker-month">
          {months[date.getMonth()].normal}
        </span>
        &nbsp;<span className="ui-datepicker-year">{date.getFullYear()}</span>
      </div>
    </div>
  );
};

export default MonthHeader;
