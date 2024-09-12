import React from "react";
import SearchFilter from "../Component/SearchFilter";
import AddQuestion from "../Component/AddQuestion";
import { Container, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useInput } from "../../CustomHooks/useInput";
import QuestionWall from "../Component/QuestionWall";
const QuestionBank = () => {
  const { state, handleChange, handleCheckBox } = useInput({
    search: { value: "", isValid: true },
    department: [],
    year: [],
    trimester: [],
    examType: [],
  });
  return (
    <Container maxWidth="xl">
      <Box marginTop={2}>
        <Typography variant="h4" textAlign="center">
          Welcome to Question Bank
        </Typography>
        <Grid container sx={{ marginTop: 2 }} spacing={2}>
          <Grid item xs={4}>
            <SearchFilter
              state={state}
              handleCheckBox={handleCheckBox}
              handleChange={handleChange}
            />
          </Grid>
          <Grid item xs={8}>
            <AddQuestion />
            <QuestionWall {...state} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default QuestionBank;
