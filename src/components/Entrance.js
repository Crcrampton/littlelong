import React, { Component } from 'react';
import { createRoom, joinRoom } from '../api';

class Entrance extends Component {
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
            <div className="Entrance">
                <input type="text" placeholder="Enter Your Name" value={this.state.playerName} onChange={this.handlePlayerNameChange} spellCheck={false} />
                {this.state.playerName && (<button onClick={this.handleCreateRoom}>Create Room</button>)}
                {this.state.playerName && (
                    <div>
                        <input type="text" placeholder="Room Code" value={this.state.roomCode} onChange={this.handleRoomCodeChange} spellCheck={false} />
                        {this.state.roomCode && (<button onClick={this.handleJoinRoom}>Join Room</button>)}
                    </div>
                )}
            </div>
        );
    }
}

export default Entrance;
