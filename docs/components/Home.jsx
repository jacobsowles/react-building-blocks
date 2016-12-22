// npm modules
import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>react-building-blocks</h1>

                <h2>Installation</h2>
                <p>npm install -S react-building-blocks</p>

                <h2>Components</h2>
                <Link to="/components">See the list</Link>
            </div>
        );
    }
}

module.exports = Home;
