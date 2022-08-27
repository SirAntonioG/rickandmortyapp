import React from "react";
import { Box } from "@mui/material";
import "./index.css";
import Characters from "./components/Characters";
import Header from "./components/Header";

const App = () => {
  return (
    <Box>
      <Header />
      <Characters />
    </Box>
  );
};

export default App;
