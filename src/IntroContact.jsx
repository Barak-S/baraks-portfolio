import React, { useEffect, useRef } from 'react';
import './App.css';
import Video from './images/city-scene.mp4'
import { TweenMax, Power2 }  from 'gsap';
import { makeStyles } from '@material-ui/core';
import { Col, Form, Image } from 'react-bootstrap';
import { FaArrowCircleUp } from "react-icons/fa";


const Contact = ({ messages, reply, value, handleChange, handleSubmit }) => {
	const classes = useStyles()
	
    let videoRef = useRef(null);
    let profilePic = useRef(null);
    let textMessage = useRef(null);
    let textMessage2 = useRef(null);
    let inputRef = useRef(null);

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
        if (profilePic && textMessage && textMessage2){
					TweenMax.to( profilePic, 1.1, { opacity: 1, y: '-75%', ease: Power2.easeOut, delay: 0.5 })
					TweenMax.to( textMessage, 1.1, { opacity: 1, y: '-125px', ease: Power2.easeOut, delay: 0.5 })
					TweenMax.to( textMessage2, 1.1, { opacity: 1, y: '-125px', ease: Power2.easeOut, delay: 1.8 })    
					TweenMax.to( inputRef, 1.1, { opacity: 1, y: '-0px', ease: Power2.easeOut, delay: 2.8 })    
        }
    },[profilePic, textMessage, textMessage2, messages])


    return(
      <div style={{ height: '100vh', width: '100%', display: 'flex', justifyContent: 'center' }}>
				<video ref={videoRef} className={classes.backgroundVideo} autoPlay muted playsInline loop >
						<source src={Video} type="video/mp4" />
				</video>
				<Col xl={7} lg={8} md={9} sm={12} xs={12} className={classes.contentCol}>
						<div className={classes.chatWrapper}>
							<div className={classes.chat}>
									<div className="mine messages">
										<Image 
											ref={el => (profilePic = el)} 
											className={classes.headshotDrop} 
											style={{ 
													height: 100, 
													width: 100, 
											}} 
											src={require("./images/headshot2021.jpg")} 
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
											{messages.map((mssg)=>{
												return(
													<div key={mssg} className="message">
														{mssg.message}
													</div>
												)
											})}
									</div>
									{reply.message === 'You have sent a message to my email. Please leave your contact information and I will get back to you soon. Thanks!' && (
										<div className="mine messages" style={{ paddingTop: 0, opacity: 1, transform: 'translateY(-150px)'}}>
												<div className="reply message" style={{ opacity: 1}}>
												{reply.message}
												</div>
										</div> 
									)}
							</div>
					</div>
					<div className={classes.emailArea} ref={el => (inputRef = el)}>
						<Form.Group controlId="exampleForm.ControlTextarea1" className={classes.formGroup}>
							<Form.Control 
								placeholder="Send me your contact info!"
								as="textarea" 
								name="message"
								rows={1} 
								onChange={(e)=>handleChange(e)}
								value={ value || ''}
							/>
							<span style={{ transform: 'translateX(-30px) translateY(5px)', color: "#0B93F6", cursor: 'pointer' }}><FaArrowCircleUp size={25} onClick={(e)=>handleSubmit(e)}/></span>
						</Form.Group>
					</div>
					<div className={classes.headerArea}>
							<h3 className={classes.nameHeader}>Barak Saidoff</h3>
							<h5 className={classes.titleHeader}>Full Stack Developer</h5>
					</div>
				</Col>
			</div>   
    )
}

const useStyles = makeStyles((theme) => ({
	backgroundVideo: {
		objectFit: 'cover',
		width: '100vw',
		height: '100vh',
		position: 'absolute',
	},
	nameHeader: {
		paddingTop: '1rem',
		paddingBottom: '0.5rem',
		color: '#fff',
		fontSize: 32,
		fontWeight: 600,
	},
	titleHeader: {
		paddingBottom: '1rem',
		color: '#fff',
		fontSize: 24,
		fontWeight: 600,
	},
	contentCol: {
		display: 'flex',
		flexDirection: 'column',
		height: '100vh',
		alignItems: 'center',
		width: '100%',
		maxWidth: 1299,
	},
	chatWrapper: {
		fontFamily: 'helvetica',
		display: 'flex' ,
		flexDirection: 'column',
		alignItems: 'center',
		width: '100%',
		maxHeight: 'calc(100vh - 164px)',
		overflow: 'auto',
	},
	chat: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		padding: 10,
		maxHeight: '85vh',
		overflow: 'auto',
	},
	emailArea: {
		width: '100%',
		opacity: 0,
		transform: 'translateY(15px)',
		[theme.breakpoints.down('sm')]: {
			marginTop: 'auto'
		}
	},
	formGroup: {
		display: "flex",
		maxHeight: 158,
		marginLeft: '0px !important',
		marginRight: 0,
	},
	headshotDrop: {
		opacity: 0,
	},
	headerArea: {
		width: '100%',
		[theme.breakpoints.down('sm')]: {
			marginTop: 0
		}
	}
}))

export default Contact