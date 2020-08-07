import React, { Component } from 'react';
import { Navbar, Container, FormControl, Form, Button,Nav } from 'react-bootstrap';
import logo from './logo1.png';

export default class Header extends Component{
    render(){
        const {onSearch}=this.props
        return(
            <Navbar  collapseOnSelect expand="md" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                        src={logo}
                        height="30"
                        width="30"
                        className="d-inline-block align-top"
                        alt="Logo"
                        /> 
                        Announcement
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav" > 
                        <Nav className="mr-auto">
                        </Nav>
                        <Form onSubmit={onSearch} inline>
                            <FormControl type="text" placeholder="Search" name="search_text" className="mr-sm-2" />
                            <Button variant="outline-dark" type="submit">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
} 