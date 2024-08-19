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


const currentYear = new Date().getFullYear();


function UpdatePdf() {
    return (
        <div>
            <Box component="form" method="POST" sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>

                    <Grid item xs={8}>
                        <Item sx={{ display: 'flex', alignItems: "center", margin: "1% 5%", boxShadow: "none" }}>
                            <InsertDriveFileSharpIcon sx={{ fontSize: "3rem", color: "#E5252A" }} />
                            <h2>Update Question</h2>
                        </Item>
                    </Grid>

                    <Grid item xs={12}>
                        <Item
                            sx={{
                                height: "10vh",
                                border: "2px dashed",
                                margin: "0 5%",
                                boxShadow: "none",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                            <h2>Software Engineering</h2>
                            <p>File size: 1.43 MB</p>
                        </Item>
                    </Grid>

                    <Grid item xs={12}>
                        <Item sx={{ boxShadow: "none", marginTop: 1 }}>
                            <TextField id="outlined-basic" label="Course Name" variant="outlined" sx={{ width: "100%" }} />
                        </Item>
                    </Grid>

                    <Grid item xs={4}>
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

                    <Grid item xs={4}>
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

                    <Grid item xs={4}>
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
                                        <option value={currentYear}>{currentYear}</option>
                                        <option value={currentYear - 1}>{currentYear - 1}</option>
                                        <option value={currentYear - 2}>{currentYear - 2}</option>
                                        <option value={currentYear - 3}>{currentYear - 3}</option>
                                    </NativeSelect>
                                </FormControl>
                            </Box>
                        </Item>
                    </Grid>

                    <Grid item xs={12}>
                        <Item sx={{ boxShadow: "none" }}>
                            <Button variant="contained" sx={{ width: "100%", height: "6vh", marginBottom: "0.7%"}}>
                                Update
                            </Button>
                        </Item>
                    </Grid>

                </Grid>
            </Box>
        </div>
    )
}


export default UpdatePdf;