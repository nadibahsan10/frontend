import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

function NotificationCard(props) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
      <a href="#" style={{ textDecoration: 'none', width: '100%' }}>
        <Grid container spacing={1} sx={{ maxWidth: 1 }}> 
          <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Avatar
              sx={{ height: "35px", width: "35px", marginTop: '15%' }}
              variant="square"
              src={props.image}
            />
          </Grid>
          <Grid item xs={8}>
            <Item>
              <p>{props.title}</p>
              <p>{props.content}</p>
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item>
              <p>{props.time}</p>
            </Item>
          </Grid>
        </Grid>
      </a>
    </Box>
  );
}

export default NotificationCard;
