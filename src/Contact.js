import React, { useRef, useEffect } from 'react';
import { Col, Button, Image, Card } from 'react-bootstrap';
import { TweenMax, Power3, Power1 }  from 'gsap';
import './App.css';

export default function Contact(){

    let intro = useRef(null)
    let introText1 = useRef(null)
    let introText2 = useRef(null)

    useEffect(()=>{
        TweenMax.to( intro, 2, { scale: 1, ease: Power3.easeOut, delay: 0.2 })
        TweenMax.staggerTo([introText1,introText2], 1, { opacity: 1, y: -25, ease: Power1.easeOut, delay: 0.4 }, 0.9)
        TweenMax.to( intro, 1, { y: '-110vh', ease: Power3.easeIn, delay: 2.2 })
    }, [])

    return(
        <div>
            <div ref={el => (intro = el)} className="intro">
                <div>
                    <h1 ref={el => (introText1 = el)} className="intro-text">Barak Saidoff</h1>
                    <h1 ref={el => (introText2 = el)} className="intro-text">Full Stack Developer</h1>
                </div>
            </div>
            <Col className="HeadshotDrop" lg={12} md={12} sm={12} xs={12} style={{ textAlign: "center" }}>
                <Image style={{ height: 200, width: 200 }} src={require("./images/headshot5.jpg")} roundedCircle alt="Barak Saidoff Profile Picture Headshot"/>
                <Card.Title style={{ paddingTop: 12, color: "#0377B5", fontSize: 25, fontWeight: "600" }}>Barak Saidoff</Card.Title>
                <Card.Text style={{color: "#191919", fontWeight: "600", fontSize: 20, paddingBottom: 20 }}>Full Stack Developer</Card.Text>
            </Col>
            <Col xs={12} sm={12} md={9} lg={9} className="profileCol" style={{color: "#191919", fontWeight: "600"}}>
                <p>A creative Full Stack Engineer with an entrepreneurial spirit, proficient at Web Application Development using Git and modern web tools. With attention to detail, I take ideas, deliver quickly and consistently, and build things that provide a lot of value in a short amount of time.</p>
                <p><strong style={{fontSize: 18, fontWeight: "600"}}>Background in Sales and Financial Services |</strong> Partnered with S2 Filings sales team and brought in leads that accounted for generating over $1 million in annual sales.</p>
                <p><strong style={{fontSize: 18, fontWeight: "600"}}>Military Leadership |</strong> Former Sergeant in the IDF <strong>|</strong> Achieved award of excellence upon advanced training graduation. </p>
                <div style={{textAlign: "center"}}>
                    <p style={{fontSize: 20, color: "#0377B5"}}>Technical Skills</p>
                    <p>JavaScript, React.js, React Native, Redux, Node.js, Express.js, Ruby, Rails, SQL, NoSQL, CSS3, SASS, HTML5, GSAP, Bootstrap, Responsive Design, and Git workflow based programming.</p>
                    <Button className="resume-button" onClick={()=> window.open("https://learn.co/baraksaidoff/resume", "_blank")}>Download Resume</Button>
                </div>
                <hr/>
                <h4 style={{fontWeight: "600", color: "#0377B5", textAlign: "center", padding:0, margin: 0}}>Projects</h4>
            </Col>  
        </div>   
    )
}