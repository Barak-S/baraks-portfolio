import React, { useRef, useEffect } from 'react';
import { Col, Button, Image, Card } from 'react-bootstrap';
import { gsap, TweenMax, TweenLite, Power3, Power1 }  from 'gsap';
import './App.css';

export default function Contact(){

    let intro = useRef(null)
    let introText = useRef(null)

    useEffect(()=>{
        TweenMax.to( introText, 1, { y: -60, opacity: 1, ease: Power1.easeIn, stagger: 0.25 })
        TweenMax.to( intro, 1, { y: '-100vh',  ease: Power3.easeIn, delay: 1.5})
    }, [])

    return(
        <div>
            {/* <Image style={{ height: "32vh", width: "100%", objectFit: "cover" }} src={require("./images/telaviv.jpeg")} className="tlv-img"/> */}
            <div ref={el => (intro = el)} className="intro">
                <p ref={el => (introText = el)} className="intro-text">Barak Saidoff <br/> Full Stack Developer</p>
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
                    <p>Ruby, Rails, SQL, NoSQL, PostgreSQL, MongoDB, CSS3, HTML5, Bootstrap, JavaScript, GSAP, React, React Native, Redux, Node, Express, and Git workflow based programming.</p>
                    <Button className="resume-button" onClick={()=> window.open("https://learn.co/baraksaidoff/resume", "_blank")}>Download Resume</Button>
                </div>
                <hr/>
                <h4 style={{fontWeight: "600", color: "#0377B5", textAlign: "center", padding:0, margin: 0}}>Projects</h4>
            </Col>  
        </div>   
    )
}

