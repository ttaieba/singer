import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav, Form, FormControl, Stack } from 'react-bootstrap'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Employe Manager</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Stack direction="horizontal" gap={3}>
                            <NavLink
                                to="/Home"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/Employes"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                            >
                                Employes
                            </NavLink>
                        </Stack>


                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />

                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;