import React from "react";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../Auth/AuthContext";
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
import { useQuery } from "@tanstack/react-query";
import Product from "./Product";
import getMyListings from "../Functions/getMyListings";

function MyListings() {
  const auth = useContext(AuthContext);
  console.log(auth);
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["getList", auth.id],
    queryFn: getMyListings,
  });

  return (
    <Box marginTop={2} borderRadius={1} padding={3} border="1px solid #D3D3D3">
      <Box display="flex" alignItems="center">
        <Typography variant="body1">
          <span style={{ fontSize: 30 }}>220</span> Results Found
        </Typography>
        {/* <FormControl
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
            </FormControl>*/}
      </Box>
      <Grid container marginTop={2} spacing={2}>
        {typeof data === Array &&
          data?.map((item) => {
            return <Product item={item} />;
          })}
      </Grid>
    </Box>
  );
}

export default MyListings;
