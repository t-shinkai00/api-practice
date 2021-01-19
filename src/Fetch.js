import React, { useEffect, useState } from "react";
import "./App.css";

function Fetch({ input, complete }) {
  const [result, setResult] = useState({
    login: "",
    followers: "",
    following: "",
    created: "",
    updated: "",
    avatar_url: "",
  });
  const [success, setSuccess] = useState(false);

  const url = "https://api.github.com/users/" + input;
  const getAPI = async () => {
    const json = await fetch(url)
      .then((res) => {
        if (res.status === 200) setSuccess(true);
        return res.json();
      })
      .catch((e) => {
        console.error("エラーが発生しました。", e);
        return null;
      });
    setResult({
      ...result,
      login: json.login,
      followers: json.followers,
      following: json.following,
      created: json.created_at,
      updated: json.updated_at,
      avatar_url: json.avatar_url,
    });
    // console.log(result);
  };

  useEffect(() => {
    if (complete) {
      getAPI();
    } else {
      setResult({
        // ...result,
        login: "",
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

  if (complete && success)
    return (
      <div>
        <h1>GitHub Information</h1>
        <li>Name: {result.login}</li>
        <li>Followers: {result.followers}</li>
        <li>Following: {result.following}</li>
        <li>
          Your{" "}
          <a className="App-link" href={result.avatar_url}>
            avatar
          </a>
        </li>
        <li>Created at: {result.created}</li>
        <li>Updated at: {result.updated}</li>
        <p>
          If you want more ...{" "}
          <a className="App-link" href={url}>
            visit here
          </a>
        </p>
      </div>
    );
  else if (complete && !success)
    return (
      <p style={{ color: "red" }}>
        Something went wrong. Please double check username or wait for a day and
        try again.
      </p>
    );
  else return <div></div>;
}

export default Fetch;
