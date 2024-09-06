import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import InsertDriveFileSharpIcon from "@mui/icons-material/InsertDriveFileSharp";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Button from "@mui/material/Button";
import axios from 'axios';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const currentYear = new Date().getFullYear();
const errorTextStyle = {
  color: 'red',
  fontWeight: '500',
  fontSize: '.7rem'
}

function AddPdf({ onClose, fetch }) {

  const [formData, setFormData] = useState({
    pdf: null,
    department: '',
    courseName: '',
    courseCode: '',
    trimester: '',
    examType: '',
    year: '',
  });

  // State for error handling
  const [error, setError] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevForm => ({
      ...prevForm,
      [name]: value
    }));
    setError(prevError => ({
      ...prevError,
      [name]: '',
    }))
  };

  const handlePdfChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFormData(prevForm => ({
        ...prevForm,
        pdf: file,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const errors = {};
    if (!formData.pdf) {
      errors.pdf = 'Please select a PDF.';
    }
    if (formData.trimester === 'none' || formData.trimester === '') {
      errors.trimester = 'Please select a Trimester.';
    }
    if (formData.examType === 'none' || formData.examType === '') {
      errors.examType = 'Please select an Exam Type.';
    }
    if (formData.year === 'none' || formData.year === '') {
      errors.year = 'Please select a Year.';
    }
    if (formData.department === 'none' || formData.department === '') {
      errors.department = 'Please select a Department.';
    }
    if (Object.keys(errors).length > 0) {
      setError(errors);
    } else {

      const form = new FormData();
      form.append('department', formData.department);
      form.append('courseName', formData.courseName);
      form.append('courseCode', formData.courseCode);
      form.append('trimester', formData.trimester);
      form.append('examType', formData.examType);
      form.append('year', formData.year);
      form.append('pdf', formData.pdf);

      try {
        const token = "Bearer " + JSON.parse(localStorage.getItem("token"));

        const response = await axios.post(
          "http://localhost:3000/question/post",
          form,
          {
            headers: {
              Authorization: token,
            },
          }
        );

        console.log(response.data);
      } catch (err) {
        console.error(err.response);
      }

      console.log(formData);
      fetch();
      onClose();// Close the modal after updating
    }

  };




  return (
    <div>
      <Box component="form" method="POST" onSubmit={handleSubmit} sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>

          <Grid item xs={8}>
            <Item sx={{ display: 'flex', alignItems: "center", margin: "1% 5%", boxShadow: "none" }}>
              <InsertDriveFileSharpIcon sx={{ fontSize: "3rem", color: "#E5252A" }} />
              <h2>Upload Question</h2>
            </Item>
          </Grid>

          <Grid item xs={12}>
            <Item
              sx={{
                border: "2px dashed",
                margin: "0 2%",
                boxShadow: "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}>
              {formData.pdf ? (
                <>
                  <p style={{ color: 'black' }}><strong>File Name:</strong> {formData.pdf.name}</p>
                  <p style={{ color: 'black' }}><strong>File Size:</strong> {(formData.pdf.size / (1024 * 1024)).toFixed(2)} MB</p>
                </>
              ) : (
                <>
                  <p style={{ color: 'black' }}><strong>File Name:</strong> </p>
                  <p style={{ color: 'black' }}><strong>File Size:</strong> </p>
                  {error && <p style={errorTextStyle}>{error.pdf}</p>}
                </>
              )}
            </Item>
          </Grid>

          <Grid item xs={12}>
            <Item sx={{ boxShadow: "none" }}>
              {/* Custom File Input */}
              <input
                accept="application/pdf"
                style={{ display: 'none' }}
                id="contained-button-file"
                type="file"
                name='pdfFile'
                onChange={handlePdfChange}
              />
              <label htmlFor="contained-button-file">
                <Button
                  variant="contained"
                  color="primary"
                  component="span"
                  sx={{ width: '50%' }}>
                  Upload A PDF
                </Button>
              </label>
            </Item>
          </Grid>

          <Grid item xs={12}>
            <Item sx={{ boxShadow: "none" }}>
              <TextField
                id="outlined-basic"
                label="Course Name"
                variant="outlined"
                sx={{ width: "100%" }}
                name='courseName'
                required
                value={formData.courseName}
                onChange={handleChange}
              />
            </Item>
          </Grid>

          <Grid item xs={12}>
            <Item sx={{ boxShadow: "none" }}>
              <TextField
                id="outlined-basic"
                label="Course Code"
                variant="outlined"
                sx={{ width: "100%" }}
                name='courseCode'
                required
                value={formData.courseCode.toUpperCase()}
                onChange={handleChange}
              />
            </Item>
          </Grid>

          <Grid item xs={6}>
            <Item sx={{ boxShadow: "none" }}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Trimester
                  </InputLabel>
                  <NativeSelect
                    defaultValue={"none"}
                    inputProps={{
                      name: 'trimester',
                      id: 'uncontrolled-native',
                    }}
                    required
                    onChange={handleChange}
                  >
                    <option value={"none"}>None</option>
                    <option value={"Fall"}>Fall</option>
                    <option value={"Spring"}>Spring</option>
                    <option value={"Summer"}>Summer</option>
                  </NativeSelect>
                </FormControl>
                {error && <p style={errorTextStyle}>{error.trimester}</p>}
              </Box>
            </Item>
          </Grid>

          <Grid item xs={6}>
            <Item sx={{ boxShadow: "none" }}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Department
                  </InputLabel>
                  <NativeSelect
                    defaultValue={"none"}
                    inputProps={{
                      name: 'department',
                      id: 'uncontrolled-native',
                    }}
                    required
                    onChange={handleChange}
                  >
                    <option value={"none"}>None</option>
                    <option value={"CSE"}>CSE</option>
                    <option value={"EEE"}>EEE</option>
                    <option value={"CE"}>CE</option>
                    <option value={"BSDS"}>BSDS</option>
                    <option value={"MSCSE"}>MSCSE</option>
                    <option value={"BBA"}>BBA</option>
                    <option value={"BBA in AIS"}>BBA in AIS</option>
                    <option value={"MBA"}>MBA</option>
                    <option value={"EMBA"}>EMBA</option>
                    <option value={"Econoimics"}>Econoimics</option>
                    <option value={"MS Econoimics"}>MS Econoimics</option>
                    <option value={"BSSEDS"}>BSSEDS</option>
                    <option value={"BSSMSJ"}>BSSMSJ</option>
                    <option value={"English"}>English</option>
                    <option value={"B. Pharm"}>B. Pharm</option>
                  </NativeSelect>
                </FormControl>
                {error && <p style={errorTextStyle}>{error.department}</p>}
              </Box>
            </Item>
          </Grid>

          <Grid item xs={6}>
            <Item sx={{ boxShadow: "none" }}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Exam Type
                  </InputLabel>
                  <NativeSelect
                    defaultValue={"none"}
                    inputProps={{
                      name: 'examType',
                      id: 'uncontrolled-native',
                    }}
                    required
                    onChange={handleChange}
                  >
                    <option value={"none"}>None</option>
                    <option value={"MID"}>MID</option>
                    <option value={"FINAL"}>FINAL</option>
                  </NativeSelect>
                </FormControl>
                {error && <p style={errorTextStyle}>{error.examType}</p>}
              </Box>
            </Item>
          </Grid>

          <Grid item xs={6}>
            <Item sx={{ boxShadow: "none" }}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Year
                  </InputLabel>
                  <NativeSelect
                    defaultValue={"none"}
                    inputProps={{
                      name: 'year',
                      id: 'uncontrolled-native',
                    }}
                    required
                    onChange={handleChange}
                  >
                    <option value={"none"}>None</option>
                    <option value={currentYear}>{currentYear}</option>
                    <option value={currentYear - 1}>{currentYear - 1}</option>
                    <option value={currentYear - 2}>{currentYear - 2}</option>
                    <option value={currentYear - 3}>{currentYear - 3}</option>
                  </NativeSelect>
                </FormControl>
                {error && <p style={errorTextStyle}>{error.year}</p>}
              </Box>
            </Item>
          </Grid>

          <Grid item xs={12}>
            <Item sx={{ boxShadow: "none" }}>
              <Button
                variant="contained"
                sx={{ width: "100%", height: "6vh", marginBottom: "0.7%" }}
                type='submit'
              >
                Upload
              </Button>
            </Item>
          </Grid>

        </Grid>
      </Box>
    </div>
  )
}

export default AddPdf;
