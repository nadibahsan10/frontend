import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none'
}));

function Card() {
    return (
        <div className='experienceCard'>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container>

                    <Grid item xs={10}>
                        <Item sx={{ textAlign: "left" }}>
                            <h3 style={{ margin: 0, color: 'black' }}>Full-Stack Developer</h3>
                            <h4 style={{ margin: 0 }}>Brain Station 23, Dhaka.</h4>
                        </Item>
                    </Grid>

                    <Grid item xs={2}>
                        <p style={{ color: 'black' }}>2015 - 2017</p>
                    </Grid>

                    <Grid item xs={12}>
                        <Item sx={{ textAlign: "left" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis unde numquam veritatis,
                            quas voluptas dolorum dolorem? Explicabo aliquid assumenda,
                            suscipit, error eveniet eos minima voluptatibus modi totam laudantium natus facere!</Item>
                    </Grid>

                </Grid>
            </Box>

            <div className='deleteIconForexperienceCard'>
                <IconButton sx={{ padding: 0, background: '#780000' }}>
                    <CloseIcon
                        sx={{
                            fontSize: '15px',
                            color: '#fff',
                            '&:hover': { color: '#000' }
                        }}
                    />
                </IconButton>
            </div>

        </div>
    )
}

export default Card