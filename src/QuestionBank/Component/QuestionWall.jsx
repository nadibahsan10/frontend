import React from "react";
import { Box, Button } from "@mui/material";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import Question from "./Question";
import getQuestions from "../Functions/getQuestions";
const QuestionWall = ({ search, department, trimester, examType, year }) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [
      "getquestions",
      search.value,
      department,
      year,
      trimester,
      examType,
    ],
    queryFn: async () => {
      return await getQuestions(
        search.value,
        department,
        year,
        trimester,
        examType
      );
    },
    enabled: true,
  });

  return (
    <Box
      padding={6}
      marginTop={2}
      borderRadius={2}
      display="flex"
      flexDirection="column"
      gap={2}
      border="2px solid #EBEBEB"
    >
      {data &&
        data.map((item, index) => {
          return <Question key={index} {...item} />;
        })}
    </Box>
  );
};

export default QuestionWall;
