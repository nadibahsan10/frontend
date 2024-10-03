// SuccessStories.js
import React, { useState } from "react";
import { Box, Typography, IconButton, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add"; // Import the MUI icon
import StoryCard from "../Component/Storycards";
const SuccessStories = () => {
  const [stories, setStories] = useState([
    {
      id: 1,
      title: "From Student to CEO",
      content: "Learn how I started my own company after graduation.",
      author: "John Doe",
      image:
        "https://th.bing.com/th/id/OIP.Jnd2U7TsL1rpODJSLuxjtwHaE8?w=999&h=667&rs=1&pid=ImgDetMain", // Replace with actual image URL
      favorites: 12,
    },
    {
      id: 2,
      title: "Breaking Barriers in Tech",
      content: "My journey as a woman in tech and how I overcame challenges.",
      author: "Jane Smith",
      image: "https://latviv.com/wp-content/uploads/2020/04/SuccessStory.jpg", // Replace with actual image URL
      favorites: 8,
    },
    {
      id: 1,
      title: "From Student to CEO",
      content: "Learn how I started my own company after graduation.",
      author: "John Doe",
      image:
        "https://th.bing.com/th/id/OIP.Jnd2U7TsL1rpODJSLuxjtwHaE8?w=999&h=667&rs=1&pid=ImgDetMain", // Replace with actual image URL
      favorites: 12,
    },
    {
      id: 2,
      title: "Breaking Barriers in Tech",
      content: "My journey as a woman in tech and how I overcame challenges.",
      author: "Jane Smith",
      image: "https://latviv.com/wp-content/uploads/2020/04/SuccessStory.jpg", // Replace with actual image URL
      favorites: 8,
    },
    {
      id: 1,
      title: "From Student to CEO",
      content: "Learn how I started my own company after graduation.",
      author: "John Doe",
      image:
        "https://th.bing.com/th/id/OIP.Jnd2U7TsL1rpODJSLuxjtwHaE8?w=999&h=667&rs=1&pid=ImgDetMain", // Replace with actual image URL
      favorites: 12,
    },
    {
      id: 2,
      title: "Breaking Barriers in Tech",
      content: "My journey as a woman in tech and how I overcame challenges.",
      author: "Jane Smith",
      image: "https://latviv.com/wp-content/uploads/2020/04/SuccessStory.jpg", // Replace with actual image URL
      favorites: 8,
    },
    {
      id: 1,
      title: "From Student to CEO",
      content: "Learn how I started my own company after graduation.",
      author: "John Doe",
      image:
        "https://th.bing.com/th/id/OIP.Jnd2U7TsL1rpODJSLuxjtwHaE8?w=999&h=667&rs=1&pid=ImgDetMain", // Replace with actual image URL
      favorites: 12,
    },
    {
      id: 2,
      title: "Breaking Barriers in Tech",
      content: "My journey as a woman in tech and how I overcame challenges.",
      author: "Jane Smith",
      image: "https://latviv.com/wp-content/uploads/2020/04/SuccessStory.jpg", // Replace with actual image URL
      favorites: 8,
    },
    {
      id: 1,
      title: "From Student to CEO",
      content: "Learn how I started my own company after graduation.",
      author: "John Doe",
      image:
        "https://th.bing.com/th/id/OIP.Jnd2U7TsL1rpODJSLuxjtwHaE8?w=999&h=667&rs=1&pid=ImgDetMain", // Replace with actual image URL
      favorites: 12,
    },
    {
      id: 2,
      title: "Breaking Barriers in Tech",
      content: "My journey as a woman in tech and how I overcame challenges.",
      author: "Jane Smith",
      image: "https://latviv.com/wp-content/uploads/2020/04/SuccessStory.jpg", // Replace with actual image URL
      favorites: 8,
    },

    // Add more stories as needed
  ]);

  const handleCreateStory = () => {
    // Logic to create a new story (e.g., opening a modal)
    alert("Create a new story feature coming soon!");
  };

  return (
    <Box  sx={{ 
        p: 4, 
        position: 'relative', 
        width: '80%', 
        margin: '0 auto', 
        border: '2px solid', 
        borderColor: 'primary.main', 
        borderRadius: '10px', 
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', 
        marginTop: 4,
      }}>
      <Typography variant="h4" sx={{ mb: 2, textAlign: "center" }}>
        Success Stories of Our Alumni
      </Typography>
      <IconButton
        onClick={handleCreateStory}
        sx={{
          position: "fixed",
          bottom: 40,
          right: 150,
          zIndex: 10,
          backgroundColor: "primary.main", 
          color: "white !important", 
          "&:hover": {
            transform: "scale(1.2)", 
            transition: "transform 0.2s ease",
            color: "white !important", 
            backgroundColor: "primary.main", 
        },
          p: 2, 
        }}
      >
        <AddIcon fontSize="large" />
      </IconButton>

      <Grid container spacing={2} sx={{ mt: 0 }}>
        {stories.map((story) => (
          <Grid item xs={12} sm={6} md={4} key={story.id}>
            <StoryCard story={story} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SuccessStories;
