import React, {Component} from 'react';
import {Panel, ListGroupItem} from "react-bootstrap";
import {Timeline, TimelineItem} from 'vertical-timeline-component-for-react';

class Timeline_ extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            events : [
                {
                    id:1,
                    type_: "Goal",
                    time:5,
                    discription:"Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla\n" +
                        "                        exercitation. Veniam velit adipisicing anim excepteur nostrud magna\n" +
                        "                        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure\n" +
                        "                        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem\n" +
                        "                        est.",

                },
                {
                    id:1,
                    type_: "Goal",
                    time:5,
                    discription:"Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla\n" +
                        "                        exercitation. Veniam velit adipisicing anim excepteur nostrud magna\n" +
                        "                        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure\n" +
                        "                        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem\n" +
                        "                        est.",

                },
                {
                    id:1,
                    type_: "Goal",
                    time:5,
                    discription:"Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla\n" +
                        "                        exercitation. Veniam velit adipisicing anim excepteur nostrud magna\n" +
                        "                        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure\n" +
                        "                        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem\n" +
                        "                        est.",

                },
            ]
        }
    }

    render() {
        return (
            <Timeline lineColor={'#ddd'}>
                {
                    this.state.events.map(e=>
                        <TimelineItem
                            dateText={"Time : " +  e.time +" min"}
                            key="001"
                            style={{color: '#e86971'}}
                            dateInnerStyle={{background: '#76bb7f', color: '#000'}}
                            bodyContainerStyle={{
                                background: '#ddd',
                                padding: '20px',
                                borderRadius: '8px',
                                boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                            }}
                        >
                            <h3 style={{color: '#61b8ff'}}>{e.type_}</h3>
                            <p>
                                {e.discription}
                            </p>
                        </TimelineItem>
                    )
                }

            </Timeline>
        );
    }
}

export default Timeline_