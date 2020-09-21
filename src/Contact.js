import React from 'react'
import { Container, Col, Row, Image, Card } from 'react-bootstrap';
import Projects from './Home'
import Blog from './Blog'
import './App.css';

export default function Contact(){
    return(
        <div>
            <div>
                <Row style={{margin: 10}}>
                    <Col lg={12} md={12} sm={12} xs={12} style={{ textAlign: "center" }}>
                        <Image style={{ height:200,width:200 }} src={require("./images/headshot3.png")} roundedCircle alt="Barak Saidoff Profile Picture Headshot"/>
                        <Card.Title style={{paddingTop:12, color: "#0377B5", fontSize: 25, fontWeight: "600"}}>Barak Saidoff</Card.Title>
                        <Card.Text style={{color: "#0000000", fontWeight: "600", fontSize: 20, paddingBottom:9}}>Full Stack Web Developer</Card.Text>
                    </Col>
                    <Col xs={12} sm={12} md={10} lg={10} className="profileCol">
                        <p style={{color: "#0000000", fontWeight: "600"}}>I am a full stack web developer experienced in Ruby on Rails and JavaScript based programming.</p>
                        <p style={{color: "#0000000", fontWeight: "600"}}>Background in Sales and Financial Services <strong>|</strong> Partnered with S2 Filings sales team and brought in leads that accounted for generating over $1 million in annual sales.</p>
                        <p style={{color: "#0000000", fontWeight: "600"}}>Military Leadership <strong>|</strong> Former Sergeant in the IDF <strong>|</strong> Achieved award of excellence upon advanced training graduation. </p>

                        <p style={{color: "#0000000", fontWeight: "600"}}><strong style={{fontSize: 20, color: "#000000"}}>Technical Skills<br/> </strong>Ruby, Rails, SQL, NoSQL, PostgreSQL, Mongo DB, CSS3, HTML5, Bootstrap, JavaScript, React, React Native, Node, Express, and Git workflow based programming.</p>

                        <p style={{color: "#0000000", fontWeight: "600"}}><strong style={{fontSize: 15}}>Email:<br/> </strong>barak.saidoff@gmail.com</p>
                        <p style={{ fontWeight: "600", fontSize: 18}}><a href="https://learn.co/baraksaidoff/resume" target="_blank" title="Barak Saidoff Resume" style={{color: '#0377B5',}}>Download Resume</a></p>
                    </Col>

                </Row>
                
                <Projects/>
                <Blog/>
            </div>
        </div>
    )
}

