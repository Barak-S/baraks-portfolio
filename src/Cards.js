import React from 'react'
import { Card, Carousel, Button, Modal, Row, Col, Image } from 'react-bootstrap';
import { projects } from './projects'
import './App.css';

export default class Home extends React.Component{

    state= {
        isClicked: false,
        project: {}
    }

    toggleModal=(projectObj)=>{
        this.setState({
            isClicked: !this.state.isClicked,
            project: projectObj
        })
    }
    newCards(){
        return(
            projects.map((img)=>{
                return(
                    <article className="card1" onClick={()=>this.toggleModal(img)}>
                        <Image
                            src={require(`${img.details[0].img}`)}
                            alt={img.title}
                            style={{marginBottom: 6}}
                            thumbnail 
                        /> 
                        <header className="card1-header">
                            <h3 style={{color: "#0377B5", fontWeight: "600"}}>{img.title}</h3>
                            <p>{ img.description[0].intro.length > 100 ? img.description[0].intro.slice(0, 99) + "..." : img.description[0].intro}</p>
                        </header>
                    </article>
                )
            })
        )
    }
    
    
    render(){
        return(
            <div id="projects">
                    <Col xs={12} sm={12} md={9} lg={9} className="cards-column">
                        <section className="card1-list">
                            {this.newCards()}
                        </section>
                    </Col>
                {this.state.isClicked === true &&
                    <>
                    <Modal
                        show={this.state.isClicked}
                        onHide={this.toggleModal}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title style={{color: '#0377B5', fontWeight: "600"}}>{this.state.project.title}</Modal.Title>
                        </Modal.Header>
                        <div className="modalImgContainer">
                            <Carousel interval={9500}>
                                {this.state.project.details.map(img=>{
                                    return(
                                        <Carousel.Item>
                                            <Image
                                            src={require(`${img.img}`)}
                                            alt={this.state.project.title}
                                            thumbnail 
                                            className="modal-thumbnail"
                                            />
                                        </Carousel.Item>
                                    )
                                })}
                            </Carousel>
                        </div>
                        <Modal.Body>
                            <Card.Text style={{fontWeight: "600", fontSize:17}}>{this.state.project.description[0].intro}</Card.Text>
                            <hr/>
                            <Card.Text><strong style={{color: '#0377B5', fontWeight: "600"}}>Technologies: </strong>{this.state.project.technologies}</Card.Text>
                            <Card.Text>{this.state.project.description[0].use}</Card.Text>
                            { this.state.project.description[0].show && <Card.Text>{this.state.project.description[0].show}</Card.Text>}
                            <hr/>
                            <div style={{textAlign: "center"}}>
                            {this.state.project.live && 
                                <Button className="resume-button" onClick={()=> window.open(`${this.state.project.live}`, "_blank")}>Live</Button>
                            }
                            { this.state.project.code &&  
                                <Button className="view-code" style={{backgroundColor: "#000000", fontWeight: "600", border: "none", marginLeft: 8}} onClick={()=> window.open(`${this.state.project.code}`, "_blank")}>View Code <img src="https://i.ya-webdesign.com/images/github-icon-png-7.png" alt="Barak Saidoff Github" style={{height: 25}} /></Button>
                            }
                            </div> 
                                
                            </Modal.Body>
                        <Modal.Footer>
                            <Button className="close-modal" onClick={this.toggleModal}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                    </>
                }
            </div>
        )
    }
}