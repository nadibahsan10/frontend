import React, { useRef, useState, useContext } from "react";
import { Box, Avatar, Typography, Button, Divider, Grid } from "@mui/material";
import TitleBody from "./TitleBody";
import Skills from "./Skills";
import Work from "./Work";
import { useParams } from "react-router-dom";
import useFetch from "../../CustomHooks/useFetch";
import { useQueryClient } from "@tanstack/react-query";
import { useInput } from "../../CustomHooks/useInput";
import { CircularProgress } from "@mui/material";
import Success from "../../Shared/Success";
import Popup from "../../Shared/Popup";
import { AuthContext } from "../../Auth/AuthContext";

const UserProfile = () => {
  const auth = useContext(AuthContext);
  const [openSuccessPopup, setOpenSuccessPopup] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const queryClient = useQueryClient();
  const { state, uploadImage, reset } = useInput({ image: null });
  const imageRef = useRef([]);
  const userId = useParams().userId;
  const { data, isLoading, isError, error } = useFetch({
    url: "http://localhost:3000/myprofile/getprofile",
    queryKey: ["getProfile"],
    params: { userId: userId },
  });
  const mutation = useFetch({
    url: "http://localhost:3000/myprofile/setprofile",
    method: "POST",
    params: { userId },
    data: { profilePicture: state.image !== null ? state.image[0] : null },
  });
  const imageChange = () => {
    mutation.mutate(undefined, {
      onSuccess: async (data) => {
        await queryClient.invalidateQueries(["getProfile"]);
        queryClient.refetchQueries(["getProfile"]);
        setSuccessMessage(data.message);
        setOpenSuccessPopup(true);
        auth.setProfilePicture(data.url);

        reset();
      },
    });
  };

  return (
    <>
      <Success
        open={openSuccessPopup}
        onClose={() => setOpenSuccessPopup(false)}
        successMessage={successMessage}
      />
      <Popup
        open={mutation.isError}
        onClose={() => {
          mutation.reset();
        }}
        errorMessage={mutation.error?.response.data.message}
        status={mutation.error?.response.status}
      />
      <Box
        sx={{
          width: "100%",
          maxWidth: 800, // Limiting max width for responsiveness
          margin: "auto", // Centering the container horizontally
          padding: 3, // Adding padding
        }}
      >
        {/* Avatar Section */}
        <Grid container spacing={3} direction="column">
          <Grid component="form" item xs={12}>
            {isLoading || mutation.isPending ? (
              <CircularProgress />
            ) : (
              <Avatar
                src={
                  state.image !== null
                    ? URL.createObjectURL(state.image[0])
                    : "http://localhost:3000/" + data
                }
                sx={{
                  height: { xs: 150, md: 300 }, // Responsive height for avatar
                  width: { xs: 150, md: "100%" },
                  marginBottom: 3, // Responsive width for avatar
                }}
                variant="rounded"
              />
            )}
            <input
              type="file"
              ref={imageRef}
              onChange={uploadImage}
              name="profilePicture"
              style={{ display: "none" }}
            />

            {state.image !== null ? (
              <>
                <Button
                  variant="contained"
                  sx={{ mb: 3 }}
                  onClick={imageChange}
                >
                  Save
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  sx={{ mb: 3, ml: 3 }}
                  onClick={reset}
                >
                  cancel
                </Button>
              </>
            ) : (
              auth.id === userId && (
                <Button
                  onClick={() => {
                    imageRef.current.click();
                  }}
                  variant="outlined"
                  sx={{ mb: 3 }}
                >
                  Change Profile
                </Button>
              )
            )}
          </Grid>

          {/* Work Section */}
        </Grid>
        <Work />
        <Skills />
      </Box>
    </>
  );
};

export default UserProfile;
