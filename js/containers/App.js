import React from 'react';
import { connect } from 'react-redux';

import Athena from './Athena';

class App extends React.Component {
    render() {
        return (
            <div>
                <Athena spots={this.props.spots} />
            </div>
        ) 
    }
}

export default App;// connect((state) => state)(App);