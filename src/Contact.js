import React from 'react'
import { Container, Col, Row, Image, Card } from 'react-bootstrap';
import ProjectCarousel from './Home'
import './App.css';

export default function Contact(){
    return(
        <div style={{margin: "3%", paddingBottom: 25}}>
            <Card className="contactCard">
                <Card.Body style={{backgroundColor:"#343A40"}}>
                    <div>
                        <Container>
                            <Row>
                                <Col xs={6} md={3}>
                                <Image className="profilePicture" src="../images/headshot2.jpeg" thumbnail/>
                                <Card.Title style={{paddingTop:12, color: "#D3D3D3", fontSize: 25}}>Barak Saidoff</Card.Title>
                                <Card.Text style={{color: "#D3D3D3", fontWeight: "600", paddingBottom:8.5}}>Full Stack Web Developer</Card.Text>
                                </Col>
                                <Col>
                                <p style={{color: "#D3D3D3"}}>I am a full stack web developer experienced in Ruby on Rails and JavaScript based programming.</p>
                                <p style={{color: "#D3D3D3"}}>Background in Sales and Financial Services <strong>|</strong> Partnered with S2 Filings sales team and brought in leads that accounted for generating over $1 million in annual sales.</p>
                                <p style={{color: "#D3D3D3"}}>Military Leadership <strong>|</strong> Sergeant in the IDF <strong>|</strong> I Achieved award of excellence upon advanced training graduation receiving commander’s Beret.</p>

                                <p style={{color: "#D3D3D3"}}><strong style={{fontSize: 20}}>Technical Skills<br/> </strong>Ruby, Rails, SQLite, PostgreSQL, CSS, HTML5, Bootstrap, JavaScript, React, React Native</p>

                                <p style={{color: "#D3D3D3"}}><strong style={{fontSize: 15}}>Email:<br/> </strong>barak.saidoff@gmail.com</p>
                                <p style={{color: "#D3D3D3"}}><a href="https://learn.co/baraksaidoff/resume" target="_blank" style={{color: '#0377B5', fontWeight: "600"}}>Download Resume</a></p>

                                </Col> 
                            </Row>
                            <div id="iconList" style={{textAlign: "center"}}>
                                    <ul id="horizontal-list">
                                        <li>
                                            <img src="https://www.sharethis.com/wp-content/uploads/2017/05/LinkedIn.png" className="buttonIcon" style={{height: 63, padding:10,}} onClick={()=> window.open("https://www.linkedin.com/in/baraksaidoff/", "_blank")} alt="LinkedIn"></img>
                                        </li>
                                        <li>
                                            <img src="https://i.ya-webdesign.com/images/github-icon-png-7.png" className="buttonIcon" style={{height: 63, padding:10}} onClick={()=> window.open("https://github.com/Barak-S", "_blank")}alt="GitHub"></img>
                                        </li>
                                        <li>
                                            <img src="https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Medium-512.png" className="buttonIcon" style={{height: 63, padding:10}} onClick={()=> window.open("https://medium.com/@baraksaidoff", "_blank")}alt="Medium"></img>
                                        </li>
                                    </ul>
                                </div>
                                {/* <Card.Title style={{paddingTop:12, color: "#D3D3D3", textAlign: "center", fontSize: 25.5}}>Projects</Card.Title>
                            <ProjectCarousel/> */}
                        </Container>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

