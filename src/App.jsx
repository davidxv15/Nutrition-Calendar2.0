import React from 'react';
import './App.css';
import Calendar from "./components/Calendar/Calendar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Nutrition <span className="cursive">Calendar</span></h1>
          <Calendar />
      </header>
    </div>
  );
}

export default App;
