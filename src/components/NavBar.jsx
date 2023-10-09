// NavBar.js
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img
            src="../Img/logo.png" // Replace with the correct path to your logo image
            alt="Logo"
            className="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="basic-navbar-nav"
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Services">Services</Nav.Link>
            <Nav.Link href="/Projects">Projects</Nav.Link>
            <Nav.Link href="/Blog">Blog</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div href="#" className="icon">
          <i class="bi bi-search-heart-fill"></i>
        </div>
        <div href="#" className="line">
          |
        </div>
        <div href="#" className="icon">
          <i class="bi bi-telephone-inbound-fill"></i>
        </div>
        <div>
          <div href="/Contact" className="call">
            Call Anytime
          </div>
          <div href="/Contact" className="number">
            0777123456
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
