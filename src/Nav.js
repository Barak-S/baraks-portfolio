import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './App.css';


export default class Navigator extends React.Component{

    render(){

        return(
            <div style={{textAlign:"center"}}>
                <Navbar collapseOnSelect bg="dark" expand="xl" className="main-navigation">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Nav.Link href="#link" className="NavLinks" style={{color: "#0377B5", fontSize: 17.5, fontWeight: "600" }}>Barak</Nav.Link>   
                        </Link>
                        <Link to="/blog" style={{ textDecoration: 'none' }}>
                            <Nav.Link href="#link" className="NavLinks" style={{color: "#0377B5", fontSize: 17.5 }}>Blog</Nav.Link>   
                        </Link>
                        <Link to="/projects" style={{ textDecoration: 'none' }}>
                            <Nav.Link href="#link" className="NavLinks" style={{color: "#0377B5", fontSize: 17.5 }}>Projects</Nav.Link>   
                        </Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
