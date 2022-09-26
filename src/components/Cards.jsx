import React from "react";
import Spinner from "../components/Spinner";
const Cards = ({ shipsApi }) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-y-5 ">
        {shipsApi.length === 0 ? (
          <Spinner />
        ) : (
          shipsApi.map((ship, i) => (
            <div
              key={i}
              href="#"
              className="flex flex-col p-3 max-w-md rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 bg-gray-500 border-gray-700 hover:bg-gray-700 mx-10"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-5 text-center">
                {ship.name}
              </h5>
              <div className="flex flex-col items-stretch">
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-bold text-white mr-3">Model: </span>
                  {ship.model}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-bold text-white mr-3">
                    Manufacturer:
                  </span>
                  {ship.manufacturer}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-bold text-white mr-3">
                    Passengers:{" "}
                  </span>
                  {ship.passengers}
                </p>

                <p className="font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-bold text-white mr-3">
                    Star Ship Class:
                  </span>
                  {ship.starship_class}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-bold text-white mr-3">
                    Cargo Capacity:
                  </span>
                  {ship.cargo_capacity}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Cards;
