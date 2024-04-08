import React, { useState } from 'react';

const DayModal = ({ day, entries, setEntries, closeModal }) => {
  const [foodName, setFoodName] = useState('');
  const [calories, setCalories] = useState('');

  const addEntry = () => {
    const newEntry = { foodName, calories: parseInt(calories, 10) };
    const dayEntries = entries[day] ? [...entries[day], newEntry] : [newEntry];
    setEntries({ ...entries, [day]: dayEntries });
    closeModal();
  };

  return (
    <div style={{ position: 'fixed', top: '20%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px' }}>
      <h3>Add Entry for Day {day}</h3>
      <input type="text" placeholder="Food Name" value={foodName} onChange={(e) => setFoodName(e.target.value)} />
      <input type="number" placeholder="Calories" value={calories} onChange={(e) => setCalories(e.target.value)} />
      <button onClick={addEntry}>Add Entry</button>
      <button onClick={closeModal}>Close</button>
    </div>
  );
};

export default DayModal;
