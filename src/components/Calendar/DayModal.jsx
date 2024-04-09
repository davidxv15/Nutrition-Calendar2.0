import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { BsTrash3 } from "react-icons/bs";

const DayModal = ({ day, entries, setEntries, closeModal }) => {
  const [foodName, setFoodName] = useState("");
  const [calories, setCalories] = useState("");
  console.log(entries[day]);

  const totalCalories = entries[day] ? entries[day].reduce((total, entry) => total + entry.calories, 0) : 0;


  const addEntry = () => {
    if (!foodName || calories <= 0) {
      alert("Fields may not be empty");
      return;
    }
    const newEntry = { foodName, calories: parseInt(calories, 10) };
    const dayEntries = entries[day] ? [...entries[day], newEntry] : [newEntry];
    setEntries({ ...entries, [day]: dayEntries });
    setFoodName(""); // Resets to empty
    setCalories("");
  };

  const deleteEntry = (index) => {
    const updatedEntries = [...entries[day]];
    updatedEntries.splice(index, 1); // Remove the entry at the specified index
    setEntries({ ...entries, [day]: updatedEntries });
  };

  // This equals one entry
  const renderDayEntries = (dayEntries) => {
    return dayEntries.map((entry, index) => (
      <li key={index}>
        {entry.foodName} - {entry.calories} Cal
        <button onClick={() => deleteEntry(index)} style={{ marginLeft: '10px' }}>
           <BsTrash3 />
        </button>

      </li>
    ));
  };

  return (
    <div
      className="Modal"
      style={{
        position: "fixed",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "5%",
        backgroundColor: "burlywood",
        padding: "20px",
        zIndex: 1000,
      }}
    >
      <h3>{day}</h3>
      <div>
        {entries[day] && entries[day].length > 0 ? (
          <ul>{renderDayEntries(entries[day])}</ul>
        ) : (
          <p>No entries for this day.</p>
        )}
      </div>
      <div>Total Calories: {totalCalories}</div>

      <hr />
      <div>
        <input
          type="text"
          placeholder="Food Name"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Calories"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />
        <button onClick={addEntry}>Add Entry</button>
      </div>
      <button onClick={closeModal} style={{ marginTop: "10px" }}>
        Close
      </button>
    </div>
  );
};

export default DayModal;
