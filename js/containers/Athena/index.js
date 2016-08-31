import React from 'react';
import { connect } from 'react-redux';
import { getSpots } from './../../actions';

import SpotList from './SpotList';

export default connect(
    (state) => ({
        spots: state.spots
    })
    )(class extends React.Component {
    componentDidMount() {
        console.log(this.props);
        this.props.dispatch(getSpots());
    }

    render() {
        return (
            <div>
                <h1>Welcome to Athena!</h1>
                <SpotList spots={this.props.spots || []} />
            </div>
        )
    }
})
