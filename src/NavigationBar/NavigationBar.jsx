import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavigationBar.css'

const NavigationBar = () => {
  return (
    <>
        <Navbar bg="light" expand="lg"  className="navBar">
      <Container>
        <Navbar.Brand href="#home" className="logofont">
          <span className="blueText">Pilladvisor</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navLinks ">
            <Nav.Link href="#home" className="navLink">Home</Nav.Link>
            <Nav.Link href="#search" className="navLink">Search Medicine</Nav.Link>
            <Nav.Link href="#services" className="navLink">Our Services</Nav.Link>
            <Nav.Link href="#contact" className="navLink">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default NavigationBar

