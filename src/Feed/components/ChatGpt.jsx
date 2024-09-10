import { Box, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

const ChatGpt = () => {
  const [prompt, setPrompt] = useState("");
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setPrompt(e.target.value);
  };

  const getAi = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyAesmELizadSd8aTah_PuQXR7s78e7-YUI",
        {
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        }
      );
      const aiText = response.data.candidates[0].content.parts[0].text;

      // Convert markdown-like text to HTML
      let html = aiText.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
      html = html.replace(/^\*\s+/gm, "<li>").replace(/\s*$/, "</li>");
      html = html.replace(/(<li>.*<\/li>\s*){2,}/g, "<ul>$&</ul>");

      setText(html);
    } catch (error) {
      console.error(error.response);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={getAi}
      padding={4}
      marginBottom={2}
      marginTop={2}
      borderRadius={2}
      border="2px solid #EBEBEB"
    >
      <Box component="div" mt={2} dangerouslySetInnerHTML={{ __html: text }} />
      <TextField
        value={prompt}
        onChange={handleChange}
        fullWidth
        multiline
        rows={4}
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Send
      </Button>
    </Box>
  );
};

export default ChatGpt;
