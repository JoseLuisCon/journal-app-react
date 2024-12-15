import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import { purpleTheme } from "./";

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={purpleTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
