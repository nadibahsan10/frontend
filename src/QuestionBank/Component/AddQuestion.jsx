import React from "react";
import { Box } from "@mui/material";

import AddPdf from "./AddPdf";
import QuestionWall from "./QuestionWall";

const AddQuestion = () => {
  return (
    <Box>
      <AddPdf />
      <QuestionWall />
    </Box>
  );
};

export default AddQuestion;
