import React from "react";
import { Button, CircularProgress } from "@mui/material";
import useFetch from "../../CustomHooks/useFetch";
import Popup from "../../Shared/Popup";
import { useQueryClient } from "@tanstack/react-query";

const Reject = ({ userId, question }) => {
  const queryClient = useQueryClient();

  const mutation = useFetch({
    url: question
      ? "http://localhost:3000/admin/rejectquestion"
      : "http://localhost:3000/admin/approveuser", // Assuming you might want to change this to reject user if needed
    method: "POST",
    params: { id: userId }, // Directly using userId instead of userId.userId
  });

  const reject = () => {
    mutation.mutate(undefined, {
      onSuccess: async () => {
        const queryKey = question ? ["getQuestions"] : ["getuiuusers"];
        await queryClient.invalidateQueries(queryKey);
        queryClient.refetchQueries(queryKey);
      },
    });
  };

  if (mutation.isPending) {
    return <CircularProgress sx={{ marginRight: 2 }} />;
  }

  return (
    <>
      {mutation.isError && (
        <Popup
          open={mutation.isError}
          onClose={() => {
            mutation.reset();
            if (mutation.error.response.status === 403) {
              navigate("/");
            }
          }} // Reset mutation state on close
          errorMessage={mutation.error.response.data.message}
          status={mutation.error.response.status}
        />
      )}
      <Button
        variant="contained"
        color="secondary"
        onClick={reject} // Use reject function instead of approved
      >
        Reject
      </Button>
    </>
  );
};

export default Reject;
