import { Button, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function NavReactB() {
    return (
        <Navbar className="bg-dark navbar-dark" expand="lg">
            <Navbar.Brand href="#home">FR</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto nav-style">
                    <Nav.Link to="/" exact as={NavLink} activeClassName="active">Home</Nav.Link>
                    <Nav.Link to="news" as={NavLink} activeClassName="active"> Noticias</Nav.Link>
                    {/* <Nav.Link onClick={() => props.setSection('Cards')}>Cards</Nav.Link>
                    <Nav.Link onClick={() => props.setSection('Contador')}>Contador</Nav.Link>
                    <Nav.Link onClick={() => props.setSection('Formulario')}>Formulario</Nav.Link>
                <Nav.Link onClick={() => props.setSection('Fotos')}>Fotos</Nav.Link> */}
                </Nav>
                <Button activeClassName="btn btn-danger" as={NavLink} to="login" className="ml-auto">
                    Login
                </Button>
            </Navbar.Collapse>
        </Navbar>
    );
}
