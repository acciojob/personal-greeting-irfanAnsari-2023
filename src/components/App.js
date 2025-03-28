
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState("");

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="app-container">
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleInputChange}
      />
      {name && <h2>Hello, {name}!</h2>}
    </div>
  );
}

export default App
