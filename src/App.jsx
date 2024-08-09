import React from "react";
import Header from "./Shared/Header";
import Home from "./Home/page/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/studenthelpline" element={<h2>Hello there</h2>} />
        <Route path="/about" element={<h2>Hello there from about</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
