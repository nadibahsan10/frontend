import React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Modal } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { NavLink, Link } from "react-router-dom";

import "./Header.css";
import Login from "./Login";
import LoginMode from "./LoginMode";
function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [loginModal, setLoginModal] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const openLoginModal = () => {
    setLoginModal(true);
  };
  const closeLoginModal = () => {
    setLoginModal(false);
  };

  return (
    <>
      <Modal
        open={loginModal}
        onClose={closeLoginModal}
        aria-labelledby="login-modal-title"
        aria-describedby="login-modal-description"
      >
        <Box>
          <Login onClose={closeLoginModal} />
        </Box>
      </Modal>
      <AppBar position="static" sx={{ boxShadow: "none" }} color="white">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              component={Link}
              variant="h3"
              noWrap
              to="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "ROBOTO",
                fontWeight: "bold",

                letterSpacing: ".1rem",
                color: "primary.main",
                textDecoration: "none",
              }}
            >
              UIU+
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="primary"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
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
                      About us
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
              </Menu>
            </Box>

            <Typography
              variant="h4"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "roboto",
                fontWeight: "bold",
                letterSpacing: ".1rem",
                color: "primary.main",
                textDecoration: "none",
              }}
            >
              UIU+
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                marginLeft: "50px",
                display: { xs: "none", md: "flex" },
              }}
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active-link" : ""}`
                }
              >
                <Typography
                  variant="button"
                  className="link"
                  sx={{ mx: 2, my: 2 }}
                >
                  Home
                </Typography>
              </NavLink>
              <NavLink
                to="/market"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active-link" : ""}`
                }
              >
                <Typography
                  variant="button"
                  className="link"
                  sx={{ mx: 2, my: 2 }}
                >
                  Market Place
                </Typography>
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active-link" : ""}`
                }
              >
                <Typography
                  variant="button"
                  className="link"
                  sx={{ mx: 2, my: 2 }}
                >
                  About Us
                </Typography>
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active-link" : ""}`
                }
              >
                <Typography
                  variant="button"
                  className="link"
                  sx={{ mx: 2, my: 2 }}
                >
                  Contact Us
                </Typography>
              </NavLink>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={openLoginModal}
              >
                LOGIN
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Header;
