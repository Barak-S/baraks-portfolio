import React, { useState } from 'react'
import { Card, Carousel, Button, Modal, Col, Image } from 'react-bootstrap';
import { projects } from './projects'
import './App.css';

export default function Home(){

    const [clicked, setClicked] = useState(false)
    const [selectedProject, setSelectedProject] = useState({})

    const toggleModal=(project)=>{
        setClicked(!clicked)
        setSelectedProject(project)
    }

    function newCards(){
        return(
            projects.map((img)=>{
                return(
                    <article className="card1" onClick={()=>toggleModal(img)} key={img.title}>
                        <Image
                            src={require(`${img.details[0].img}`)}
                            alt={img.title}
                            style={{marginBottom: 6}}
                            thumbnail 
                        /> 
                        <header className="card1-header">
                            <div>
                                <hr/>
                                <h3 style={{color: "#6DDBAF", fontWeight: "600"}}>{img.title}</h3>
                                <p style={{textOverflow: 'ellipsis', fontWeight: 500}}>{ img.description[0].intro.length > 99 ? img.description[0].intro.slice(0, 99) + "..." : img.description[0].intro}</p>
                            </div>
                        </header>
                    </article>
                )
            })
        )
    }


    return(
        <div id="projects">
            <Col xs={12} sm={12} md={10} lg={9} className="about-banner">
                <p className="headline">I'm a creative Full Stack Developer with an entrepreneurial spirit, proficient at Web Application Development using Git and modern web tools. With attention to detail, I take ideas, deliver quickly and consistently, and build things that provide a lot of value in a short amount of time.</p>
                <div className="tech-skills">
                    <p className="skills-banner">Technical Skills</p>
                    <p>JavaScript, React, React Native, Redux, TypeScript, Node, Express, Ruby, Rails, SQL, NoSQL, CSS3, SASS, HTML5, GSAP, Bootstrap, Responsive Design, and Git workflow based programming.</p>
                    <button className="live-button" onClick={()=> window.open("https://learn.co/baraksaidoff/resume", "_blank")} style={{ marginTop: 20}}>Download Resume</button>
                </div>
            </Col>  
            <Col xs={12} sm={12} md={10} lg={9} className="cards-column">
                <section className="card1-list">
                    {newCards()}
                </section>
            </Col>
            { clicked &&
                <>
                <Modal
                    show={clicked}
                    onHide={toggleModal}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton >
                        <Modal.Title style={{color: '#6DDBAF', fontWeight: "600"}}>{selectedProject.title}</Modal.Title>
                    </Modal.Header>
                    <div className="modalImgContainer">
                        <Carousel interval={9500}>
                            {selectedProject.details.map(img=>{
                                return(
                                    <Carousel.Item>
                                        <Image
                                        src={require(`${img.img}`)}
                                        alt={selectedProject.title}
                                        thumbnail 
                                        className="modal-thumbnail"
                                        />
                                    </Carousel.Item>
                                )
                            })}
                        </Carousel>
                    </div>
                    <Modal.Body>
                        <Card.Text style={{fontWeight: "600", fontSize:17}}>{selectedProject.description[0].intro}</Card.Text>
                        <hr/>
                        <Card.Text><strong style={{color: '#6DDBAF', fontWeight: "600"}}>Technologies: </strong>{selectedProject.technologies}</Card.Text>
                        <Card.Text>{selectedProject.description[0].use}</Card.Text>
                        { selectedProject.description[0].show && <Card.Text>{selectedProject.description[0].show}</Card.Text>}
                        { selectedProject.note && <Card.Text style={{fontWeight: "600"}}>{selectedProject.note}</Card.Text>}
                        <div style={{textAlign: "center"}}>
                        {selectedProject.live && 
                            <button className="live-button" onClick={()=> window.open(`${selectedProject.live}`, "_blank")}>Live</button>
                        }
                        { selectedProject.code &&  
                            <button className="view-code" onClick={()=> window.open(`${selectedProject.code}`, "_blank")}>View Code <img src="https://i.ya-webdesign.com/images/github-icon-png-7.png" alt="Barak Saidoff Github" style={{height: 25}} /></button>
                        }
                        </div> 
                    </Modal.Body>
                    <Modal.Footer closeButton className="project-footer">
                        <Button className="close-modal" onClick={toggleModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
                </>
            }
        </div>
    )
    
}