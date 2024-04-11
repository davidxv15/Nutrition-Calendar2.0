import React, { useState, useEffect } from "react";
import moment from "moment";
import "./Calendar.css";
import DayModal from "./DayModal";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(moment());
  const [selectedDay, setSelectedDay] = useState(null);
  const [entries, setEntries] = useState(
    () => JSON.parse(localStorage.getItem("entries")) || {}
  );

  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);

  // Function to render days
  const renderDays = () => {
    const startDay = currentDate.clone().startOf("month").startOf("week");
    const endDay = currentDate.clone().endOf("month").endOf("week");
    const today = moment(); // Get today's date for comparison
    const dayArray = [];
    let day = startDay.clone();

    while (day.isBefore(endDay, "day")) {
      const currentDay = day.clone();
      const isToday = currentDay.isSame(today, "day"); //checks if day = today

      const dayKey = currentDay.format("MMMM-D-YY");

      const totalCalories = entries[dayKey]
        ? entries[dayKey].reduce((acc, curr) => acc + curr.calories, 0)
        : 0;

      dayArray.push(
        <div
          key={dayKey}
          onClick={() => setSelectedDay(currentDay)}
          className={`day ${isToday ? "day-today" : ""}`}
        >
          <div>{currentDay.format("D")}</div>
          <div>
            <span className="underline">Daily Total:</span> <br></br>
            {totalCalories} Cal
          </div>
        </div>
      );
      day.add(1, "day");
    }
    return dayArray;
  };

  return (
    <div className="calendar-background">
      <div className="calendar-nav">
        <button
          className="month-button"
          onClick={() =>
            setCurrentDate((prev) => prev.clone().subtract(1, "month"))
          }
        >
          Previous Month
        </button>

        <div className="calendar-nav-title">
          <h2>{currentDate.format("MMMM YYYY")}</h2>
        </div>
        <button
          className="month-button"
          onClick={() => setCurrentDate((prev) => prev.clone().add(1, "month"))}
        >
          Next Month
        </button>
      </div>
      <div className="calendar-header">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>

      <div className="calendar-body">{renderDays()}</div>
      {selectedDay && (
        <DayModal
          day={selectedDay.format("MMMM-D-YY")}
          entries={entries}
          setEntries={setEntries}
          closeModal={() => setSelectedDay(null)}
        />
      )}
    </div>
  );
};

export default Calendar;
