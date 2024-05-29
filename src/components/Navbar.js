import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import eventsData from '../data/eventsData';
import logo from '../assets/logo.png';

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">
        <img
          src={logo}
          height="100"
          className="d-inline-block align-top"
          alt="Patras Events Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <NavDropdown title="Εκδηλώσεις" id="basic-nav-dropdown">
            {eventsData.map(event => (
              <NavDropdown.Item
                key={event.id}
                as={Link}
                to={`/event/${event.id}`}
              >
                {event.title}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
          <Nav.Link as={Link} to="/favorites">Αγαπημένες Εκδηλώσεις</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
