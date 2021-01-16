import React, { useEffect } from "react";
import "./App.css";

function Fetch({ input, complete }) {
  const url = "https://api.github.com/users/" + input;
  const getAPI = async () => {
    const json = await fetch(url)
      .then((res) => {
        return res.json();
      })
      .catch((e) => {
        console.error("エラーが発生しました。", e);
        return null;
      });
    // return json;
    console.log(json.followers);
  };
  useEffect(() => {
    if (complete) {
      getAPI();
    }
    // console.log(complete);
  }, [complete]);

  return (
    <div>
      <h1>GitHub Information</h1>
      <li>Name: {input}</li>
      <p>
        If you want more ...{" "}
        <a className="App-link" href={url}>
          visit here
        </a>
      </p>
    </div>
  );
}

export default Fetch;