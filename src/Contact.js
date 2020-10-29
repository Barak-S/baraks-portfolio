import React from 'react'
import { Col, Button, Image, Card } from 'react-bootstrap';
import './App.css';

export default function Contact(){
    return(
        <div>
            <Col className="HeadshotDrop" lg={12} md={12} sm={12} xs={12} style={{ textAlign: "center" }}>
                <Image style={{ height: 200, width: 200 }} src={require("./images/headshot5.jpg")} roundedCircle alt="Barak Saidoff Profile Picture Headshot"/>
                <Card.Title style={{ paddingTop: 12, color: "#0377B5", fontSize: 25, fontWeight: "600" }}>Barak Saidoff</Card.Title>
                <Card.Text style={{color: "#191919", fontWeight: "600", fontSize: 20, paddingBottom: 20 }}>Full Stack Web Developer</Card.Text>
            </Col>
            <Col xs={12} sm={12} md={9} lg={9} className="profileCol" style={{color: "#191919", fontWeight: "600"}}>
                <p>A creative Full Sack Engineer with an entrepreneurial spirit, proficient at Web Application Development using Git and modern web tools. With attention to detail, I take ideas, deliver quickly and consistently, and build things that provide a lot of value in a short amount of time.</p>
                <p><strong style={{fontSize: 18, fontWeight: "600"}}>Background in Sales and Financial Services |</strong> Partnered with S2 Filings sales team and brought in leads that accounted for generating over $1 million in annual sales.</p>
                <p><strong style={{fontSize: 18, fontWeight: "600"}}>Military Leadership |</strong> Former Sergeant in the IDF <strong>|</strong> Achieved award of excellence upon advanced training graduation. </p>
                <div style={{textAlign: "center"}}>
                    <p style={{fontSize: 20, color: "#0377B5"}}>Technical Skills</p>
                    <p>Ruby, Rails, SQL, NoSQL, PostgreSQL, MongoDB, CSS3, HTML5, Bootstrap, JavaScript, GSAP, React, React Native, Redux, Node, Express, and Git workflow based programming.</p>
                    <Button className="resume-button" onClick={()=> window.open("https://learn.co/baraksaidoff/resume", "_blank")}>Download Resume</Button>
                </div>
                <hr/>
            </Col>  
        </div>   
    )
}

