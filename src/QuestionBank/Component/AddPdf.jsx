import React from 'react';
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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));





function AddPdf() {

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [Trimester, setAge] = React.useState('');

  const [value, setValue] = React.useState(null);

  return (
    <div>
      <form action="" method="get">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1} columnGap={3}>

            <Grid item xs={8}>
              <Item sx={{ display: 'flex', alignItems: "center", margin: "1% 5%", boxShadow: "none" }}>
                <InsertDriveFileSharpIcon sx={{ fontSize: "3rem", color: "#E5252A" }} />
                <h2>Upload Question</h2>
              </Item>
            </Grid>

            <Grid item xs={12}>
              <Item
                sx={{
                  height: "6vh",
                  border: "2px dashed",
                  margin: "0 5%",
                  boxShadow: "none",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}>
                Upload a File
              </Item>
            </Grid>

            <Grid item xs={12}>
              <Item sx={{ boxShadow: "none"}}>
                <Button variant="contained" sx={{ width: "60%"}}>
                  CHOOSE A FILE
                </Button>
              </Item>
            </Grid>

            <Grid item xs={12}>
              <Item sx={{ boxShadow: "none" }}>
                <TextField id="outlined-basic" label="Course Name" variant="outlined" sx={{ width: "100%" }} />
              </Item>
            </Grid>

            <Grid item xs={3}>
              <Item sx={{ boxShadow: "none" }}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                      Trimester
                    </InputLabel>
                    <NativeSelect
                      defaultValue={30}
                      inputProps={{
                        name: 'age',
                        id: 'uncontrolled-native',
                      }}
                    >
                      <option value={10}>Fall</option>
                      <option value={20}>Spring</option>
                      <option value={30}>Summer</option>
                    </NativeSelect>
                  </FormControl>
                </Box>
              </Item>
            </Grid>

            <Grid item xs={3}>
              <Item sx={{ boxShadow: "none" }}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                      Exam Type
                    </InputLabel>
                    <NativeSelect
                      defaultValue={30}
                      inputProps={{
                        name: 'age',
                        id: 'uncontrolled-native',
                      }}
                    >
                      <option value={10}>Mid</option>
                      <option value={20}>Final</option>
                    </NativeSelect>
                  </FormControl>
                </Box>
              </Item>
            </Grid>

            <Grid item xs={3}>
              <Item sx={{}}>
                Date picker Problem
              </Item>
            </Grid>

            <Grid item xs={12}>
              <Item sx={{ boxShadow: "none" }}>
                <Button variant="contained" sx={{ width: "100%" }}>
                  Upload
                </Button>
              </Item>
            </Grid>

          </Grid>
        </Box>
      </form>
    </div>
  )
}

export default AddPdf;






