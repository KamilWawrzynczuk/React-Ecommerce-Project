import * as React from "react";
import { Route, Link, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Brand href="#home">H & M</Navbar.Brand>
        <div class="d-flex">
          <button type="button" class="btn btn-light btn-lg">
            <i class="bi bi-person"></i>
          </button>
          <div class="dropdown">
            <button
              type="button"
              class="btn btn-light dropdown-toggle btn-lg"
              data-toggle="dropdown"
            >
              <i class="bi bi-basket"></i>
            </button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">
                Option A
              </a>
              <a class="dropdown-item" href="#">
                Option B
              </a>
              <a class="dropdown-item" href="#">
                Option C
              </a>
              <a class="dropdown-item" href="#">
                Option D
              </a>
            </div>
          </div>
        </div>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action2">Women's</Nav.Link>
            <Nav.Link href="#action2">Men's</Nav.Link>
            <Nav.Link href="#action2">Children's</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
