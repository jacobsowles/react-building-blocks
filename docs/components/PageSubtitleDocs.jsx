import React, { Component } from 'react';
import { Link } from 'react-router';

class PageTitleDocs extends Component {
    render() {
        return (
            <div>
                <h1>PageSubtitle</h1>

                <h2>Demo</h2>
                <Link to="/components/page-title">See the PageTitle demo</Link>

                <h2>Usage</h2>

                <h2>Example</h2>
            </div>
        );
    }
}

module.exports = PageTitleDocs;
