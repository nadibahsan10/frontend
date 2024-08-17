import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Avatar, Box, Grid } from "@mui/material";
import Fade from "@mui/material/Fade";

const CommentBox = ({ expanded, handleExpansion }) => {
  return (
    <Accordion
      expanded={expanded}
      slots={{ transition: Fade }}
      slotProps={{ transition: { timeout: 400 } }}
      sx={{
        marginTop: "10px",

        padding: "5px",
        borderRadius: "4px",
        boxShadow: "none",
        "& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
        "& .MuiAccordionDetails-root": { display: expanded ? "block" : "none" },
      }}
    >
      <AccordionDetails>
        <Grid container>
          <Grid item xs={1}>
            <Avatar src="./profileImage.webp" />
          </Grid>
          <Grid item xs={11}>
            <Box>
              <Typography variant="body1" sx={{ fontWeight: "500" }}>
                MD Nadib Ahsan
              </Typography>
              <Typography variant="subtitle1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                veritatis minima cupiditate!
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default CommentBox;
