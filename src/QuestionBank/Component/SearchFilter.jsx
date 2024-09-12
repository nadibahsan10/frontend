import React from "react";
import { Box, TextField } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const SearchFilter = ({ state, handleChange, handleCheckBox }) => {
  return (
    <Box component="form">
      <TextField
        fullWidth
        name="search"
        label="Search Question"
        value={state.search.value}
        onChange={handleChange}
      />
      <Accordion sx={{ marginTop: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Department
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox name="department-cse" onChange={handleCheckBox} />
              }
              label="CSE"
            />
            <FormControlLabel
              control={
                <Checkbox name="department-eee" onChange={handleCheckBox} />
              }
              label="EEE"
            />
            <FormControlLabel
              control={
                <Checkbox name="department-bba" onChange={handleCheckBox} />
              }
              label="BBA"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="department-economics"
                  onChange={handleCheckBox}
                />
              }
              label="ECONOMICS"
            />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ marginTop: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Year
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox name="year-2020" onChange={handleCheckBox} />}
              label="2020"
            />
            <FormControlLabel
              control={<Checkbox name="year-2021" onChange={handleCheckBox} />}
              label="2021"
            />
            <FormControlLabel
              control={<Checkbox name="year-2022" onChange={handleCheckBox} />}
              label="2022"
            />
            <FormControlLabel
              control={<Checkbox name="year-2023" onChange={handleCheckBox} />}
              label="2023"
            />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ marginTop: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Trimester
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox name="trimester-fall" onChange={handleCheckBox} />
              }
              label="Fall"
            />
            <FormControlLabel
              control={
                <Checkbox name="trimester-spring" onChange={handleCheckBox} />
              }
              label="Spring"
            />
            <FormControlLabel
              control={
                <Checkbox name="trimester-summer" onChange={handleCheckBox} />
              }
              label="Summer"
            />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ marginTop: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Exam Type
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox name="examType-mid" onChange={handleCheckBox} />
              }
              label="Mid Term"
            />
            <FormControlLabel
              control={
                <Checkbox name="examType-final" onChange={handleCheckBox} />
              }
              label="Final Term"
            />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default SearchFilter;
