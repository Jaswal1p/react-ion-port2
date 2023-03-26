import React from "react";
import "../App.css"
import {Navbar, Nav, Container}  from 'react-bootstrap';
// import  {NavDropdown } from 'react-bootstrap'
import { Link } from "react-router-dom";
import myLogo from "../assets/images/logo1.png";


function NavBar() {
    
    return (
      <div className="App">
        <>
          
          <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container className="container">
              <Navbar.Brand as={Link} to="/"><img className="logo" src={myLogo} alt="myLogo..."/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ms-auto">
                    <Nav.Link className="navLink" as={Link} to="/Aboutme" ><span>A</span>bout</Nav.Link>
                    <Nav.Link className="navLink" as={Link} to="/Education"><span>E</span>ducation</Nav.Link>
                    <Nav.Link className="navLink" as={Link} to="/Experience"><span>E</span>xperience</Nav.Link>
                    <Nav.Link className="navLink" as={Link} to="/Contact"><span>C</span>ontact</Nav.Link>
                    {/* <NavDropdown className="navLink" title="Link" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                    </NavDropdown> */}
                    <Nav.Link className="navLink" as={Link} to="/Resume"><span>R</span>esume</Nav.Link>  
                  </Nav>
              </Navbar.Collapse>  
            </Container>
          </Navbar>
          
        </>
      </div>    
    );
}




export default NavBar;