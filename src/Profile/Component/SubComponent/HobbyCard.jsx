import { Avatar } from '@mui/material';
import React from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function HobbyCard(props) {
    return (
        <div style={{width: '25%', margin: '2% 2.4%'}}>
            <div className='hobbyCard'>

                <Avatar
                    sx={{ height: 80, width: '100%', borderStartEndRadius: '10px', borderStartStartRadius: '10px'}}
                    alt="Remy Sharp"
                    src={props.image}
                    variant='square'
                />
                <p style={{marginTop: 2}}><strong>{props.hobby}</strong></p>

                <div className='deleteIconForHobby'>
                    <IconButton sx={{ padding: 0 }}>
                        <CloseIcon sx={{ fontSize: '15px' }} />
                    </IconButton>
                </div>

            </div>
        </div>
    )
}

export default HobbyCard