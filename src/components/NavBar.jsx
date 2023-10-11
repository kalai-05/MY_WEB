// NavBar.js
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar
      expand="lg"
      className="bg-black bg-opacity-80 top-0 w-full z-50 absolute"
    >
      <Container>
        <Navbar.Brand
          className="logo w-250 h-auto text-white font-lg font-helvetica text-lg "
          href="#"
        >
          LOGO
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="basic-navbar-nav bg-white text-white font-medium font-helvetica text-lg font-semibold relative text-center"
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center text-white font-medium font-helvetica text-lg font-semibold relative text-center"
        >
          <Nav>
            <Nav.Link
              className="nav-link text-white font-medium text-xl font-semibold relative text-center hover:text-black transition duration-500 hover:font-bold"
              href="/"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="nav-link text-white font-medium text-xl font-semibold relative text-center hover:text-black transition duration-500 hover:font-bold"
              href="/Services"
            >
              Services
            </Nav.Link>
            <Nav.Link
              className="nav-link text-white font-medium text-xl font-semibold relative text-center hover:text-black transition duration-500 hover:font-bold"
              href="/Projects"
            >
              Projects
            </Nav.Link>
            <Nav.Link
              className="nav-link text-white font-medium text-xl font-semibold relative text-center hover:text-black transition duration-500 hover:font-bold"
              href="/Blog"
            >
              Blog
            </Nav.Link>
            <Nav.Link
              className="nav-link text-white font-medium text-xl font-semibold relative text-center hover:text-black transition duration-500 hover:font-bold"
              href="/Contact"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div href="#" className="icon text-white mr-2">
          <i class="bi bi-search-heart-fill"></i>
        </div>
        <div href="#" className="line text-white text-80 font-light mr-2">
          |
        </div>
        <div href="#" className="icon text-white mr-2">
          <i class="bi bi-telephone-inbound-fill"></i>
        </div>
        <div>
          <div
            href="/Contact"
            className="number text-white font-medium font-poppins text-base text-left relative"
          >
            Call Anytime
          </div>
          <div
            href="/Contact"
            className="number text-white font-medium font-poppins text-base text-left relative"
          >
            0777123456
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
