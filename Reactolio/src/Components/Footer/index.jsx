import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Footer() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container className="d-flex flex-column justify-content-center">
        <Nav className ="d-inline">
            Robert Feldmanis
        </Nav>
          <Nav>
            <Nav.Link href="#home">GitHub</Nav.Link>
            <Nav.Link href="#link">LinkedIn</Nav.Link>
            <Nav.Link href="#link">Email</Nav.Link>
            <Nav.Link href="#link">Projects</Nav.Link>
            <Nav.Link href="#link">Resume</Nav.Link>


          </Nav>
      </Container>
    </Navbar>
  );
}

export {Footer};