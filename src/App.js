import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { blueGrey, grey } from "@mui/material/colors";
import "./index.css";
import RandomCharacters from "./components/RandomCharacters";

const App = () => {
  return (
    <Container>
      <Container>
        <Box
          sx={{
            width: "100%",
            height: 288,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{ fontFamily: "Segoe UI", fontWeight: 900 }}
          >
            The Rick and Morty API
          </Typography>
        </Box>
      </Container>
      <Container>
        <RandomCharacters />
      </Container>
    </Container>
  );
};

export default App;
