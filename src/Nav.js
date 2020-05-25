import React from 'react'
import { Link } from 'react-router-dom';
import './App.css';
import { Navbar, Nav, Form } from 'react-bootstrap';


export default class Navigator extends React.Component{

    render(){

        return(
            <div>
                <Navbar bg="dark" expand="xl" className="main-navigation">
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav"/> */}
                {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                <Nav className="mr-auto">
                        {/* <Link to="/" style={{ textDecoration: 'none' }}>
                            <img src="./images/Logo.png" id="logo" style={{color:"#D3D3D3", height: 55, paddingLeft: 16.5}}></img>   
                        </Link> */}
                        {/* <Link to="/contact" style={{ textDecoration: 'none' }}>
                            <Nav.Link href="#link" style={{color:"#D3D3D3", fontWeight: "700", fontSize: 15, marginLeft:25}}>CONTACT</Nav.Link>   
                        </Link> */}
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Nav.Link href="#link" className="logo" style={{color:"#0377B5", fontWeight: "500", fontSize: 30, marginLeft: 25}}>BS</Nav.Link>   
                        </Link>
                    </Nav>
                    <div style={{marginRight: "13.5%"}}>
                    <Form inline>
                    </Form>
                    </div>
                {/* </Navbar.Collapse> */}
                </Navbar>
            </div>
        )
    }
}

//A8A8A8