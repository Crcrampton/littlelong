import React, { Component } from 'react';

class Market extends Component {
    constructor(props) {
        super(props);

        // Populate some fake ticks.
        this.state = {
            ticks : [
                {
                    index : 0,
                    price : 2,
                },
                {
                    index : 1,
                    price : 4,
                },
                {
                    index : 2,
                    price : 7,
                },
                {
                    index : 3,
                    price : 1,
                },
                {
                    index : 4,
                    price : 20,
                }
            ],
        };
    }

    render() {
        const ticks = this.state.ticks.map((tick) =>
            <li key={tick.index}>
                {tick.index}: {tick.price}
            </li>
        );

        return (
            <div className="Market">
                {ticks}
            </div>
        );
    }
}

export default Market;
