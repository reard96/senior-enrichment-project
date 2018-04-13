import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Menu = () => {
  return (
    <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <LinkContainer to="/">
        <Navbar.Brand>Home</Navbar.Brand>
      </LinkContainer>
    <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to="/students">
          <NavItem>All Students</NavItem>
        </LinkContainer>
        <LinkContainer to="/campuses">
          <NavItem>All Campuses</NavItem>
        </LinkContainer>
      </Nav>
      <Nav pullRight>
        <LinkContainer to="/students/create">
          <NavItem>Create a Student</NavItem>
        </LinkContainer>
        <LinkContainer to="/campuses/create">
          <NavItem>Create a Campus</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
};

export default Menu;
