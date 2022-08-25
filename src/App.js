import React from "react";
import CharacterCard from "./components/CharacterCard";
import { useCharacter } from "./hooks";
import { Container, Box, Typography } from "@mui/material";
import { blueGrey, grey } from "@mui/material/colors";
import "./index.css";

const App = () => {
  const character = useCharacter();

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
          <Typography variant="h1">The Rick and Morty API</Typography>
        </Box>
      </Container>
      <Container></Container>
    </Container>
  );
};

export default App;
