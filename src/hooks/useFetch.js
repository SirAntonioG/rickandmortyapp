import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (baseUrl) => {
  const [data, setData] = useState(null);

  const getData = async () => {
    const res = await axios.get(baseUrl);
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return data;
};
