import React from 'react'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Avatar } from '@mui/material';

function SkillCard(props) {
    return (
        <div>
            <div className='linkCard'>
                <Avatar
                    sx={{ height: 20, width: 20, marginRight: "10px" }}
                    alt="Remy Sharp"
                    src={props.image}
                    variant='rounded'
                />
                <p>Skill you like share</p>

                <div className='deleteIcon'>
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

        </div>
    )
}

export default SkillCard