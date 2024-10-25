import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import CartWidget from './cartWidget/CartWidget'
import { Link } from 'react-router-dom'
import './styleComponents/NavBar.css';

function NavBar(){
    return (
        <Navbar className='header' bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to='/'>Vita Market</Navbar.Brand>
                <Nav className='me-auto'>
                    <Nav.Link as={Link} to='/category/fragrances'>Fragrances</Nav.Link>
                    <Nav.Link as={Link} to='/category/beauty'>Beauty</Nav.Link>
                    <Nav.Link as={Link} to='/category/furniture'>Furniture</Nav.Link>
                    <Nav.Link as={Link} to='/category/groceries'>Groceries</Nav.Link>
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>  
    )
}

export default NavBar