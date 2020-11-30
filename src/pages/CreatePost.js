import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../App.css";

export default function CreatePost() {
  const [userName, setUserName] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const submitPost = () => {
    Axios.post("https://mysql-deploy-heroku.herokuapp.com/api/create", {
      userName: userName,
      title: title,
      text: text,
    });
  };

  return (
    <div className="CreatePost">
      <div className="uploadPost">
        <label>UserName</label>
        <input
          type="text"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <label>Title</label>
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>Post Text</label>
        <textarea
          onChange={(e) => {
            setText(e.target.value);
          }}
        />

        <button onClick={submitPost}> Submit Post</button>
      </div>
    </div>
  );
}
