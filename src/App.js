import React, { Component } from 'react';
import './App.scss';

import LobbyLobby from './components/LobbyLobby.js';
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
      console.log(data.room);
    });
  }

  render() {
    return (
        <div className="gradient">
          <div className="App">
            {
              (Object.keys(this.state.room).length === 0) && (
                  <LobbyLobby/>
              )
            }
            {
              (Object.keys(this.state.room).length > 0) && (
                  <Lobby room={this.state.room} />
              )
            }
          </div>
        </div>
    );
  }
}

export default App;
