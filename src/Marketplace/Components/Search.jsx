import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import SearchCategory from "./SubComponent/SearchCategory";
import "./Search.css";
import electronicsIcon from './SubComponent/Icon/electronics.png';
import furnituresIcon from './SubComponent/Icon/furnitures.png';
import bookIcon from './SubComponent/Icon/book.png';
import cpuIcon from './SubComponent/Icon/cpu.png';
import desktopIcon from './SubComponent/Icon/desktop.png';
import laptopIcon from './SubComponent/Icon/laptop.png'
import mobileIcon from './SubComponent/Icon/mobile.png'
import droneCameraIcon from './SubComponent/Icon/camera.png'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

const category = [
  { icon: electronicsIcon, name: "Electronics" },
  { icon: furnituresIcon, name: "Furniture" },
  { icon: bookIcon, name: "Books" },
  { icon: cpuIcon, name: "Lab Equipment" },
  { icon: desktopIcon, name: "Desktop" },
  { icon: laptopIcon, name: "Laptop" },
  { icon: mobileIcon, name: "Mobile" },
  { icon: droneCameraIcon, name: "Drone & Camera" },
  { icon: droneCameraIcon, name: "Drone & Camera" },
];

function Search() {
  return (
    <div component="form" method="post">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ margin: "20px 25%" }}>
            <Item className="searchHeader">
              <h2>MarketPlace For UIU Students</h2>
            </Item>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          spacing={0}
          sx={{
            width: "50%",
            marginLeft: "5%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid item xs={10}>
            <Item>
              <TextField
                id="outlined-basic"
                label="Search anything in your marketplace... "
                variant="outlined"
                sx={{ width: "100%", borderRadius: "none" }}
              />
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item
              sx={{
                display: "flex",
                height: "55px",
                backgroundColor: "transparent",
              }}
            >
              <Button variant="contained">
                <SearchIcon />
              </Button>
            </Item>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4} sx={{padding: "0 20%", marginTop: '1%'}}>
          {category.map((x) => (
            <Grid item xs={3}>
              <Item>
                <SearchCategory name={x.name} icon={x.icon}/>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Search;