import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Icon from "../CartWidget/CartWidget";


const NavBar = () =>{
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
        <Icon className="carrito"/>
        <Navbar.Brand href="https://www.google.com/">Oficios.com</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="https://www.google.com/">Inicio</Nav.Link>
            <Nav.Link href="https://www.google.com/">Contacto</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.google.com/">Todos</NavDropdown.Item>
              <NavDropdown.Item href="https://www.google.com/">Oficios más elegidos</NavDropdown.Item>
              <NavDropdown.Item href="https://www.google.com/">Promociones</NavDropdown.Item>
            </NavDropdown>
          </Nav> 
          </Navbar.Collapse>
      </Navbar>
        
    )
}
export default NavBar;
