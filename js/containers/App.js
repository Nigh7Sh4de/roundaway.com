import React from 'react';
import { connect } from 'react-redux';

import Athena from './Athena';

class app extends React.Component {
    render() {
        return (
            <div>
                <Athena spots={this.props.spots} />
            </div>
        ) 
    }
}

export default connect((state) => state)(app);