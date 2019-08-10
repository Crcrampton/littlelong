import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="room-code">{this.props.room.title}</div>
            </div>
        );
    }
}

export default Footer;
