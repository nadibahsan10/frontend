import React, { useRef } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Grid,
  Button,
  Avatar,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const AddProducts = () => {
  const imageRef = useRef([]);
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} marginBottom={2}>
          <Typography
            textTransform="uppercase"
            textAlign="center"
            variant="h4"
            color="initial"
          >
            List your product
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Avatar
            src="../product.jpg"
            variant="square"
            sx={{ height: "100%", width: "100%" }}
          />
        </Grid>
        <Grid item xs={6}>
          <Box component="form">
            <TextField
              sx={{ marginBottom: 2 }}
              label="Title"
              name="title"
              variant="outlined"
              fullWidth
            />
            <TextField
              name="description"
              label="Description"
              variant="outlined"
              multiline
              minRows={3}
              fullWidth
              sx={{ marginBottom: 2 }}
            />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  name="price"
                  label="Price"
                  variant="outlined"
                  type="number"
                  fullWidth
                  sx={{ marginBottom: 2 }}
                />
              </Grid>
              <Grid xs={6} item>
                <TextField
                  name="condition"
                  label="Condition"
                  variant="outlined"
                  fullWidth
                  sx={{ marginBottom: 2 }}
                />
              </Grid>
            </Grid>

            <TextField
              name="address"
              label="Address"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: 2 }}
            />
            <input
              type="file"
              name="image"
              style={{ display: "none" }}
              ref={imageRef}
            />
            <Button
              variant="contained"
              color="success"
              onClick={() => {
                imageRef.current.click();
              }}
              startIcon={<CloudUploadIcon />}
            >
              UPLOAD FILES
            </Button>

            <Button
              sx={{ marginTop: 2 }}
              type="submit"
              
              variant="contained"
              fullWidth
            >
              Add Product
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddProducts;
