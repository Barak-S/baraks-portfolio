import React, { useEffect, useRef } from 'react';
import { Col, Image } from 'react-bootstrap';
import './App.css';
import Video from './images/city-scene.mp4'
import { gsap, TweenMax, Power2 }  from 'gsap';
import { useIntersection } from "react-use";


export default function Contact({ messages }){

    const videoRef = useRef();
    let profilePic = useRef(null);
    let textMessage = useRef(null);
    let textMessage2 = useRef(null);
    let mouseRef = useRef(null);

    const intersection = useIntersection(mouseRef, {
        root: null,
        rootMargin: '0px',
        threshold: 1
    })

    const fadeIn = el =>{
        gsap.to(el,1,{
            opacity: 1,
            ease: "Power4.out",
        })
    }
    const fadeOut = el =>{
        gsap.to(el,1,{
            opacity: 0,
            ease: "Power4.out",
        })
    }

    intersection && intersection.intersectionRatio < 1
    ? fadeOut('.fadeIn') : fadeIn(".fadeIn")

    useEffect(()=>{
        const player = videoRef.current.children[0]
        videoRef.current.play()
        videoRef.current.playbackRate = 0.75;
        player.setAttribute("muted", "")
        player.autoplay = true;
        player.controls = false;
        player.playsinline = true;
        player.muted = true;

        TweenMax.to( profilePic, 1.1, { opacity: 1, y: '-75%', ease: Power2.easeOut, delay: 1 })
        TweenMax.to( textMessage, 1.1, { opacity: 1, y: '-125px', ease: Power2.easeOut, delay: 1 })
        TweenMax.to( textMessage2, 1.1, { opacity: 1, y: '-125px', ease: Power2.easeOut, delay: 2.2 })
    }, [])
  

    return(
        <div style={{ height: '100vh'}}>
            <video ref={videoRef} id="background-video" autoPlay muted playsInline loop >
                <source src={Video} type="video/mp4" />
            </video>
            <Col xl={7} lg={8} md={9} sm={12} xs={12} className='align-auto'>
                <div >
                    <div className='chat-div'>
                        <div className="chat">
                            <div className="mine messages">
                                <Image 
                                    ref={el => (profilePic = el)} 
                                    className="HeadshotDrop" 
                                    style={{ height: 100, width: 100 }} 
                                    src={require("./images/headshot5.jpg")} 
                                    roundedCircle 
                                    alt="Barak Saidoff Profile Picture"
                                    />
                                <div className="message last" ref={el => (textMessage = el)} >
                                Hey, I'm Barak!
                                </div>
                                <div className="message last" ref={el => (textMessage2 = el)} >
                                Scroll down to view my portfolio!
                                </div>
                            </div>

                            <div className="yours messages">
                                { messages.map((mssg)=>{
                                    return(
                                        <div className="message">
                                        {mssg.message}
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                    </div>
                    <div >
                        <h3 className="name-header">Barak Saidoff</h3>
                        <h5 className="title-header">Full Stack Developer</h5>
                    </div>
                </div>
            </Col>
        </div>   
    )
}