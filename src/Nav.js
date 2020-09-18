import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './App.css';


export default class Navigator extends React.Component{

    render(){

        return(
            <div>
                <Navbar bg="dark" expand="xl" className="main-navigation">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Nav.Link href="#link" className="NavLinks" style={{color: "#0377B5", fontSize: 19.5}}>Barak</Nav.Link>   
                        </Link>
                        <Link to="/Blog" style={{ textDecoration: 'none' }}>
                            <Nav.Link href="#link" className="NavLinks" style={{color: "#0377B5"}}>Blog</Nav.Link>   
                        </Link>
                        <Link to="/Projects" style={{ textDecoration: 'none' }}>
                            <Nav.Link href="#link" className="NavLinks" style={{color: "#0377B5"}}>Projects</Nav.Link>   
                        </Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
