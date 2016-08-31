import React from 'react';

require('./../../scss/spot.scss');

export default (props) => {
    const spot = props.spot;
    return (
        <div className="spot">
            <div className="info">
                <div className="label">Id</div>
                <div className="value">{spot.id}</div>
            </div>
            <div className="info">
                <div className="label">Name</div>
                <div className="value">{spot.name}</div>
            </div>
        </div>
    )
}