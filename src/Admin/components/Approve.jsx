import React from "react";
import { Button } from "@mui/material";
import useFetch from "../../CustomHooks/useFetch";
import { CircularProgress } from "@mui/material";
import Popup from "../../Shared/Popup";
import { useQueryClient } from "@tanstack/react-query";

const Approve = ({ userId, question }) => {
  const queryClient = useQueryClient();

  const mutation = useFetch({
    url: question
      ? "http://localhost:3000/admin/approvequestion"
      : "http://localhost:3000/admin/approveuser",
    method: "POST",
    params: { id: userId },
  });

  const approved = () => {
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
          }}
          errorMessage={mutation.error.response.data.message}
          status={mutation.error.response.status}
        />
      )}

      <Button
        variant="contained"
        color="primary"
        sx={{ marginRight: 2 }}
        onClick={approved}
      >
        Approve
      </Button>
    </>
  );
};

export default Approve;
