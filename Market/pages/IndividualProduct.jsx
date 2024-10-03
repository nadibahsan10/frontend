import React, { useState } from "react";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Auth/AuthContext";

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
import { useLocation } from "react-router-dom";
import MessageButton from "../../Shared/MessageButton";

const IndividualProduct = () => {
  const auth = useContext(AuthContext);
  const location = useLocation();
  const { item } = location.state || {};  

  console.log(location.state);  
  console.log(item);            

  if (!location.state) {
    return <div>Product not found.</div>;  
  }


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
                {item.title}
                </Typography>
                <Typography variant="h4">Tk  {item.price}</Typography>
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
              {item.description}
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
                {item.address}
              </Typography>
              {
                auth.id !== item.uid && <MessageButton id={item.uid} />
              }
              

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
