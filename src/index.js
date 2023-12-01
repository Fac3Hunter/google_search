// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App"; // vs code почему-то считает ошибкой, хотя при запуске на локалке ошибка наоборот говорит, что я пишу верно

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
