import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

function NavBar () {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('https://66d63577f5859a704268a79b.mockapi.io/products')
      .then(res => res.json())
      .then(res => setCategories(Array.from(new Set(res.map(item => item.category)))))
  }, [])

  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-3">
      <Container>
        <Navbar.Brand to='/' as={Link}>miTiendita</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="categorias" id="basic-nav-dropdown">
              {categories.map(cat => (
                <NavDropdown.Item to={`category/${cat}`} key={cat} as={Link}>{cat}</NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />  
      </Container>
    </Navbar>
  )
}

export default NavBar