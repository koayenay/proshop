import React from "react"
import { LinkContainer } from "react-router-bootstrap"
import { Navbar, Nav, Container } from "react-bootstrap"

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>ProShop</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <LinkContainer to='/cart'>
              <Nav.Link className='fas fa-shopping-cart me-3'>Cart</Nav.Link>
            </LinkContainer>

            <LinkContainer to='/login'>
              <Nav.Link className='fas fa-user me-3'>Sign In</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
