import React from "react";
import { Box } from "@mui/material";

const CharacterCard = ({ character }) => {
  return (
    <Box>
      <img src={character.image} alt="" />
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
