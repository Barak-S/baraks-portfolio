import React from 'react'
import { Carousel, Card } from 'react-bootstrap';
import Modal from './Modal'
import Contact from './Contact'

export default class Home extends React.Component{

    state= {
        projectImages: [{img: require("./images/Covid.png"), description: "Covid-19 Data UI"}, {img: require("./images/addmovie11.png"), description: "movie app"}, {img: require("./images/cozyCabins.png"), description: "Cozy cabins"}, {img: require("./images/pirateWarsGame.png"), description: "Pirate Wars"}],
        isClicked: false
    }

    toggleModal=()=>{
        this.setState({
            isClicked: !this.state.isClicked
        })
    }


    mapPictures(){
        return(
            this.state.projectImages.map((img, index) =>{
                return(
                    <Carousel.Item style={{backgroundColor: "#343A40"}} onClick={()=>this.toggleModal()}>
                        <Carousel.Caption style={{color: "#0377B5", fontWeight: "600", fontSize: 20, backgroundColor: "#E6EFF6", borderRadius: 8}}>{img.description.toUpperCase()}</Carousel.Caption>
                        <img
                        src={img.img}
                        alt={ index+1+ "slide"}
                        style={{display: 'flex', height: 650, display: "block", marginLeft: "auto", marginRight: "auto" }}
                        />
                    </Carousel.Item>
                )
            })

        )
    }
    
    
    render(){
        return(
            <div style={{margin: "2.5%", paddingBottom: 25}}>
                <Card className="contactCard">
                    <Card.Body style={{backgroundColor:"#343A40"}}>
                        <div style={{margin: "1%"}}>
                            <Card.Title style={{paddingTop:12, color: "#0377B5", textAlign: "center", fontSize: 25.5}}>Projects</Card.Title>
                            {this.state.isClicked? <Modal closeModal={this.toggleModal}/> : 
                                <div>
                                    <Carousel style={{ display: "flex", marginTop:"3.5%", marginBottom:"3.5%", paddingRight: "10.5%", paddingLeft: "10.5%" }} >
                                        {this.mapPictures()}
                                    </Carousel>
                                </div>
                            
                            }
                        </div>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}