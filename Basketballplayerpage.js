import React, {Component} from 'react';
import {Carousel, Media, Col, Row, ListGroup, ListGroupItem} from "react-bootstrap";
import basket from "./basket.jpg"
import Grid from "react-bootstrap/es/Grid";
import Footballstatistics from "./Footballstatistics";
import Basketballstatistics from './Basketballstatistics'

const divStyle = {
    margintop: '400px'
    // border: '5px solid pink'
};

class Footballplayerpage extends Component {


    constructor(props, context) {
        super(props, context);
        this.state = {
            imageaddresses: [{basket}, {basket}, {basket}],
            name: "ALi Morad",
            familyname: "Malek Zade",
            age: 10,
            height: 160,
            weight: 50,
            currentteam: "babababab",
            nationality: "French",
            numofgoals: 5,
            position: "Basket baller",
            cards: [{yellow: 5, red: 2, blue: 3}],
            lastnews: [
                {
                    news: 'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
                    headnews: "heading of news & discription 1"
                },
                {
                    news: 'Nulla posuere.Donec vitae dolor.Nullam tristique diam non turpis.Cras placerat accumsan nulla.Nullam rutrum.Nam vestibulum accumsan nisl.',
                    headnews: "heading of news & discription 2"
                },
                {
                    news: 'ipsum dolor sit amet, consectetuer adipiscing elit.Donec hendrerit tempor tellus Donec pretium posuere tellus.',
                    headnews: "heading of news & discription 3"
                },

            ],
            statistics: [
                {
                    id:1,
                    tree_point_throws:3,
                    two_point_trows:5,
                    errs:6,
                    rebounds:7,
                    time_of_playing:80
                },
                {
                    id:2,
                    tree_point_throws:6,
                    two_point_trows:9,
                    errs:9,
                    rebounds:7,
                    time_of_playing:70
                },
                {
                    id:3,
                    tree_point_throws:9,
                    two_point_trows:9,
                    errs:7,
                    rebounds:6,
                    time_of_playing:90
                },
                ]

        };
    }

    render() {
        return (
            <div>
                <marquee>
                    <h2 style={{
                        fontSize: '130px',
                        textAlign: 'center',
                        fontStyle: 'italic',
                        margin: '40px'
                    }}>{this.state.name} </h2>
                </marquee>
                <Grid>
                    <Row>
                        <Col xs={12} md={8}>
                            <Carousel>
                                {this.state.imageaddresses.map(img => <Carousel.Item>
                                        <img width={500} height={500} alt="900x500" src={basket}/>
                                        <Carousel.Caption>
                                            <h3>First slide label</h3>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                )}


                            </Carousel>
                        </Col>
                        <Col xs={6} md={4} style={divStyle}>
                            <ListGroup>
                                <ListGroupItem bsStyle="success">Full
                                    Name :{" " + this.state.name + " " + this.state.familyname}</ListGroupItem>
                                <ListGroupItem bsStyle="info">Age : {this.state.age}</ListGroupItem>
                                <ListGroupItem bsStyle="warning">Height : {this.state.height}</ListGroupItem>
                                <ListGroupItem bsStyle="danger">Weight : {this.state.weight}</ListGroupItem>
                                <ListGroupItem bsStyle="success">Current Team: {this.state.currentteam}</ListGroupItem>
                                <ListGroupItem bsStyle="info">Nationality : {this.state.nationality}</ListGroupItem>
                                <ListGroupItem bsStyle="danger">Position of Playing
                                    : {this.state.position}</ListGroupItem>

                            </ListGroup>
                        </Col>
                    </Row>

                    <Row>
                        <br/>
                        <h3><b><i>News</i></b></h3>
                        <br/>
                        <hr />
                    </Row>

                    {this.state.lastnews.map(c =>
                        <Row>
                            <Media>
                                <Media.Left align="middle">
                                    <img width={64} height={64} src={basket} alt="thumbnail"/>
                                </Media.Left>
                                <Media.Body>
                                    <Media.Heading>{c.headnews}</Media.Heading>
                                    <p>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                        fringilla. Donec lacinia congue felis in faucibus.
                                    </p>

                                    <p>
                                        {c.news}
                                    </p>
                                </Media.Body>
                            </Media>
                        </Row>
                    )}

                    <Row>
                        <br/>
                        <h3><i><b>Statistics of different seasons</b></i></h3>
                        <br/>
                        <hr/>
                    </Row>
                    <Row>
                        {this.state.statistics.map(s =>
                            <Col xs={6} md={4}>
                                <Basketballstatistics
                                    key={s.id}
                                    id={s.id}
                                    tree_point_throws={s.tree_point_throws}
                                    two_point_trows={s.two_point_trows}
                                    errs={s.errs}
                                    rebounds={s.rebounds}
                                    time_of_playing={s.time_of_playing}
                                />
                            </Col>)}
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Footballplayerpage