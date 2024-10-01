import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#780000", // Custom primary color
    },
    secondary: {
      main: "#999999", // Custom secondary color
    },
    error: {
      main: "#f44336", // Error color
    },
    warning: {
      main: "#ff9800", // Warning color
    },
    info: {
      main: "#2196f3", // Info color
    },
    success: {
      main: "#4CAF50", // Success color
    },
    grey: {
      50: "#FAFAFA", // Light grey
      100: "#F5F5F5", // Light grey
      200: "#EEEEEE", // Light grey
      300: "#E0E0E0", // Light grey
      400: "#BDBDBD", // Grey
      500: "#9E9E9E", // Grey
      600: "#757575", // Dark grey
      700: "#616161", // Dark grey
      800: "#424242", // Dark grey
      900: "#212121", // Very dark grey
    },
    white: {
      main: "#ffffff", // White color
      text: "#ffffff", // White text
    },
    black: {
      main: "#000000", // Black color
    },
    green: {
      main: "#0D7C6630", // Custom green color with opacity
    },
    blue: {
      main: "#1976D2", // Primary blue color
      light: "#63a4ff", // Light blue
      dark: "#004ba0", // Dark blue
    },
    yellow: {
      main: "#FFEB3B", // Yellow color
    },
    purple: {
      main: "#9C27B0", // Purple color
      light: "#D5006D", // Light purple
      dark: "#6A1B9A", // Dark purple
    },
    orange: {
      main: "#FF9800", // Orange color
    },
  },
});

export default theme;
