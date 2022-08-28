import { Box } from "@mui/system";
import CharacterCard from "./CharacterCard";
import { useFetch } from "../hooks/useFetch";

const Characters = () => {
  const characters = useFetch(`https://rickandmortyapi.com/api/character`);
  const charactersAux = characters ? characters.results : [];
  // const charactersAux2 = charactersAux.map((c) => {
  //   const episodeUrl = c.episode[0];
  //   const dataEpisode = useFetch(episodeUrl);
  // });
  return (
    <Box
      sx={{
        margin: 0,
        padding: "5% 0",
        backgroundColor: "#202329",
        color: "#FFFFFF",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "2em",
      }}
    >
      {charactersAux.map((character) => {
        return <CharacterCard key={character.id} character={character} />;
      })}
    </Box>
  );
};

export default Characters;
