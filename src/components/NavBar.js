import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/NavBar.css";

const NavBar = () => {
    const location = useLocation();
    const handleClick = (event) => {
    event.preventDefault(); // Prevent default behavior
    window.open("/assets/Gracie_Guevara_General_Resume.pdf", "_blank"); // Open the PDF in a new tab
  };

  return (
    <Navbar fixed="top" expand="lg" className={`navbar ${location.pathname === '/soc-lab' ? 'navbar-black' : 'navbar-pink'}`}>
        <Container>
                <Navbar.Brand as={HashLink} smooth to="/#intro">graciegue</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={HashLink} to="/#certifications">Certifications</Nav.Link>
                        <Nav.Link as={HashLink} to="/#projects">Projects</Nav.Link>
                        <NavDropdown title="Cyber Portfolio" id="dropdown">
                            <NavDropdown.Item as={Link} to="/soc-lab">At Home SOC Lab</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link onClick={handleClick}>Resume</Nav.Link>
                     </Nav>
                     <Nav className="ml-auto">
                        <Nav.Link href="mailto:gracielaguev7@gmail.com"><EmailIcon /></Nav.Link>
                        <Nav.Link href="https://github.com/guegracie" target="_blank" rel="noopener noreferrer"><GitHubIcon /></Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/gracie-guevara-b79b7a133" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default NavBar;