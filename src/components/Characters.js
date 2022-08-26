import { Box } from "@mui/system";
import CharacterCard from "./CharacterCard";
import { useCharacter } from "../hooks";

const Characters = () => {
  const characters = useCharacter(`https://rickandmortyapi.com/api/character`);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      {characters.map((character) => {
        return <CharacterCard key={character.id} character={character} />;
      })}
    </Box>
  );
};

export default Characters;
