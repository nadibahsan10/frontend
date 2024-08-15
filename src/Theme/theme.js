import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#780000", // You can also use a custom hex code like '#3f51b5'
    },
    white: {
      main: "#ffffff",
    },
    black: {
      main: "#000000",
    },
    success: {
      main: "#4CAF50", // Replace with your desired green color
    },
  },
});

export default theme;
