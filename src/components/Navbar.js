import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import eventsData from '../data/eventsData';
import logo from '../assets/logo.png';
import '../App.css';

const NavbarComponent = () => {
  const isPastEvent = (endDate) => {
    const today = new Date();
    const eventEndDate = new Date(endDate);
    return eventEndDate < today;
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            height="40"
            className="d-inline-block align-top"
            alt="Patras Events Logo"
          />
          Patras Events
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Αρχική</Nav.Link>
            <NavDropdown title="Εκδηλώσεις" id="basic-nav-dropdown">
              {eventsData.filter(event => !isPastEvent(event.endDate)).map(event => (
                <NavDropdown.Item
                  key={event.id}
                  as={Link}
                  to={`/event/${event.id}`}
                >
                  {event.title}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link as={Link} to="#">Αξιοθέατα</Nav.Link>
            <Nav.Link as={Link} to="#">Δραστηριότητες</Nav.Link>
            <Nav.Link as={Link} to="/favorites">Αγαπημένες Εκδηλώσεις</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
