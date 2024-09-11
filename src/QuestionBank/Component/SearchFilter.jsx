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

const SearchFilter = () => {
  return (
    <Box component="form">
      <TextField fullWidth label="Search Question"></TextField>
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
            <FormControlLabel control={<Checkbox />} label="CSE" />
            <FormControlLabel control={<Checkbox />} label="EEE" />
            <FormControlLabel control={<Checkbox />} label="BBA" />
            <FormControlLabel control={<Checkbox />} label="ECONOMICS" />
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
            <FormControlLabel control={<Checkbox />} label="2020" />
            <FormControlLabel control={<Checkbox />} label="2021" />
            <FormControlLabel control={<Checkbox />} label="2022" />
            <FormControlLabel control={<Checkbox />} label="2023" />
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
            <FormControlLabel control={<Checkbox />} label="Fall" />
            <FormControlLabel control={<Checkbox />} label="Spring" />
            <FormControlLabel control={<Checkbox />} label="Summer" />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default SearchFilter;
