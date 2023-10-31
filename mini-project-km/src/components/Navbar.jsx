import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import PSS from '../assets/pss.png'

const NavbarComponent = () => {
   
  const navigate = useNavigate();

  return (
    <div>
      <Navbar expand="lg">
      <Container>
      <a class="navbar-brand" onClick={() => navigate('/')}>
      <img src={PSS}  alt="Bootstrap" width="50" height="60"/>
      </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto gap-3 text-center">
          <Nav.Link className="fw-semibold fs-5" onClick={() => navigate('/')}>Home</Nav.Link>
            <Nav.Link className="fw-semibold fs-5" onClick={() => navigate('/news')}>News</Nav.Link>
            <Nav.Link className="fw-semibold fs-5" onClick={() => navigate('/players')}>Teams</Nav.Link>
            <Nav.Link className="fw-semibold fs-5" onClick={() => navigate('/faq')}>Faq</Nav.Link>
          </Nav>
          <div className='text-center'>
          <Button onClick={() => navigate('/buy-ticket')} variant="success">Buy Tickets</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarComponent