import PropTypes from "prop-types";
import { Button } from "rsuite";
import "../assets/css/boton.css";

const CustomButton = ({ texto, manejarClic }) => (
  <Button color="blue" appearance="primary" size="lg"  onClick={manejarClic}>
    {texto}
  </Button>
);

CustomButton.propTypes = {
  texto: PropTypes.string.isRequired,
  manejarClic: PropTypes.func.isRequired,
};

export default CustomButton;