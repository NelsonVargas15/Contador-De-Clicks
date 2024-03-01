import { useState } from "react";
import { Stack } from "rsuite";
import Contador from "../components/Contador";
import CustomButton from "../components/CustomButton";
import "../assets/css/page/home.css"

const Home = () => {
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <Stack className="Home" justifyContent="center" alignItems="center" direction="column">
      <Contador numClics={numClics} />
      <Stack alignItems="stretch" justifyContent="space-between" spacing={20}>
        <CustomButton texto="Click" manejarClic={manejarClic} />
        <CustomButton texto="Reiniciar" manejarClic={reiniciarContador} />
      </Stack>
    </Stack>
  );
};

export default Home;
