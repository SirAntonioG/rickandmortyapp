import axios from "axios";
import { useEffect, useState } from "react";

export const useCharacter = (name) => {
  const [characters, setCharacters] = useState(null);
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character`)
      .then((res) => {
        if (res.data) {
          setCharacters(res.data.results);
        }
      })
      .catch((e) => {
        setCharacters([]);
      });
  }, [name]);
  return characters;
};
