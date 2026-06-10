import React, { useState } from "react";
import "./App.css";

function App() {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateNumber = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(number);
  };

  return (
    <div className="container">
      <h1>Random Number Generator</h1>

      {randomNumber === null ? (
        <p className="message">No number generated yet</p>
      ) : (
        <h2>{randomNumber}</h2>
      )}

      <button onClick={generateNumber}>
        Generate Random Number
      </button>
    </div>
  );
}

export default App;