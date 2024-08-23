import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Info from '../Components/SubComponent/Info';
import Description from '../Components/SubComponent/Description';
import IndividualProductDescription from '../Components/SubComponent/IndividualProductDescription';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function IndividualProduct() {
  return (
    <div>
        <Box sx={{ flexGrow: 1 ,margin: '50px 100px'}} >
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Item>
            <Description />
          </Item>
        </Grid>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Info />
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <IndividualProductDescription />
          </Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}

export default IndividualProduct