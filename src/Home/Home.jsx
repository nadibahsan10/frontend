import React from "react";
import { Box, Typography, Button, Grid, Container } from "@mui/material";
import HubIcon from "@mui/icons-material/Hub";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import StorefrontIcon from "@mui/icons-material/Storefront";
import "./Home.css";

const Home = () => {
  return (
    <Box position="relative">
      <img
        src="./design/UIU.jpg"
        style={{
          height: "92vh",
          width: "100%",
          position: "absolute",
          top: "0px",
          zIndex: "-1",
        }}
        alt=""
      />
      <Box
        sx={{
          height: "92vh",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.692)",
        }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Typography
          variant="h4"
          sx={{ color: "white !important", fontStyle: "italic" }}
        >
          Welcome to our Website
        </Typography>
        <Typography variant="h1" sx={{ color: "white !important" }}>
          Solution Provider
        </Typography>
        <br />
        <br />

        <Button variant="contained" sx={{ height: "60px", width: "200px" }}>
          LEARN MORE
        </Button>
      </Box>
      <Box>
        <br />
        <br />
        <Typography variant="h2" textAlign="center">
          OUR SERVICES
        </Typography>
        <Typography variant="subtitle1" color="secondary" textAlign="center">
          Expert Solutions Tailored for You
        </Typography>

        <Container
          sx={{ marginTop: "50px", marginBottom: "50px" }}
          maxWidth="xl"
        >
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            gap={20}
          >
            <Box className="services">
              <HubIcon
                sx={{ height: "100px", width: "100px" }}
                color="primary"
              />
              <br />
              <Typography variant="h4" color="secondary" textAlign="center">
                Comunication
              </Typography>
              <br />
              <Typography
                variant="subtitle1"
                color="secondary"
                textAlign="justify"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
                dolor fugit iusto, ratione harum dolorum dignissimos totam!
                Consequuntur, nisi dolorem! Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Magnam ea veniam itaque nostrum
                aut magni quam, tempore dolore hic saepe.
              </Typography>
              <br />
              <br />
              <Button
                variant="contained"
                sx={{ height: "60px", width: "200px" }}
              >
                VIEW
              </Button>
            </Box>
            <Box className="services">
              <ContentPasteSearchIcon
                sx={{ height: "100px", width: "100px" }}
                color="primary"
              />
              <br />
              <Typography variant="h4" color="secondary" textAlign="center">
                Student Portal
              </Typography>
              <br />
              <Typography
                variant="subtitle1"
                color="secondary"
                textAlign="justify"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
                dolor fugit iusto, ratione harum dolorum dignissimos totam!
                Consequuntur, nisi dolorem! Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Magnam ea veniam itaque nostrum
                aut magni quam, tempore dolore hic saepe.
              </Typography>
              <br />
              <br />
              <Button
                variant="contained"
                sx={{ height: "60px", width: "200px" }}
              >
                VIEW
              </Button>
            </Box>
            <Box className="services">
              <StorefrontIcon
                sx={{ height: "100px", width: "100px" }}
                color="primary"
              />
              <br />
              <Typography variant="h4" color="secondary" textAlign="center">
                Market Place
              </Typography>
              <br />
              <Typography
                variant="subtitle1"
                color="secondary"
                textAlign="justify"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
                dolor fugit iusto, ratione harum dolorum dignissimos totam!
                Consequuntur, nisi dolorem! Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Magnam ea veniam itaque nostrum
                aut magni quam, tempore dolore hic saepe.
              </Typography>
              <br />
              <br />
              <Button
                variant="contained"
                sx={{ height: "60px", width: "200px" }}
              >
                VIEW
              </Button>
            </Box>
          </Box>
        </Container>
        <Box
          component="div"
          marginTop={10}
          sx={{
            backgroundColor: "#011627 !important",
            height: "450px",
            width: "100%",
          }}
        >
          <Container maxWidth="xl">
            <br />
            <br />
            <Typography
              variant="h3"
              sx={{ color: "white !important" }}
              textAlign="center"
            >
              We will help you to grow
            </Typography>
            <br />
            <br />
            <br />
            <br />
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              flex="row"
              gap={15}
            >
              <Box>
                <Typography
                  variant="h1"
                  sx={{ color: "white !important" }}
                  textAlign="center"
                >
                  1000+
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ color: "white !important" }}
                  textAlign="center"
                >
                  Students
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h1"
                  sx={{ color: "white !important" }}
                  textAlign="center"
                >
                  2000+
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ color: "white !important" }}
                  textAlign="center"
                >
                  Resources
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h1"
                  sx={{ color: "white !important" }}
                  textAlign="center"
                >
                  990+
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ color: "white !important" }}
                  textAlign="center"
                >
                  Alumni
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
