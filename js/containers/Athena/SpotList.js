import React from 'react';

import Spot from './../../components/Spot';

export default class extends React.Component {
    buildSpotComponents(spots) {
        return spots.map((spot, i) => (<Spot spot={spot} key={i} />));
    }
    
    render() {
        let spots = this.buildSpotComponents(this.props.spots);
        return (
            <div>
                {spots}
            </div>
        )
    }
}