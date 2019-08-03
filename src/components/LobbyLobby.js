import React, { Component } from 'react';
import { createRoom, joinRoom } from '../api';

class LobbyLobby extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerName: '',
            roomCode: ''
        };

        this.handlePlayerNameChange = this.handlePlayerNameChange.bind(this);
        this.handleRoomCodeChange = this.handleRoomCodeChange.bind(this);
        this.handleCreateRoom = this.handleCreateRoom.bind(this);
        this.handleJoinRoom = this.handleJoinRoom.bind(this);
    }

    handlePlayerNameChange(event) {
        this.setState({ playerName : event.target.value });
    }

    handleRoomCodeChange(event) {
        this.setState({ roomCode : event.target.value.toUpperCase() });
    }

    handleCreateRoom() {
        createRoom(this.state.playerName);
    }

    handleJoinRoom() {
        joinRoom(this.state.playerName, this.state.roomCode);
    }

    render() {
        return (
            <div className="LobbyLobby">
                <div className="logo">
                    { /* Nothing f'real. */ }
                </div>
                <div className="inputs">
                    <div className="row join">
                        <input type="text" placeholder="Room Name" value={this.state.roomCode} onChange={this.handleRoomCodeChange} spellCheck={false} />
                        <button onClick={this.handleJoinRoom}>Join</button>
                    </div>
                    <div className="row or">
                        <span>or</span>
                    </div>
                    <div className="row create">
                        <button onClick={this.handleCreateRoom}>Create Room</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default LobbyLobby;
