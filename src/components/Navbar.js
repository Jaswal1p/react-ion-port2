import React from "react";
// import "../../App.css"
import {Navbar, Nav, Container, NavDropdown}  from 'react-bootstrap';
import { Link } from "react-router-dom";


function NavBar() {
    
    return (
      <div className="App">
        <>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand as={Link} to="/">Bobby</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/Aboutme" >About</Nav.Link>
                  <Nav.Link as={Link} to="/Portfolio">Portfolio</Nav.Link>
                  <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
                  <NavDropdown title="Link" id="navbarScrollingDropdown">
                      <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as={Link} to="/Resume">Resume</Nav.Link>  
                </Nav>
            </Container>
          </Navbar>
        </>
      </div>    
    );
}


export default NavBar;