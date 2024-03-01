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
      <Stack spacing={20}>
        <CustomButton texto="Clic" manejarClic={manejarClic} />
        <CustomButton texto="Reiniciar" manejarClic={reiniciarContador} />
      </Stack>
    </Stack>
  );
};

export default Home;
