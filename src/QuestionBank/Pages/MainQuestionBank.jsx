import React from 'react'
import Filter from '../Component/Filter';
import Card from '../Component/Card';
import UploadBar from '../Component/UploadBar';
import SortBar from '../Component/SortBar';
import SearchBar from '../Component/SearchBar';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const category1 = ["CSE", "BBA", "EEE"]
const category2 = ["2024", "2020", "2021"]
const category3 = ["Summer", "Fall", "Spring"]

function MainQuestionBank() {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Item>
                            <Filter name="Department" category={category1} />
                            <Filter name="Year" category={category2} />
                            <Filter name="Trimester" category={category3} />
                        </Item>
                    </Grid>
                    <Grid item xs={9}>
                        <Item>

                            <UploadBar />
                            <SortBar />
                            <SearchBar />
                            <Card name="Software Engineering" type="Final Examination" trimester="Fall 2022" likes="975" />
                            
                        </Item>

                    </Grid>
                </Grid>
            </Box>


        </div>
    )
}

export default MainQuestionBank;