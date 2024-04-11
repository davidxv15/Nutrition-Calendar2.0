import React, { useState } from "react";
import "./DayModal.css";
import { IoMdCloseCircle } from "react-icons/io";
import { BsTrash3 } from "react-icons/bs";

const DayModal = ({ day, entries, setEntries, closeModal }) => {
  const [foodName, setFoodName] = useState("");
  const [calories, setCalories] = useState("");
  console.log(entries[day]);

  const totalCalories = entries[day]
    ? entries[day].reduce((total, entry) => total + entry.calories, 0)
    : 0;

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

  // This = 1 entry 'line'
  const renderDayEntries = (dayEntries) => {
    return dayEntries.map((entry, index) => (
      <li key={index} className="modal-entry">
        <span>{entry.foodName} - {entry.calories} Cal</span>
        <button className="trash-button"
          onClick={() => deleteEntry(index)}
          // style={{ marginLeft: "30px" }}
        >
          <BsTrash3 />
        </button>
        
      </li>
      
    ));
  };

  return (
    <div
      className="Modal"
      
    >
      <h3  className="Modal-date">{day}</h3>
      <div className="Modal-entries">
        {entries[day] && entries[day].length > 0 ? (
          <ul>{renderDayEntries(entries[day])}</ul>
        ) : (
          <p className="no-entries">No entries for this day.</p>
        )}
      </div>
      <div><span className="underline">Total Calories:</span> {totalCalories}</div>

      <hr />
      <div>
        <input
          type="text"
          placeholder="Food Name"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
          autoFocus
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              document.getElementById('caloriesInput').focus();
            }
          }}
        />
        <input
          type="number"
          placeholder="Calories"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault(); // Prevent form submission
              addEntry(); // Call the function to add the entry
            }
          }}
        
        />
        <button className="add-entry"onClick={addEntry}>Add Entry</button>
      </div>
      <button className="close-window" onClick={closeModal} style={{ marginTop: "10px" }}>
      <IoMdCloseCircle />
      </button>
    </div>
  );
};

export default DayModal;
