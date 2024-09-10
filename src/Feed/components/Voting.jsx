import React from "react";
import { Box, Button } from "@mui/material";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { getVotedOrNot, voteUser } from "../Functions/user";

const Voting = ({ to, from }) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["getVotes", from, to],
    queryFn: async () => {
      return await getVotedOrNot(to);
    },
  });
  console.log(data);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (data) => {
      console.log(data);
      voteUser(data.to, data.vote);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries(["getVotes", from, to]);
      queryClient.refetchQueries(["getVotes", from, to]);
    },
  });
  const handleClick = (to, vote) => {
    mutation.mutate({ to, vote });
  };
  return (
    <>
      <Button
        onClick={() => {
          handleClick(to, true);
        }}
        variant={data === 1 ? "contained" : "outlined"}
        sx={{ marginLeft: "auto" }}
      >
        {data === 1 ? "Voted" : "Vote"}
      </Button>
    </>
  );
};

export default Voting;
