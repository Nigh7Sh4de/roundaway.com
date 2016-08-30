import React from 'react';
import { connect } from 'react-redux';

class app extends React.Component {
    render() {
        let spots = this.props.spots || [];
        spots = this.props.spots.map((spot, i) => {
            return <span key={i}>{'| ' + spot + ' | '}</span>;
        })
        return (
            <div>
                {spots}
            </div>
        ) 
    }
}

export default connect((state) => {
    return {
        spots: state.spots
    }
})(app);