import React from 'react'
import { Col, Form } from 'react-bootstrap';
import { FaArrowCircleUp } from "react-icons/fa";
import ContainedButton from './components/ContainedButton';
import { Hidden, Button, makeStyles } from '@material-ui/core';
import * as BsIcons from 'react-icons/bs';
import { useHistory } from 'react-router-dom';



export default function Portfolio({ value, handleChange, handleSubmit}){
    const classes = useStyles()
    const history = useHistory()
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
                        <Hidden smDown>
                            <ContainedButton onClick={()=> window.open("https://learn.co/baraksaidoff/resume", "_blank")} style={{ marginTop: 20, maxWidth: 245, outline: 'none' }} variant="contained" color="primary">
                                Download Resume
                            </ContainedButton>
                        </Hidden>
                        <Hidden mdUp>
                            <Button
                                variant='contained'
                                color='primary'
                                type='submit'
                                className={classes.commonBtn}
                                endIcon={<BsIcons.BsArrowRight/>}
                                onClick={()=> history.push('/projects/watery')}
                            >
                                <span style={styles.backBtnLabel}>{'My Projects'}</span>
                            </Button>
                        </Hidden>
                    </div>
                </div>
            </Col>  
        </div>
    )
    
}

const styles = {
    projectBtn:{
        outline: 'none', 
    },
};

const useStyles = makeStyles((theme) => ({
    commonBtn:{
        marginTop: 22,
        ouline: 'none',
        fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        maxWidth: 230, 
        padding: '8px 0', 
        width: '100%',
        position: 'relative',
        borderRadius: 24,
        '&:hover':{ 
            backgroundColor: '#131313',
            color: "#fff",
            '& [class*="-endIcon"]': {
            opacity: 1,
            color: '#fff',
            },
        },
    },
  }));