import React from 'react'
import { Card } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import Modal from './Modal'
import './App.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';


export default class Home extends React.Component{

    state= {
        projectImages: [{img: require("./images/Covid.png"), description: "Covid-19 Data UI"}, {img: require("./images/addmovie11.png"), description: "What We Watchin'"}, {img: require("./images/cozyCabins.png"), description: "Cozy cabins"}, {img: require("./images/pirateWarsGame.png"), description: "Pirate Wars"}],
        isClicked: false,
        selectedProject: ""
    }

    toggleModal=(pojectName)=>{
        this.setState({
            isClicked: !this.state.isClicked,
            selectedProject: pojectName
        })
    }


    // mapPictures(){
    //     return(
    //         this.state.projectImages.map((img, index) =>{
    //             return(
    //                 <Carousel.Item interval={3000}>
    //                     <img
    //                     className="d-block w-100"
    //                     src={img.img}
    //                     alt={img.description}
    //                     />
    //                     <Carousel.Caption>
    //                     <h3>{img.description}</h3>
    //                     </Carousel.Caption>
    //                 </Carousel.Item>
    //             )
    //         })

    //     )
    // }

    newCarousel(){
        return(
            this.state.projectImages.map((img, index)=>{
                return(
                    <Carousel.Item interval={3000} onClick={()=>this.toggleModal(img.description)}>
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
                        <div style={{margin: "1%"}}>
                            <Card.Title style={{paddingTop:12, color: "#0377B5", textAlign: "center", fontSize: 25.5}}>Projects</Card.Title>
                            {this.state.isClicked? <Modal  projectName={this.state.selectedProject} closeModal={this.toggleModal}/> : 
                                <div>
                                    <Carousel style={{ display: "flex", marginTop:"3.5%", marginBottom:"3.5%", paddingRight: "10.5%", paddingLeft: "10.5%" }} >
                                        {this.newCarousel()}
                                    </Carousel>
                                </div>
                            
                            }
                        </div>

                        {/* <div style={{margin: "1%"}}>

                            <Carousel>
                                {this.newCarousel()}
                            </Carousel>

                        </div> */}
                    </Card.Body>
                </Card>
            </div>
        )
    }
}