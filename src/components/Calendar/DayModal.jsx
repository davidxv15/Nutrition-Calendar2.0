import React, { useState } from 'react';

const DayModal = ({ day, entries, setEntries, closeModal }) => {
  const [foodName, setFoodName] = useState('');
  const [calories, setCalories] = useState('');
  console.log(entries[day]); 


  const addEntry = () => {
    if (!foodName || calories <= 0) {
      alert('Please fill in all fields correctly.');
      return;
    }
    const newEntry = { foodName, calories: parseInt(calories, 10) };
    const dayEntries = entries[day] ? [...entries[day], newEntry] : [newEntry];
    setEntries({ ...entries, [day]: dayEntries });
    setFoodName(''); // Reset the input fields after adding an entry
    setCalories('');
  };

  // Function to list out the entries for the selected day
  const renderDayEntries = (dayEntries) => {
    return dayEntries.map((entry, index) => (
      <li key={index}>
        {entry.foodName} - {entry.calories} Calories
      </li>
    ));
  };

  return (
    <div style={{ position: 'fixed', top: '20%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'burlywood', padding: '20px', zIndex: 1000 }}>
      <h3>Entries for Day {day}</h3>
      <div>
        {entries[day] && entries[day].length > 0 ? (
          <ul>{renderDayEntries(entries[day])}</ul>
        ) : (
          <p>No entries for this day.</p>
        )}
      </div>
      <hr />
      <div>
        <input type="text" placeholder="Food Name" value={foodName} onChange={(e) => setFoodName(e.target.value)} />
        <input type="number" placeholder="Calories" value={calories} onChange={(e) => setCalories(e.target.value)} />
        <button onClick={addEntry}>Add Entry</button>
      </div>
      <button onClick={closeModal} style={{marginTop: "10px"}}>Close</button>
    </div>
  );
};

export default DayModal;
