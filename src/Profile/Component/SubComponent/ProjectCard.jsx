import React from 'react';
import { Avatar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function ProjectCard(props) {
    return (
        <div style={{ width: '28%', margin: '2% 2.4%' }}>
            <div className='projrctCard'>

                <Avatar
                    sx={{ height: 120, width: '100%', borderStartEndRadius: '10px', borderStartStartRadius: '10px', }}
                    alt="Remy Sharp"
                    src={props.image}
                    variant='square'
                />

                <a href={props.projectLink} target="_blank" rel="noopener noreferrer">{props.project}</a>

                <p>{props.description} hello my name is saddy deisgning thing is my hobby</p>

                <div className='deleteIconForProjrctCard'>
                    <IconButton sx={{ padding: 0 }}>
                        <CloseIcon sx={{ fontSize: '15px', color: '#fff' }} />
                    </IconButton>
                </div>

            </div>

        </div>
    )
}

export default ProjectCard