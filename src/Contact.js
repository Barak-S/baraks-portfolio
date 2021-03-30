import React, { useEffect, useRef } from 'react';
import { Col, Image } from 'react-bootstrap';
import './App.css';
import Video from './images/city-scene.mp4'
import { gsap, TweenMax, TweenLite, Power3 }  from 'gsap';

import { CgMouse } from "react-icons/cg";


export default function Contact(){

    const videoRef = useRef();
    let profilePic = useRef(null);
    let textMessage = useRef(null);
    let textMessage2 = useRef(null);

    useEffect(()=>{
        const player = videoRef.current.children[0]
        videoRef.current.play()
        videoRef.current.playbackRate = 0.75;
        player.setAttribute("muted", "")
        player.autoplay = true;
        player.controls = false;
        player.playsinline = true;
        player.muted = true;


        TweenMax.to( profilePic, 1.2, { opacity: 1, y: '-75%', ease: Power3.easeInOut, delay: 0.2 })
        TweenMax.to( textMessage, 0.8, { opacity: 1, y: '-125px', ease: Power3.easeInOut, delay: 1.2 })
        TweenMax.to( textMessage2, 0.8, { opacity: 1, y: '-125px', ease: Power3.easeInOut, delay: 2.5 })

    })
  

    return(
        <div style={{ height: '100vh'}}>

            <video ref={videoRef} id="background-video" autoPlay muted playsInline loop >
                <source src={Video} type="video/mp4" />
            </video>

            <Col lg={8} md={9} sm={12} xs={12} style={{ margin:' 0 auto'}}>
                <div >
                    <div className='chat-div'>
                        <div class="chat">
                            <div class="mine messages">
                                <Image 
                                    ref={el => (profilePic = el)} 
                                    className="HeadshotDrop" 
                                    style={{ height: 100, width: 100 }} 
                                    src={require("./images/headshot5.jpg")} 
                                    roundedCircle 
                                    alt="Barak Saidoff Profile Picture"
                                    />
                                <div class="message last" ref={el => (textMessage = el)} >
                                Hey I'm Barak!
                                </div>
                                <div class="message last" ref={el => (textMessage2 = el)} >
                                Scroll down to view my portfolio!
                                </div>
                            </div>
                        </div>

                    </div>
                    <div >
                        <h3 className="name-header">Barak Saidoff</h3>
                        <h5 className="title-header">Full Stack Developer</h5>
                    </div>
                    <div>
                        <span><CgMouse/></span>
                    </div>
                </div>
            </Col>
        </div>   
    )
}