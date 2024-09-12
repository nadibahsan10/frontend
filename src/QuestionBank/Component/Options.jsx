import React, { useContext } from "react";
import { Box, Avatar, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import deleteQuestions from "../Functions/deleteQuestion";
import { AuthContext } from "../../Auth/AuthContext";

const Options = ({ id, pdfPath, profile, userId }) => {
  const auth = useContext(AuthContext);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => {
      deleteQuestions(id, pdfPath);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries(["getquestions"]);
      queryClient.refetchQueries(["getquestions"]);
    },
  });
  const handleDelete = () => {
    mutation.mutate();
  };
  return (
    <Box display="flex" gap={1} marginBottom={3}>
      {auth.id === userId ? (
        <>
          <IconButton>
            <EditIcon></EditIcon>
          </IconButton>
          <IconButton onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </>
      ) : (
        <></>
      )}

      <Avatar
        sx={{ marginLeft: "auto" }}
        src={`http://localhost:3000/${profile}`}
      />
    </Box>
  );
};

export default Options;
