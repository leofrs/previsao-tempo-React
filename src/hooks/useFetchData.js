import { useState, useEffect, useRef } from "react";
import axios from "axios";

const useFetchData = () => {
  const API_KEY = "e8388b1ba1c784cc48d6fe9fb46c87fc";
  const [dataFetch, setDataFetch] = useState("");
  const [lugar, setLugar] = useState("Remigio");

  const nameRef = useRef();

  const handleKey = (event) => {
    if (event.key === "Enter") {
      const valorRef = nameRef.current.value;
      if (valorRef === "") {
        alert("Insira um lugar");
      } else {
        setLugar(valorRef);
        nameRef.current.value = "";
      }
    }
  };
  const handleClick = () => {
    const valorRef = nameRef.current.value;
    if (valorRef === "") {
      alert("Insira um lugar");
    } else {
      setLugar(valorRef);
      nameRef.current.value = "";
    }
  };

  useEffect(() => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${lugar}&appid=${API_KEY}`;
    axios
      .get(URL)
      .then((response) => {
        setDataFetch(response.data);
      })
      .catch((error) => {
        alert("Error" + error);
      });
  }, [lugar]);
  return { dataFetch, lugar, nameRef, handleKey, handleClick };
};
export default useFetchData;
