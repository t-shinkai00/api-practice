import React, { useState, useEffect } from "react";
import "./App.css";
import Fetch from "./Fetch";

function App() {
  const [input, setInput] = useState([]);
  const [inputComplete, setInputComplete] = useState(false);
  // useEffect(() => {
  //   console.log(input);
  // }, [input]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Enter Your GitHub name.</h1>
        <input
          onChange={(e) => {
            // console.log(e.target.value);
            setInput(e.target.value);
            setInputComplete(false);
          }}
        />
        <p>You entered: {input}</p>
        <button onClick={() => setInputComplete(true)}>OK</button>
        <Fetch input={input} complete={inputComplete}></Fetch>
      </header>
    </div>
  );
}

export default App;
