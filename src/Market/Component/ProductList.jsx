import React from "react";
import {
  Box,
  Typography,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Grid,
} from "@mui/material";

import Product from "./Product";

const ProductList = () => {
  return (
    <Box marginTop={2} borderRadius={1} padding={3} border="1px solid #D3D3D3">
      <Box display="flex" alignItems="center">
        <Typography variant="body1">
          <span style={{ fontSize: 30 }}>220</span> Results Found
        </Typography>
        <FormControl
          sx={{ m: 1, minWidth: 120, marginLeft: "auto" }}
          size="small"
        >
          <InputLabel id="demo-select-small-label">Sort</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            label="Sort"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Max To Low</MenuItem>
            <MenuItem value={20}>Low To Max</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Grid container marginTop={2} spacing={2}>
        <Product />

        <Product />
        <Product />
        <Product />
        <Product />
      </Grid>
    </Box>
  );
};

export default ProductList;
