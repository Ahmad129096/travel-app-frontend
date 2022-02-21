import React from 'react'
import {Navbar, NavDropdown, Nav, Container} from 'react-bootstrap'
// import './navbar.css'
import { NavLink } from 'react-router-dom'
const NavbarComponent = ()=>{
return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/">Travel View</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" >
    <Nav className='ms-auto'>
    <Nav.Link href='/create'>Post Blog</Nav.Link>
    <Nav.Link href='/about'>About Us</Nav.Link> 
     <Nav.Link href='/contact'>Contact</Nav.Link> 
    </Nav>
  </Navbar.Collapse>
  </Container>  
</Navbar>
)
}

export default NavbarComponent