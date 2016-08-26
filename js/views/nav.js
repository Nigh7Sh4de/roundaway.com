import React from 'react';

module.exports = class MainNav extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <a href="#/" className="navbar-brand nav-item">Roundaway</a>
                <ul className="nav navbar-nav pull-xs-right">
                    <li className="nav-item"><a href="#/about" className="nav-link">About</a></li>
                    <li className="nav-item"><a href="#/contact" className="nav-link">Contact</a></li>
                    <li data-ng-show="loggedin" className="nav-item"><a href="#/profile" className="nav-link">Profile</a></li>
                    <li data-ng-show="loggedin" className="nav-item"><a href="#/manage" className="nav-link">Manage</a></li>
                    <li data-ng-hide="true || loggedin" className="nav-item"><a href="#/login" className="nav-link">Login</a></li>
                    <li data-ng-show="loggedin" className="nav-item"><a href="/logout" className="nav-link">Logout</a></li>
                </ul>
            </nav>
        );
    }
};