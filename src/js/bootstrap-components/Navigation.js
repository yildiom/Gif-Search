import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    font-family: 'Nunito Sans', sans-serif;
  }
  .nav-item {
    margin-right: 10px;
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Container>
      <Navbar expand="lg">
        <Navbar.Brand href="/">tenor API</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="omer">
          <Nav className="ml-auto">
            <Nav.Item>
              <Link to="/">Home</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/likes">Likes</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/about">About</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/contact">Contact</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </Styles>
);
