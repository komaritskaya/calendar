import React from 'react';
import Header from './Header';
import MonthHeader from './MonthHeader';
import DatePicker from './DatePicker';

class Calendar extends React.Component {
  getLocalWeekDay = date => {
    let day = date.getDay();
    if (day === 0) {
      day = 7;
    }
    return day - 1;
  };

  render() {
    const { date } = this.props;

    const weekdays = [
      {
        full: 'Понедельник',
        short: 'Пн',
      },
      {
        full: 'Вторник',
        short: 'Вт',
      },
      {
        full: 'Среда',
        short: 'Ср',
      },
      {
        full: 'Четверг',
        short: 'Чт',
      },
      {
        full: 'Пятница',
        short: 'Пт',
      },
      {
        full: 'Суббота',
        short: 'Сб',
      },
      {
        full: 'Воскресенье',
        short: 'Вс',
      },
    ];

    const months = [
      {
        normal: 'Январь',
        modified: 'января',
      },
      {
        normal: 'Февраль',
        modified: 'февраля',
      },
      {
        normal: 'Март',
        modified: 'марта',
      },
      {
        normal: 'Апрель',
        modified: 'апреля',
      },
      {
        normal: 'Май',
        modified: 'мая',
      },
      {
        normal: 'Июнь',
        modified: 'июня',
      },
      {
        normal: 'Июль',
        modified: 'июля',
      },
      {
        normal: 'Август',
        modified: 'августа',
      },
      {
        normal: 'Сентябрь',
        modified: 'сентября',
      },
      {
        normal: 'Октябрь',
        modified: 'октября',
      },
      {
        normal: 'Ноябрь',
        modified: 'ноября',
      },
      {
        normal: 'Декабрь',
        modified: 'декабря',
      },
    ];

    return (
      <div className="ui-datepicker">
        <Header
          months={months}
          date={date}
          weekdays={weekdays}
          getLocalWeekDay={this.getLocalWeekDay}
        />
        <MonthHeader months={months} date={date} />
        <DatePicker
          date={date}
          weekdays={weekdays}
          getLocalWeekDay={this.getLocalWeekDay}
        />
      </div>
    );
  }
}

export default Calendar;
