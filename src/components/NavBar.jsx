// NavBar.js
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-black  top-0 w-full z-50 ">
      <Container>
        <Navbar.Brand
          className=" text-white font-lg font-bold text-3xl "
          href="#"
        >
          LOGO
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="basic-navbar-nav bg-white text-white font-medium font-helvetica text-lg  relative text-center"
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center text-white font-medium font-helvetica text-lg  relative text-center"
        >
          <Nav>
            <Nav.Link
              className="nav-link text-white font-medium text-xl  relative text-center hover:text-black hover:font-bold"
              href="/"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="nav-link text-white font-medium text-xl relative text-cente"
              href="/Services"
            >
              Services
            </Nav.Link>
            <Nav.Link
              className="nav-link text-white font-medium text-xl "
              href="/Projects"
            >
              Projects
            </Nav.Link>
            <Nav.Link
              className="nav-link text-white font-medium text-xl  relative text-center "
              href="/Blog"
            >
              Blog
            </Nav.Link>
            <Nav.Link
              className="nav-link text-white font-medium text-xl  relative text-center"
              href="/Contact"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <div href="#" className="icon text-white mr-2">
          <i class="bi bi-telephone-inbound-fill"></i>
        </div>
        <div>
          <div
            href="/Contact"
            class="number text-yellow-500 font-medium font-poppins text-base text-left relative"
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
