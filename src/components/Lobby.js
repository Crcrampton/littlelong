import React, { Component } from 'react';

import Header from './Header';
import LobbyLanding from './LobbyLanding';
import Footer from './Footer';

class Lobby extends Component {
    render() {
        return (
            <div className="Lobby">
                <Header room={this.props.room} />
                <div className="wrapper">
                {
                    (this.props.room.stage === 'landing' && (
                        <LobbyLanding room={this.props.room} />
                    ))
                }
                </div>
                <Footer room={this.props.room} />
            </div>
        );
    }
}

export default Lobby;
