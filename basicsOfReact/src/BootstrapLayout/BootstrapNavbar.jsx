import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router';

function BootstrapNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="services">Services</Nav.Link>
            <Nav.Link as={Link} to="careers">Careers</Nav.Link>

            {/* <Link to='/'></Link>
            <Link to='contact'>Contact</Link>
            <Link to='services'>Services</Link>
            <Link to='careers'>Careers</Link> */}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BootstrapNavbar;