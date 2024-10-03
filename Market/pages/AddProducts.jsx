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
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { useInput } from "../../CustomHooks/useInput";
import PreviewImage from "../../Feed/components/PreviewImage";
import AddPost from "../Functions/AddPost";

const AddProducts = () => {
  const {
    state,
    handleChange,
    uploadImage,
    updateImage,

    reset,
  } = useInput({
    title: { value: "", isValid: true },
    description: { value: "", isValid: true },
    price: {
      value: "",
      isValid: true,
    },
    category: { value: "1", isValid: true },
    address: { value: "", isValid: true },
    condition: { value: "", isValid: true },
    image: null,
  });
  const mutation = useMutation({
    mutationFn: async () => {
      await AddPost(
        state.title.value,
        state.description.value,
        state.price.value,
        state.condition.value,
        state.category.value,
        state.address.value,
        state.image
      );
    },
    onSuccess: () => {
      reset();
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    mutation.mutate();
  };
  const imageRef = useRef([]);
  return (
    <Container maxWidth="lg" sx={{ marginTop: 5 }}>
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
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              sx={{ marginBottom: 2 }}
              label="Title"
              name="title"
              value={state.title.value}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />
            <TextField
              name="description"
              label="Description"
              value={state.description.value}
              onChange={handleChange}
              variant="outlined"
              multiline
              minRows={3}
              fullWidth
              sx={{ marginBottom: 2 }}
            />
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <TextField
                  name="price"
                  label="Price"
                  value={state.price.value}
                  onChange={handleChange}
                  variant="outlined"
                  type="number"
                  fullWidth
                  sx={{ marginBottom: 2 }}
                />
              </Grid>
              <Grid xs={4} item>
                <TextField
                  name="condition"
                  value={state.condition.value}
                  onChange={handleChange}
                  label="Condition"
                  variant="outlined"
                  fullWidth
                  sx={{ marginBottom: 2 }}
                />
              </Grid>
              <Grid xs={4} item>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="category"
                    label="Category"
                    value={state.category.value}
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>Smartphones</MenuItem>
                    <MenuItem value={2}>Computers</MenuItem>
                    <MenuItem value={3}>Electronics</MenuItem>
                    <MenuItem value={4}>Furniture</MenuItem>
                    <MenuItem value={5}>Fashion & Apparel</MenuItem>
                    <MenuItem value={6}>Books & Media</MenuItem>
                    <MenuItem value={7}>Home Appliances</MenuItem>
                    <MenuItem value={8}>Sports & Outdoors</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <TextField
              name="address"
              label="Address"
              value={state.address.value}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              sx={{ marginBottom: 2 }}
            />
            <input
              type="file"
              name="image"
              multiple
              onChange={uploadImage}
              style={{ display: "none" }}
              ref={imageRef}
            />
            <Button
              variant="contained"
              color="success"
              sx={{ marginBottom: 2 }}
              onClick={() => {
                imageRef.current.click();
              }}
              startIcon={<CloudUploadIcon />}
            >
              UPLOAD FILES
            </Button>
            <PreviewImage images={state.image} update={updateImage} />
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
