import React from "react";
import Header from "./Shared/Header";
import Message from "./Message/pages/Message";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Message />} />
        <Route path="/market" element={<h2>Hello there</h2>} />
        <Route path="/about" element={<h2>Hello there from about</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
