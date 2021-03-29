import React from 'react';
import { Col, Image } from 'react-bootstrap';
import './App.css';

export default function Contact(){

    return(
        <div style={{paddingTop: 100}}>
            <Col className="HeadshotDrop" lg={12} md={12} sm={12} xs={12} style={{ textAlign: "center" }}>
                <Image style={{ height: 200, width: 200 }} src={require("./images/headshot5.jpg")} roundedCircle alt="Barak Saidoff Profile Picture Headshot"/>
                <h3 className="name-header">Barak Saidoff</h3>
                <h5 className="title-header">Full Stack Developer</h5>
            </Col>
            <Col xs={12} sm={12} md={10} lg={9} className="about-banner">
                <section className="about-section">
                    <p className="headline">A creative Full Stack Developer with an entrepreneurial spirit, proficient at Web Application Development using Git and modern web tools. With attention to detail, I take ideas, deliver quickly and consistently, and build things that provide a lot of value in a short amount of time.</p>
                    <p><strong style={{fontSize: 17, fontWeight: "700"}}>Background in Sales and Financial Services <span style={{ color: "#0377B5"}}>|</span></strong> Partnered with S2 Filings sales team and brought in leads that accounted for generating over $1 million in annual sales.</p>
                    <p><strong style={{fontSize: 17, fontWeight: "700"}}>Military Leadership <span style={{ color: "#0377B5"}}>|</span> Former Sergeant in the IDF <span style={{ color: "#0377B5"}}>|</span></strong> Achieved award of excellence upon advanced training graduation. </p>
                    <div style={{textAlign: "center"}}>
                        <p className="skills-banner">Technical Skills</p>
                        <p>JavaScript, React, React Native, Redux, TypeScript, Node, Express, Ruby, Rails, SQL, NoSQL, CSS3, SASS, HTML5, GSAP, Bootstrap, Responsive Design, and Git workflow based programming.</p>
                        <button className="live-button" onClick={()=> window.open("https://learn.co/baraksaidoff/resume", "_blank")} style={{ marginTop: 20}}>Download Resume</button>
                    </div>
                </section>
            </Col>  
        </div>   
    )
}