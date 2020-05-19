import React from 'react'
import { Container, Col, Row, Image, Card } from 'react-bootstrap';

import './App.css';

export default function Contact(){
    return(
        <div style={{margin: "3%"}}>
            <Card style={{  borderColor: "A8A8A8" }}>
                <Card.Body style={{backgroundColor:"#343A40"}}>
                    <div>
                        <Container>
                            <Row>
                                <Col xs={8} md={4}>
                                <Image src="../images/headshot2.jpeg" thumbnail/>
                                <Card.Title style={{paddingTop:12, color: "#C8C8C8"}}>Barak Saidoff</Card.Title>
                                <Card.Text style={{color: "#C8C8C8", fontWeight: "600", paddingBottom:8.5}}>Full Stack Software Developer</Card.Text>
                                </Col>
                                <Col>
                                <p style={{color: "#C8C8C8"}}>I am a full stack web developer experienced in Ruby on Rails, JavaScript and ReactJS/ React Native based programming.</p>
                                <p style={{color: "#C8C8C8"}}>Background in Sales and Financial Services <strong>|</strong> Partnered with S2 Filings sales team and brought in leads that accounted for generating over $1 million in annual sales.</p>
                                <p style={{color: "#C8C8C8"}}>Military Leadership <strong>|</strong> Sergeant in the IDF <strong>|</strong> I Achieved award of excellence upon advanced training graduation receiving commander’s Beret.</p>

                                <p style={{color: "#C8C8C8"}}><strong>Technical Skills: </strong>Ruby, Rails, SQL, JavaScript, React, React Native based programming</p>
                                
                                <ul className="navbar-nav">
                                    <li>
                                        <img src="https://www.sharethis.com/wp-content/uploads/2017/05/LinkedIn.png" style={{height: 63, padding:10,}} onClick={()=> window.open("https://www.linkedin.com/in/baraksaidoff/", "_blank")} alt="LinkedIn"></img>
                                    </li>
                                    <li>
                                        <img src="https://i.ya-webdesign.com/images/github-icon-png-7.png" style={{height: 63, padding:10}} onClick={()=> window.open("https://github.com/Barak-S", "_blank")}alt="GitHub"></img>
                                    </li>
                                    <li>
                                        <img src="https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Medium-512.png" style={{height: 63, padding:10}} onClick={()=> window.open("https://medium.com/@baraksaidoff", "_blank")}alt="Medium"></img>
                                    </li>
                                </ul>
                                </Col> 
                            </Row>

                        </Container>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

