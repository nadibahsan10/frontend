import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import MenuIcon from '@mui/icons-material/Menu';

import ChangeProfilePicture from '../Component/ChngeProfilePicture';
import LinksAdd from '../Component/LinksAdd';
import DegreesAdd from '../Component/DegreesAdd';
import SkillsAdd from '../Component/SkillsAdd';
import ModalFram from '../Component/ModalFram';
import './MainProfile.css';

import SemiBiography from '../Component/SemiBiography'
import Card from '../Component/Card';
import HobbyCard from '../Component/SubComponent/HobbyCard';
import LinkCard from '../Component/SubComponent/LinkCard';
import DegreeCard from '../Component/SubComponent/DegreeCard';
import SkillCard from '../Component/SubComponent/SkillCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const menuItemStyle = {
  borderRadius: '4px',

  '&:hover': {
    background: '#780000',
    color: '#ffffff',
  },
}

function MainProfile() {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [openModal, setOpenModal] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (modal) => {
    setOpenModal(modal); // Set the modal to open
    handleClose(); // Close the menu
  };

  const handleModalClose = () => {
    setOpenModal(null); // Close the modal
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} sx={{ width: "80%", marginLeft: "10%" }}>

          <Grid item xs={12}>
            <Item sx={{ display: 'flex' }}>

              <Grid item xs={6}>
                <Item sx={{
                  display: "flex",
                  alignItems: "center",
                  position: 'relative',
                  boxShadow: 'none'
                }}>
                  <SemiBiography />
                </Item>
              </Grid>

              <Grid item xs={6}>
                <Item sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "2%",
                  height: "100px",
                  boxShadow: "none"
                }}>
                  <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleMenuClick}
                    variant='contained'
                  >
                    <MenuIcon />
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem onClick={() => handleMenuItemClick('modal1')} sx={menuItemStyle}>Update Profile</MenuItem>
                    <MenuItem onClick={() => handleMenuItemClick('modal2')} sx={menuItemStyle}>Add Links</MenuItem>
                    <MenuItem onClick={() => handleMenuItemClick('modal3')} sx={menuItemStyle}>Add Degrees</MenuItem>
                    <MenuItem onClick={() => handleMenuItemClick('modal4')} sx={menuItemStyle}>Add Skills</MenuItem>
                  </Menu>
                </Item>
              </Grid>

            </Item>
          </Grid> {/*Grid 12*/}


          <Grid item xs={4}>
            <Item>
              <Grid item xs={12}>

                <p style={{ color: 'black' }}>
                  I have been working as a software Engineer for 10 years. Learnig and implementing is something I like to do.
                </p>

                <Accordion sx={{ marginTop: '3%' }} defaultExpanded>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <h3 style={{ margin: 0 }}>Links</h3>
                  </AccordionSummary>
                  <AccordionDetails>
                    <LinkCard image="profileImage.webp" mediaLink="https://github.com/dksaddy" mediaName="GIthub" />
                  </AccordionDetails>
                </Accordion>

                <Accordion sx={{ marginTop: '3%' }} defaultExpanded>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <h3 style={{ margin: 0 }}>Degrees</h3>
                  </AccordionSummary>
                  <AccordionDetails>
                    <DegreeCard image="profileImage.webp" />
                  </AccordionDetails>
                </Accordion>

                <Accordion sx={{ marginTop: '3%' }} defaultExpanded>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <h3 style={{ margin: 0 }}>Skills</h3>
                  </AccordionSummary>
                  <AccordionDetails>
                    <SkillCard image="profileImage.webp" />
                  </AccordionDetails>
                </Accordion>

              </Grid>

            </Item>
          </Grid> {/*Grid 4*/}


          <Grid item xs={8}>
            <Item>
              <h2 style={{ margin: 0 }}>Experience</h2>
              <hr />

              <Grid item xs={12} sx={{ marginBottom: '2%' }}>
                <Item><Card /></Item>
              </Grid>

              <Grid item xs={12}>
                <Item><Card /></Item>
              </Grid>

            </Item>
          </Grid> {/*Grid 8*/}


          <Grid item xs={4}>
            <h3 style={{ margin: 0 }}>Achivement</h3>
            <hr />
            <Item sx={{ display: 'flex', marginTop: 1, flexWrap: 'wrap', position: 'relative', justifyContent: 'space-between' }}>
              <HobbyCard hobby="Cricket" image="puzzle.png" />
              <HobbyCard hobby="Cricket" image="profileImage.webp" />
              <HobbyCard hobby="Cricket" image="puzzle.png" />

            </Item>
          </Grid> {/*Grid 4*/}


          <Grid item xs={8}>
            <h3 style={{ margin: 0 }}>Publications & Projects</h3>
            <hr />
            <Item sx={{ display: 'flex', marginTop: 1, flexWrap: 'wrap', position: 'relative', justifyContent: 'space-between' }}>

            </Item>
          </Grid> {/*Grid 8*/}

        </Grid>


        {/*  CustomModal  */}

        <ModalFram
          open={openModal === 'modal1'}
          onClose={handleModalClose}
        >
          <ChangeProfilePicture onClose={handleModalClose} />
        </ModalFram>

        <ModalFram
          open={openModal === 'modal2'}
          onClose={handleModalClose}
        >
          <LinksAdd onClose={handleModalClose} />
        </ModalFram>

        <ModalFram
          open={openModal === 'modal3'}
          onClose={handleModalClose}
        >
          <DegreesAdd onClose={handleModalClose} />
        </ModalFram>

        <ModalFram
          open={openModal === 'modal4'}
          onClose={handleModalClose}
        >
          <SkillsAdd onClose={handleModalClose} />
        </ModalFram>

      </Box>
    </div>
  )
}

export default MainProfile