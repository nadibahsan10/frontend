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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Addproduct() {
  const imageFile = useRef(); //useRef hook

  const imageUpload = () => {
    imageFile.current.click(); //image input with reffernce
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log(form);
  };

  const [file, setFile] = useState(); //hook for file store

  const [form, setForm] = useState([
    { title: "", content: "", price: "", category: "", image: "" },
  ]); //hook for image store

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleChangeImage = (event) => {
    setFile(event.target.files[0]);
    setForm((prev) => {
      return {
        ...prev,
        image: event.target.files[0],
      };
    });
  };

  const [category, setCategory] = React.useState(""); //category select

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
    setForm((prev) => {
      return {
        ...prev,
        category: event.target.value,
      };
    });
  };

  const discardImage = () => {
    setForm((prev) => {
      return { ...prev, image: null };
    });
  };

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
        <h2 style={{ textAlign: "center", marginBottom: "10px" }}>Add a product</h2>

        <TextField
          id="outlined-basic"
          name="title"
          label="Give your product a short and clear name"
          variant="outlined"
          style={{ margin: "10px", width: "60%" }}
          onChange={handleChange}
        />

        <TextField
          id="outlined-basic"
          name="content"
          label="Give your product short and clear description"
          variant="outlined"
          style={{ margin: "10px", width: "60%" }}
          multiline
          minRows={2}
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          name="price"
          label="Give your product price"
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
            value={category}
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
          <ImageIcon style={{ height: "50px", width: "50px",margin: '0' }} />
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
                src={URL.createObjectURL(file)}
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

export default Addproduct;
