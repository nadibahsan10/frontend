import React, { useState } from "react";
import {
  Container,
  Box,
  Grid,
  Avatar,
  Typography,
  Button,
} from "@mui/material";
import SmartphoneIcon from "@mui/icons-material/Smartphone";

import NameAvatar from "../../Shared/NameAvatar";
import UpdateProduct from "../Component/UpdateProduct";

const IndividualProduct = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <UpdateProduct open={open} handleClose={handleClose} />
      <Container>
        <Grid container marginTop={2} spacing={2}>
          <Grid xs={8} item>
            <Box borderRadius={1} backgroundColor="#EDF2F4">
              <Avatar
                src="./profileImage.webp"
                variant="rounded"
                sx={{ width: "100%", height: 600 }}
              />
              <Box padding={2}>
                <Typography variant="subtitle1" color="#5F5F5F" gutterBottom>
                  2 Days Ago
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Iphone 15 Pro Max
                </Typography>
                <Typography variant="h4">Tk 100000</Typography>
              </Box>
            </Box>
            <Box
              borderRadius={1}
              marginTop={2}
              padding={2}
              backgroundColor="#EDF2F4"
            >
              <Typography variant="h5" gutterBottom>
                Description
              </Typography>
              <Typography variant="body1" color="initial">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                repellat et dolorum iste temporibus impedit, ratione sint ipsa
                deleniti corrupti culpa harum quidem animi magni saepe autem
                nemo facere quisquam beatae, doloribus debitis, blanditiis
                voluptas? Blanditiis incidunt voluptas nemo quidem, est unde
                temporibus maxime, magni earum, odio dolores reiciendis quasi
                facere soluta hic debitis. Autem cumque error tenetur iste modi
                temporibus ratione. Et unde non fugit explicabo est quos autem
                deserunt dolorem praesentium exercitationem, eaque placeat
                quidem iste at voluptas commodi dolor perferendis quia
                consequatur possimus. Ex maxime vero corrupti omnis voluptatem
                molestiae, magni pariatur quisquam nostrum temporibus ipsa quos?
              </Typography>
            </Box>
          </Grid>
          <Grid xs={4} item>
            <Box borderRadius={1} backgroundColor="#EDF2F4" padding={2}>
              <NameAvatar />
            </Box>
            <Box
              sx={{ backgroundColor: "primary.main", height: 80 }}
              display="flex"
              alignItems="center"
              padding={2}
            >
              <Box
                borderRadius="50%"
                backgroundColor="#EDF2F4"
                height={80}
                width={80}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <SmartphoneIcon fontSize="large" color="primary" />
              </Box>
              <Typography marginLeft={5} variant="body1" color="white.main">
                +880 1719 291 331
              </Typography>
            </Box>
            <Box sx={{ backgroundColor: "#EDF2F4" }} padding={2}>
              <Typography variant="h5" color="initial">
                Address
              </Typography>
              <hr />
              <Typography
                textAlign="justify"
                variant="body1"
                sx={{ marginRight: 1 }}
              >
                Lorem, ipsum dolor sit amet consectetur Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Ea aliquid esse assumenda eum
                placeat voluptates tenetur a sint cumque incidunt?
              </Typography>
              <Button variant="contained" sx={{ marginTop: 2 }}>
                Message
              </Button>

              <Button
                onClick={handleOpen}
                variant="contained"
                sx={{ marginTop: 2, marginLeft: 2 }}
              >
                Update
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default IndividualProduct;
