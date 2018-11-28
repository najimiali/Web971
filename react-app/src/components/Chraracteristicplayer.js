import React, {Component} from 'react';
import {Thumbnail, Button, Col} from "react-bootstrap";
import soobasa from "./soobasa.jpg"

class Chraracteristicplayer extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            pictureSource: {soobasa},
            // playername: "Soobasa",
            playerdiscription : "He started playing football when he was 6, Once ...."
        }

    }

    render() {
        return (
            <Col xs={6} md={3}>
                <Thumbnail src={soobasa}  alt="242x200">
                    <h3>{this.props.playername}</h3>
                    <p>{this.state.playerdiscription}</p>
                    <p>
                        <Button bsStyle="primary" className={"btn-block btn-large btn-danger"}>Like</Button>
                        <Button bsStyle="primary" className={"btn-block btn-large btn-success"}>More Info</Button>

                    </p>
                </Thumbnail>
            </Col>
        )
    }

}

export default Chraracteristicplayer