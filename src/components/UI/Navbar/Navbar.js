import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
const Navbarr = () => {
    return (
        <Navbar bg="dark" expand="md" variant="dark">
            <Navbar.Brand href="/"><i className="wi wi-day-showers"></i> Weather Man</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-items-responsive"/>
            <Navbar.Collapse id="navbar-items-responsive">
                <Nav className="mr-auto">
                    <Nav.Link href="/">
                        Weather
                    </Nav.Link>
                    <Nav.Link href="http://eckarthik.github.io" target="_blank">
                        About
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navbarr