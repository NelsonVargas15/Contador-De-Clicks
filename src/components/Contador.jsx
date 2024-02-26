
import "../assets/css/contador.css"; 
import PropTypes from 'prop-types';

const Contador = ({ numClics }) => (
  <div className='contador'>
    {numClics}
  </div>
);

Contador.propTypes = {
  numClics: PropTypes.number.isRequired,
};

export default Contador;