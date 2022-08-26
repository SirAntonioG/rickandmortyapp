import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import "./index.css";
import Characters from "./components/Characters";

const App = () => {
  return (
    <Container>
      <Container>
        <Box
          sx={{
            height: 288,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Segoe UI",
              fontWeight: 900,
              color: "#202329",
            }}
          >
            The Rick and Morty API
          </Typography>
        </Box>
      </Container>
      <Container
        sx={{
          backgroundColor: "#202329",
          color: "#FFFFFF",
        }}
      >
        <Characters />
      </Container>
    </Container>
  );
};

export default App;
