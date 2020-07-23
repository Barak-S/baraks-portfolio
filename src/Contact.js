import React from 'react'
import { Container, Col, Row, Image, Card } from 'react-bootstrap';
import ProjectCarousel from './Home'
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

                                    <p style={{color: "#D3D3D3"}}><strong style={{fontSize: 20, color: "#57A773"}}>Technical Skills<br/> </strong>Ruby, Rails, SQLite, PostgreSQL, CSS, SASS, HTML5, Bootstrap, JavaScript, React, React Native, Express</p>

                                    <p style={{color: "#D3D3D3"}}><strong style={{fontSize: 15}}>Email:<br/> </strong>barak.saidoff@gmail.com</p>
                                    <p style={{color: "#D3D3D3"}}><a href="https://learn.co/baraksaidoff/resume" target="_blank" title="Barak Saidoff Resume" style={{color: '#0377B5', fontWeight: "600"}}>Download Resume</a></p>
                                </Col>
                                
                            </Row>
                            <div id="iconList" style={{textAlign: "center"}}>
                                    <ul id="horizontal-list">
                                        <li>
                                            <img src="https://www.sharethis.com/wp-content/uploads/2017/05/LinkedIn.png" className="buttonIcon" style={{height: 63, padding:10,}} onClick={()=> window.open("https://www.linkedin.com/in/baraksaidoff/", "_blank")} alt="Barak Saidoff LinkedIn"></img>
                                        </li>
                                        <li>
                                            <img src="https://i.ya-webdesign.com/images/github-icon-png-7.png" className="buttonIcon" style={{height: 63, padding:10}} onClick={()=> window.open("https://github.com/Barak-S", "_blank")}alt="Barak Saidoff GitHub Barak-S"></img>
                                        </li>
                                        <li>
                                            <img src="https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Medium-512.png" className="buttonIcon" style={{height: 63, padding:10}} onClick={()=> window.open("https://medium.com/@baraksaidoff", "_blank")}alt="Barak Saidoff Medium Blog"></img>
                                        </li>
                                    </ul>
                                </div>
                        </Container>
                    </div>
                    {/* <MyBlog/> */}
                </Card.Body>
            </Card>
        </div>
    )
}

