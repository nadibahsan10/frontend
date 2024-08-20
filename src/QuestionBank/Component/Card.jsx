import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Avatar, Modal, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';

import "./Card.css";
import UpdatePdf from './UpdatePdf';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#00000000',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none',
}));

function Card(props) {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const handleOpenAddModal = () => {
        setIsAddModalOpen(true);
    };

    const handleCloseAddModal = () => {
        setIsAddModalOpen(false);
    };

    return (
        <Box sx={{ flexGrow: 1, background: '#EBEBEB', borderRadius: "10px", width: "82%", margin: "1% 9%"}}>
            <Grid container spacing={1}>
                <Grid item xs={8}>
                    <Item>
                        <h2>{props.name}</h2>
                        <p>{props.type} - {props.trimester}</p>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <div className='proPic'>
                            <DeleteIcon />
                            <MoreVertIcon onClick={handleOpenAddModal} style={{ cursor: 'pointer' }} />
                            <Avatar
                                sx={{ height: 25, width: 25, marginRight: 2 }}
                                alt="Profile Image"
                                src="/profileImage.webp"
                            />
                        </div>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <div className='likeBtn'>
                            <FavoriteIcon sx={{ color: "red" }} />
                            <span>{props.likes}</span>
                        </div>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <div className='downloadBtn'>
                            <Button variant="contained">
                                <DownloadForOfflineOutlinedIcon sx={{ marginRight: 1 }} /> Download PDF
                            </Button>
                        </div>
                    </Item>
                </Grid>
            </Grid>

            <Modal open={isAddModalOpen} onClose={handleCloseAddModal}>
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)", 
                        width: "60vh",
                        backgroundColor: "white",
                        borderRadius: "4px",
                    }}
                >
                    <UpdatePdf />
                </div>
            </Modal>

        </Box>
    );
}

export default Card;
