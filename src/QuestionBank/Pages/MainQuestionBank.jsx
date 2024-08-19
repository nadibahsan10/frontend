import React from 'react'
import Card from '../Component/Card';
import UploadBar from '../Component/UploadBar';
import SortBar from '../Component/SortBar';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Checkbox from '@mui/material/Checkbox';


import './MainQuestionBank.css';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function MainQuestionBank() {
    return (
        <div>
            <form action="" method="post">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={1}>
                        <Grid item xs={3}>
                            <Item sx={{ boxShadow: "none", marginLeft: "5%" }}>
                                <div>
                                    <Accordion>
                                        <AccordionSummary
                                            sx={{ height: 0, }}
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1-content"
                                            id="panel1-header"
                                        >
                                            <h4>Department</h4>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div className='checkBox'>
                                                <Checkbox />
                                                <span>CSE</span>
                                            </div>
                                            <div className='checkBox'>
                                                <Checkbox />
                                                <span>EEE</span>
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            </Item>
                        </Grid>
                        <Grid item xs={9}>
                            <Item sx={{ marginRight: "5%" }}>

                                <UploadBar />
                                <SortBar />
                                <div className='searchBar'>
                                    <TextField id="outlined-basic" label={<SearchIcon />} variant="outlined"
                                        sx={{
                                            backgroundColor: "transparent",
                                            width: "80%",
                                        }}
                                    />
                                    <Button variant="contained" sx={{ width: "15%" }}>Search</Button>
                                </div>

                                <Card name="Software Engineering" type="Final Examination" trimester="Fall 2022" likes="975" />

                            </Item>

                        </Grid>
                    </Grid>
                </Box>
            </form>
        </div>
    )
}

export default MainQuestionBank;