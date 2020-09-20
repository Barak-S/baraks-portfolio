import React from 'react'
import { Card, Carousel, Button, Modal, Row, Col } from 'react-bootstrap';
import SocialHandles from './SocialHandles'
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

    newCarousel(){
        return(
            projects.map((img, index)=>{
                return(
                    <Carousel.Item onClick={()=>this.toggleModal(img)}>
                        <img
                        className="d-block w-100"
                        src={require(`${img.img}`)}
                        alt={img.title}
                        />
                        <Carousel.Caption>
                        <h3 style={{color: '#0377B5', fontWeight: "600"}}>{img.title}</h3>
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
                            <Row>
                                <Col className="carouselProjects" xs={12} sm={12} md={10} lg={10}>
                                    <Carousel style={{ display: "flex", marginTop:"3.5%", marginBottom:"3.5%" }} interval={ this.state.isClicked === false ? 1000 : null}>
                                        {this.newCarousel()}
                                    </Carousel>
                                </Col>
                            </Row>
                            {this.state.isClicked === true &&
                                <>
                                <Modal
                                    show={this.state.isClicked}
                                    onHide={this.toggleModal}
                                    backdrop="static"
                                    keyboard={false}
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title style={{color: '#0377B5', fontWeight: "500"}}>{this.state.project.title}</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Card.Text>{this.state.project.description}</Card.Text>
                                        <Card.Text><strong style={{color: '#0377B5', fontWeight: "600"}}>Technologies: </strong>{this.state.project.technologies}</Card.Text>
                                        {this.state.project.live && 
                                            <div><p style={{color: "#D3D3D3"}}><a href={`${this.state.project.live}`} target="_blank" title={`${this.state.project.title}`} style={{color: '#0377B5', fontWeight: "600"}}>Live</a></p></div>
                                        }
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