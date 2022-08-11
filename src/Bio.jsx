import React from 'react'
import { Col, Form } from 'react-bootstrap';
import { FaArrowCircleUp } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { SiJavascript, SiReact, SiRedux, SiTypescript, SiPython, SiGithub } from "react-icons/si";
import ContainedButton from './components/ContainedButton';
import { Hidden, Button, makeStyles, IconButton, Tooltip } from '@material-ui/core';
import * as BsIcons from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import Resume from './resume/Copy of Barak Saidoff Resume.pdf';


export default function Portfolio({ value, handleChange, handleSubmit}){
    const classes = useStyles()
    const history = useHistory()
    return(
        <div id="projects">
            <Col xs={12} sm={12} md={10} lg={9} className="about-banner">
                <div className="email-area">
                    <Form.Group controlId="exampleForm.ControlTextarea1" style={{ display: "flex"}}>
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
                <div className='headline-section'>
                    <p className="headline">I'm a creative Full Stack Developer with an entrepreneurial spirit, proficient at Web Application Development using modern web tools. With attention to detail, I take ideas, deliver quickly and consistently, and build things that provide a ton of value in a short amount of time.</p>
                    <div className={classes.techSkills}>
                        <p className={classes.skillsBanner}>Technical Skills</p>
                        <div className={classes.iconWrapper}>
                            <Tooltip placement="top" title="JavaScript">
                                <IconButton style={{ paddingTop: 0, outline: 'none' }}>
                                    <SiJavascript size={24} color={'#EFD81D'} />
                                </IconButton>
                            </Tooltip>
                            <Tooltip placement="top" title="Node.js">
                                <IconButton style={{ paddingTop: 0, outline: 'none' }}>
                                    <IoLogoNodejs size={26} color={'#7EC728'} />
                                </IconButton>
                            </Tooltip>
                            <Tooltip placement="top" title="React.js">
                                <IconButton style={{ paddingTop: 0, outline: 'none' }}>
                                    <SiReact size={24} color={'#08D2F6'} />
                                </IconButton>
                            </Tooltip>
                            <Tooltip placement="top" title="Redux">
                                <IconButton style={{ paddingTop: 0, outline: 'none' }}>
                                    <SiRedux size={24} color={'#7349B5'} />
                                </IconButton>
                            </Tooltip>
                            <Tooltip placement="top" title="TypeScript">
                                <IconButton style={{ paddingTop: 0, outline: 'none' }}>
                                    <SiTypescript size={24} color={'#2F73BF'} />
                                </IconButton>
                            </Tooltip>
                            <Tooltip placement="top" title="Python">
                                <IconButton style={{ paddingTop: 0, outline: 'none' }}>
                                    <SiPython size={24} color={'#F7CC40'} />
                                </IconButton>
                            </Tooltip>
                            <Tooltip placement="top" title="Ruby on Rails">
                                <IconButton style={{ paddingTop: 0, paddingLeft: 4, paddingRight: 4, outline: 'none', height: 48 }}>
                                    <svg className={classes.railsLogo} fill="#CC0000" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Ruby on Rails</title><path d="M7.523 7.781c-.187 0-.382.011-.582.035l.116.358c.175-.018.351-.024.527-.024h.06l-.12-.369zm2.315.358l-.024.4c.2.067.394.138.588.217l.026-.404c-.055-.03-.208-.104-.59-.213zm-4.988.23a9.597 9.597 0 00-.473.26l.28.426c.157-.097.308-.19.466-.268L4.85 8.37zm2.89.022a5.602 5.602 0 00-.654.027c-.443.04-.909.169-1.38.375-1.418.618-2.878 1.918-3.833 3.51-.955 1.591-1.291 3-1.4 3.603-.037.202-.05.313-.05.313h4.79s-.057-.26-.096-.678a8.18 8.18 0 01-.033-.732c0-.55.055-1.203.244-1.858.047-.163.103-.328.168-.49.065-.162.14-.321.225-.479.17-.314.381-.618.646-.894s.584-.525.963-.736c.248-.12.698-.365 1.346-.489.216-.041.453-.07.713-.076.26-.005.542.012.845.06.606.097 1.298.32 2.075.74.388.211.798.47 1.228.788.11-.09.211-.162.211-.162s-.196-.197-.547-.486c-.35-.29-.853-.672-1.467-1.043-.306-.186-.642-.37-.998-.538a8.852 8.852 0 00-1.129-.44 7.48 7.48 0 00-1.226-.27 6.048 6.048 0 00-.64-.045zm2.086 1.65l-.023.383c.2.006.4.03.6.072l.025-.375a4.32 4.32 0 00-.602-.08zm-1.418.146c-.206.061-.381.127-.533.194l.139.418c.175-.085.351-.157.527-.211l-.133-.4zm-6.008.024c-.157.151-.31.303-.449.455l.467.4c.127-.163.267-.327.412-.478l-.43-.377zm4.34.898c-.14.128-.266.267-.375.407l.291.435c.103-.151.224-.29.358-.43l-.274-.412zm.989.787v4.323h1.164v-1.043L9.9 16.219h1.721l-1.351-1.364s1.06-.09 1.06-1.46c0-1.37-1.285-1.499-1.285-1.499H7.729zm5.292.032c-.842 0-1.126.763-1.126 1.127v3.164h1.181v-.758h1.11v.758h1.146v-3.164c0-.922-.838-1.127-1.129-1.127h-1.182zm2.85 0v4.29h1.23v-4.29h-1.23zm1.733 0v4.291h2.88v-1.11h-1.656v-3.181h-1.224zm4.359 0c-.485 0-1.133.399-1.133 1.144v.383c0 .746.642 1.127 1.133 1.127 1.364.006-.327 0 .933 0v.533l-2.005.006v1.098h1.982c.406 0 1.103-.297 1.127-1.127v-.424c0-.71-.581-1.129-1.127-1.129h-.988v-.508h1.957v-1.103h-1.88zM5.668 12.8a5.75 5.75 0 00-.182.666l.49.388c.025-.236.069-.472.13-.709l-.438-.345zm7.771.15h.407c.327 0 .334.236.334.236v1.05h-1.11v-1.05s0-.236.37-.236zm-4.546.031h.933s.262.097.262.49c0 .395-.268.499-.268.499h-.927v-.989zm-8.59.061c-.115.26-.242.563-.303.727l.697.255c.08-.206.206-.504.303-.728l-.697-.254zm5.092 1.963c.012.321.043.584.074.765l.726.26a8.003 8.003 0 01-.144-.787l-.656-.238z"/></svg>
                                </IconButton>
                            </Tooltip>
                            <Tooltip placement="top" title="Git Workflow">
                                <IconButton style={{ paddingTop: 0, outline: 'none' }}>
                                    <SiGithub size={24} color={'#C3C4C6'} />
                                </IconButton>
                            </Tooltip>   
                        </div>
                        <Hidden smDown>
                            <ContainedButton className={classes.commonBtn} onClick={()=> window.open(Resume, "_blank")} style={{ marginTop: 20, maxWidth: 245, outline: 'none' }} variant="contained" color="primary">
                                {'Download Resume'}
                            </ContainedButton>
                        </Hidden>
                        <Hidden mdUp>
                            <Button
                                variant='contained'
                                color='primary'
                                type='submit'
                                className={classes.commonBtnProjects}
                                endIcon={<BsIcons.BsArrowRight/>}
                                onClick={()=> history.push('/projects/watery')}
                            >
                                <span>{'My Projects'}</span>
                            </Button>
                        </Hidden>
                    </div>
                </div>
								<div className="about-section">
									<p className='skill-tag'><strong style={{fontSize: 17, fontWeight: "700"}}>Experienced in Agile Development <span style={{ color: "#0B93F6"}}>|</span></strong> Hands on experience contributing to startups and existing code-bases through creativity and problem solving.</p>
									<p className='skill-tag'><strong style={{fontSize: 17, fontWeight: "700"}}>Military Leadership <span style={{ color: "#0B93F6"}}>|</span> Former Sergeant in the IDF <span style={{ color: "#0B93F6"}}>|</span></strong> Achieved award of excellence upon advanced training graduation. </p>
								</div>
								<Hidden mdUp>
										<div className="projectBtnSection">
												<ContainedButton
														variant='outlined'
														color='primary'
														type='submit'
														className={classes.commonBtn}
														onClick={()=> window.open(Resume, "_blank")}
												>
													{'Download Resume'}
												</ContainedButton>
										</div>
								</Hidden>
            </Col>
        </div>
    )  
}

const useStyles = makeStyles((theme) => ({
	commonBtnProjects:{
		marginTop: 22,
		ouline: 'none',
		fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
		maxWidth: 230, 
		padding: '8px 0', 
		width: '100%',
		position: 'relative',
		borderRadius: 24,
		backgroundColor: '#35c958',
		backgroundAttachment: 'fixed',
		color: '#131313',
		'&:hover':{ 
				background: 'none',
				boxShadow: 'none',
				color: "#fff",
				'& [class*="-endIcon"]': {
				opacity: 1,
				color: '#fff',
				},
		},
	},
    commonBtn:{
        marginTop: 22,
        ouline: 'none',
        fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        maxWidth: 230, 
        padding: '8px 0', 
        width: '100%',
        position: 'relative',
        borderRadius: 24,
        backgroundColor: '#35c958',
				border: 'none',
				outline: 'none',
        backgroundAttachment: 'fixed',
        color: '#131313',
				'& .MuiButton-label': {
					marginRight: -6,
					marginBottom: -2,
					transition: '0.3s ease-in-out all',
				},    
				'&:hover':{ 
					backgroundColor: '#131313',
					boxShadow: 'none',
					border: 'none',
					outline: 'none',
					color: "#fff",
					"& > *:first-child": {
						transform: 'translateY(5px)',
						opacity: 1,
					},
					'& [class*="-endIcon"]': {
						opacity: 1,
						color: '#35c958',
					},
				},
				'& [class*="-endIcon"]': {
					opacity: 1,
					transform: 'translateY(-1px) rotate(90deg)',
					color: '#131313',
					transition: '0.5s ease-out all',
			},
    },
    techSkills: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        [theme.breakpoints.down('sm')]: {
            alignItems: 'center',
        }
    },
    skillsBanner: {
        fontSize: 24,
        fontWeight: 700,
    },
    iconWrapper: {
        width: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        maxWidth: 500, 
        flexWrap: 'wrap',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
            maxWidth: '100%', 
        }
    },
    railsLogo: {
        height: 60,
    }
  }));