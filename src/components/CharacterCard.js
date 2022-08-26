import React from "react";
import { Box } from "@mui/material";

const CharacterCard = ({ character }) => {
  return (
    <Box
      sx={{
        width: "45%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "left",
        alignItems: "center",
        borderColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: "15px",
      }}
    >
      <img src={character.image} alt={character.name} className="img-card" />
      <Box>
        <p>
          {character.name} <br />
          {character.status} - {character.species}
        </p>
        <p>
          Last know location: <br />
          <a href={character.location.url}>{character.location.name}</a>
        </p>
        <p>First seen in:</p>
      </Box>
    </Box>
  );
};

export default CharacterCard;
