import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

import Options from "./Options";

const Question = ({
  course,
  code,
  exam_type,
  id,
  uid,
  pdf,
  profile_picture,
  trimester,
  year,
  department,
}) => {
  return (
    <Box
      padding={2}
      marginTop={2}
      borderRadius={2}
      backgroundColor="#EBEBEB"
      display="flex"
      gap={2}
    >
      <Box display="flex" alignItems="start" flexDirection="column">
        <Typography variant="h5">{course + " " + code}</Typography>
        <Typography
          textTransform="uppercase"
          variant="subtitle2"
          color="secondary"
        >
          {exam_type + " Examination " + trimester + " Trimester " + year}
        </Typography>
        <IconButton color="primary">
          <FavoriteIcon fontSize="large" />
        </IconButton>
      </Box>
      <Box marginLeft="auto">
        <Options
          id={id}
          trimester={trimester}
          year={year}
          examType={exam_type}
          course={course}
          code={code}
          pdfPath={pdf}
          userId={uid}
          department={department}
          profile={profile_picture}
        />
        <Button
          component={Link}
          to={`http://localhost:3000/${pdf}`}
          color="primary"
          variant="contained"
        >
          Download PDF
        </Button>
      </Box>
    </Box>
  );
};

export default Question;
