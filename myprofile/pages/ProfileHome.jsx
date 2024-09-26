import React from "react";
import { Box, Container, Grid, Avatar, Typography } from "@mui/material";

import Skills from "../components/Skills";
import BasicInformation from "../components/BasicInformation";
const ProfileHome = () => {
  return (
    <Container maxWidth="xl">
      <Grid marginTop={2} container spacing={2}>
        <Grid item xs={4}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="start"
            flexDirection="column"
            backgroundColor="#EBEBEB"
            minHeight="800px"
            borderRadius={1}
          >
            <Avatar
              sx={{ height: 200, width: 200, marginTop: 5, marginBottom: 1 }}
              src=""
              variant="rounded"
            />
            <Box padding={2}>
              <Typography
                variant="h5"
                textAlign="center"
                color="primary.main"
                gutterBottom
              >
                Md Nadib Ahsan
              </Typography>
              <Typography
                gutterBottom
                textAlign="center"
                variant="body1"
                color="#999999"
              >
                Student
              </Typography>
              <Typography variant="body1" textAlign="center" color="initial">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                nisi animi fuga totam officiis. Reiciendis quos repudiandae
                possimus quas consequuntur.
              </Typography>
            </Box>

            <Skills />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <BasicInformation />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfileHome;
