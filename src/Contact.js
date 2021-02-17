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
            <Col xs={12} sm={12} md={9} lg={9} className="about-banner">
                <p>A creative Full Stack Developer with an entrepreneurial spirit, proficient at Web Application Development using Git and modern web tools. With attention to detail, I take ideas, deliver quickly and consistently, and build things that provide a lot of value in a short amount of time.</p>
                <p><strong style={{fontSize: 17, fontWeight: "700"}}>Background in Sales and Financial Services |</strong> Partnered with S2 Filings sales team and brought in leads that accounted for generating over $1 million in annual sales.</p>
                <p><strong style={{fontSize: 17, fontWeight: "700"}}>Military Leadership | Former Sergeant in the IDF |</strong> Achieved award of excellence upon advanced training graduation. </p>
                <div style={{textAlign: "center"}}>
                    <p className="skills-banner">Technical Skills</p>
                    <p>JavaScript, React.js, React Native, Redux, Node.js, Express.js, Ruby, Rails, SQL, NoSQL, CSS3, SASS, HTML5, GSAP, Bootstrap, Responsive Design, and Git workflow based programming.</p>
                    <button className="live-button" onClick={()=> window.open("https://learn.co/baraksaidoff/resume", "_blank")}>Download Resume</button>
                </div>
                <hr/>
                <h4 className="projects-banner">Projects</h4>
            </Col>  
        </div>   
    )
}