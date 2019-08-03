import React, { Component } from 'react';

import Header from './Header';

class Lobby extends Component {
    render() {
        return (
            <div className="Lobby">
                <Header title={this.props.room.id} />
                <div className="wrapper">
                    <h2>Players</h2>
                    <div className="player-container">
                    { Object.values(this.props.room.players).map((player) => {
                        return (
                            <div key={player.id} className={"player"}>
                                <span class="player-name">{player.name}</span>
                            </div>
                        );
                    })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Lobby;
