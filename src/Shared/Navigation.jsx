import React from "react";
import { NavLink } from "react-router-dom";
import { Typography, MenuItem } from "@mui/material";

const Guest = (props) => {
  const { handleCloseNavMenu } = props;
  return (
    <>
      <MenuItem onClick={handleCloseNavMenu}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `nav-link ${isActive ? "active-link" : ""}`
          }
        >
          <Typography
            className="link"
            textAlign="center"
            sx={{ color: "black" }}
          >
            Home
          </Typography>
        </NavLink>
      </MenuItem>
      <MenuItem onClick={handleCloseNavMenu}>
        <NavLink
          to="/market"
          className={({ isActive }) =>
            `nav-link ${isActive ? "active-link" : ""}`
          }
        >
          <Typography
            className="link"
            textAlign="center"
            sx={{ color: "black" }}
          >
            Market Place
          </Typography>
        </NavLink>
      </MenuItem>
      <MenuItem onClick={handleCloseNavMenu}>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `nav-link ${isActive ? "active-link" : ""}`
          }
        >
          <Typography
            className="link"
            textAlign="center"
            sx={{ color: "black" }}
          >
            About Us
          </Typography>
        </NavLink>
      </MenuItem>
      <MenuItem onClick={handleCloseNavMenu}>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `nav-link ${isActive ? "active-link" : ""}`
          }
        >
          <Typography
            className="link"
            textAlign="center"
            sx={{ color: "black" }}
          >
            Contact Us
          </Typography>
        </NavLink>
      </MenuItem>
    </>
  );
};

const Student = (props) => {
  const { handleCloseNavMenu } = props;
  return (
    <>
      <MenuItem onClick={handleCloseNavMenu}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `nav-link ${isActive ? "active-link" : ""}`
          }
        >
          <Typography
            className="link"
            textAlign="center"
            sx={{ color: "black" }}
          >
            Home
          </Typography>
        </NavLink>
      </MenuItem>
      <MenuItem onClick={handleCloseNavMenu}>
        <NavLink
          to="/feed"
          className={({ isActive }) =>
            `nav-link ${isActive ? "active-link" : ""}`
          }
        >
          <Typography
            className="link"
            textAlign="center"
            sx={{ color: "black" }}
          >
            Student's Feed
          </Typography>
        </NavLink>
      </MenuItem>
      <MenuItem onClick={handleCloseNavMenu}>
        <NavLink
          to="/market"
          className={({ isActive }) =>
            `nav-link ${isActive ? "active-link" : ""}`
          }
        >
          <Typography
            className="link"
            textAlign="center"
            sx={{ color: "black" }}
          >
            Market Place
          </Typography>
        </NavLink>
      </MenuItem>
      <MenuItem onClick={handleCloseNavMenu}>
        <NavLink
          to="/alumni"
          className={({ isActive }) =>
            `nav-link ${isActive ? "active-link" : ""}`
          }
        >
          <Typography
            className="link"
            textAlign="center"
            sx={{ color: "black" }}
          >
            Alumni
          </Typography>
        </NavLink>
      </MenuItem>
      <MenuItem onClick={handleCloseNavMenu}>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `nav-link ${isActive ? "active-link" : ""}`
          }
        >
          <Typography
            className="link"
            textAlign="center"
            sx={{ color: "black" }}
          >
            About Us
          </Typography>
        </NavLink>
      </MenuItem>
      <MenuItem onClick={handleCloseNavMenu}>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `nav-link ${isActive ? "active-link" : ""}`
          }
        >
          <Typography
            className="link"
            textAlign="center"
            sx={{ color: "black" }}
          >
            Contact Us
          </Typography>
        </NavLink>
      </MenuItem>
    </>
  );
};

const Alumni = (props) => {
  const { handleCloseNavMenu } = props;
  return (
    <>
      <MenuItem onClick={handleCloseNavMenu}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `nav-link ${isActive ? "active-link" : ""}`
          }
        >
          <Typography
            className="link"
            textAlign="center"
            sx={{ color: "black" }}
          >
            Home
          </Typography>
        </NavLink>
      </MenuItem>
      <MenuItem onClick={handleCloseNavMenu}>
        <NavLink
          to="/alumnipanel"
          className={({ isActive }) =>
            `nav-link ${isActive ? "active-link" : ""}`
          }
        >
          <Typography
            className="link"
            textAlign="center"
            sx={{ color: "black" }}
          >
            Alumni Panel
          </Typography>
        </NavLink>
      </MenuItem>
      <MenuItem onClick={handleCloseNavMenu}>
        <NavLink
          to="/feed"
          className={({ isActive }) =>
            `nav-link ${isActive ? "active-link" : ""}`
          }
        >
          <Typography
            className="link"
            textAlign="center"
            sx={{ color: "black" }}
          >
            Student's Feed
          </Typography>
        </NavLink>
      </MenuItem>
      <MenuItem onClick={handleCloseNavMenu}>
        <NavLink
          to="/market"
          className={({ isActive }) =>
            `nav-link ${isActive ? "active-link" : ""}`
          }
        >
          <Typography
            className="link"
            textAlign="center"
            sx={{ color: "black" }}
          >
            Market Place
          </Typography>
        </NavLink>
      </MenuItem>
      <MenuItem onClick={handleCloseNavMenu}>
        <NavLink
          to="/alumni"
          className={({ isActive }) =>
            `nav-link ${isActive ? "active-link" : ""}`
          }
        >
          <Typography
            className="link"
            textAlign="center"
            sx={{ color: "black" }}
          >
            Alumni
          </Typography>
        </NavLink>
      </MenuItem>
      <MenuItem onClick={handleCloseNavMenu}>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `nav-link ${isActive ? "active-link" : ""}`
          }
        >
          <Typography
            className="link"
            textAlign="center"
            sx={{ color: "black" }}
          >
            About Us
          </Typography>
        </NavLink>
      </MenuItem>
      <MenuItem onClick={handleCloseNavMenu}>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `nav-link ${isActive ? "active-link" : ""}`
          }
        >
          <Typography
            className="link"
            textAlign="center"
            sx={{ color: "black" }}
          >
            Contact Us
          </Typography>
        </NavLink>
      </MenuItem>
    </>
  );
};

export { Student, Guest, Alumni };
