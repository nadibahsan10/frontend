import React from "react";
import { Button } from "@mui/material";
import useFetch from "../../CustomHooks/useFetch";

const Reject = (userId) => {
  const mutation = useFetch({
    url: "http://localhost:3000/admin/rejectuser",
    method: "POST",
    params: { id: userId.userId },
  });
  const approved = () => {
    mutation.mutate();
  };

  if (mutation.isError) {
    <h1>{mutation.error.response.data.message}</h1>;
  }
  return (
    <Button variant="contained" color="secondary" onClick={approved}>
      Approve
    </Button>
  );
};

export default Reject;
