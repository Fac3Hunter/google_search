// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App"; // vs code почему-то считает ошибкой, хотя при запуске на локалке ошибка наоборот говорит, что я пишу верно

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
  //adsd
);
