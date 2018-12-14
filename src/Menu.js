import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const Menu = () => (
  <Navbar collapseOnSelect fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#brand">I-C-It</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="#home">
          Home
        </NavItem>
        <NavItem eventKey={2} href="#product">
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
