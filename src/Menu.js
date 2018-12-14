import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const Menu = () => (
  <Navbar collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#brand">React-Bootstrap</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">
          Home
        </NavItem>
        <NavItem eventKey={2} href="#">
          Product
        </NavItem>
        <NavItem eventKey={3} href="#">
          Technology
        </NavItem>
        <NavItem eventKey={4} href="#">
          Vision
        </NavItem>
        <NavItem eventKey={5} href="#">
          FAQS
        </NavItem>
        <NavItem eventKey={6} href="#">
          About
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
export default Menu;
