import React, { useState } from "react";
import {
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  IconButton,
  Avatar,
} from "@mui/material";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import RemoveIcon from "@mui/icons-material/Remove";
import VisibilityIcon from "@mui/icons-material/Visibility";
import MessageIcon from "@mui/icons-material/Message";
import customImage from "../Image/250929134_4408229885970439_9204173520367789220_n.jpg"

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
  const listStyle = {
    backgroundColor: "white",
    borderRadius: "8px",
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(1.02)",
    },
  };

  return (
    <Box
      sx={{
        padding: 2,
        width: "fit-content",
        backgroundColor: "#f5f5f5",
        borderRadius: 2, 
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", 
        height: "100vh",
        display: "flex", // Flexbox for centering content inside if needed
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin:0,
      }}
    >
      {/* Sidebar Title */}
      <Typography
        variant="h6"
        sx={{
          padding: "2px px",
          display: "flex", //
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        Connected Alumni
      </Typography>

      {/* Connected Alumni Count */}
      <Typography
        variant="body2"
        sx={{
          padding: "2px 15px",
          borderRadius: "5px",
          display: "flex", //
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          backgroundColor: "#780000",
          color: "White", // Text color

          marginBottom: 2,
        }}
      >
        <ConnectWithoutContactIcon sx={{ marginRight: 1 }} />
        109 Connected
      </Typography>

      {/* Alumni List */}
      <Container
        sx={{
          maxHeight: "80%",
          overflowY: "auto",
          border: "2px solid #00000030",
          borderRadius: "8px",
          width: "100%",
        }}
      >
        <List sx={{ width: "100%" }}>
          {alumniData.map((alumni) => (
            <ListItem
              button
              key={alumni.id}
              onClick={() => handleClick(alumni.id)}
              sx={listStyle}
            >
              <Avatar
                alt={alumni.name}
                src={customImage}
                sx={{ marginRight: 2 }}
              />

              <ListItemText
                primary={alumni.name}
                secondary={alumni.company}
                sx={{ flexGrow: 1 }}
              />

              {/* View Profile Button */}
              <IconButton
                onClick={(e) => {
                  e.stopPropagation(); // Prevents the list item click event from triggering
                  handleViewProfile(alumni.id);
                }}
                aria-label="view profile"
              >
                <VisibilityIcon />
              </IconButton>

              {/* Remove Button */}
              <IconButton
                onClick={(e) => {
                  e.stopPropagation(); // Prevents the list item click event from triggering
                  handleRemove(alumni.id);
                }}
                aria-label="message"
              >
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
