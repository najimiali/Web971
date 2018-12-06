import React, {Component} from 'react';
import {Thumbnail, Button, Col,ListGroupItem} from "react-bootstrap";
import soobasa from "./soobasa.jpg"
import ListGroup from "react-bootstrap/es/ListGroup";

class Chraracteristicplayer extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
           time:"Dec 18 , 5:00 am",
            first_team : "Esteghlal",
            second_team: "Perspolis",
            score_of_first_team:6,
            score_of_second_team:7,
        }

    }

    render() {
        return (
            <Col xs={6} md={3}>
                <ListGroup>
                    <ListGroupItem> Time : {this.state.time}
                    </ListGroupItem>
                    <ListGroupItem>
                    </ListGroupItem>
                    <ListGroupItem>
                    </ListGroupItem>
                </ListGroup>
            </Col>
        )
    }

}

export default Chraracteristicplayer