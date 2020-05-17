import React from 'react'
import { Carousel, Card } from 'react-bootstrap';
import Modal from './Modal'

export default class Home extends React.Component{

    state= {
        projectImages: [{img:"../images/Covid.png", description: "Covid-19 Data UI"}, {img: "../images/addmovie11.png", description: "movie app"}, {img: "../images/cozyCabins.png", description: "Cozy cabins"}, {img: "../images/pirateWarsGame.png", description: "Pirate Wars"}],
        isClicked: false
    }

    toggleModal(){
        this.setState({
            isClicked: !this.state.isClicked
        })
    }


    mapPictures(){
        return(
            this.state.projectImages.map((img, index) =>{
                return(
                    <Carousel.Item style={{backgroundColor: "#343A40"}} onClick={()=>this.toggleModal()}>
                        <img
                        src={img.img}
                        alt={ index+1+ "slide"}
                        style={{display: 'flex', height: 650, display: "block", marginLeft: "auto", marginRight: "auto" }}
                        />
                        <Carousel.Caption>
                        {/* <h3 style={{color: "#343A40"}}>{img.description}</h3> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })

        )
    }
    
    
    render(){
        return(
            <div>
                {this.state.isClicked? <Modal toggleModal={this.toggleModal}/> : 
                    <Carousel style={{ display: "flex", marginTop:"7%", justifyContent: "center", alignItems: "center", height: 650, paddingRight: "10.5%", paddingLeft: "10.5%" }} >
                        {this.mapPictures()}
                    </Carousel>
                
                }
            </div>
        )
    }
}