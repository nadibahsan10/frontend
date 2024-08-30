import React, { useEffect, useRef, useState, useContext } from "react";
import Card from "../Component/Card";
import UploadBar from "../Component/UploadBar";
import SortBar from "../Component/SortBar";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { AuthContext } from "../../Auth/AuthContext";

import Checkbox from "@mui/material/Checkbox";
import axios from "axios";

import "./MainQuestionBank.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const department = ["CSE", "EEE", "CE", "BBA", "Eco"];
const trimester = ["FALL", "SUMMER", "SPRING"];
const currentYear = new Date().getFullYear();
const year = [currentYear, currentYear - 1, currentYear - 2, currentYear - 3];

function MainQuestionBank() {
  const auth = useContext(AuthContext);

  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const ref = useRef([]);
  useEffect(() => {
    ref.current.click();
  }, [search]);

  const handleChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };
  const handleSubmit = async (event) => {
   
    event.preventDefault();
    
    try {
      const token = "Bearer " + JSON.parse(localStorage.getItem("token"));
      const response = await axios.get(
        `http://localhost:3000/question/getquestions/${search}`,

        {
          headers: {
            Authorization: token,
          },
        }
      );

      console.log(response.data.data);
      setData(response.data.data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
            <Grid item xs={3}>
              <Item
                sx={{
                  boxShadow: "none",
                  marginLeft: "5%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "2vh",
                }}
              >
                <div>
                  <Accordion>
                    <AccordionSummary
                      sx={{ height: 0 }}
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <h3>Department</h3>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      {department.map((x) => (
                        <div className="checkBox">
                          <Checkbox />
                          <span>{x}</span>
                        </div>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                </div>

                <div>
                  <Accordion>
                    <AccordionSummary
                      sx={{ height: 0 }}
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <h3>Trimester</h3>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      {trimester.map((x) => (
                        <div className="checkBox">
                          <Checkbox />
                          <span>{x}</span>
                        </div>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                </div>

                <div>
                  <Accordion>
                    <AccordionSummary
                      sx={{ height: 0 }}
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <h3>Year</h3>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      {year.map((x) => (
                        <div className="checkBox">
                          <Checkbox />
                          <span>{x}</span>
                        </div>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                </div>
              </Item>
            </Grid>
            <Grid item xs={9}>
              <Item sx={{ marginRight: "2%" }}>
                <UploadBar />
                <SortBar />
                <div className="searchBar">
                  <TextField
                    id="outlined-basic"
                    label={<SearchIcon />}
                    value={search}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{
                      backgroundColor: "transparent",
                      width: "80%",
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ width: "15%" }}
                    ref={ref}
                  >
                    Search
                  </Button>
                </div>

                <div className="cardHolder">
                  {data.length !== 0 ? (
                    data.map((item) => {
                      return (
                        <Card
                          name={item.course}
                          type={item.pdf}
                          trimester={item.trimester}
                          likes={item.uid}
                        />
                      );
                    })
                  ) : (
                    <h1>No question</h1>
                  )}
                </div>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </form>
    </div>
  );
}

export default MainQuestionBank;
