import React from 'react'
import { Carousel } from 'react-bootstrap';


export default class Home extends React.Component{
    render(){
        return(
            <div>
                <Carousel style={{marginRight: "24%", marginLeft: "24%", marginTop:"7%" }}>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="../Soldier.jpeg"
                        alt="First slide"
                        style={{height: 450, width: 200}}
                        />
                        <Carousel.Caption>
                        <h3>Cozy Cabins</h3>
                        <p>Real Estate Application</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="../Soldier.jpeg"
                        alt="Third slide"
                        style={{height: 450, width: 200}}
                        />

                        <Carousel.Caption>
                        <h3>Pirate Wars</h3>
                        <p>JavaScript application game that models after the classic Battleship board game with its own unique touch in styling and gameplay.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="../addmovie11.png"
                        alt="Third slide"
                        style={{height: 450, width: 200}}
                        />

                        <Carousel.Caption>
                        <h3>React Native Movie & TV App</h3>
                        <p>Search Movie and TV show titles and share recommendations with friends</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}