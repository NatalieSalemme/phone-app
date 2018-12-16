import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const Menu = () => (
  <Navbar collapseOnSelect fixedTop className="main-menu">
    <div style={{ marginTop: '.5em' }}>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">I-C-It</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem className="nav-link" eventKey={1} href="#home">
            Home
          </NavItem>
          <NavItem className="nav-link" eventKey={2} href="#product">
            Product
          </NavItem>
          <NavItem className="nav-link" eventKey={3} href="#technology">
            Technology
          </NavItem>
          <NavItem className="nav-link" eventKey={4} href="#vision">
            Vision
          </NavItem>
          <NavItem className="nav-link" eventKey={5} href="#faqs">
            FAQS
          </NavItem>
          <NavItem className="nav-link" eventKey={6} href="#about">
            About
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </div>
  </Navbar>
);
export default Menu;
