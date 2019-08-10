import React, { Component } from 'react';

import FirmStart from "./LobbyLanding/FirmStart";
import Market from "./Market";

class LobbyLanding extends Component {
    constructor(props) {
        super(props);

        this.state = {
            flow : 'firmStart'
        };

        this.handleMarketScreen = this.handleMarketScreen.bind(this);
    }

    handleMarketScreen(event) {
        this.setState({ flow : 'market' });
    }

    render() {
        return (
            <div className="LobbyLanding">
                {
                    (this.state.flow === 'firmStart') && (
                        <FirmStart marketHandler={this.handleMarketScreen} />
                    )
                }
                {
                    (this.state.flow === 'market') && (
                        <Market room={this.props.room} />
                    )
                }
            </div>
        );
    }
}

export default LobbyLanding;
