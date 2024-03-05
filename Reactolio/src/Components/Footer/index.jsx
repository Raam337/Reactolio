import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import contacts from "../../assets/contact.json"

function Footer() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container className="d-flex flex-column justify-content-center">
        <Nav className ="d-inline">
            Robert Feldmanis
        </Nav>
          <Nav className="d-flex flex-row gap-4 flex-wrap justify-content-center">
            {contacts.map( (item)=>{
              return <Nav.Link key={item.name} href={item.link}>{item.name}</Nav.Link>
            } )}


          </Nav>
      </Container>
    </Navbar>
  );
}

export {Footer};