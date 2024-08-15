import React, { useState, useCallback } from "react";
import Header from "./Shared/Header";
import Message from "./Message/pages/Message";
import { AuthContext } from "./Auth/AuthContext";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [email, setEmail] = useState(null);
  let [id, setId] = useState(null);
  let [name, setName] = useState(null);
  let [profilePicture, setProfilePicture] = useState(null);
  const login = useCallback((user) => {
    setIsLoggedIn(true);
    setEmail(user.email);
    setId(user.id);
    setProfilePicture(user.profilePicture);
    setName(user.firstName + " " + user.lastName);
  });
  const logout = useCallback((user) => {
    setIsLoggedIn(false);
    setEmail(null);
    setId(null);
    setProfilePicture(null);
    setName(null);
  });

  return (
    <Router>
      <AuthContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
          email: email,
          id: id,
          name: name,
          profilePicture: profilePicture,
          login: login,
          logout: logout,
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Message />} />
          <Route path="/market" element={<h2>Hello there</h2>} />
          <Route path="/about" element={<h2>Hello there from about</h2>} />
        </Routes>
      </AuthContext.Provider>
    </Router>
  );
};

export default App;
