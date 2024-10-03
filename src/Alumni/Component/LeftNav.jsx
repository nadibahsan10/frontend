import React, { useState } from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
  Button,
  Radio,
  RadioGroup,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Link } from "react-router-dom";

const LeftNav = ({searchQuery,batch,department,handleSearchChange,handleBatchChange,handleDepartmentChange}) => {

  return (
    <>
      <TextField
        id="outlined-basic"
        label="Search Alumni here ..."
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <Accordion sx={{ marginTop: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Batch
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            id="outlined-basic"
            label="Enter Batch ..."
            variant="outlined"
            fullWidth
            value={batch}
            onChange={handleBatchChange}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ marginTop: 2, maxHeight: 400 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Department
        </AccordionSummary>
        <AccordionDetails sx={{ maxHeight: 300, overflow: "auto" }}>
          <FormGroup>
            <RadioGroup
              aria-labelledby="department-radio-group"
              name="department"
              value={department}
              onChange={handleDepartmentChange}
            >
              <FormControlLabel
                control={<Radio value="" />}
                label="ALL"
              />
              <FormControlLabel
                control={<Radio value="1" />}
                label="BBA"
              />
              <FormControlLabel
                control={<Radio value="2" />}
                label="BBA in Accounting"
              />
              <FormControlLabel
                control={<Radio value="3" />}
                label="BS in Economics"
              />
              <FormControlLabel
                control={<Radio value="4" />}
                label="B.Sc in Civil"
              />
              <FormControlLabel
                control={<Radio value="5" />}
                label="B.Sc in CSE"
              />
              <FormControlLabel
                control={<Radio value="6" />}
                label="B.Sc in Data Science"
              />
              <FormControlLabel
                control={<Radio value="7" />}
                label="BSS in EEE"
              />
              <FormControlLabel
                control={<Radio value="8" />}
                label="BSS in EDS"
              />
              <FormControlLabel
                control={<Radio value="9" />}
                label="BSS in Media Studies and Journalism"
              />
              <FormControlLabel
                control={<Radio value="10" />}
                label="BA in English"
              />
              <FormControlLabel
                control={<Radio value="11" />}
                label="B. Pharm"
              />
              <FormControlLabel
                control={<Radio value="12" />}
                label="MBA"
              />
              <FormControlLabel
                control={<Radio value="13" />}
                label="EMBA"
              />
              <FormControlLabel
                control={<Radio value="14" />}
                label="MS in Economics"
              />
              <FormControlLabel
                control={<Radio value="15" />}
                label="MDS"
              />
              <FormControlLabel
                control={<Radio value="16" />}
                label="M.Sc. in CSE"
              />
            </RadioGroup>
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      <Grid container direction="column" justifyContent="space-between" sx={{ marginTop: 4 }}>
        {/* Top Menu List */}
        <Grid item sx={{ padding: 2, boxShadow: 2, borderRadius: "3px" }}>
          <Typography variant="h6" gutterBottom>
            You May Like
          </Typography>

          <List>
            <ListItem button sx={{ padding: 1, backgroundColor: "white", marginBottom: 1, borderRadius: "8px" }} component={Link} to="events">
              <ListItemText primary="Events & Seminar" />
            </ListItem>
            <ListItem button sx={{ padding: 1, backgroundColor: "white", marginBottom: 1, borderRadius: "8px" }} component={Link} to="mentorship">
              <ListItemText primary="Mentorship Program" />
            </ListItem>
            <ListItem button sx={{ padding: 1, backgroundColor: "white", marginBottom: 1, borderRadius: "8px" }} component={Link} to="successstories">
              <ListItemText primary="Success Stories" />
            </ListItem>
          </List>
        </Grid>
      </Grid>

    </>
  );
};

export default LeftNav;
