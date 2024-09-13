import React from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import ComputerIcon from "@mui/icons-material/Computer";
import MicrowaveIcon from "@mui/icons-material/Microwave";
import ChairIcon from "@mui/icons-material/Chair";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import BookIcon from "@mui/icons-material/Book";
import KitchenIcon from "@mui/icons-material/Kitchen";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import { Link } from "react-router-dom";
const Links = ({ icon, title, id }) => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Button
        sx={{
          padding: 6,
          display: "flex",
          flexDirection: "column",
          height: 200,
        }}
        variant="outlined"
        component={Link}
        state={id}
        to="product"
      >
        {icon}
        {title}
      </Button>
    </Grid>
  );
};

const MarketHome = () => {
  return (
    <>
      <Box
        sx={{
          height: "300px",
          borderRadius: 1,
        }}
        marginTop={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        gap={2}
      >
        <Typography variant="h3">UIU Market Place</Typography>
        <Box sx={{ width: "700px" }} display="flex" alignItems="center" gap={2}>
          <TextField fullWidth label="What are you looking for ?" />
          <Button
            variant="contained"
            component={Link}
            to="product"
            sx={{ height: "100%" }}
          >
            Search
          </Button>
        </Box>
        <Box display="flex" gap={2}>
          <Button
            component={Link}
            to="addproduct"
            variant="contained"
            color="success"
            sx={{ color: "white" }}
          >
            Advertisement
          </Button>
          <Button
            component={Link}
            to="myproduct"
            variant="outlined"
            sx={{ color: "white" }}
          >
            My Products
          </Button>
        </Box>
      </Box>

      <Grid
        padding={10}
        paddingLeft={40}
        paddingRight={40}
        container
        spacing={4} // Controls the spacing between the items
        backgroundColor="#f0f0f0"
      >
        <Links id={1} title="Smartphones" icon={<SmartphoneIcon />} />
        <Links id={2} title="Computers" icon={<ComputerIcon />} />
        <Links id={3} title="Electronics" icon={<MicrowaveIcon />} />
        <Links id={4} title="Furniture" icon={<ChairIcon />} />
        <Links id={5} title="Fashion & Apparel" icon={<CheckroomIcon />} />
        <Links id={6} title="Books & Media" icon={<BookIcon />} />
        <Links id={7} title="Home Appliances" icon={<KitchenIcon />} />
        <Links id={8} title="Sports & Outdoors" icon={<SportsCricketIcon />} />
      </Grid>
    </>
  );
};

export default MarketHome;
