import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
import { Avatar, Modal } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import Card from '../Component/Card';
import ChangeProfilePicture from '../Component/ChngeProfilePicture';
import SemiBiography from '../Component/SemiBiography'
import LinksAdd from '../Component/LinksAdd';
import DegreesAdd from '../Component/DegreesAdd';
import SkillsAdd from '../Component/SkillsAdd';
import './MainProfile.css';

import githubImage from 'E:/Projec/github.png'; // adjust the path accordingly
import jsImage from 'E:/Projec/js.png';
import schoolImage from 'E:/Projec/school.png';
import pic from 'E:/Projec/pic.jpg';

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
  background: '#780000',
  color: '#ffffff',
  marginBottom: '5%',
  borderRadius: '4px',

  '&:hover': {
    backgroundColor: '#EBEBEB', // Change the background color on hover
    color: '#000000', // Change the text color on hover
  },
}

const menuItemStyle1 = {
  marginBottom: '0',
}

const modalStyle = {
  backgroundColor: 'white',
  position: 'absolute',
  top: '50%',
  left: '50%',
  translate: "-50% -50%",
  width: "60vh",
  background: "white",
  borderRadius: "4px"
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
                  <Button variant="contained">Activity Log</Button>
                </Item>
              </Grid>

            </Item>
          </Grid>

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
                    <LinkCard image={githubImage} mediaLink="https://github.com/dksaddy" mediaName="GIthub" />
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
                    <DegreeCard image={schoolImage} />
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
                    <SkillCard image={jsImage} />
                  </AccordionDetails>
                </Accordion>

              </Grid>

            </Item>
          </Grid>

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
          </Grid>



          <Grid item xs={4}>
          <h3 style={{ margin: 0 }}>Achivement</h3>
          <hr />
            <Item sx={{ display: 'flex', marginTop: 1, flexWrap: 'wrap', position: 'relative', justifyContent: 'space-between'}}>
              <HobbyCard hobby="Cricket" image={jsImage} />
              <HobbyCard hobby="Cricket" image={githubImage} />
              <HobbyCard hobby="Cricket" image={pic} />
            </Item>
          </Grid>

          <Grid item xs={8}>
          <h3 style={{ margin: 0 }}>Publications & Projects</h3>
          <hr />
            <Item sx={{ display: 'flex', marginTop: 1, flexWrap: 'wrap', position: 'relative', justifyContent: 'space-between'}}>
              
            </Item>
          </Grid>


          

        </Grid>

        {/* Modal 1 */}
        <Modal
          open={openModal === 'modal1'}
          onClose={handleModalClose}
          // Prevent closing on backdrop click
          disableBackdropClick
          // Stop propagation on backdrop click
          BackdropProps={{ onClick: (e) => e.stopPropagation() }}
        >
          <Box sx={modalStyle}>
            <IconButton
              onClick={handleModalClose}
              sx={{ position: 'absolute', top: 0, right: 0 }}
            >
              <CloseIcon />
            </IconButton>
            <ChangeProfilePicture onClose={handleModalClose} />
          </Box>
        </Modal>

        {/* Modal 2 */}
        <Modal
          open={openModal === 'modal2'}
          onClose={handleModalClose}
          // Prevent closing on backdrop click
          disableBackdropClick
          // Stop propagation on backdrop click
          BackdropProps={{ onClick: (e) => e.stopPropagation() }}
        >
          <Box sx={modalStyle}>
            <IconButton
              onClick={handleModalClose}
              sx={{ position: 'absolute', top: 0, right: 0 }}
            >
              <CloseIcon />
            </IconButton>
            <LinksAdd onClose={handleModalClose} />
          </Box>
        </Modal>

        {/* Modal 3 */}
        <Modal
          open={openModal === 'modal3'}
          onClose={handleModalClose}
          // Prevent closing on backdrop click
          disableBackdropClick
          // Stop propagation on backdrop click
          BackdropProps={{ onClick: (e) => e.stopPropagation() }}
        >
          <Box sx={modalStyle}>
            <IconButton
              onClick={handleModalClose}
              sx={{ position: 'absolute', top: 0, right: 0 }}
            >
              <CloseIcon />
            </IconButton>
            <DegreesAdd onClose={handleModalClose} />
          </Box>
        </Modal>

        {/* Modal 4 */}
        <Modal
          open={openModal === 'modal4'}
          onClose={handleModalClose}
          // Prevent closing on backdrop click
          disableBackdropClick
          // Stop propagation on backdrop click
          BackdropProps={{ onClick: (e) => e.stopPropagation() }}
        >
          <Box sx={modalStyle}>
            <IconButton
              onClick={handleModalClose}
              sx={{ position: 'absolute', top: 0, right: 0 }}
            >
              <CloseIcon />
            </IconButton>
            <SkillsAdd onClose={handleModalClose} />
          </Box>
        </Modal>


      </Box>
    </div>
  )
}

export default MainProfile