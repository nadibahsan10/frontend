import React from "react";

import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
  TextField,
  Slider,
} from "@mui/material";

const FilterMarket = () => {
  return (
    <Box marginTop={2} borderRadius={1} padding={3} border="1px solid #D3D3D3">
      <Typography variant="h6" textTransform="uppercase">
        Category
      </Typography>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Smartphones" />
        <FormControlLabel control={<Checkbox />} label="Computers" />
        <FormControlLabel control={<Checkbox />} label="Furniture" />
        <FormControlLabel control={<Checkbox />} label="Electronics" />
        <FormControlLabel control={<Checkbox />} label="Fashion & Apparel" />
        <FormControlLabel control={<Checkbox />} label="Books & Media" />
        <FormControlLabel control={<Checkbox />} label="Home Appliances" />
        <FormControlLabel control={<Checkbox />} label="Sports & Outdoors" />
      </FormGroup>

      <Typography marginTop={2} variant="h6" textTransform="uppercase">
        Price Range
      </Typography>
      <Box display="flex" gap={2}>
        <TextField label="Max Price" />
        <TextField label="Low Price" />
      </Box>
      <Slider value={55} valueLabelDisplay="auto" />
    </Box>
  );
};

export default FilterMarket;
