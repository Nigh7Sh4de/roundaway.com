import React from 'react';

module.exports = class Row extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
} 