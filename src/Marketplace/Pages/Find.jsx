import React from "react";
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
import { useState } from "react";
import upperFooter from "../Components/SubComponent/upperFooter.jsx";


const products = [
  {
    id: 1,
    name: "Intel Laptop Core i5 9 gen",
    price: "30,000",
    pImage:
      "https://img.freepik.com/premium-vector/vector-drawn-laptop-isolated-white-background_752899-849.jpg",
  },
  {
    id: 2,
    name: "Intel Laptop Core i5 9 gen",
    price: "30,000",
    pImage:
      "https://img.freepik.com/premium-vector/vector-drawn-laptop-isolated-white-background_752899-849.jpg",
  },
  {
    id: 3,
    name: "Intel Laptop Core i5 9 gen",
    price: "30,000",
    pImage:
      "https://img.freepik.com/premium-vector/vector-drawn-laptop-isolated-white-background_752899-849.jpg",
  },
  {
    id: 4,
    name: "Intel Laptop Core i5 9 gen",
    price: "30,000",
    pImage:
      "https://img.freepik.com/premium-vector/vector-drawn-laptop-isolated-white-background_752899-849.jpg",
  },
  {
    id: 5,
    name: "Intel Laptop Core i5 9 gen",
    price: "30,000",
    pImage:
      "https://img.freepik.com/premium-vector/vector-drawn-laptop-isolated-white-background_752899-849.jpg",
  },
  {
    id: 6,
    name: "Intel Laptop Core i5 9 gen",
    price: "30,000",
    pImage:
      "https://img.freepik.com/premium-vector/vector-drawn-laptop-isolated-white-background_752899-849.jpg",
  },
  {
    id: 7,
    name: "Intel Laptop Core i5 9 gen",
    price: "30,000",
    pImage:
      "https://img.freepik.com/premium-vector/vector-drawn-laptop-isolated-white-background_752899-849.jpg",
  },
];
const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const SearchCategory = ({ name, icon }) => (
  <Box sx={{ textAlign: "center" }}>
    <img src={icon} alt={name} style={{ width: "40px", height: "40px" }} />
    <p>{name}</p>
  </Box>
);


function selectRange() {
  
}
function Find() {
  const [value, setValue] = useState([0,500]);
  function handleChange(event){
    const value = event.target.value;
    setValue(value)
  }
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

      <Box sx={{ flexGrow: 1, margin: "0 5%"}}>
        <Grid
          container
          spacing={2}
          sx={{
            marginTop: "20px",
            // backgroundColor: "beige",
            padding: "10px 10px",
            
          }}
        >
          <Grid item xs={3} >
            <Item sx= {{marginRight: '5%'}}>
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
                    defaultValue="All"
                    name="categoriesGroup"
                  >
                    <FormControlLabel
                      value="Any"
                      control={<Radio />}
                      label="Any"
                    />
                    <FormControlLabel
                      value="Electronics"
                      control={<Radio />}
                      label="Electronics"
                    />
                    <FormControlLabel
                      value="Mobile"
                      control={<Radio />}
                      label="Mobile"
                    />
                    <FormControlLabel
                      value="Desktop"
                      control={<Radio />}
                      label="Desktop"
                    />
                    <FormControlLabel
                      value="Laptop"
                      control={<Radio />}
                      label="Laptop"
                    />
                    <FormControlLabel
                      value="labEquipement"
                      control={<Radio />}
                      label="Lab Equipement"
                    />
                    <FormControlLabel
                      value="Books"
                      control={<Radio />}
                      label="Books"
                    />
                    <FormControlLabel
                      value="Furnitures"
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
                  <Box sx={{ width: '95%' }}>
                    <Slider
                      getAriaLabel={() => "Price range"}
                      value={value}
                      onChange={handleChange}
                      valueLabelDisplay="auto"
                      sx={{display: 'flex'}}
                      max={50000}
                    />
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Item>
          </Grid>
          <Grid item xs={9}>
            <Typography variant="body2" sx={{ marginBottom: "15px",marginLeft: "10px" }}>
              298 Results found
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
              {products.map((product) => (
                <Card
                  key={product.id}
                  sx={{ maxWidth: "190px", borderRadius: "10px",padding: '10px',boxShadow: 'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em' }}
                >
                  <CardMedia
                    component="img"
                    sx={{ height: "120px", width: "160px", objectFit: "cover" }}
                    image={product.pImage}
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
