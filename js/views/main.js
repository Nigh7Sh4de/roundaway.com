import React from 'react';
import MainNav from './nav';
import ManagementTool from './management_tool/main'

module.exports = class MainView extends React.Component {
    render() {
        return (
            <div className="main-container">
                <MainNav />
                <ManagementTool />
            </div>
        );
    }
};