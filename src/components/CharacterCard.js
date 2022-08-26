import React from "react";
import { Box } from "@mui/material";

const CharacterCard = ({ character }) => {
  return (
    <Box
      sx={{
        width: "45%",
        display: "flex",
        justifyContent: "left",
        gap: "1em",
        alignItems: "center",
        backgroundColor: "#3c3e44",
        borderRadius: "15px",
      }}
    >
      <img src={character.image} alt={character.name} className="img-card" />
      <Box
        sx={{
          width: "45%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
          gap: "2em",
          backgroundColor: "#3c3e44",
          borderRadius: "15px",
        }}
      >
        <p>
          {character.name} <br />
          {character.status} - {character.species}
        </p>
        <p>
          Last know location: <br />
          <a href={character.location.url}>{character.location.name}</a>
        </p>
        <p>
          First seen in: <br /> name_chapter
        </p>
      </Box>
    </Box>
  );
};

export default CharacterCard;
