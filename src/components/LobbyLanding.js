import React, { Component } from 'react';

class LobbyLanding extends Component {
    render() {
        return (
            <div className="LobbyLanding">
                <button className="full big spaced" onClick={null}>Market Screen</button>
                <button className="full big spaced success" onClick={null}>Join Firm</button>
                <button className="full big spaced success" onClick={null}>Create Firm</button>
            </div>
        );
    }
}

export default LobbyLanding;
