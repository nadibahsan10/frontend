import React, { useState, useCallback, useEffect, useContext } from "react";
import Header from "./Shared/Header";
import Message from "./Message/pages/Message";
import { AuthContext } from "./Auth/AuthContext";
import Feed from "./Feed/pages/Feed";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "./App.css";

const App = () => {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [email, setEmail] = useState(null);
  let [id, setId] = useState(null);
  let [name, setName] = useState(null);
  let [profilePicture, setProfilePicture] = useState(null);
  let [role, setRole] = useState(null);

  const login = useCallback((user) => {
    setIsLoggedIn(true);
    setEmail(user.email);
    setId(user.id);
    setProfilePicture(user.profilePicture);
    setName(user.firstName + " " + user.lastName);
    setRole(user.role);
  }, []);
  const logout = useCallback((user) => {
    setIsLoggedIn(false);
    setEmail(null);
    setId(null);
    setProfilePicture(null);
    setName(null);
    setRole(null);
    localStorage.removeItem("user");
  }, []);

  const auth = useContext(AuthContext);

  return (
    <Router>
      <AuthContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
          email: email,
          id: id,
          name: name,
          profilePicture: profilePicture,
          role: role,
          login: login,
          logout: logout,
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<h1>This is my Home</h1>} />
          <Route
            path="/notification"
            element={<h1>This is my notification</h1>}
          />
          <Route path="/feed" element={<Feed />} />
          <Route path="/inbox" element={<Message />} />
          <Route path="/market" element={<h2>Hello there</h2>} />
          <Route path="/about" element={<h2>Hello there from about</h2>} />
        </Routes>
      </AuthContext.Provider>
    </Router>
  );
};

export default App;
