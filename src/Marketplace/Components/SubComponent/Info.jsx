import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  background: "none",
  boxShadow: 'none'
}));

function Info() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Avatar>
                <img
                  src="./profileImage.webp"
                  alt=""
                  style={{ height: "50px", width: "50px" }}
                />
              </Avatar>
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>
              <Typography variant="button" gutterBottom>
                S.M.Shahriar Rahman Maruph
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                Member Since 1 Months
              </Typography>
              <Typography variant="overline" display="block" gutterBottom>
                See all adds
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              <Box
                sx={{
                  flexGrow: 1,
                  backgroundColor: "#780000",
                  borderRadius: "10px",
                }}
              >
                <Grid container spacing={0}>
                  <Grid item xs={3}>
                    <Item
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Avatar>
                        <img
                          src="./design/call.png"
                          alt=""
                          style={{ height: "30px", width: "30px" }}
                        />
                      </Avatar>
                    </Item>
                  </Grid>
                  <Grid item xs={9}>
                    <Item>
                      <Typography
                        variant="h5"
                        gutterBottom
                        sx={{
                          fontWeight: "bold",
                          textAlign: "center", 
                          color: "white !important" 
                        }}
                      >
                        +880 1321098082
                      </Typography>
                    </Item>
                  </Grid>
                </Grid>
              </Box>
            </Item>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Item>
              {" "}
              <Button variant="contained">Message</Button>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Info;
