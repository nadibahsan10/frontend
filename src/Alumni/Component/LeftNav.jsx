import React from "react";
import { Grid, List, ListItem, ListItemText, TextField } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";

const LeftNav = ({ state, handleChange, handleCheckBox }) => {

  const listStyle = {
    padding: 1,
    backgroundColor: "white",
    marginBottom: 1,
    borderRadius: "8px",
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(1.02)",
    },
  };
  return (
    <Grid item xs={2}>
      <Grid container direction="column" justifyContent="space-between">
        {/* Top Menu List */}
        <Grid item sx={{ padding: 2, boxShadow: 2, borderRadius: "15px" }}>
          <List>
            <ListItem button sx={listStyle} component={Link} to="events">
              <ListItemText primary="Events & Seminer" />
            </ListItem>
            <ListItem button sx={listStyle} component={Link} to="mentorship">
              <ListItemText primary="Mentorship Program" />
            </ListItem>
            <ListItem button sx={listStyle} component={Link} to="successstories">
              <ListItemText primary="Success Stories" />
            </ListItem>
          </List>
        </Grid>

        {/* Bottom Menu List */}
        {/* <Grid item sx={{ padding: 2, boxShadow: 3, borderRadius: "15px" }}>
          <List>
            <ListItem button sx={listStyle}>
              <ListItemText primary="Menu 4" />
            </ListItem>
            <ListItem button sx={listStyle}>
              <ListItemText primary="Menu 5" />
            </ListItem>
          </List>
        </Grid> */}
      </Grid>
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
          Batch
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            id="outlined-basic"
            label="Enter Batch ..."
            variant="outlined"
            fullWidth
          />
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
};

export default LeftNav;
