import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../images/logo.png";
import "../css/Navbaar.css";
import Button from 'react-bootstrap/Button';

function Navbaar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary h-20">
      <Container>
        <Navbar.Brand href="/">
            <img src={logo} alt='EDC_Logo' className='logo_nav'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto flex items-center">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/team">Team</Nav.Link>
            <Nav.Link href="/eSummit" >ESummit</Nav.Link>
            <Nav.Link href="/pastPartners" className='w-28'>Past Partners</Nav.Link>
            <Nav.Link href="/events">Events</Nav.Link>
            <Nav.Link href="#ticket">
            <Button size="sm" variant="light" className='w-28'>Buy Tickets</Button>{' '}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbaar;