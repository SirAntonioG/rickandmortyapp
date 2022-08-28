import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Container, Box, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const CharacterPage = () => {
  const id = useParams().id;
  const character = useFetch(`https://rickandmortyapi.com/api/character/${id}`);
  const dataCharacter = character ? character : {};
  const iconColor =
    dataCharacter.status === "Alive"
      ? "green"
      : dataCharacter.status === "Dead"
      ? "red"
      : "gray";

  return (
    <Box
      sx={{
        backgroundColor: "#202329",
        color: "#FFFFFF",
        padding: "50px",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={dataCharacter.image}
            alt="{dataCharacter.name}"
            className="img-data-character"
          />
          <Typography
            variant="h4"
            sx={{ fontFamily: "Segoe UI", fontWeight: "bold" }}
          >
            {dataCharacter.name}
          </Typography>
          <Typography
            variant="paragraph"
            sx={{ fontWeight: "600", fontSize: "20px", textAlign: "center" }}
          >
            <CircleIcon
              sx={{ color: `${iconColor}`, fontSize: 10 }}
            ></CircleIcon>{" "}
            {dataCharacter.status} - {dataCharacter.species} <br />
            {dataCharacter.gender} <br />
            {"origin"}
            <ArrowForwardIosIcon sx={{ fontSize: 12 }} />{" "}
            {dataCharacter.origin.name} <br />
            {"location"}
            <ArrowForwardIosIcon sx={{ fontSize: 12 }} />{" "}
            {dataCharacter.location.name}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default CharacterPage;
