import React from 'react'
import { Container, Col, Row, Image, Card } from 'react-bootstrap';
import SocialHandles from './SocialHandles'
import './App.css';

export default function Contact(){
    return(
        <div style={{margin: "2.5%", paddingBottom: 25}}>
            <Card className="contactCard">
                <Card.Body style={{backgroundColor:"#343A40"}}>
                    <div style={{margin: "1%"}}>
                        <Container fluid>
                            <Row>
                                <Col xs={6} sm={4} md={3}>
                                <Image className="profilePicture" src={require("./images/headshot2.jpeg")} thumbnail alt="Barak Saidoff Profile Picture Headshot"/>
                                <Card.Title style={{paddingTop:12, color: "#57A773", fontSize: 25}}>Barak Saidoff</Card.Title>
                                <Card.Text style={{color: "#D3D3D3", fontWeight: "600", paddingBottom:9}}>Full Stack Web Developer</Card.Text>
                                </Col>
                                <Col md={8}>
                                    <p style={{color: "#D3D3D3"}}>I am a full stack web developer experienced in Ruby on Rails and JavaScript based programming.</p>
                                    <p style={{color: "#D3D3D3"}}>Background in Sales and Financial Services <strong>|</strong> Partnered with S2 Filings sales team and brought in leads that accounted for generating over $1 million in annual sales.</p>
                                    <p style={{color: "#D3D3D3"}}>Military Leadership <strong>|</strong> Former Sergeant in the IDF <strong>|</strong> Achieved award of excellence upon advanced training graduation. </p>

                                    <p style={{color: "#D3D3D3"}}><strong style={{fontSize: 20, color: "#57A773"}}>Technical Skills<br/> </strong>Ruby, Rails, SQL, NoSQL, PostgreSQL, Mongo DB, CSS3, HTML5, Bootstrap, JavaScript, React, React Native, Node, Express, Git workflow</p>

                                    <p style={{color: "#D3D3D3"}}><strong style={{fontSize: 15}}>Email:<br/> </strong>barak.saidoff@gmail.com</p>
                                    <p style={{color: "#D3D3D3"}}><a href="https://learn.co/baraksaidoff/resume" target="_blank" title="Barak Saidoff Resume" style={{color: '#0377B5', fontWeight: "600"}}>Download Resume</a></p>
                                </Col>
                                
                            </Row>
                            <SocialHandles/>
                        </Container>
                    </div>
                    {/* <MyBlog/> */}
                </Card.Body>
            </Card>
        </div>
    )
}

