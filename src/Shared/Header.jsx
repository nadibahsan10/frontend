import React from "react";
import "./Header.css";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="mainHeader">
      <div className="logo">
        <h1>UIU+</h1>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/home" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/studenthelpline" activeClassName="active">
              Student Helpline
            </NavLink>
          </li>
          <li>
            <NavLink to="/marketplace" activeClassName="active">
              Market Place
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About Us
            </NavLink>
          </li>
        </ul>
      </nav>
      <Button
        sx={{ marginLeft: "58%", padding: "10px 20px" }}
        variant="contained"
        style={{ backgroundColor: "white", color: "black" }}
      >
        JOIN
      </Button>
    </div>
  );
};

export default Header;
