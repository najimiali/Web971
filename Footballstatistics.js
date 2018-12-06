import React, {Component} from 'react';
import {Panel,  ListGroupItem} from "react-bootstrap";


class Footballstatistics extends Component {
    constructor(props, context) {
        super(props, context);

    }
    render() {
        return (
            <Panel>
                <Panel.Heading>
                    <b>Season : {this.props.season_name} </b>
                </Panel.Heading>
                <Panel.Body>
                    <ListGroupItem>Goals : {this.props.num_of_goals}</ListGroupItem>
                    <ListGroupItem>Pass to Goals : {this.props.num_of_passed_goals}</ListGroupItem>
                    <ListGroupItem>Total Red Cards : {this.props.num_of_red_cards}</ListGroupItem>
                    <ListGroupItem>Direct Red Cards : {this.props.num_of_direct_red_cards}</ListGroupItem>
                    <ListGroupItem>Yellow Cards : {this.props.num_of_yellow_cards}</ListGroupItem>
                </Panel.Body>
            </Panel>
        );
    }

}

export default Footballstatistics