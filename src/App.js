import React, { Component } from 'react';
import './App.scss';

import Entrance from './components/Entrance.js';
import Lobby from './components/Lobby.js';

import { roomSubscriber } from './api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room: {},
    };

    roomSubscriber((data, socketId) => {
      data.room.thisPlayer = socketId;
      this.setState({ room : data.room })
    });
  }

  render() {
    return (
        <div className="App">
          {
            (Object.keys(this.state.room).length === 0) && (
                <Entrance/>
            )
          }
          {
            (this.state.room.stage === 'lobby') && (
                <Lobby room={this.state.room} />
            )
          }
        </div>
    );
  }
}

export default App;
