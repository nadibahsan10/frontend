import React, { useState } from 'react';
import { Container,List, ListItem, ListItemText, Typography, Box, IconButton } from '@mui/material';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import RemoveIcon from '@mui/icons-material/Remove'; 
import VisibilityIcon from '@mui/icons-material/Visibility'; 
import MessageIcon from '@mui/icons-material/Message';


const alumniData = [
  {
    id: 1,
    name: "MD Nadib Ahsan",
    company: "Google LLC",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "S.M. Shahriar Rahman Maruph",
    company: "Microsoft",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    name: "Mohiuddin Sadik",
    company: "Adobe",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 4,
    name: "MD Nadib Ahsan",
    company: "Google LLC",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 5,
    name: "S.M. Shahriar Rahman Maruph",
    company: "Microsoft",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 6,
    name: "Mohiuddin Sadik",
    company: "Adobe",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 1,
    name: "MD Nadib Ahsan",
    company: "Google LLC",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "S.M. Shahriar Rahman Maruph",
    company: "Microsoft",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    name: "Mohiuddin Sadik",
    company: "Adobe",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 4,
    name: "MD Nadib Ahsan",
    company: "Google LLC",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 5,
    name: "S.M. Shahriar Rahman Maruph",
    company: "Microsoft",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 6,
    name: "Mohiuddin Sadik",
    company: "Adobe",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 1,
    name: "MD Nadib Ahsan",
    company: "Google LLC",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "S.M. Shahriar Rahman Maruph",
    company: "Microsoft",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    name: "Mohiuddin Sadik",
    company: "Adobe",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 4,
    name: "MD Nadib Ahsan",
    company: "Google LLC",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 5,
    name: "S.M. Shahriar Rahman Maruph",
    company: "Microsoft",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 6,
    name: "Mohiuddin Sadik",
    company: "Adobe",
    image: "https://via.placeholder.com/100",
  },
  
];

const MyList = () => {
  const [selectedAlumni, setSelectedAlumni] = useState(null);

  const handleClick = (id) => {
    setSelectedAlumni(id === selectedAlumni ? null : id); // Toggle selection
  };

  const handleRemove = (id) => {
    console.log(`Removing alumni with ID: ${id}`);
    setSelectedAlumni(null);
    // Add your logic here to remove the alumni from the list
  };

  const handleViewProfile = (id) => {
    console.log(`Viewing profile for alumni with ID: ${id}`);
    // Add your logic to view the profile
  };

  return (
    <Box
      sx={{
        padding: 2,
        width: 300, 
        backgroundColor: '#f5f5f5',

      }}
    >
      {/* Sidebar Title */}
      <Typography
        variant="h6"
        sx={{
          padding: "10px 20px",
          backgroundColor: "lightblue",
          borderRadius: "8px",
          textAlign: "center",
          color: "black",
          marginBottom: 1,
        }}
      >
        Connected Alumni
      </Typography>

      {/* Connected Alumni Count */}
      <Typography
        variant="body2"
        sx={{
          padding: "2px 0",
          backgroundColor: "red",
          borderRadius: "8px",
          textAlign: "center",
          color: "white",
          display: "flex", 
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 2,
        }}
      >
        <ConnectWithoutContactIcon sx={{ marginRight: 1 }} /> 
        109 Connected
      </Typography>

     {/* Alumni List */}
     <Container
        sx={{
          maxHeight: '700px', 
          overflowY: 'auto', 
          border: '1px solid #ccc',
          borderRadius: '8px',
        }}
      >
        <List>
          {alumniData.map((alumni) => (
            <ListItem
              button
              key={alumni.id}
              onClick={() => handleClick(alumni.id)}
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <ListItemText primary={alumni.name} secondary={alumni.company} sx={{ flexGrow: 1 }} />
              <IconButton onClick={() => handleViewProfile(alumni.id)} aria-label="view profile">
                <VisibilityIcon />
              </IconButton>
              <IconButton onClick={() => handleRemove(alumni.id)} aria-label="remove">
                <MessageIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );
};

export default MyList;
