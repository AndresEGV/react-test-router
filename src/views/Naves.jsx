import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../components/Cards";
const Naves = () => {
  const url = "https://swapi.dev/api/starships";
  const [shipsApi, setShipsApi] = useState([]);

  useEffect(() => {
    const getShips = async () => {
      const {
        data: { results },
      } = await axios.get(url);

      setShipsApi(results);
    };
    getShips();
  }, []);

  return (
    <div className="mt-10">
      <Cards shipsApi={shipsApi} />
    </div>
  );
};

export default Naves;
