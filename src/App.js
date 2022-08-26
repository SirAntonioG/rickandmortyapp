import React from "react";
import { Container, Box, Typography } from "@mui/material";
import "./index.css";
import Characters from "./components/Characters";

const App = () => {
  return (
    <Container maxWidth={false} sx={{ margin: 0, padding: 0 }}>
      <Container maxWidth={false} sx={{ margin: 0, padding: 0 }}>
        <Box
          sx={{
            margin: 0,
            padding: 0,
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
        maxWidth={false}
        sx={{
          margin: 0,
          padding: "5% 0",
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
