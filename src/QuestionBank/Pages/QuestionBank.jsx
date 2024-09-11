import React from "react";
import SearchFilter from "../Component/SearchFilter";
import AddQuestion from "../Component/AddQuestion";
import { Container, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

const QuestionBank = () => {
  return (
    <Container maxWidth="xl">
      <Box marginTop={2}>
        <Typography variant="h4" textAlign="center">
          Welcome to Question Bank
        </Typography>
        <Grid container sx={{ marginTop: 2 }} spacing={2}>
          <Grid item xs={4}>
            <SearchFilter />
          </Grid>
          <Grid item xs={8}>
            <AddQuestion />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default QuestionBank;
