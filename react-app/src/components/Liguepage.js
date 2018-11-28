import React, {Component} from 'react';
import {Carousel, Media, Col, Row, ListGroup, ListGroupItem} from "react-bootstrap";
import soobasa from "./soobasa.jpg"
import Grid from "react-bootstrap/es/Grid";

class Liguepage extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            imageaddresses: [{soobasa}, {soobasa}, {soobasa}],
            players: []
        }
    }


    render() {
        return (
            <div>
                <Col xs={12} md={8}>
                    <Carousel>
                        {this.state.imageaddresses.map(img => <Carousel.Item>
                                <img width={500} height={500} alt="900x500" src={img}/>
                                <Carousel.Caption>
                                    <h3>Image of ligue</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )}


                    </Carousel>;
                </Col>



            </div>
        )
    }
}

export default Liguepage