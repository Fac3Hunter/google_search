import React, { useState } from "react";

import { Navbar } from "./components/Navbar";
import { Routes } from "./components/Routes";
import { Footer } from "./components/Footer";
import "./index.css";
const App = () => {
  const { darkTheme, setDarkTheme } = useState(false);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="text-3xl font-bold underline">
        qweqwe
        <Navbar />
        <Routes />
        <Footer />
      </div>
    </div>
  );
};

export default App;
