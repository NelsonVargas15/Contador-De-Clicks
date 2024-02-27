
import PropTypes from 'prop-types';
import { Navbar, Nav , Header} from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';

const CustomNavbar = ({ onSelect, activeKey, ...props }) => {
  return (
    <Header className="CustomNavbar" id="navbar">
    <Navbar {...props}>
      <Navbar.Brand href="#">Mi Aplicación</Navbar.Brand>
      <Nav onSelect={onSelect} activeKey={activeKey}>
        <Nav.Item eventKey="1" icon={<HomeIcon />}>Inicio</Nav.Item>
        <Nav.Item eventKey="2">Noticias</Nav.Item>
        <Nav.Item eventKey="3">Productos</Nav.Item>
        <Nav.Menu title="Acerca de">
          <Nav.Item eventKey="4">Compañía</Nav.Item>
          <Nav.Item eventKey="5">Equipo</Nav.Item>
          <Nav.Item eventKey="6">Contacto</Nav.Item>
        </Nav.Menu>
      </Nav>
      <Nav pullRight>
        <Nav.Item eventKey="7" icon={<CogIcon />}>Configuración</Nav.Item>
      </Nav>
    </Navbar>
    </Header>
  );
};

CustomNavbar.propTypes = {
  onSelect: PropTypes.func.isRequired,
  activeKey: PropTypes.string,
};

export default CustomNavbar;