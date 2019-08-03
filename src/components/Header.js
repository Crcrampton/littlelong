import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <h1>Room Code: <span class="room-code">{this.props.title}</span></h1>
            </div>
        );
    }
}

export default Header;
