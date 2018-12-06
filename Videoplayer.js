//import "node_modules/video-react/dist/video-react.css"; // import css
import React, {Component} from 'react';

//import { Player } from 'video-react';
//import ReactPlayer from 'react-player'
import { Player } from 'video-react';

class Videoplayer extends Component {
    render() {
        return (
            <div>
                <Player
                    playsInline
                    poster="/assets/poster.png"
                    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                />

            </div>
        );
    }
}
export default Videoplayer
