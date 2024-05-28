import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/logo.png'; // Εισαγωγή του λογότυπου
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col className="text-center py-3">
            <img
              src={logo}
              height="60"
              className="d-inline-block align-top mb-2"
              alt="Patras Events Logo"
            />
            <p>&copy; 2024 Patras Events. Όλα τα δικαιώματα επιφυλασσονται.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
