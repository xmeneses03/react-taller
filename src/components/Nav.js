import React from "react";
// import logo from '../images/logo.png'
import { Nav, Navbar, Container } from "react-bootstrap";

const Navb = () =>{
    return(
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>Mi Blog</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#link">Sobre mí</Nav.Link>
                        <Nav.Link href="#link">Galería</Nav.Link>
                        <Nav.Link href="#link">Blog</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navb;
