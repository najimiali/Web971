import React, {Component} from 'react';
import Togglingnews from "./Togglingnews";
import {PanelGroup, ButtonGroup, Button} from "react-bootstrap";

class Listoftogglingnews extends Component {


    constructor(props, context) {
        super(props, context);
        this.state = {
            lasElement: 5,
            news: [
                {id: 1},
                {id: 2},
                {id: 3},
                {id: 4},
                {id: 5},

            ]
        }

    }

    handleDelete = () => {
        const news = this.state.news.filter(c => c.id !== this.state.lasElement);
        this.state.lasElement -= 1;

        this.setState({news});
    };

    handleAdd = () => {
        const news = this.state.news;
        news.push({id: this.state.lasElement + 1});
        this.state.lasElement += 1;
        this.setState({news});
    };

    render() {
        return (
            <div>
                <ButtonGroup bsSize="large">
                    <h1>News</h1>
                    <Button onClick={() => {
                        this.handleAdd();
                    }}>Add</Button>
                    <Button onClick={() => {
                        this.handleDelete();
                    }}>Remove</Button>
                </ButtonGroup>
                <PanelGroup>

                    {this.state.news.map(c => <Togglingnews
                        key={c.id}


                    />)}


                </PanelGroup>

            </div>
        )
    }

}

export default Listoftogglingnews

