import React from 'react';

export default class extends React.Component {
    render() {
        const spot = this.props.spot;
        return (
            <div>
                <div>{spot.id}</div>
                <div>{spot.name}</div>
            </div>
        )
    }
}