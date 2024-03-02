import { Stack, Panel,  } from "rsuite";
import "../assets/css/page/achievements.css";
import MuchoTiempo from "../assets/extras/50.gif";

const Achievements = () => {
  return (
    <Stack
      className="Achievements"
      justifyContent="flex-start"
      alignItems="center"
      direction="column"
    >
      <Panel className="Achievements-Panel" bordered>
        <Stack spacing="10px">
          <img className="Logros" src={MuchoTiempo} alt="Achievement" />
          <Panel className="Text-Panel" bordered>
            <Stack  justifyContent="flex-start" direction="column">
              <h1 className="Text">Bravo, por algo se empieza</h1>
              <p>llegar a los primero 50 cliks</p>
            </Stack>
          </Panel>
        </Stack>
        {/* <Divider/>
        <h1>tiempo muerto</h1>
        <Divider/>
        <h1>Dedos magicos</h1> */}
      </Panel>

      <Stack spacing={20}></Stack>
    </Stack>
  );
};

export default Achievements;
