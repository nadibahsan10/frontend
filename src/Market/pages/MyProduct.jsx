import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  Card,
  CardContent,
} from "@mui/material";
import ProductList from "../Component/ProductList";

const MyProduct = () => {
  return (
    <Container sx={{ marginTop: 2 }} maxWidth="xl">
      <Grid container spacing={2}>
        {/* Header Section */}
        <Grid item xs={12} sx={{ padding: 3 }}>
          <Typography variant="h4" color="white">
            My Listings
          </Typography>
        </Grid>

        {/* Sidebar Navigation */}

        {/* Main Content Area */}
        <Grid item xs={12}>
          <Box sx={{ padding: 2 }}>
            {/* Product Listing Section */}

            <ProductList />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MyProduct;
