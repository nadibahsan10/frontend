import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShareIcon from "@mui/icons-material/Share";
import Slider from "@mui/material/Slider";
import axios from "axios";
import upperFooter from "../Components/SubComponent/upperFooter.jsx";

const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Find() {
  const [value, setValue] = useState([0, 50000]); // Updated max price
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Any"); // State for selected category
  const [filteredData, setFilteredData] = useState([]);

  const fetchFilteredData = async ({ searchQuery, selectedCategory, value }) => {
    try {
      const token = "Bearer " + JSON.parse(localStorage.getItem("token"));
      const response = await axios.get("http://localhost:3000/marketplace/getposts", {
        params: {
          searchQuery,
          selectedCategory,
          minPrice: value[0],
          maxPrice: value[1],
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      
      setFilteredData(response.data.data); // Update the filtered data state
    } catch (err) {
      console.log(err.response);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    fetchFilteredData({ 
      searchQuery: event.target.value, 
      selectedCategory, 
      value 
    });
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    fetchFilteredData({ 
      searchQuery, 
      selectedCategory: event.target.value, 
      value 
    });
  };

  const handlePriceChange = (event, newValue) => {
    setValue(newValue);
    fetchFilteredData({ 
      searchQuery, 
      selectedCategory, 
      value: newValue 
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = "Bearer " + JSON.parse(localStorage.getItem("token"));
        const response = await axios.get("http://localhost:3000/marketplace/getposts", {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: token,
          },
        });
        setData(response.data.data);
        setFilteredData(response.data.data); // Initialize with all data
      } catch (err) {
        console.log(err.response);
      }
    };
    fetchData();
  }, []);

  return (
    <form method="post">
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "30px",
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
                value={searchQuery} // Bind the input value to the state
                onChange={handleSearchChange} // Handle input change
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

      <Box sx={{ flexGrow: 1, margin: "0 5%" }}>
        <Grid
          container
          spacing={2}
          sx={{
            marginTop: "20px",
            padding: "10px 10px",
          }}
        >
          <Grid item xs={3}>
            <Item sx={{ marginRight: "5%" }}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  Categories
                </AccordionSummary>
                <AccordionDetails>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    value={selectedCategory} // Bind the selected category to the state
                    onChange={handleCategoryChange} // Handle category change
                    name="categoriesGroup"
                  >
                    <FormControlLabel
                      value="Any"
                      control={<Radio />}
                      label="Any"
                    />
                    <FormControlLabel
                      value="electronics"
                      control={<Radio />}
                      label="Electronics"
                    />
                    <FormControlLabel
                      value="mobile"
                      control={<Radio />}
                      label="Mobile"
                    />
                    <FormControlLabel
                      value="desktop"
                      control={<Radio />}
                      label="Desktop"
                    />
                    <FormControlLabel
                      value="laptop"
                      control={<Radio />}
                      label="Laptop"
                    />
                    <FormControlLabel
                      value="labequipement"
                      control={<Radio />}
                      label="Lab Equipment"
                    />
                    <FormControlLabel
                      value="books"
                      control={<Radio />}
                      label="Book"
                    />
                    <FormControlLabel
                      value="furniture"
                      control={<Radio />}
                      label="Furnitures"
                    />
                  </RadioGroup>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{ marginTop: "10px" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  Price Range
                </AccordionSummary>
                <AccordionDetails>
                  <Box sx={{ width: "95%" }}>
                    <Slider
                      getAriaLabel={() => "Price range"}
                      value={value}
                      onChange={handlePriceChange} // Handle price range change
                      valueLabelDisplay="auto"
                      sx={{ display: "flex" }}
                      max={50000} // Maximum price limit
                    />
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Item>
          </Grid>
          <Grid item xs={9}>
            <Typography
              variant="body2"
              sx={{ marginBottom: "15px", marginLeft: "10px" }}
            >
              {filteredData.length} Results found{" "}
              <Typography
                variant="caption"
                sx={{ marginLeft: "50px", color: "#780000" }}
              >
                Classified Ads
              </Typography>
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "30px",
              }}
            >
              {filteredData.map((product, index) => (
                <Card
                  key={index}
                  sx={{
                    maxWidth: "190px",
                    borderRadius: "10px",
                    padding: "10px",
                    boxShadow:
                      "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ height: "120px", width: "160px", objectFit: "cover" }}
                    image={product.image}
                    title={product.name}
                  />
                  <CardContent>
                    <Typography variant="body1" color="text.secondary">
                      {product.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ marginTop: "5px" }}
                    >
                      Price: {product.price}
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <IconButton aria-label="bookmark">
                      <BookmarkIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                    <Button variant="contained">View</Button>
                  </CardActions>
                </Card>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
      <upperFooter />
    </form>
  );
}

export default Find;
