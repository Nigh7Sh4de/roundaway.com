import React from 'react';
import { connect } from 'react-redux';
import { getSpots } from './../app';

import Spot from './../components/Spot';

export default class extends React.Component {
    componentDidMount() {
        getSpots();
    }

    buildSpotComponents(spots) {
        return spots.map((spot, i) => (<Spot spot={spot} key={i} />));
    }

    render() {
        let spots = this.buildSpotComponents(this.props.spots || []);
        return (
            <div>
                <h1>Welcome to Athena!</h1>
                {spots}
            </div>
        )
    }
}
