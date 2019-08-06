import React from 'react';

const Header = ({ date, weekdays, months, getLocalWeekDay }) => {
  const localWeekDay = getLocalWeekDay(date);
  return (
    <div className="ui-datepicker-material-header">
      <div className="ui-datepicker-material-day">
        {weekdays[localWeekDay].full}
      </div>
      <div className="ui-datepicker-material-date">
        <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
        <div className="ui-datepicker-material-month">
          {months[date.getMonth()].modified}
        </div>
        <div className="ui-datepicker-material-year">{date.getFullYear()}</div>
      </div>
    </div>
  );
};

export default Header;
