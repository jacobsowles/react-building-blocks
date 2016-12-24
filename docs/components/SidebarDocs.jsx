import React, { Component } from 'react';
import { Sidebar, SidebarModule } from 'react-building-blocks';

class SidebarDocs extends Component {
    render() {
        return (
            <div>
                <h1>Sidebar</h1>
                <h2>Demo</h2>

                <Sidebar header={<a href="/">Site Title</a>}>
                    <SidebarModule header="Module Header">
                        <ul>
                            <li>Lorem</li>
                            <li>Ipsum</li>
                            <li>Dolor</li>
                        </ul>
                    </SidebarModule>
                </Sidebar>

                <h2>Usage</h2>
                <h2>Example</h2>
            </div>
        );
    }
}

module.exports = SidebarDocs;
