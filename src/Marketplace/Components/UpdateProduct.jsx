import React, { useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Avatar, IconButton } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CloseIcon from "@mui/icons-material/Close";
import ImageIcon from "@mui/icons-material/Image";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function UpdateProduct({ title, description, price, category, image }) {
    const imageFile = useRef();
    const [file, setFile] = useState(null);
    const [form, setForm] = useState({
      title: title || "",
      description: description || "",
      price: price || "",
      category: category || "",
      image: image || "",
    });
  
    const imageUpload = () => {
      imageFile.current.click();
    };
  
    const submitForm = (event) => {
      event.preventDefault();
      console.log(form);
      // Here you would send the updated form data to your server
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
  
    const handleChangeImage = (event) => {
      setFile(event.target.files[0]);
      setForm((prev) => ({
        ...prev,
        image: event.target.files[0],
      }));
    };
  
    const handleChangeCategory = (event) => {
      setForm((prev) => ({
        ...prev,
        category: event.target.value,
      }));
    };
  
    const discardImage = () => {
      setFile(null);
      setForm((prev) => ({
        ...prev,
        image: null,
      }));
    };
  
const imageUrl = file ? URL.createObjectURL(file) : form.image;

  return (
    <Box
      sx={{ flexGrow: 1 }}
      component="form"
      onSubmit={submitForm}
      method="post"
      enctype="multipart/form-data"
    >
      <div
        className="addProuct"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "2%",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
          Update your product
        </h2>
        <Typography
          variant="caption"
          gutterBottom
          sx={{
            textAlign: "left",
            margin: "0",
          }}
        >
          Product name :
        </Typography>
        <TextField
          id="outlined-basic"
          name="title"
          value={form.title}
          variant="outlined"
          style={{ margin: "10px", width: "60%" }}
          onChange={handleChange}
        />

        <Typography
          variant="caption"
          gutterBottom
          sx={{
            textAlign: "left",
            margin: "0",
          }}
        >
          Product description :
        </Typography>
        <TextField
          id="outlined-basic"
          name="content"
          value={form.description}
          variant="outlined"
          style={{ margin: "10px", width: "60%" }}
          multiline
          minRows={2}
          onChange={handleChange}
        />

        <Typography
          variant="caption"
          gutterBottom
          sx={{
            textAlign: "left",
            margin: "0",
          }}
        >
          Product price :
        </Typography>
        <TextField
          id="outlined-basic"
          name="price"
          value={form.price}
          variant="outlined"
          sx={{ margin: "10px", width: "60%" }}
          onChange={handleChange}
        />
        <FormControl sx={{ margin: "10px", width: "60%" }}>
          <InputLabel id="demo-simple-select-label">Select category</InputLabel>
          <Select
            required
            name="gender"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={form.category}
            label="Select category "
            onChange={handleChangeCategory}
          >
            <MenuItem value="electronics">Electronics</MenuItem>
            <MenuItem value="furniture">Furniture</MenuItem>
            <MenuItem value="labEquipment">Lab Equipment</MenuItem>
            <MenuItem value="desktop">Desktop</MenuItem>
            <MenuItem value="laptop">Laptop</MenuItem>
            <MenuItem value="mobile">Mobile</MenuItem>
            <MenuItem value="drone&Camera">Drone & Camera</MenuItem>
            <MenuItem value="others">Others</MenuItem>
          </Select>
        </FormControl>
        <div
          style={{
            border: "2px black dashed",
            padding: "6% 22% ",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <ImageIcon style={{ height: "50px", width: "50px", margin: "0" }} />
          <h5
            style={{
              marginBottom: "10px",
              minWidthidth: "60%",
              fontWeight: "400",
            }}
          >
            Drop your product image here
          </h5>

          {file && (
            <Box
              sx={{
                width: "200px",
                height: "200px",

                position: "relative",
              }}
            >
              <Avatar
                variant="rounded"
                src={imageUrl}
                alt=""
                sx={{ height: "100%", width: "100%" }}
              />
              <IconButton
                sx={{
                  position: "absolute",
                  top: "0px",
                  right: "0px",
                  color: "white !important",
                }}
                onClick={discardImage}
              >
                <CloseIcon />
              </IconButton>
            </Box>
          )}

          <input
            type="file"
            ref={imageFile}
            name="imageFile"
            style={{ display: "none" }}
            onChange={handleChangeImage}
          />
          <Button variant="contained" onClick={imageUpload}>
            Click to Browse
          </Button>
        </div>
        <Box display="flex" margin="20px" justifyContent="space-evenly">
          <Button variant="contained" sx={{ marginRight: "50%" }}>
            Cancel
          </Button>
          <Button variant="contained" type="submit">
            Upload
          </Button>
        </Box>
      </div>
    </Box>
  );
}

export default UpdateProduct;
