import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand
          href="/"
          style={{ color: "gold", fontWeight: "bold", fontSize: "1.5rem" }}
        >
          <FontAwesomeIcon icon={faFilm} className="me-2" />
          MovieHub
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink className="nav-link" to="/" style={{ color: "#f0ad4e" }}>
              Home
            </NavLink>
            <NavLink
              className="nav-link"
              to="/browse"
              style={{ color: "#f0ad4e" }}
            >
              Browse
            </NavLink>
            <NavLink
              className="nav-link"
              to="/about"
              style={{ color: "#f0ad4e" }}
            >
              About
            </NavLink>
            <NavLink
              className="nav-link"
              to="/contact"
              style={{ color: "#f0ad4e" }}
            >
              Contact
            </NavLink>
          </Nav>
          <Button
            variant="outline-light"
            className="me-2"
            style={{
              borderRadius: "20px",
              borderColor: "#f0ad4e",
              color: "#f0ad4e",
            }}
          >
            Login
          </Button>
          <Button
            variant="outline-light"
            style={{
              borderRadius: "20px",
              borderColor: "#f0ad4e",
              color: "#f0ad4e",
            }}
          >
            Register
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
