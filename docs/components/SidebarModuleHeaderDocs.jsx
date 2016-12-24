import React, { Component } from 'react';
import { Link } from 'react-router';

class SidebarModuleHeaderDocs extends Component {
    render() {
        return (
            <div>
                <h1>SidebarModuleHeader</h1>

                <h2>Demo</h2>
                <Link to="/components/sidebar">See the Sidebar demo</Link>

                <h2>Usage</h2>
                <h2>Example</h2>
            </div>
        );
    }
}

module.exports = SidebarModuleHeaderDocs;
