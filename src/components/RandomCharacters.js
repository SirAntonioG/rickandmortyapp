import { Box } from "@mui/system";
import CharacterCard from "./CharacterCard";
import { useCharacter } from "../hooks";

const RandomCharacters = () => {
  const characters = useCharacter(`https://rickandmortyapi.com/api/character`);
  return (
    <Box>
      {characters.map((character) => {
        return <CharacterCard key={character.id} character={character} />;
      })}
    </Box>
  );
};

export default RandomCharacters;
