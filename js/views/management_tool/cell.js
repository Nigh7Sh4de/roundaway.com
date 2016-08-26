import React from 'react';

module.exports = class Cell extends React.Component {
    render() {
        return (
            <span>{this.props.children}</span>
        );
    }
};