import { createTheme, ThemeOptions } from "@mui/material";

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#FFFFF",
    },
    secondary: {
      main: "#a60508",
    },
    background: {
      default: "#f8f8f8",
    },
  },
};

export const theme = createTheme(themeOptions);
