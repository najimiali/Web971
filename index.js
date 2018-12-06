import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import Togglingnews from './components/Togglingnews'

// import Listoftogglingnews from './components/Listoftogglingnews'
// import Chraracteristicplayer from './components/Chraracteristicplayer'
// import Listofplayers from './components/Listofplayers'

//import Footballplayerpage from './components/Footballplayerpage'
//import Footballstatistics from './components/Footballstatistics'
//import Basketballplayerpage from './components/Basketballplayerpage'
//import Timeline_ from './components/Timeline_'
import Videoplayer from './components/Videoplayer'
    ReactDOM.render(<Videoplayer />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
