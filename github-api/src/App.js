import React, { useState } from "react";
import "./App.css";
import Fetch from "./Fetch";

function App() {
  const [input, setInput] = useState([]);
  const [inputComplete, setInputComplete] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Enter GitHub username</h1>
        <input
          placeholder="Enter here"
          onChange={(e) => {
            setInput(e.target.value);
            setInputComplete(false);
          }}
        />
        <p>You entered: {input}</p>
        <button onClick={() => setInputComplete(true)}>OK</button>
        {!inputComplete ? (
          <p style={{ color: "yellow" }}>
            Warning: If you access too much, you will get an error.
            <br /> If that happens, wait for a day and try again.
          </p>
        ) : null}
        <Fetch input={input} complete={inputComplete}></Fetch>
      </header>
    </div>
  );
}

export default App;
