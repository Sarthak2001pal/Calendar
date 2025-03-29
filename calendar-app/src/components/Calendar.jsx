import React, { useState, useEffect, useRef } from 'react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const calendarRef = useRef(null);

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const days = [];

    const startingDay = firstDayOfMonth.getDay();
    for (let i = 0; i < startingDay; i++) {
      days.push({
        date: new Date(year, month, -startingDay + i + 1),
        currentMonth: false,
      });
    }

    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
      days.push({
        date: new Date(year, month, i),
        currentMonth: true,
      });
    }

    const totalDaysToShow = Math.ceil(days.length / 7) * 7;
    for (let i = 1; days.length < totalDaysToShow; i++) {
      days.push({
        date: new Date(year, month + 1, i),
        currentMonth: false,
      });
    }

    return days;
  };

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const formatMonthYear = (date) => {
    return date.toLocaleString('default', { month: 'long', year: 'numeric' });
  };

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const daysInMonth = getDaysInMonth(currentDate);

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={goToPreviousMonth} className="nav-button">&#10094;</button>
        <h2 className="month-year">{formatMonthYear(currentDate)}</h2>
        <button onClick={goToNextMonth} className="nav-button">&#10095;</button>
      </div>

      <div className="weekdays">
        {weekdays.map(day => (
          <div key={day} className="weekday">{day}</div>
        ))}
      </div>

      <div className="calendar-grid">
        {daysInMonth.map((day, index) => (
          <div
            key={index}
            className={`calendar-day ${!day.currentMonth ? 'other-month' : ''} ${day.date.toDateString() === new Date().toDateString() ? 'current-day' : ''}`}
          >
            {day.date.getDate()}
          </div>
        ))}
      </div>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body, html {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #121212;
          color: #e0e0e0;
        }

        .calendar-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100vw;
          height: 100vh;
          padding: 20px;
        }

        .calendar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 800px;
          padding: 20px;
          background-color: #1e1e1e;
          border-radius: 12px;
        }

        .nav-button {
          background: none;
          border: none;
          color: #e0e0e0;
          font-size: 24px;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .nav-button:hover {
          color: #4a90e2;
        }

        .month-year {
          font-size: 24px;
          font-weight: 600;
        }

        .weekdays, .calendar-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          width: 100%;
          max-width: 800px;
          text-align: center;
        }

        .weekday {
          color: #888;
          font-size: 16px;
          font-weight: 500;
          padding: 8px;
        }

        .calendar-grid {
          gap: 8px;
          flex-grow: 1;
        }

        .calendar-day {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          color: #e0e0e0;
          font-size: 18px;
          aspect-ratio: 1;
        }

        .calendar-day:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        .calendar-day.other-month {
          color: #555;
        }

        .calendar-day.current-day {
          background-color: #4a90e2;
          color: white;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default Calendar;
