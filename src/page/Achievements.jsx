import { useEffect, useState } from "react";
import { Stack, Panel } from "rsuite";
import "../assets/css/page/achievements.css";
import MisPrimeros from "../assets/extras/50.gif";
import MuchoTiempo from "../assets/extras/Reloj.gif";
import Dedos from "../assets/extras/Dedos.gif";
import BlockIcon from "@rsuite/icons/Block";

const Achievements = () => {
  const [lastGoal, setLastGoal] = useState(null);

  useEffect(() => {
    const storedLastGoal = localStorage.getItem("lastGoal");
    if (storedLastGoal) {
      setLastGoal(JSON.parse(storedLastGoal));
    }
  }, []);

  return (
    <Stack
      className="Achievements"
      justifyContent={lastGoal ? "flex-start" : "center"}
      alignItems="center"
      direction="column"
    >
      <Panel style={{ height: !lastGoal ? '160px' : '500px', padding: '32px' }} className="Achievements-Panel" bordered>
        <Stack
          justifyContent="center"
          alignItems="center"
          direction="column"
          spacing={50}
        >
          {lastGoal >= 50 && (
            <Stack spacing="10px">
              <img className="Logros" src={MisPrimeros} alt="Achievement" />
              <Panel className="Text-Panel" bordered>
                <Stack
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  direction="column"
                >
                  <h1 className="Text">¡los 50 son los nuevos 20!</h1>
                  <p>{`Llegaste a los primeros 50 clicks`}</p>
                </Stack>
              </Panel>
            </Stack>
          )}

          {lastGoal >= 150 && (
            <Stack spacing="10px">
              <img className="Logros" src={MuchoTiempo} alt="Achievement" />
              <Panel className="Text-Panel" bordered>
                <Stack
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  direction="column"
                >
                  <h1 className="Text">Tienes mucho tiempo...¿verdad?</h1>
                  <p>{`Tienes mucho tiempo...¿verdad? clicks 150`}</p>
                </Stack>
              </Panel>
            </Stack>
          )}

          {lastGoal >= 500 && (
            <Stack spacing="10px">
              <img className="Logros" src={Dedos} alt="Achievement" />
              <Panel className="Text-Panel" bordered>
                <Stack
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  direction="column"
                >
                  <h1 className="Text">Dedos Magicos</h1>
                  <p>{`Tu novia debe estar muy Agredecida`}</p>
                </Stack>
              </Panel>
            </Stack>
          )}

          {!lastGoal && (
            <Stack
              spacing="10px"
              alignItems="center"
              direction="column"
              justifyContent="center"
            >
              <BlockIcon style={{ fontSize: '3em' }} />
              <h3>Juega para desbloquear logros</h3>
            </Stack>
          )}
        </Stack>
      </Panel>
    </Stack>
  );
};

export default Achievements;
