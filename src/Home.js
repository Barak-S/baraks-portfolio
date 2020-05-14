import React from 'react'
import { Carousel, Card } from 'react-bootstrap';

export default class Home extends React.Component{

    state= {
        projectImages: [{img:"../Covid.png", description: "Covid-19 Data UI"}, {img: "../homescreen.png", description: "movie app"}, {img: "../cozyCabins.png", description: "Cozy cabins"}, {img: "../pirateWarsGame.png", description: "Pirate Wars"}]
    }

    mapPictures(){
        return(
            this.state.projectImages.map((img, index) =>{
                return(
                    <Carousel.Item style={{backgroundColor: "#333"}}>
                        <img
                        src={img.img}
                        alt={ index+1+ "slide"}
                        style={{display: 'flex', height: 550, display: "block", marginLeft: "auto", marginRight: "auto", width: "50%" }}
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
            <div>
                <Carousel className="carousel" style={{ display: "flex", marginTop:"7%", justifyContent: "center", alignItems: "center", height: 650, paddingRight: "10.5%", paddingLeft: "10.5%" }} >
                    {this.mapPictures()}
                </Carousel>
            </div>
        )
    }
}