import React, { useState, useEffect } from 'react'
import { Card, Carousel, Button, Modal, Col, Image, Form } from 'react-bootstrap';
// import { projects } from './projects'
// import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaArrowCircleUp } from "react-icons/fa";
import ContainedButton from './components/ContainedButton';


export default function Portfolio({ value, handleChange, handleSubmit}){
    
    return(
        <div id="projects">
            <Col xs={12} sm={12} md={10} lg={9} className="about-banner">
                <div className="email-area">
                    <Form.Group controlId="exampleForm.ControlTextarea1" style={{ display: "flex"}}>
                        <Form.Control 
                            placeholder="Send me your contact info"
                            as="textarea" 
                            name="message"
                            rows={1} 
                            onChange={(e)=>handleChange(e)}
                            value={ value || ''}
                        />
                        <span style={{ transform: 'translateX(-30px) translateY(5px)', color: "#0B93F6", cursor: 'pointer' }}><FaArrowCircleUp size={25} onClick={(e)=>handleSubmit(e)}/></span>
                    </Form.Group>
                </div>
                <div className='headline-section'>
                    <p className="headline">I'm a creative Full Stack Developer with an entrepreneurial spirit, proficient at Web Application Development using modern web tools. With attention to detail, I take ideas, deliver quickly and consistently, and build things that provide a ton of value in a short amount of time.</p>
                    <div className="tech-skills">
                        <p className="skills-banner">Technical Skills</p>
                        <p>JavaScript, React, Redux, TypeScript, Node, Express, Rails, Responsive Design, and Git workflow based programming.</p>
                        {/* <button className="live-button" onClick={()=> window.open("https://learn.co/baraksaidoff/resume", "_blank")} style={{ marginTop: 20}}>Download Resume</button> */}
                        <ContainedButton onClick={()=> window.open("https://learn.co/baraksaidoff/resume", "_blank")} style={{ marginTop: 20, maxWidth: 245, outline: 'none' }} variant="contained" color="primary">
                            Download Resume
                        </ContainedButton>
                    </div>
                </div>
            </Col>  
        </div>
    )
    
}