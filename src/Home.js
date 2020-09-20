import React from 'react'
import { Card } from 'react-bootstrap';
import { Carousel, Button, Modal } from 'react-bootstrap';
import SocialHandles from './SocialHandles'
import './App.css';

import {projects} from './projects'

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

    newCarousel(){
        return(
            projects.map((img, index)=>{
                return(
                    <Carousel.Item interval={1000} onClick={()=>this.toggleModal(img)}>
                        <img
                        className="d-block w-100"
                        src={require(`${img.img}`)}
                        alt={img.title}
                        />
                        <Carousel.Caption>
                        <h3>{img.title}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })
        )
    }
    
    
    render(){
        return(
            <div style={{margin: "2.5%", paddingBottom: 25}}>
                <Card className="contactCard">
                    <Card.Body style={{backgroundColor:"#343A40", minHeight: "100vh"}}>
                        <Card.Title style={{paddingTop:12, color: "#0377B5", textAlign: "center", fontSize: 25.5}}>Projects</Card.Title>
                        <div>
                            <Carousel style={{ display: "flex", marginTop:"3.5%", marginBottom:"3.5%", paddingRight: "10.5%", paddingLeft: "10.5%" }} >
                                {this.newCarousel()}
                            </Carousel>
                            {this.state.isClicked === true &&
                                <>
                                <Modal
                                    show={this.state.isClicked}
                                    onHide={this.toggleModal}
                                    backdrop="static"
                                    keyboard={false}
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title>{this.state.project.title}</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Card.Text>{this.state.project.description}</Card.Text>
                                        <Card.Text><strong>Technologies: </strong>{this.state.project.technologies}</Card.Text>
                                    </Modal.Body>
                                    <Modal.Footer>
                                    <Button variant="secondary" onClick={this.toggleModal}>Close</Button>
                                    </Modal.Footer>
                                </Modal>
                                </>
                            }
                            
                        </div>
                        <SocialHandles/>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}