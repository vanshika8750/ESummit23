import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../images/logo.png";
import "../css/Navbaar.css";
import Button from 'react-bootstrap/Button';

function Navbaar() {
  return (
    <Navbar sticky='top' bg="black" data-bs-theme="dark" expand="lg" className=" navbar bg-inherit">
      <Container>
        <Navbar.Brand href="/">
            <img src={logo} alt='EDC_Logo' className='logo_nav'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="nav_item">
            <Nav.Link href="#frontpage">Home</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
            <Nav.Link href="#esummit" >ESummit</Nav.Link>
            <Nav.Link href="#pastpartners" className='past_partner_heading'>Past Partners</Nav.Link>
            <Nav.Link href="#events">Events</Nav.Link>
            <Nav.Link href="#ticket">
            <Button size="lg" variant="light" className='btn_nav'>Buy Tickets</Button>{' '}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbaar;