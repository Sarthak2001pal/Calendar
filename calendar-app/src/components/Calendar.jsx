import React, { useState } from 'react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Generate days in the current month
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    
    const days = [];
    
    // Add days from previous month to fill first week
    const startingDay = firstDayOfMonth.getDay();
    for (let i = 0; i < startingDay; i++) {
      const prevMonthDate = new Date(year, month, -startingDay + i + 1);
      days.push({ 
        date: prevMonthDate, 
        currentMonth: false 
      });
    }
    
    // Add days of current month
    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
      const dayDate = new Date(year, month, i);
      days.push({ 
        date: dayDate, 
        currentMonth: true 
      });
    }
    
    // Add days from next month to complete grid
    const totalDaysToShow = Math.ceil(days.length / 7) * 7;
    const remainingDays = totalDaysToShow - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      const nextMonthDate = new Date(year, month + 1, i);
      days.push({ 
        date: nextMonthDate, 
        currentMonth: false 
      });
    }
    
    return days;
  };

  // Navigate to previous month
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  // Navigate to next month
  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  // Format month and year for header
  const formatMonthYear = (date) => {
    return date.toLocaleString('default', { month: 'long', year: 'numeric' });
  };

  // Days of the week
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Get days for current month
  const daysInMonth = getDaysInMonth(currentDate);

  return (
    <>
      <style>{`
        html, body {
          margin: 0;
          padding: 0;
          height: 100%;
          background-color: #121212;
        }

        .calendar-container {
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          background-color: #1e1e1e;
          color: #e0e0e0;
          padding: 20px;
          box-sizing: border-box;
          overflow: hidden;
        }

        .calendar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
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
          color: #e0e0e0;
        }

        .weekdays {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          text-align: center;
          margin-bottom: 10px;
        }

        .weekday {
          color: #888;
          font-size: 16px;
          font-weight: 500;
          padding: 10px;
        }

        .calendar-grid {
          flex-grow: 1;
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 5px;
          overflow: auto;
        }

        .calendar-day {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
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
      <div className="calendar-container">
        {/* Month Navigation */}
        <div className="calendar-header">
          <button onClick={goToPreviousMonth} className="nav-button">
            &#10094;
          </button>
          
          <h2 className="month-year">
            {formatMonthYear(currentDate)}
          </h2>
          
          <button onClick={goToNextMonth} className="nav-button">
            &#10095;
          </button>
        </div>

        {/* Weekday Headers */}
        <div className="weekdays">
          {weekdays.map(day => (
            <div key={day} className="weekday">{day}</div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="calendar-grid">
          {daysInMonth.map((day, index) => (
            <div 
              key={index} 
              className={`calendar-day 
                ${!day.currentMonth ? 'other-month' : ''}
                ${day.date.toDateString() === new Date().toDateString() ? 'current-day' : ''}
              `}
            >
              {day.date.getDate()}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Calendar;