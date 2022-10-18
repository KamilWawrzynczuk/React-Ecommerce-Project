import * as React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Route, Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />

        {/* Home Button */}

        <Navbar.Brand>
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            H & M
          </Link>
        </Navbar.Brand>
        <div className="d-flex">
          {/* Products Dropdown */}

          <DropdownButton
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            id="dropdown-basic-button"
            variant="light"
            size="md"
            title="Products"
          >
            <Dropdown.Item href="#/action-1">
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                Men's
              </Link>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                Women's
              </Link>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                Children's
              </Link>
            </Dropdown.Item>
          </DropdownButton>

          {/* User Account */}

          <Button variant="light" size="lg">
            <Link style={{ color: "black" }} to="/Registration">
              <i className="bi bi-person"></i>
            </Link>
          </Button>

          {/* Shopping Cart */}

          <Button variant="light" size="lg">
            <Link style={{ color: "black" }} to="/ShoppingCart">
              <i className="bi bi-basket"></i>
            </Link>
          </Button>
        </div>

        {/* Search Bar */}

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="light">
              <i class="bi bi-search"></i>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
