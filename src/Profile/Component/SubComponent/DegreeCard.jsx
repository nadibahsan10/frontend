import React from 'react'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Avatar } from '@mui/material';

function DegreeCard(props) {
    return (
        <div>
            <div className='linkCard'>
                <Avatar
                    sx={{ height: 20, width: 20, marginRight: "10px" }}
                    alt="Remy Sharp"
                    src={props.image}
                    variant='rounded'
                />
                <p style={{ textWrap: 'wrap' }}>passing Year like Share Institute,</p>

                <div className='deleteIcon'>
                    <IconButton sx={{ padding: 0 }}>
                        <CloseIcon sx={{ fontSize: '15px' }} />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default DegreeCard