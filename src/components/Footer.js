import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import facebookIcon from "../images/icons/facebook.svg"
import instagramIcon from "../images/icons/instagram.svg"
import mailIcon from "../images/icons/mail.svg"
import whatsappIcon from "../images/icons/whatsapp.svg"
import twitchIcon from "../images/icons/twitch.svg"

const Footer = () => {
    return (
      <footer className="footer__container">
        <Container className="p-4">
          <Row>
            <Col lg={9}>
              <Row>
                <Col>
                  <Nav className="flex-column footer__list">
                    <Nav.Link href="#inicio"><b>Inio</b></Nav.Link>
                    <Nav.Link href="#about">Sobre mí</Nav.Link>
                    <Nav.Link href="#gallery">Galería</Nav.Link>
                    <Nav.Link href="#blog">Blog</Nav.Link>
                  </Nav>
                </Col>
                <Col>
                  <Nav className="flex-column footer__list">
                    <Nav.Link><b>Secciones</b></Nav.Link>
                    <Nav.Link href="#faq">FAQ</Nav.Link>
                    <Nav.Link href="#inicio">Proyectos</Nav.Link>
                    <Nav.Link href="#horario">Horarios</Nav.Link>
                  </Nav>
                </Col>
                <Col>
                  <Nav className="flex-column footer__list">
                    <Nav.Link><b>Contacto</b></Nav.Link>
                    <Nav.Link>Cel: 3114512316</Nav.Link>
                    <Nav.Link>Av. 6N #28N-102</Nav.Link>
                    <Nav.Link>xmeneses@hotmail.com</Nav.Link>
                  </Nav>
                </Col>
              </Row>
            </Col>
            <Col lg={3}>
              <div className="d-flex flex-column mb-3">
                <div className="p-2"><b>Redes sociales</b></div>
                <Row className="row-cols-auto">
                  <Col as="a" href="https://www.facebook.com/"><img src={facebookIcon} alt="facebook" /></Col>
                  <Col as="a" href="https://www.instagram.com/"><img src={instagramIcon} alt="instagram" /></Col>
                  <Col as="a" href="https://www.gmail.com/"><img src={mailIcon} alt="email" /></Col>
                  <Col as="a" href="https://www.whatsapp.com/"><img src={whatsappIcon} alt="whatsapp" /></Col>
                  <Col as="a" href="https://www.twitch.com/"><img src={twitchIcon} alt="twitch" /></Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="text-center p-3 copy__subtitle">
          <span>Derechos reservados Mi Blog - Ximena C. Meneses&copy;</span>
        </div>
      </footer>
    );
  }
  
  export default Footer;