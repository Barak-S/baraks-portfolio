import React, { useEffect, useRef } from 'react';
import { Col, Image } from 'react-bootstrap';
import './App.css';
import Video from './images/city-scene.mp4'
import { TweenMax, Power2 }  from 'gsap';

export default function Contact({ messages, reply }){

    let videoRef = useRef(null);
    let profilePic = useRef(null);
    let textMessage = useRef(null);
    let textMessage2 = useRef(null);

    useEffect(()=>{
        const player = videoRef.current.children[0]
        videoRef.current.play()
        .then(()=> {
            videoRef.current.playbackRate = 0.75;
            player.setAttribute("muted", "")
            player.autoplay = true;
            player.controls = false;
            player.playsinline = true;
            player.muted = true;
        })
        .catch((err)=>console.log(err))
    }, [])

    useEffect(()=>{
        if (profilePic && textMessage && textMessage2 && !messages.length){
            TweenMax.to( profilePic, 1.1, { opacity: 1, y: '-75%', ease: Power2.easeOut, delay: 0.5 })
            TweenMax.to( textMessage, 1.1, { opacity: 1, y: '-125px', ease: Power2.easeOut, delay: 0.5 })
            TweenMax.to( textMessage2, 1.1, { opacity: 1, y: '-125px', ease: Power2.easeOut, delay: 1.8 })    
        }
    },[profilePic, textMessage, textMessage2, messages])


    return(
        <div style={{ height: '100vh'}}>
            <video ref={videoRef} id="background-video" autoPlay muted playsInline loop >
                <source src={Video} type="video/mp4" />
            </video>
            <Col xl={7} lg={8} md={9} sm={12} xs={12} className='align-auto'>
                <div>
                    <div className='chat-div'>
                        <div className="chat">
                            <div className="mine messages">
                                <Image 
                                    ref={el => (profilePic = el)} 
                                    className="HeadshotDrop" 
                                    style={{ 
                                        height: 100, 
                                        width: 100, 
                                        // opacity: messages.length ? 1 : 0,
                                        // transform: messages.length ? 'translateY(-75%)' : undefined,
                                    }} 
                                    src={require("./images/headshot5.jpg")} 
                                    roundedCircle 
                                    alt="Barak Saidoff Profile Picture"
                                    />
                                <div className="message last" style={{ opacity: messages.length ? 1 : 0 }} ref={el => (textMessage = el)} >
                                Hey, I'm Barak!
                                </div>
                                <div className="message last" style={{ opacity: messages.length ? 1 : 0 }} ref={el => (textMessage2 = el)} >
                                Scroll down to view my portfolio!
                                </div>
                            </div>

                            <div className="yours messages">
                                { messages.map((mssg)=>{
                                    return(
                                        <div key={mssg} className="message">
                                        {mssg.message}
                                        </div>
                                    )
                                })}
                            </div>

                            { reply.message === 'You have sent a message to my email. Please leave your contact information and I will get back to you soon.' && 
                            <div className="mine messages" style={{ paddingTop: 0, opacity: 1, transform: 'translateY(-150px)'}}>
                                <div className="reply message" style={{ opacity: 1}}>
                                {reply.message}
                                </div>
                            </div> 
                            }

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