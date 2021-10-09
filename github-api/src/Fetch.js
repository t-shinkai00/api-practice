import React, { useEffect, useState } from "react";
import "./App.css";

function Fetch({ input, complete }) {
  const [result, setResult] = useState({
    name: "",
    followers: "",
    following: "",
    created: "",
    updated: "",
    avatar_url: "",
  });
  const [success, setSuccess] = useState(false);
  const [proceed, setProceed] = useState(false);

  const url = "https://api.github.com/users/" + input;
  const getAPI = async () => {
    setProceed(true);
    const json = await fetch(url)
      .then((res) => {
        if (res.status === 200) {
          setSuccess(true);
          return res.json();
        }
      })
      .catch((e) => {
        console.error("エラーが発生しました。", e);
        return null;
      });
    console.log(json);
    setResult({
      name: json.name,
      followers: json.followers,
      following: json.following,
      created: json.created_at,
      updated: json.updated_at,
      avatar_url: json.avatar_url,
    });
    setProceed(false);
    // console.log(result);
  };

  useEffect(() => {
    if (complete) {
      getAPI();
    } else {
      setResult({
        name: "",
        followers: "",
        following: "",
        created: "",
        updated: "",
        avatar_url: "",
      });
      setSuccess(false);
    }
    console.log(success);
  }, [complete]);

  if (complete && success && !proceed)
    return (
      <div>
        <h1>GitHub Information</h1>
        <li>Name: {result.name}</li>
        <li>Followers: {result.followers}</li>
        <li>Following: {result.following}</li>
        <li>
          <a
            className="App-link"
            href={result.avatar_url}
            target="_blank"
            rel="noreferrer noopener"
          >
            avatar image
          </a>
        </li>
        <li>Created at: {result.created}</li>
        <li>Updated at: {result.updated}</li>
        <p>
          If you want more ...{" "}
          <a
            className="App-link"
            href={url}
            target="_blank"
            rel="noreferrer noopener"
          >
            visit here
          </a>
        </p>
      </div>
    );
  else if (complete && !success && !proceed)
    return (
      <p style={{ color: "red" }}>
        Something went wrong. Please double check username or wait for a day and
        try again.
      </p>
    );
  else if (proceed) return <p style={{ color: "green" }}>Loading...</p>;
  else return <div></div>;
}

export default Fetch;
