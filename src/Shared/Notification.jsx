import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import NotificationCard from "./NotificationCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#780000" : "#fff",
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "2px 2px 2px 3px rgba(0, 0, 0, 0.1)",
}));

const notification = [
  {
    image: "./design/call.png",
    title: "Electronics",
    content:
      "This is a notification.This is the first Notification.New text new text",
    time: "just now",
  },
  {
    image: "./design/call.png",
    title: "Electronics",
    content:
      "This is a notification.This is the first Notification.New text new text",
    time: "1m ago",
  },
  {
    image: "./design/call.png",
    title: "Electronics",
    content:
      "This is a notification.This is the first Notification.New text new text",
    time: "1hr ago",
  },
  {
    image: "./design/call.png",
    title: "Electronics",
    content:
      "This is a notification.This is the first Notification.New text new text",
    time: "1d ago",
  },
  {
    image: "./design/call.png",
    title: "Electronics",
    content:
      "This is a notification.This is the first Notification.New text new text",
    time: "1d ago",
  },
  {
    image: "./design/call.png",
    title: "Electronics",
    content:
      "This is a notification.This is the first Notification.New text new text",
    time: "1d ago",
  },
  {
    image: "./design/call.png",
    title: "Electronics",
    content:
      "This is a notification.This is the first Notification.New text new text",
    time: "1d ago",
  },
  {
    image: "./design/call.png",
    title: "Electronics",
    content:
      "This is a notification.This is the first Notification.New text new text",
    time: "1d ago",
  },
];

function Notification() {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <h2
          style={{ textAlign: "center", color: "#780000", marginTOp: "40px" }}
        >
          Notifications
        </h2>
        <Grid container spacing={1}>
          <Grid item xs={12} wrap>
            {notification.map((x) => (
              <Grid item xs={12} sx={{ marginTop: "5px" }}>
                <Item>
                  <NotificationCard
                    image={x.image}
                    title={x.title}
                    content={x.content}
                    time={x.time}
                  />
                </Item>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Notification;
