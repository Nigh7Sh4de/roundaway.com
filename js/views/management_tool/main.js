import React from 'react';
import Row from './row';
import Cell from './cell';

var spots = [
    {
        id: '123',
        location: {
            coordinates: [12, 21],
            address: '123 fake st'
        },
        price: {
            perHour: 5
        }
    },
    {
        id: '456',
        location: {
            coordinates: [21, 34],
            address: '456 derp lane'
        },
        price: {
            perHour: 2.4
        }
    }
]

module.exports = class MainView extends React.Component {
    render() {
        var rows = spots.map((spot, i) => {
            return (
                <Row key={i}>
                    <Cell>{spot.id}</Cell>
                </Row>
            );
        })
        return (
            <div id="managePageContainer" className="page-container">
                <div className="container">
                    <h1>Welcome to the Management Tool!</h1>
                    spots
                    {rows}
                </div>
            </div>
        );
    }
};

/*
<table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td colSpan="2">LOCATION</td>
                                <td>PRICE</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>spotid</td>
                                <td>spotlocationcoordinates</td>
                                <td>spotlocationaddress</td>
                                <td>spotprice</td>
                            </tr>
                        </tbody>
                    </table>
                    */