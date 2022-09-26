import React from "react";
import Typed from "react-typed";
const Home = () => {
  return (
    <div className="mt-10 blink">
      <h1 className="text-center text-5xl font-bold text-yellow-500">
        <span className="text-5xl">Bien</span>ve
        <span className="text-5xl">nido</span>
      </h1>
      <div className="mt-36 text-center texto">
        <Typed
          strings={[
            "Hola visitante, recuerda: ",
            "El miedo lleva a la ira, la ira lleva al odio, el odio lleva al sufrimiento",
            "Que la fuerza sea contigo",
          ]}
          typeSpeed={100}
          backSpeed={50}
          loop
          className="text-yellow-500 text-xl"
        />
      </div>
    </div>
  );
};

export default Home;
