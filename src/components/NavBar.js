import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/NavBar.css";

const handleClick = (event) => {
    event.preventDefault(); // Prevent default behavior
    window.open("/assets/GracieGuevaraResume.pdf", "_blank"); // Open the PDF in a new tab
  };

function NavBar() {
    return (
        <Navbar fixed="top" className="navbar" expand="lg">
            <Container>
                <Navbar.Brand href="#intro">guegracie</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#intro">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link onClick={handleClick}>Resume</Nav.Link>
                     </Nav>
                     <Nav className="ml-auto">
                        <Nav.Link href="mailto:gracielaguev7@gmail.com"><EmailIcon /></Nav.Link>
                        <Nav.Link href="https://github.com/guegracie"><GitHubIcon /></Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/gracie-guevara-b79b7a133"><LinkedInIcon /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;