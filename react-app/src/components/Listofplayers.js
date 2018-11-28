import React, {Component} from 'react';
import {Button, ButtonGroup, Grid, Row} from "react-bootstrap";
import Chraracteristicplayer from "./Chraracteristicplayer";

class Listofplayers extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            lastplayer: 4,
            players: [
                {id: 1, name: "Soobasa"},
                {id: 2, name: "Kakero"},
                {id: 3, name: "Mizaroki"},
                {id: 4, name: "AliDaee"},
            ],

        }
    }

    handleDelete = () => {
        const players = this.state.players.filter(p => p.id !== this.state.lastplayer);
        this.setState({players});
        this.state.lastplayer-=1;
    };

    handleAdd = () => {
        const players = this.state.players;
        players.push({id: this.state.lastplayer + 1, name: "Hassan Kachal Kalache! Roghan Kale Pache"});
        this.setState([{players}]);
        this.state.lastplayer+=1;
    };

    render() {
        return (
            <div>
                <ButtonGroup >
                    <h1>Players</h1>
                    <Button className={"btn-block btn-large btn-success"} NonClick={() => {
                        this.handleAdd();
                    }}>Add</Button>
                    <Button className={"btn-block btn-large btn-danger"} onClick={() => {
                        this.handleDelete();
                    }}>Remove</Button>
                </ButtonGroup>

                <Grid>
                    <Row>
                        {this.state.players.map(p => <Chraracteristicplayer
                            key={p.id}
                            playername={p.name}
                            id={p.id}
                        />)}
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Listofplayers