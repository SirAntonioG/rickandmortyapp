import axios from "axios";
import { useEffect, useState } from "react";

export const useCharacter = (baseUrl) => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    axios
      .get(baseUrl)
      .then((res) => {
        if (res.data) {
          setCharacters(res.data.results);
        }
      })
      .catch((e) => {
        console.log("error", e);
        setCharacters([]);
      });
  }, [baseUrl]);
  return characters;
};
