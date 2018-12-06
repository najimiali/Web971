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
                    <ListGroupItem>Tree-point Trows : {this.props.tree_point_throws}</ListGroupItem>
                    <ListGroupItem>Two-point Trows : {this.props.two_point_trows}</ListGroupItem>
                    <ListGroupItem>Errors : {this.props.errs}</ListGroupItem>
                    <ListGroupItem>Rebounds : {this.props.rebounds}</ListGroupItem>
                    <ListGroupItem>Time of Playing : {this.props.time_of_playing}</ListGroupItem>
                </Panel.Body>
            </Panel>
        );
    }

}

export default Footballstatistics