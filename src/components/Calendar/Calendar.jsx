import React, { useState, useEffect } from 'react';
import moment from 'moment';
import DayModal from "./DayModal";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(moment());
  const [selectedDay, setSelectedDay] = useState(null);
  const [entries, setEntries] = useState(() => JSON.parse(localStorage.getItem('entries')) || {});

  useEffect(() => {
    localStorage.setItem('entries', JSON.stringify(entries));
  }, [entries]);

  // Function to render days
  const renderDays = () => {
    const startDay = currentDate.clone().startOf('month').startOf('week');
    const endDay = currentDate.clone().endOf('month').endOf('week');
    const dayArray = [];
    let day = startDay.clone();

    while (day.isBefore(endDay, 'day')) {
      const currentDay = day.clone();
      dayArray.push(
        <div key={currentDay.format("YYYY-MM-DD")} 
             onClick={() => setSelectedDay(currentDay)} 
             style={{ margin: '10px', padding: '20px', border: '1px solid black', cursor: 'pointer' }}>
          {currentDay.format("D")}
        </div>
      );
      day.add(1, 'day');
    }
    return dayArray;
  };

  return (
    <div>
      <h2>{currentDate.format("MMMM YYYY")}</h2>
      <button onClick={() => setCurrentDate(prev => prev.clone().subtract(1, 'month'))}>Previous</button>
      <button onClick={() => setCurrentDate(prev => prev.clone().add(1, 'month'))}>Next</button>
      <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '600px' }}>
        {renderDays()}
      </div>
      {selectedDay && <DayModal day={selectedDay.format("YYYY-MM-DD")} entries={entries} setEntries={setEntries} closeModal={() => setSelectedDay(null)} />}
    </div>
  );
};

export default Calendar;
