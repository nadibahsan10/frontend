import React from "react";
import { Box, Container, Grid, TextField, Button } from "@mui/material";
import FilterMarket from "../Component/FilterMarket";
import ProductList from "../Component/ProductList";

const Products = () => {
  return (
    <Container sx={{ marginTop: 2 }} maxWidth="xl">
      <Grid container>
        <Grid item xs={12} sx={{ backgroundColor: "#F08080" }}>
          <Box
            display="flex"
            gap={2}
            padding={3}
            alignItems="center"
            justifyContent="start"
          >
            <TextField
              sx={{ width: "60%" }}
              label="Search Product"
              variant="outlined"
            />
            <Button sx={{ height: 55 }} variant="outlined">
              Search
            </Button>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <FilterMarket />
        </Grid>
        <Grid item xs={0.2}></Grid>

        <Grid item xs={8.8}>
          <ProductList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Products;
