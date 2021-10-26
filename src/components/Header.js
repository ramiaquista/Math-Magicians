import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Header.css';

const Header = () => (
  <Navbar bg="dark" className="navbar-dark" expand="lg">
    <Navbar.Brand>Math Magicians</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <LinkContainer to="/">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/calculator">
          <Nav.Link>Calculator</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/quote">
          <Nav.Link>Quote</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
