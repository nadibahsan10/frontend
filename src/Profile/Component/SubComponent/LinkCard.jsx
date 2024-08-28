import React from 'react'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Avatar } from '@mui/material';

function LinkCard(props) {
    return (
        <div>
            <div className='linkCard'>
                <Avatar
                    sx={{ height: 20, width: 20, marginRight: "10px" }}
                    alt="Remy Sharp"
                    src={props.image}
                />
                <a href={props.mediaLink} target="_blank" rel="noopener noreferrer">{props.mediaName}</a>

                <div className='deleteIcon'>
                    <IconButton sx={{ padding: 0 }}>
                        <CloseIcon sx={{ fontSize: '15px' }} />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default LinkCard