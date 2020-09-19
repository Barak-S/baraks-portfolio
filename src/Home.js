import React from 'react'
import { Card } from 'react-bootstrap';
import { Carousel, Button, Modal } from 'react-bootstrap';
// import Modal from './Modal'
import SocialHandles from './SocialHandles'

import './App.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';


export default class Home extends React.Component{

    state= {
        projectImages: [{img: require("./images/Covid.png"), description: "Covid-19 Data UI"}, {img: require("./images/addmovie11.png"), description: "What We Watchin'"}, {img: require("./images/cozyCabins.png"), description: "Cozy cabins"}, {img: require("./images/pirateWarsGame.png"), description: "Pirate Wars"}],
        isClicked: false,
        pojectName: ""
    }

    toggleModal=(pojectName)=>{
        this.setState({
            isClicked: !this.state.isClicked,
            pojectName: pojectName
        })
    }

    newCarousel(){
        return(
            this.state.projectImages.map((img, index)=>{
                return(
                    <Carousel.Item interval={1000} onClick={()=>this.toggleModal(img.description)}>
                        <img
                        className="d-block w-100"
                        src={img.img}
                        alt={img.description}
                        />
                        <Carousel.Caption>
                        <h3>{img.description}</h3>
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
                                        <Modal.Title>{this.state.pojectName}</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Project details</Modal.Body>
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