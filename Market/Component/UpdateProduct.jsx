import { width } from "@mui/system";
import React, { useRef } from "react";
import { Modal, Box, TextField, Button, Grid, Typography } from "@mui/material";

const UpdateProduct = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",

          width: "700px",
          backgroundColor: "white.main",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          borderRadius: 1,
          padding: 10,
        }}
      >
        <Typography
          variant="h5"
          textTransform="uppercase"
          textAlign="center"
          sx={{ marginBottom: 2 }}
          color="initial"
          gutterBottom
        >
          Update Your Product
        </Typography>
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

        <Button
          sx={{ marginTop: 2 }}
          type="submit"
          variant="contained"
          fullWidth
        >
          Add Product
        </Button>
      </Box>
    </Modal>
  );
};

export default UpdateProduct;
