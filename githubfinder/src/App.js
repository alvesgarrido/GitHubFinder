import React from "react";
import { GlobalState } from "./global/GlobalState"
import { ThemeProvider } from "@material-ui/styles"
import theme from "./constants/theme"
import Router from "./routes/Router"


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
        <Router />
      </GlobalState>
    </ThemeProvider >
  );
}
