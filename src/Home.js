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

    newCarousel(){
        return(
            projects.map((img, index)=>{
                return(
                    <Carousel.Item onClick={()=>this.toggleModal(img)}>
                    <Card.Text>
                    <h3 style={{color: '#0377B5', fontWeight: "600"}}>{img.title}</h3>
                    </Card.Text>
                        <Image
                        className="d-block w-100"
                        src={require(`${img.img}`)}
                        alt={img.title}
                        thumbnail 
                        style={{ cursor: "pointer"}}
                        />
                    </Carousel.Item>
                )
            })
        )
    }
    
    
    render(){
        return(
            <div id="projects">
                <Col className="carouselProjects" xs={12} sm={12} md={7} lg={7}>
                    <Carousel style={{ marginTop:"3%", marginBottom:"3%" }} interval={ this.state.isClicked === false ? 5000 : null}>
                        {this.newCarousel()}
                    </Carousel>
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
                        <Modal.Body>
                            <Card.Text style={{fontWeight: "600", fontSize:17}}>{this.state.project.description[0].intro}</Card.Text>
                            <Card.Text><strong style={{color: '#0377B5', fontWeight: "600"}}>Technologies: </strong>{this.state.project.technologies}</Card.Text>
                            {this.state.project.live && 
                                <div><p style={{color: "#D3D3D3"}}><a href={`${this.state.project.live}`} target="_blank" title={`${this.state.project.title}`} style={{color: '#0377B5', fontWeight: "600"}}>Live</a></p></div>
                            }
                            <Row>
                                <Col xs={12} sm={12} md={6} lg={6} style={{marginBottom: 10}}>
                                    <Image
                                        src={require(`${this.state.project.details[0].img}`)}
                                        alt={this.state.project.title}
                                        thumbnail 
                                    />  
                                </Col>  
                                <Col xs={12} sm={12} md={6} lg={6} style={{marginBottom: 10}}>
                                    <Image
                                        src={require(`${this.state.project.details[1].img}`)}
                                        alt={this.state.project.title}
                                        thumbnail 
                                    /> 
                                </Col>
                                
                                <Col>
                                    <Card.Text style={{paddingBottom: 15}}>{this.state.project.description[0].use}</Card.Text>
                                </Col>
                                
                            </Row>  
                                { this.state.project.details[2] ?
                                    this.state.project.details[2] && !this.state.project.details[3] ?
                                    <Row>
                                        <Col xs={12} sm={12} md={12} lg={12} style={{marginBottom: 10}}>
                                            <Image
                                            src={require(`${this.state.project.details[2].img}`)}
                                            alt={this.state.project.title}
                                            thumbnail 
                                            /> 
                                        </Col>
                                    </Row>
                                    :
                                    <Row>
                                        <Col xs={12} sm={12} md={6} lg={6} style={{marginBottom: 10}}>
                                            <Image
                                            src={require(`${this.state.project.details[2].img}`)}
                                            alt={this.state.project.title}
                                            thumbnail 
                                        /> 
                                        </Col>
                                        <Col xs={12} sm={12} md={6} lg={6} style={{marginBottom: 10}}>
                                            <Image
                                            src={require(`${this.state.project.details[3].img}`)}
                                            alt={this.state.project.title}
                                            thumbnail 
                                        /> 
                                        </Col>
                                    </Row>
                                    
                                :
                                null}

                                <Row>
                                    <Col>
                                        <Card.Text>{this.state.project.description[0].show}</Card.Text>
                                    </Col>
                                </Row> 
                                    
                                <Row>                                        
                                    { this.state.project.details[4] &&
                                        <Col xs={12} sm={12} md={12} lg={12}>
                                            <Image
                                            src={require(`${this.state.project.details[4].img}`)}
                                            alt={this.state.project.title}
                                            thumbnail 
                                        /> 
                                        </Col>
                                    }
                                </Row>  
                            </Modal.Body>
                        <Modal.Footer>
                        <Button style={{backgroundColor: "#0377B5", border: "none"}} onClick={this.toggleModal}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                    </>
                }
            </div>
        )
    }
}