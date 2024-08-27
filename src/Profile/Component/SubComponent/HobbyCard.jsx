import { Avatar } from '@mui/material';
import React from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function HobbyCard(props) {
    return (
        <div style={{width: '20%', marginBottom: '5%'}}>
            <div className='hobbyCard'>

                <Avatar
                    sx={{ height: 40, width: 40, }}
                    alt="Remy Sharp"
                    src={props.image}
                    variant='rounded'
                />
                <p><strong>{props.hobby}</strong></p>

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