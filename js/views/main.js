import React from 'react';
import { connect } from 'react-redux'
import MainNav from './nav';
import ManagementTool from './management_tool/main';
import Store from './../controllers/redux.js';

class MainView extends React.Component {

    render() {
        Store.getSpots();

        return (
            <div className="main-container">
                <MainNav />
                <ManagementTool />
            </div>
        );
    }
};

module.exports = connect(
    (state) => {
        return {
            spots: state.store
        }
    }
)(MainView);