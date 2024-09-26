import React from "react";
import { Typography, Box } from "@mui/material";

const Skill = ({ title }) => {
  return (
    <Box
      height={20}
      padding={2}
      minWidth={30}
      backgroundColor="primary.main"
      borderRadius={1}
    >
      <Typography
        variant="body1"
        textAlign="center"
        textTransform="uppercase"
        fontWeight={500}
        color="white.main"
      >
        {title}
      </Typography>
    </Box>
  );
};

const Skills = () => {
  return (
    <Box gap={2} width="90%">
      <Typography variant="h6" color="initial">
        Skills
      </Typography>
      <Box display="flex" flexWrap="wrap" gap={2}>
        <Skill title="UX" />
        <Skill title="Design And Graphics" />
        <Skill title="MAchine learning" />
        <Skill title="Data science" />
        <Skill title="Software" />
      </Box>
    </Box>
  );
};

export default Skills;
