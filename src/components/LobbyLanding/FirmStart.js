import React, { Component } from 'react';

class FirmStart extends Component {
    render() {
        return (
            <div className="FirmStart">
                <button className="full big spaced" onClick={this.props.marketHandler}>Market Screen</button>
                <button className="full big spaced success" onClick={null}>Join Firm</button>
                <button className="full big spaced success" onClick={null}>Create Firm</button>
            </div>
        );
    }
}

export default FirmStart;
