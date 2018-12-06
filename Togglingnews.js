import React, { Component } from 'react';
import {Panel} from "react-bootstrap";

class Togglingnews extends Component{


    constructor(props , context){
        super(props , context);

        this.state={
            heading : "news title",
            textofnews : "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry\n" +
                "                    richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard\n" +
                "                    dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf\n" +
                "                    moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla\n" +
                "                    assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore\n" +
                "                    wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur\n" +
                "                    butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim\n" +
                "                    aesthetic synth nesciunt you probably haven't heard of them accusamus\n" +
                "                    labore sustainable VHS.",


        };
    }

    render(){
        return(
            <Panel eventKey="1">
                <Panel.Heading>
                    <Panel.Title toggle>{this.state.heading}</Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>
                    {this.state.textofnews}
                </Panel.Body>
            </Panel>
        )
    }
}
export default Togglingnews