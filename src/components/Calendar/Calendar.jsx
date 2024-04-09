import React, { useState, useEffect } from "react";
import moment from "moment";
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

      const dayKey = currentDay.format("YYYY-MM-DD");

      const totalCalories = entries[dayKey]
        ? entries[dayKey].reduce((acc, curr) => acc + curr.calories, 0)
        : 0;

      dayArray.push(
        <div
          key={dayKey}
          onClick={() => setSelectedDay(currentDay)}
          style={{
            margin: "10px",
            padding: "20px",
            border: "1px solid black",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: isToday ? "#ffff99" : "transparent", // Highlight if it's today
            color: isToday ? "red" : "black", // Optional: Change text color for today
          }}
        >
          <div>{currentDay.format("D")}</div>
          <div>Total Cal: {totalCalories}</div>
        </div>
      );
      day.add(1, "day");
    }
    return dayArray;
  };

  return (
    <div>
      <h2>{currentDate.format("MMMM YYYY")}</h2>
      <button
        onClick={() =>
          setCurrentDate((prev) => prev.clone().subtract(1, "month"))
        }
      >
        Previous
      </button>
      <button
        onClick={() => setCurrentDate((prev) => prev.clone().add(1, "month"))}
      >
        Next
      </button>
      <div style={{ display: "flex", flexWrap: "wrap", maxWidth: "600px" }}>
        {renderDays()}
      </div>
      {selectedDay && (
        <DayModal
          day={selectedDay.format("YYYY-MM-DD")}
          entries={entries}
          setEntries={setEntries}
          closeModal={() => setSelectedDay(null)}
        />
      )}
    </div>
  );
};

export default Calendar;
